import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  isDoctor: false,
  isPharmacist: false,
  signedUp: false,
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.isDoctor =
        action.payload == "Doctor"
          ? state.isDoctor == false
          : state.isDoctor == true;
    },
    back: (state, action) => {
      state.isDoctor = false;
      state.isPharmacist = false;
    },
    success: (state, action) => {
      state.signedUp = action.payload;
    },
  },
});

export const { signUp, back, success } = signUpSlice.actions;
export default signUpSlice.reducer;
