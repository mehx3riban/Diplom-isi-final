import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  data: [],
  loading : false,
  error: '',
}

export const fetchTodos = createAsyncThunk('fetchTodos', async ()=>{
  const response = await axios.get('/src/json/TeamMembers.json');
  return response.data;
})

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers:(builder) =>{

    builder.addCase(fetchTodos.pending, (state,action) =>{
      state.loading = true;
      state.error ='';
    }),

    builder.addCase(fetchTodos.fulfilled, (state,action) =>{
      state.data = action.payload;
      state.loading=false;
    })
    
    
    builder.addCase(fetchTodos.rejected , (state,action) =>{
      state.loading =false;
      state.error = 'rejected'
    })
  }
})


export default todosSlice.reducer