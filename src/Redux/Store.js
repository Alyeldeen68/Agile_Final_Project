import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginReducer";
import signUpReducer from "./signUpReducer";
import userReducer from "./userReducer";

const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    login: loginReducer,
    user: userReducer,
  },
});

export default store;
