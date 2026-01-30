import { AppLayout } from "@components/layout";
import { MissionAnalytic, UserAnalytic } from "@pages/app/analytic";
import Ringkasan from "@pages/app/Ringkasan";
import { Navigate, Route, Routes } from "react-router";

const AnalyticRoute = () => {
  return (
    <Routes>
      <Route path="/mission" element={<MissionAnalytic />} />
      <Route path="/user" element={<UserAnalytic />} />
      <Route path="*" element={<Navigate to="/analytic/mission" />} />
    </Routes>
  );
};

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Ringkasan />} />
        <Route path="/analytic/*" element={<AnalyticRoute />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
