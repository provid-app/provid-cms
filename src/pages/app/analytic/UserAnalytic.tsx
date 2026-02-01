import { BarChartBox, Flex, KPICard, PieChartBox } from "@components/custom";
import useUserAnalyticController from "@controllers/userAnalytic.controller";
import { useUserFilter } from "@stores/page.store";

const UserAnalytic = () => {
  const userFilter = useUserFilter();

  const {
    useGetUserKPIService,
    useGetUserCompletedMissionService,
    useGetUserAgeAnalyticService,
    useGetUserGenderAnalyticService,
  } = useUserAnalyticController();

  const { finalData: userKPI } = useGetUserKPIService();
  const { finalData: userCompletedMission } =
    useGetUserCompletedMissionService();
  const { finalData: userAgeAnalytic } = useGetUserAgeAnalyticService();
  const { finalData: userGenderAnalytic } = useGetUserGenderAnalyticService();

  return (
    <Flex className="grow basis-0 p-4 gap-4 overflow-y-auto">
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: userKPI.map(() => "auto").join(" ") }}
      >
        {userKPI.map((item, index) => (
          <KPICard key={index.toString()} cardData={item} />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Flex className="items-center justify-center border border-border rounded-xl">
          In Progress
        </Flex>

        <BarChartBox
          title="Perilaku Pengguna"
          subTitle="Distribusi Misi Selesai per User"
          chartData={userCompletedMission}
          footnote1={`Sebagian besar pengguna menyelesaikan ${userCompletedMission.find((item) => item.isMax)?.name}`}
          footnote2="Distribusi jumlah misi yang diselesaikan per pengguna"
          type="number"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <BarChartBox
          title="Ringkasan Pengguna"
          subTitle="Distribusi Usia"
          chartData={userAgeAnalytic}
          footnote1={`Pengguna usia ${userAgeAnalytic.find((item) => item.isMax)?.name} mendominasi dengan ${userAgeAnalytic.find((item) => item.isMax)?.value}% dari total user`}
          footnote2="Distribusi usia pengguna aktif"
          type="percent"
        />

        <PieChartBox
          title="Ringkasan Pengguna"
          subTitle="Distribusi Gender"
          chartData={userGenderAnalytic}
          footnote1="Pengguna perempuan mendominasi dengan 56% dari total user"
          footnote2="Distribusi gender pengguna aktif"
          filterData={userFilter}
        />
      </div>
    </Flex>
  );
};

export default UserAnalytic;
