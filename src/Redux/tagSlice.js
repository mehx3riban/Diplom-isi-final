import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialState ={
    tags:[],
}

export const getTags = createAsyncThunk(
    'tags' , 
    async ()=>{
        const response= await fetch ('/src/json/Products.json')
        const data = response.json()
        return data;
    }
)

const tagSlice = createSlice({
    name :'tags',
    initialState,
    reducers:{},
    extraReducers : (builder) =>{
        builder
        .addCase(getTags.fulfilled,(state,action)=>{
            state.tags = action.payload
        })
    }
})

export default tagSlice.reducer