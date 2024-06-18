// Author: Joahan García
// Component to protect a route so anyone can access it unless it's already verified

import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, children, redirectTo = "/" }) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }

  return children ? children : <Outlet />;
};
