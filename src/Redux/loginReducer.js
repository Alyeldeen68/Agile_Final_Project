import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  userFirstName: "",
  userID: "",
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
      state.userFirstName = action.payload.firstName;
      state.userID = action.payload.id;
      state.isLoggedIn = true;
      if (action.payload.role == "Doctor") {
        state.isDoctor = true;
        state.isPharmacist = false;
      } else {
        state.isPharmacist = true;
        state.isDoctor = false;
      }
      console.log(state.userFirstName);
    },
  },
});

export const { setCredintials } = loginSlice.actions;
export default loginSlice.reducer;
