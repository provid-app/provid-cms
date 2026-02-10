import { Flex, PaginationFooter } from "@components/custom";
import { PageHeader } from "@components/layout";
import PageTable from "@components/layout/PageTable";
import useMissionController from "@controllers/mission.controller";
import useSegmentController from "@controllers/segment.controller";
import { useMissionModal } from "@stores/modal.store";
import { missionForm } from "@utils/constant/form.data";
import { missionHeaderData } from "@utils/constant/page.data";

const ManageMission = () => {
  const showMissionModal = useMissionModal((state) => state.onShow);

  const { useGetMissions } = useMissionController();
  const { useGetSegmentDropdown } = useSegmentController();

  const { finalData: missions } = useGetMissions();
  const { finalData: segmentDropdown } = useGetSegmentDropdown();

  return (
    <Flex className="grow basis-0 p-4 gap-4 overflow-y-auto">
      <PageHeader
        buttonLabel="Tambah Misi"
        onClick={() =>
          showMissionModal({
            ...missionForm,
            inputs: missionForm.inputs.map((item, index) => {
              if (index === 0) {
                return item.map((input) => {
                  if (input.name === "second") {
                    return {
                      ...input,
                      inputs: input.inputs?.map((input2) => {
                        if (input2.name === "segment_id") {
                          return {
                            ...input2,
                            dropdown: segmentDropdown,
                          };
                        }

                        return input2;
                      }),
                    };
                  }

                  return input;
                });
              }

              return item;
            }),
          })
        }
      />

      <Flex className="gap-1.5">
        <PageTable headerData={missionHeaderData} bodyData={missions} />

        <PaginationFooter />
      </Flex>
    </Flex>
  );
};

export default ManageMission;
