import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./features/userApi";
import authReducer from "./slices/authSlice";
import { trainerApi } from "./features/trainerApiSlice";
import { classApi } from "./features/classApiSlice";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [trainerApi.reducerPath]: trainerApi.reducer,
    [classApi.reducerPath]: classApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(userApi.middleware)
      .concat(trainerApi.middleware)
      .concat(classApi.middleware),
});

export default store;
