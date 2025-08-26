import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
}

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    addLoginDetails: (state, action) => {
      state.user = action.payload
    },
  },
})

export const { addLoginDetails } = loginSlice.actions
export default loginSlice.reducer
