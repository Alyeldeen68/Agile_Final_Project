import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCredintials: (state, action) => {
      state.userName = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { setCredintials } = loginSlice.actions;
export default loginSlice.reducer;
