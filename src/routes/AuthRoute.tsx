import Login from "@pages/Login";
import { Navigate, Route, Routes } from "react-router";

const AuthRoute = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AuthRoute;
