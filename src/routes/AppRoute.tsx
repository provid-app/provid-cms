import { AppLayout } from "@components/layout";
import Ringkasan from "@pages/app/Ringkasan";
import { Navigate, Route, Routes } from "react-router";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Ringkasan />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
