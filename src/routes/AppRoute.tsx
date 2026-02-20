import { AppLayout } from "@components/layout";
import { MissionAnalytic, UserAnalytic } from "@pages/app/analytic";
import {
  ManageCategory,
  ManageMission,
  ManageSegment,
} from "@pages/app/manage";
import Notification from "@pages/app/Notification";
import Reward from "@pages/app/Reward";
import Ringkasan from "@pages/app/Ringkasan";
import Transaction from "@pages/app/Transaction";
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

const ManageRoute = () => {
  return (
    <Routes>
      <Route path="/category" element={<ManageCategory />} />
      <Route path="/mission" element={<ManageMission />} />
      <Route path="/segment" element={<ManageSegment />} />
      <Route path="*" element={<Navigate to="/manage/category" />} />
    </Routes>
  );
};

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<Ringkasan />} />
        <Route path="/analytic/*" element={<AnalyticRoute />} />
        <Route path="/manage/*" element={<ManageRoute />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/notif" element={<Notification />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
