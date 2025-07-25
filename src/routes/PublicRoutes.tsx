import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = () => {
  const { isAuthenticated } = useAuth();
  return !isAuthenticated() ? <Outlet /> : <Navigate to="/home" replace />;
};

export default PublicRoute;
