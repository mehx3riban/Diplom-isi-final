import { configureStore } from '@reduxjs/toolkit'
import tagSlice from './tagSlice'
import productsSlice from './productsSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    tags: tagSlice,
    products: productsSlice,
    cart:cartSlice
  },
})