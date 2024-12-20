import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: []
  },
  reducers:{
    addProduct: (state, action) => {
      state.value.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.value=state.value.filter(product => action.payload.id!=product.id);
    }
  }
})
// Action creators are generated for each case reducer function
export const { addProduct,removeProduct} = cartSlice.actions  // named export
export default cartSlice.reducer  // default export