import { useNavigate } from "react-router-dom";

const parseJwt = (token: string) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (e) {
    return null;
  }
};

const useAuth = () => {
  const navigate = useNavigate();

  const isAuthenticated = () => {
    const token = localStorage.getItem("authToken");
    if (!token) return false;

    const payload = parseJwt(token);

    if (!payload || !payload.exp) {
      localStorage.removeItem("authToken");
      return false;
    }

    if (Date.now() / 1000 > payload.exp) {
      localStorage.removeItem("authToken");
      return false;
    }

    return true;
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
