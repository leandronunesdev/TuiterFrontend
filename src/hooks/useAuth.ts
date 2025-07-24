import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();

  const isAuthenticated = () => {
    return !!localStorage.getItem("authToken");
  };

  const redirectIfAuthenticated = () => {
    if (isAuthenticated()) {
      navigate("/home");
    }
  };

  const login = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
  };

  return {
    isAuthenticated,
    login,
    logout,
    redirectIfAuthenticated,
  };
};

export default useAuth;
