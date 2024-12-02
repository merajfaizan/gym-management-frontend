"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, setUser } from "../slices/authSlice";

const AuthWrapper = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch(setUser({ user, token }));
    } else {
      dispatch(logout());
    }
  }, [dispatch]);

  return <>{children}</>;
};

export default AuthWrapper;
