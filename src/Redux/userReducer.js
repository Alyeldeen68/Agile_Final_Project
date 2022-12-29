import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (state, action) => {
      state.data = [];
      console.log(state.data);
      state.data.push(action.payload);
      console.log(state.data);
    },
    signOut: (state, action) => {
      state.data = [];
    },
  },
});

export const { userData, signOut } = userSlice.actions;
export default userSlice.reducer;
