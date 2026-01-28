import {
  generateFinancialEstimation,
  generateMissionAnalytic,
  generateMissionLeaderboard,
  generateSummaryKPI,
} from "@utils/data/summary.dummy";
import type {
  ChartBoxType,
  EstimationChartType,
  KPICardType,
} from "types/page.type";

const useSummaryController = () => {
  const useGetSummaryKPIService = () => {
    const summaryKPI = generateSummaryKPI();

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
        label: "Total Penyelesaian Misi",
        value: 0,
        type: "number",
        tooltip: "Akumulasi semua penyelesaian (user × misi yang diselesaikan)",
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
    ];

    finalData = [
      {
        ...finalData[0],
        ...summaryKPI.total_users,
      },
      {
        ...finalData[1],
        ...summaryKPI.active_users,
      },
      {
        ...finalData[2],
        ...summaryKPI.total_completed_missions,
      },
      {
        ...finalData[3],
        ...summaryKPI.completed_mission_rate,
      },
    ];

    return {
      finalData,
    };
  };

  const useGetMissionAnalyticService = () => {
    const missionAnalytic = generateMissionAnalytic();

    let finalData: ChartBoxType[] = [
      {
        name: "Ads",
        value: 0,
      },
      {
        name: "App",
        value: 0,
      },
    ];

    finalData = [
      {
        ...finalData[0],
        value: missionAnalytic.ads,
      },
      {
        ...finalData[1],
        value: missionAnalytic.app,
      },
    ];

    return {
      finalData,
    };
  };

  const useGetMissionLeaderboardService = () => {
    const missionLeaderboard = generateMissionLeaderboard();

    let finalData: ChartBoxType[] = [];

    finalData = missionLeaderboard
      .map((item) => ({
        name: item.mission_name,
        value: item.contribute,
      }))
      .sort((a, b) => b.value - a.value);

    return {
      finalData,
    };
  };

  const useGetFinancialEstimationService = () => {
    const financialEstimation = generateFinancialEstimation();

    let finalData: EstimationChartType = {
      kpi: [
        {
          label: "Estimasi Pendapatan",
          value: 0,
        },
        {
          label: "Total Reward Dikeluarkan",
          value: 0,
        },
        {
          label: "Estimasi Margin",
          value: 0,
        },
      ],
      data: [],
    };

    finalData = {
      kpi: [
        {
          ...finalData.kpi[0],
          value: financialEstimation.income_estimation,
        },
        {
          ...finalData.kpi[1],
          value: financialEstimation.reward_estimation,
        },
        {
          ...finalData.kpi[2],
          value: financialEstimation.margin_estimation,
        },
      ],
      data: financialEstimation.estimations,
    };

    return {
      finalData,
    };
  };

  return {
    useGetSummaryKPIService,
    useGetMissionAnalyticService,
    useGetMissionLeaderboardService,
    useGetFinancialEstimationService,
  };
};

export default useSummaryController;
