import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userData: (state, action) => {
      console.log(state.data);
      state.data.push(action.payload);
      console.log(state.data);
    },
  },
});

export const { userData } = userSlice.actions;
export default userSlice.reducer;
