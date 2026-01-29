import { Flex, KPICard } from "@components/custom";
import useMissionAnalyticController from "@controllers/missionAnalytic.controller";

const MissionAnalytic = () => {
  const { useGetMissionKPIService } = useMissionAnalyticController();

  const { finalData: missionKPI } = useGetMissionKPIService();

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
    </Flex>
  );
};

export default MissionAnalytic;
