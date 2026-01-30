import {
  generateMissionCompleted,
  generateMissionKPI,
  generateMissionTrend,
} from "@utils/data/missionAnalytic.dummy";
import type { ChartBoxType, KPICardType } from "types/page.type";

const useMissionAnalyticController = () => {
  const useGetMissionKPIService = () => {
    const missionKPI = generateMissionKPI();

    let finalData: KPICardType[] = [
      {
        label: "Total Misi Aktif",
        value: 0,
        type: "number",
        tooltip: "Total misi yang bisa dimulai",
        percent_from_last: 0,
      },
      {
        label: "Total Penyelesaian Misi",
        value: 0,
        type: "number",
        tooltip: "Akumulasi semua penyelesaian (user × misi)",
        percent_from_last: 0,
      },
      {
        label: "Tingkat Penyelesaian Misi",
        value: 0,
        type: "percent",
        tooltip:
          "Persentase pengguna yang berhasil menyelesaikan misi (jumlah user selesai / jumlah user mulai) %",
        percent_from_last: 0,
      },
      {
        label: "Rata-rata Misi Selesai / User",
        value: 0,
        type: "number",
        tooltip: "Tingkat keterlibatan pengguna dalam menyelesaikan misi",
        percent_from_last: 0,
      },
    ];

    finalData = [
      {
        ...finalData[0],
        ...missionKPI.total_active_mission,
      },
      {
        ...finalData[1],
        ...missionKPI.total_completed_mission,
      },
      {
        ...finalData[2],
        ...missionKPI.mission_complete_rate,
      },
      {
        ...finalData[3],
        ...missionKPI.avg_mission_success,
      },
    ];

    return {
      finalData,
    };
  };

  const useGetMissionTrendService = () => {
    const missionTrend = generateMissionTrend();

    let finalData: ChartBoxType[] = [];

    finalData = missionTrend.map((item) => ({
      name: item.day,
      value: item.completed,
    }));

    return {
      finalData,
    };
  };

  const useGetMissionCompletedService = () => {
    const missionCompleted = generateMissionCompleted();

    let finalData: ChartBoxType[] = [];

    finalData = missionCompleted
      .map((item) => ({
        name: item.mission_name,
        value: item.completed,
      }))
      .sort((a, b) => b.value - a.value);

    return {
      finalData,
    };
  };

  return {
    useGetMissionKPIService,
    useGetMissionTrendService,
    useGetMissionCompletedService,
  };
};

export default useMissionAnalyticController;
