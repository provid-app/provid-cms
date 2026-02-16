import { generateMission } from "@utils/data/mission.dummy";
import type { FilterType, RowActionType, TableBodyType } from "types/page.type";
import { format } from "date-fns";
import { convertNumberFormat } from "@utils/helper/converter";
import {
  useAddScheduleModal,
  useConfirmationModal,
  useEditMissionModal,
  useEditScheduleModal,
  useMissionDetailModal,
} from "@stores/modal.store";
import { editMissionForm } from "@utils/constant/form.data";
import useSegmentController from "./segment.controller";
import type { MissionDTO } from "@models/mission.model";
import { useState } from "react";
import { useToast } from "@stores/page.store";

const useMissionController = () => {
  const showMissionDetailModal = useMissionDetailModal((state) => state.onShow);
  const showEditMissionModal = useEditMissionModal((state) => state.onShow);
  const showEditScheduleModal = useEditScheduleModal((state) => state.onShow);
  const showAddScheduleModal = useAddScheduleModal((state) => state.onShow);
  const confirmationModal = useConfirmationModal();
  const showToast = useToast((state) => state.onShow);

  const { useGetSegmentDropdown } = useSegmentController();

  const useGetMissions = () => {
    const [selected, setSelected] = useState<{ id: number; name: string }[]>(
      [],
    );
    const [filter, setFilter] = useState<{ status: string[]; type: string[] }>({
      status: [],
      type: [],
    });

    const mission = generateMission(10);

    const { finalData: segmentDropdown } = useGetSegmentDropdown();

    const resetSelected = () => {
      if (selected.length > 0) setSelected([]);
    };

    const onSelectAll = () => {
      if (selected.length === mission.length) {
        setSelected([]);
      } else {
        setSelected(
          mission.map((item) => ({
            id: item.id,
            name: item.mission_name,
          })),
        );
      }
    };

    const onSelectFilter = (type: "status" | "type", value: string) => {
      if (type === "status") {
        if (filter.status.includes(value)) {
          setFilter((prev) => ({
            ...prev,
            status: prev.status.filter((val) => val !== value),
          }));
        } else {
          setFilter((prev) => ({
            ...prev,
            status: [...prev.status, value],
          }));
        }
      } else if (type === "type") {
        if (filter.type.includes(value)) {
          setFilter((prev) => ({
            ...prev,
            type: prev.type.filter((val) => val !== value),
          }));
        } else {
          setFilter((prev) => ({
            ...prev,
            type: [...prev.type, value],
          }));
        }
      }
    };

    const getActions = (item: MissionDTO): RowActionType[] => {
      const act: (RowActionType | null)[] =
        item.mission_status === "Terjadwal"
          ? [
              {
                type: "custom",
                label: "Edit Jadwal",
                onClick: () => {
                  showEditScheduleModal(item.scheduled_at!);
                  resetSelected();
                },
              },
            ]
          : item.mission_status === "Draf"
            ? [
                {
                  type: "custom",
                  label: "Jadwalkan",
                  onClick: () => {
                    showAddScheduleModal();
                    resetSelected();
                  },
                },
                {
                  type: "custom",
                  label: "Terbitkan",
                  onClick: () => {
                    confirmationModal.onShow(
                      "default",
                      "Terbitkan",
                      "Anda yakin ingin langsung menerbitkan misi ini? Misi akan langsung muncul di aplikasi user.",
                      "Lanjutkan",
                      () => {
                        showToast("success", "Misi berhasil diterbitkan!");
                        confirmationModal.onHide();
                      },
                    );
                    resetSelected();
                  },
                },
              ]
            : [null];

      const curr: (RowActionType | null)[] = [
        {
          type: "custom",
          label: "Detail",
          onClick: () => {
            showMissionDetailModal(item);
            resetSelected();
          },
        },
        ...act,
        {
          type: "custom",
          label: "Edit Misi",
          onClick: () => {
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
            });
            resetSelected();
          },
        },
      ];

      return curr.filter((item) => item !== null) as RowActionType[];
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
          label: item.publication_date
            ? format(new Date(item.publication_date), "LLL dd, yyyy")
            : "-",
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
      isSelected: selected.some((tmp) => tmp.id === item.id),
      onSelect: () =>
        setSelected((prev) => {
          const checkIsExist = prev.some((tmp) => tmp.id === item.id);

          if (checkIsExist) return prev.filter((dat) => dat.id !== item.id);
          return [
            ...prev,
            {
              id: item.id,
              name: item.mission_name,
            },
          ];
        }),
    }));

    const filterData: FilterType[] = [
      {
        title: "STATUS",
        data: [
          {
            label: "Draf",
            count: 1,
            isSelected: filter.status.includes("draf"),
            onSelect: () => onSelectFilter("status", "draf"),
          },
          {
            label: "Terjadwal",
            count: 2,
            isSelected: filter.status.includes("scheduled"),
            onSelect: () => onSelectFilter("status", "scheduled"),
          },
          {
            label: "Diterbitkan",
            count: 1,
            isSelected: filter.status.includes("published"),
            onSelect: () => onSelectFilter("status", "published"),
          },
        ],
      },
      {
        title: "TIPE TASK",
        data: [
          {
            label: "Ads",
            count: 2,
            isSelected: filter.type.includes("ads"),
            onSelect: () => onSelectFilter("type", "ads"),
          },
          {
            label: "App",
            count: 2,
            isSelected: filter.type.includes("app"),
            onSelect: () => onSelectFilter("type", "app"),
          },
        ],
      },
    ];

    return {
      finalData,
      selected,
      filterData,
      onSelectAll,
    };
  };

  return {
    useGetMissions,
  };
};

export default useMissionController;
