import { generateUserKPI } from "@utils/data/userAnalytic.dummy";
import type { KPICardType } from "types/page.type";

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

  return {
    useGetUserKPIService,
  };
};

export default useUserAnalyticController;
