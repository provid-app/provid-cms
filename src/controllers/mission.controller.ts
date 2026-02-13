import { generateMission } from "@utils/data/mission.dummy";
import type { RowActionType, TableBodyType } from "types/page.type";
import { format } from "date-fns";
import { convertNumberFormat } from "@utils/helper/converter";
import {
  useEditMissionModal,
  useMissionDetailModal,
} from "@stores/modal.store";
import { editMissionForm } from "@utils/constant/form.data";
import useSegmentController from "./segment.controller";
import type { MissionDTO } from "@models/mission.model";
import { useState } from "react";

const useMissionController = () => {
  const showMissionDetailModal = useMissionDetailModal((state) => state.onShow);
  const showEditMissionModal = useEditMissionModal((state) => state.onShow);

  const { useGetSegmentDropdown } = useSegmentController();

  const useGetMissions = () => {
    const [selected, setSelected] = useState<number[]>([]);

    const mission = generateMission(10);

    const { finalData: segmentDropdown } = useGetSegmentDropdown();

    const getActions = (item: MissionDTO): RowActionType[] => {
      const act: (RowActionType | null)[] =
        item.mission_status === "Terjadwal"
          ? [
              {
                type: "custom",
                label: "Edit Jadwal",
                onClick: () => console.log("Edit Jadwal"),
              },
            ]
          : item.mission_status === "Draf"
            ? [
                {
                  type: "custom",
                  label: "Jadwalkan",
                  onClick: () => console.log("Jadwalkan"),
                },
                {
                  type: "custom",
                  label: "Terbitkan",
                  onClick: () => console.log("Terbitkan"),
                },
              ]
            : [null];

      const curr: (RowActionType | null)[] = [
        {
          type: "custom",
          label: "Detail",
          onClick: () => showMissionDetailModal(item),
        },
        ...act,
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
      ];

      return curr.filter((item) => item !== null) as RowActionType[];
    };

    const onSelectAll = () => {
      if (selected.length === mission.length) {
        setSelected([]);
      } else {
        setSelected(mission.map((item) => item.id));
      }
    };

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
      action: getActions(item),
      isSelected: selected.includes(item.id),
      onSelect: () =>
        setSelected((prev) => {
          const checkIsExist = prev.includes(item.id);

          if (checkIsExist) return prev.filter((dat) => dat !== item.id);
          return [...prev, item.id];
        }),
    }));

    return {
      finalData,
      selected,
      onSelectAll,
    };
  };

  return {
    useGetMissions,
  };
};

export default useMissionController;
