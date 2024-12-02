"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import LoadingSpinner from "./spinner/LoadingSpinner";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkUserAuth = async () => {
      if (!user || !allowedRoles.includes(user.role)) {
        router.push("/login"); // Redirect to login if not authorized
      } else {
        setIsLoading(false); // Allow access if the user role matches
      }
    };

    checkUserAuth();
  }, [user, router, allowedRoles]);

  if (isLoading) {
    return <LoadingSpinner /> // Loading state while role is being checked
  }

  return <>{children}</>; // Render the protected content
};

export default ProtectedRoute;
