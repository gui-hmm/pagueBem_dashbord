import React, { ReactNode } from "react";
import { Navigate } from "react-router";
import { useAuth } from "./authProvider";

interface PrivateRouteProps {
  children: ReactNode;
}

function PrivateRoute({ children }: PrivateRouteProps) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
}

export default PrivateRoute;
