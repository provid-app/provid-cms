import { Flex } from "@components/custom";
import { PageHeader } from "@components/layout";
import PageTable from "@components/layout/PageTable";
import useSegmentController from "@controllers/segment.controller";
import { useConfirmationModal, useSegmentModal } from "@stores/modal.store";
import { useToast } from "@stores/page.store";
import { addSegmentForm } from "@utils/constant/form.data";
import { segmentHeaderData } from "@utils/constant/page.data";

const ManageSegment = () => {
  const confirmationModal = useConfirmationModal();
  const showToast = useToast((state) => state.onShow);
  const showSegmentModal = useSegmentModal((state) => state.onShow);

  const { useGetSegmentsService } = useSegmentController();

  const { finalData, selected, onSelectAll } = useGetSegmentsService();

  return (
    <Flex className="grow basis-0 p-4 gap-4 overflow-y-auto">
      <PageHeader
        buttonLabel="Tambah Segmen"
        withDelete
        deleteCount={selected.length > 0 ? selected.length : undefined}
        onClick={() => showSegmentModal(addSegmentForm, "add")}
        onDelete={() =>
          confirmationModal.onShow(
            "danger",
            `Hapus ${selected.length === 1 ? selected[0].name : `${selected.length} segmen`}`,
            "Segmen akan dihapus dan tidak dapat dikembalikan.",
            "Hapus",
            () => {
              showToast("success", "Segmen berhasil dihapus!");
              confirmationModal.onHide();
            },
          )
        }
      />

      <PageTable
        headerData={segmentHeaderData}
        bodyData={finalData}
        onSelectAll={onSelectAll}
      />
    </Flex>
  );
};

export default ManageSegment;
