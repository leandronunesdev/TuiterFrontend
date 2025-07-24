import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated() && location.pathname === "/") {
    return <Navigate to="/home" replace />;
  }

  return isAuthenticated() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
