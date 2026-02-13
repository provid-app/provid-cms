import {
  Flex,
  KPICard,
  LeaderboardChart,
  PieChartBox,
  SummaryLineChart,
} from "@components/custom";
import useSummaryController from "@controllers/summary.controller";
import { useCategoryFilter, useLeaderboardFilter } from "@stores/page.store";

const Ringkasan = () => {
  const categoryFilter = useCategoryFilter();
  const leaedrboardFilter = useLeaderboardFilter();

  const {
    useGetSummaryKPIService,
    useGetMissionAnalyticService,
    useGetMissionLeaderboardService,
    useGetFinancialEstimationService,
  } = useSummaryController();

  const { finalData: summaryKPI } = useGetSummaryKPIService();
  const { finalData: missionAnalytic } = useGetMissionAnalyticService();
  const { finalData: missionLeaderboard } = useGetMissionLeaderboardService();
  const { finalData: financialEstimation } = useGetFinancialEstimationService();

  return (
    <Flex className="grow basis-0 p-4 gap-4 overflow-y-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {summaryKPI.map((item, index) => (
          <KPICard key={index.toString()} cardData={item} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <PieChartBox
          title="Perbandingan Jenis Misi"
          subTitle="Distribusi Jenis Misi"
          chartData={missionAnalytic}
          footnote1="Misi iklan mendominasi dengan 58% dari total aktivitas"
          footnote2="Perbandingan jenis misi Ads dan App dalam performa."
          filterData={categoryFilter}
        />

        <LeaderboardChart
          title="Misi Terbaik"
          subTitle="Top 5 Misi Diselesaikan"
          chartData={missionLeaderboard}
          footnote1="5 misi teratas menyumbang 42% dari total penyelesaian bulan ini"
          footnote2="Menampilkan misi dengan jumlah penyelesaian tertinggi."
          filterData={leaedrboardFilter}
        />
      </div>

      <SummaryLineChart chartData={financialEstimation} />
    </Flex>
  );
};

export default Ringkasan;
