import { createSlice } from '@reduxjs/toolkit'

export const userPrincipleSlice = createSlice({
  name: 'user_principle',
  initialState: {
    value: {
        isAuthenticated:false 
    }
  },
  reducers:{
    setAuthenticated: (state, action) => {
      state.value.isAuthenticated=action.payload;
    }
  }
})
// Action creators are generated for each case reducer function
export const { setAuthenticated} = userPrincipleSlice.actions  // named export
export default userPrincipleSlice.reducer  // default export