import { generateMission } from "@utils/data/mission.dummy";
import type { TableBodyType } from "types/page.type";
import { format } from "date-fns";
import { convertNumberFormat } from "@utils/helper/converter";
import { IconChevronRight } from "@tabler/icons-react";

const useMissionController = () => {
  const useGetMissions = () => {
    const mission = generateMission(10);

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
          icon: IconChevronRight,
          type: "nav",
          onClick: () => console.log("Nav"),
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
