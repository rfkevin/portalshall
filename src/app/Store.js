import { configureStore } from "@reduxjs/toolkit";
import { darkModeSlice } from "../theme/slice";
import { drawerSlice } from "../Component/Header/slice";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer,
    drawer: drawerSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
