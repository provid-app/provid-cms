import { Flex, PaginationFooter } from "@components/custom";
import { PageHeader } from "@components/layout";
import PageTable from "@components/layout/PageTable";
import useMissionController from "@controllers/mission.controller";
import useSegmentController from "@controllers/segment.controller";
import { useConfirmationModal, useMissionModal } from "@stores/modal.store";
import { useToast } from "@stores/page.store";
import { missionForm } from "@utils/constant/form.data";
import { missionHeaderData } from "@utils/constant/page.data";

const ManageMission = () => {
  const showMissionModal = useMissionModal((state) => state.onShow);
  const confirmationModal = useConfirmationModal();
  const showToast = useToast((state) => state.onShow);

  const { useGetMissions } = useMissionController();
  const { useGetSegmentDropdown } = useSegmentController();

  const { finalData: missions, selected, onSelectAll } = useGetMissions();
  const { finalData: segmentDropdown } = useGetSegmentDropdown();

  return (
    <Flex className="grow basis-0 p-4 gap-4 overflow-y-auto">
      <PageHeader
        buttonLabel="Tambah Misi"
        withDelete
        deleteCount={selected.length > 0 ? selected.length : undefined}
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
        onDelete={() =>
          confirmationModal.onShow(
            "danger",
            `Hapus ${selected.length === 1 ? selected[0].name : `${selected.length} misi`}`,
            "Misi akan dihapus dan tidak dapat dikembalikan.",
            "Hapus",
            () => {
              showToast("success", "Misi berhasil dihapus!");
              confirmationModal.onHide();
            },
          )
        }
      />

      <Flex className="gap-1.5">
        <PageTable
          headerData={missionHeaderData}
          bodyData={missions}
          onSelectAll={onSelectAll}
        />

        <PaginationFooter />
      </Flex>
    </Flex>
  );
};

export default ManageMission;
