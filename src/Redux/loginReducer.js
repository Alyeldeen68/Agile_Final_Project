import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
  isLoggedIn: false,
  isDoctor: false,
  isPharmacist: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setCredintials: (state, action) => {
      state.userName = action.payload;
      state.isLoggedIn = true;
      if (action.payload.role == "Doctor") {
        state.isDoctor = true;
        state.isPharmacist = false;
      } else {
        state.isPharmacist = true;
        state.isDoctor = false;
      }
    },
  },
});

export const { setCredintials } = loginSlice.actions;
export default loginSlice.reducer;
