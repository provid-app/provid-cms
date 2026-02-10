import { generateMission } from "@utils/data/mission.dummy";
import type { TableBodyType } from "types/page.type";
import { format } from "date-fns";
import { convertNumberFormat } from "@utils/helper/converter";
import {
  useEditMissionModal,
  useMissionDetailModal,
} from "@stores/modal.store";
import { editMissionForm } from "@utils/constant/form.data";
import useSegmentController from "./segment.controller";

const useMissionController = () => {
  const showMissionDetailModal = useMissionDetailModal((state) => state.onShow);
  const showEditMissionModal = useEditMissionModal((state) => state.onShow);

  const { useGetSegmentDropdown } = useSegmentController();

  const useGetMissions = () => {
    const mission = generateMission(10);

    const { finalData: segmentDropdown } = useGetSegmentDropdown();

    let finalData: TableBodyType[] = [];

    finalData = mission.map((item) => ({
      row: [
        {
          label: item.mission_name,
          type: "text",
        },
        {
          label: item.mission_status,
          type:
            item.mission_status === "Terjadwal"
              ? "arrange"
              : item.mission_status === "Diterbitkan"
                ? "publish"
                : "draft",
        },
        {
          label: format(new Date(item.publication_date), "LLL dd, yyyy"),
          type: "text",
        },
        {
          label: item.task,
          type: "text",
        },
        {
          label: convertNumberFormat(item.reward),
          type: "coin",
        },
      ],
      action: [
        {
          type: "custom",
          label: "Detail",
          onClick: () => showMissionDetailModal(item),
        },
        {
          type: "custom",
          label: "Edit Misi",
          onClick: () =>
            showEditMissionModal({
              ...editMissionForm,
              inputs: editMissionForm.inputs.map((item) => {
                if (item.name === "second") {
                  return {
                    ...item,
                    inputs: item.inputs?.map((input) => {
                      if (input.name === "segment_id") {
                        return {
                          ...input,
                          dropdown: segmentDropdown,
                        };
                      }

                      return input;
                    }),
                  };
                }

                return item;
              }),
              defaultValues: {
                mission_name: item.mission_name,
                mission_desc: item.mission_desc,
                reward: item.reward.toString(),
                segment_id: {
                  label: item.segment.segmet,
                  value: item.segment.segmet.toString(),
                },
                instruction: item.instruction,
              },
            }),
        },
        {
          type: "delete",
          label: "Hapus",
          onClick: () => console.log("Hapus"),
        },
      ],
    }));

    return {
      finalData,
    };
  };

  return {
    useGetMissions,
  };
};

export default useMissionController;
