import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer";
import signUpReducer from "./signUpReducer";

const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    login: loginReducer,
  },
});

export default store;
