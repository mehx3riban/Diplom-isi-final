import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import { build } from 'vite'


const initialState = {
  categories:[] ,
  loading : false,
  error: '',
  // status :null
}

export const  fetchProduct = createAsyncThunk (
  'products/fetchProduct',
  async()=>{
   const response = await axios.get ('https://jsonplaceholder.typicode.com/todos');
    return response.data;
  }
)

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers:(builder) =>{

    builder.addCase(fetchProduct.pending, (state,action) =>{
      state.loading = true;
      state.error ='';
    }),

    builder.addCase(fetchProduct.fulfilled, (state,action) =>{
      state.categories = action.payload;
      state.loading=false;
    })
    
    
    builder.addCase(fetchProduct.rejected , (state,action) =>{
      state.loading =false;
      state.error = 'rejected'
    })
  }
})



export default productsSlice.reducer;