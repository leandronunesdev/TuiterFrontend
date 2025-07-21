import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
