import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const initialState = {
  isDoctor: false,
  isPharmacist: false,
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
  },
});

export const { signUp, back } = signUpSlice.actions;
export default signUpSlice.reducer;
