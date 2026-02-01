import {
  generateUserAgeAnalytic,
  generateUserCompletedMission,
  generateUserGenderAnalytic,
  generateUserKPI,
} from "@utils/data/userAnalytic.dummy";
import type { ChartBoxType, KPICardType } from "types/page.type";

const useUserAnalyticController = () => {
  const useGetUserKPIService = () => {
    const userKPI = generateUserKPI();

    let finalData: KPICardType[] = [
      {
        label: "Total Pengguna",
        value: 0,
        type: "number",
        tooltip: "Total pengguna aplikasi",
        percent_from_last: 0,
      },
      {
        label: "Pengguna Aktif",
        value: 0,
        type: "number",
        tooltip: "Total pengguna yang berinteraksi dengan aplikasi",
        percent_from_last: 0,
      },
      {
        label: "Engagement Rate",
        value: 0,
        type: "number",
        tooltip:
          "Persentase pengguna yang memulai misi dari total pengguna yang melihat",
        percent_from_last: 0,
      },
    ];

    finalData = [
      {
        ...finalData[0],
        ...userKPI.total_users,
      },
      {
        ...finalData[1],
        ...userKPI.active_users,
      },
      {
        ...finalData[2],
        ...userKPI.engagement_rate,
      },
    ];

    return {
      finalData,
    };
  };

  const useGetUserCompletedMissionService = () => {
    const userCompletedMission = generateUserCompletedMission();

    let finalData: ChartBoxType[] = [];

    const maxIndex = userCompletedMission.reduce(
      (maxIdx, item, i, arr) =>
        item.completed > arr[maxIdx].completed ? i : maxIdx,
      0,
    );

    finalData = userCompletedMission.map((item, index) => ({
      name: item.mission_count,
      value: item.completed,
      isMax: index === maxIndex ? true : false,
    }));

    return {
      finalData,
    };
  };

  const useGetUserAgeAnalyticService = () => {
    const userAgeAnalytic = generateUserAgeAnalytic();

    let finalData: ChartBoxType[] = [];

    const maxIndex = userAgeAnalytic.reduce(
      (maxIdx, item, i, arr) =>
        item.total_registered > arr[maxIdx].total_registered ? i : maxIdx,
      0,
    );

    finalData = userAgeAnalytic.map((item, index) => ({
      name: item.age_range,
      value: item.total_registered,
      isMax: index === maxIndex ? true : false,
    }));

    return {
      finalData,
    };
  };

  const useGetUserGenderAnalyticService = () => {
    const userGenderAnalytic = generateUserGenderAnalytic();

    let finalData: ChartBoxType[] = [
      {
        name: "Laki-laki",
        value: 0,
      },
      {
        name: "Perempuan",
        value: 0,
      },
    ];

    finalData = [
      {
        ...finalData[0],
        value: userGenderAnalytic.male,
      },
      {
        ...finalData[1],
        value: userGenderAnalytic.female,
      },
    ];

    return {
      finalData,
    };
  };

  return {
    useGetUserKPIService,
    useGetUserCompletedMissionService,
    useGetUserAgeAnalyticService,
    useGetUserGenderAnalyticService,
  };
};

export default useUserAnalyticController;
