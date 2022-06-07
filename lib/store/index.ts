import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/User";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
