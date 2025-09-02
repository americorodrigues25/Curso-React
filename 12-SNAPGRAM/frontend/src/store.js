import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    // Aqui você adiciona seus reducers
    autj: authReducer,
  },
});
