import {
  Flex,
  KPICard,
  LeaderboardChart,
  LineChartBox,
  PieChartBox,
} from "@components/custom";
import useMissionAnalyticController from "@controllers/missionAnalytic.controller";
import useSummaryController from "@controllers/summary.controller";
import { useCategoryFilter, useLeaderboardFilter } from "@stores/page.store";

const MissionAnalytic = () => {
  const categoryFilter = useCategoryFilter();
  const leaedrboardFilter = useLeaderboardFilter();

  const {
    useGetMissionKPIService,
    useGetMissionTrendService,
    useGetMissionCompletedService,
  } = useMissionAnalyticController();
  const { useGetMissionAnalyticService } = useSummaryController();

  const { finalData: missionKPI } = useGetMissionKPIService();
  const { finalData: missionTrend } = useGetMissionTrendService();
  const { finalData: missionAnalytic } = useGetMissionAnalyticService();
  const { finalData: missionCompleted } = useGetMissionCompletedService();

  return (
    <Flex className="grow basis-0 p-4 gap-4 overflow-y-auto">
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: missionKPI.map(() => "auto").join(" ") }}
      >
        {missionKPI.map((item, index) => (
          <KPICard key={index.toString()} cardData={item} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Flex className="items-center justify-center border border-border rounded-xl">
          In Progress
        </Flex>

        <LineChartBox
          title="Performa Misi"
          subTitle="Tren Penyelesaian Misi"
          chartData={missionTrend}
          footnote1="Penyelesaian misi naik 12,4% dibanding periode sebelumnya"
          footnote2="Tren jumlah misi yang diselesaikan harian"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <PieChartBox
          title="Perbandingan Jenis Misi"
          subTitle="Distribusi Jenis Misi"
          chartData={missionAnalytic}
          footnote1="Misi iklan mendominasi dengan 58% dari total aktivitas"
          footnote2="Perbandingan jenis misi Ads dan App dalam performa."
          filterData={categoryFilter}
        />

        <LeaderboardChart
          title="Kualitas Misi"
          subTitle="Tingkat Penyelesaian per Misi"
          chartData={missionCompleted}
          footnote1="Rata-rata tingkat penyelesaian misi mencapai 68%"
          footnote2="Perbandingan rasio misi selesai terhadap misi dimulai"
          filterData={leaedrboardFilter}
          xAxisType="percent"
        />
      </div>
    </Flex>
  );
};

export default MissionAnalytic;
