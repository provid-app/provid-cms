import { Flex } from "@components/custom";
import { PageHeader } from "@components/layout";
import PageTable from "@components/layout/PageTable";
import useMissionController from "@controllers/mission.controller";
import { missionHeaderData } from "@utils/constant/page.data";

const ManageMission = () => {
  const { useGetMissions } = useMissionController();

  const { finalData: missions } = useGetMissions();

  return (
    <Flex className="grow basis-0 p-4 gap-4 overflow-y-auto">
      <PageHeader buttonLabel="Tambah Misi" />

      <PageTable headerData={missionHeaderData} bodyData={missions} />
    </Flex>
  );
};

export default ManageMission;
