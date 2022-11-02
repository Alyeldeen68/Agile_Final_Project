import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./signUpReducer";

const store = configureStore({
  reducer: {
    signUp: signUpReducer,
  },
});

export default store;
