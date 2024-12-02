import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null, 
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
  },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;
