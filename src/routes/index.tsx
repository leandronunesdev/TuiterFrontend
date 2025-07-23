import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
