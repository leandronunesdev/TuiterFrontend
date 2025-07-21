import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
