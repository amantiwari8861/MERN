import { configureStore } from '@reduxjs/toolkit'
import cartReducers from './cartSlice' // default import (reducer)
import userPrincipleReducers from './userPrincipleSlice' // default import (reducer)

export default configureStore({
  reducer: {
    cart:cartReducers,
    user_principle:userPrincipleReducers,
  }
})