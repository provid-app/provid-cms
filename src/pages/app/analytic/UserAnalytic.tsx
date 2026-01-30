import { Flex, KPICard } from "@components/custom";
import useUserAnalyticController from "@controllers/userAnalytic.controller";

const UserAnalytic = () => {
  const { useGetUserKPIService } = useUserAnalyticController();

  const { finalData: userKPI } = useGetUserKPIService();

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
    </Flex>
  );
};

export default UserAnalytic;
