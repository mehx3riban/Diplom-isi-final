import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { STATUS } from '../utils/status';
import data from '../../src/json/Products.json'

const initialState = {
  products:[],
  productsStatus : STATUS.IDLE,
  productDetail :[],
  productDetailStatus :STATUS.IDLE,
  selectedTag: null,
}

export const  getProducts = createAsyncThunk (
  'getProducts',
  async()=>{
   const response = await axios.get ('/src/json/Products.json');
    return response.data;
  }
)

// export const  getTagProduct = createAsyncThunk (
//   'getTagProduct',
//   async(tag)=>{
//    const response = await axios.get (`/src/json/Products.json/${tag}`);
//     return response.data;
//   }
// )

// export const  getDetailProduct = createAsyncThunk (
//   'getDetailProduct',
//   async(id)=>{
//    const response = await axios.get (`/src/json/Products.json/${id}`);
//     return response.data;
//   }
// )

export const  getDetailProduct = createAsyncThunk (
  'getDetailProduct',
  async(id)=>{
   const product = data.find((product)=>product.id === id);
    return product;
  }
)


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedTag: (state, action) => {
      state.selectedTag = action.payload;
  } },
  // extraReducers:(builder) =>{

  //   builder
  //   .addCase(getProducts.pending,(state,action)=>{
  //     state.productsStatus=STATUS.LOADING
  //   })
  //   .addCase(getProducts.fulfilled,(state,action)=>{
  //     state.productsStatus=STATUS.SUCCESS;
  //     state.products = action.payload

  //   })

  //   .addCase(getProducts.rejected,(state,action)=>{
  //     state.productsStatus=STATUS.FAIL;
  //   })

  //   .addCase(getDetailProduct.pending,(state,action)=>{
  //     state.productDetailStatus=STATUS.LOADING
  //   })
  //   .addCase(getDetailProduct.fulfilled,(state,action)=>{
  //     state.productDetailStatus=STATUS.SUCCESS;
  //     state.productDetail = action.payload

  //   })

  //   .addCase(getDetailProduct.rejected,(state,action)=>{
  //     state.productDetailStatus=STATUS.FAIL;
  //   })


  //   // .addCase(getTagProduct.pending,(state,action)=>{
  //   //   state.productsStatus=STATUS.LOADING
  //   // })
  //   // .addCase(getTagProduct.fulfilled,(state,action)=>{
  //   //   state.productsStatus=STATUS.SUCCESS;
  //   //   state.products = action.payload

  //   // })

  //   // .addCase(getTagProduct.rejected,(state,action)=>{
  //   //   state.productsStatus=STATUS.FAIL;
  //   // })
    
  // }
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsStatus = '  LOADING';
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsStatus = 'SUCCESS';
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.productsStatus = 'FAIL';
      })

      .addCase(getDetailProduct.pending, (state) => {
        state.productDetailStatus = 'LOADING';
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.productDetailStatus = 'SUCCESS';
        state.productDetail = action.payload;
      })
      .addCase(getDetailProduct.rejected, (state) => {
        state.productDetailStatus = 'FAIL';
      });
  },
})

export const { setSelectedTag } = productsSlice.actions;

export default productsSlice.reducer;