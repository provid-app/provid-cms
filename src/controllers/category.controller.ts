import { IconEdit } from "@tabler/icons-react";
import { generateCategory } from "@utils/data/category.dummy";
import type { TableBodyType } from "types/page.type";

const useCategoryController = () => {
  const useGetCategoriesService = () => {
    const category = generateCategory();

    let finalData: TableBodyType[] = [];

    finalData = category.map((item) => ({
      row: [
        {
          type: "text",
          label: item.category_name,
        },
        {
          type: "image",
          label: item.icon,
        },
        {
          type: "switch",
          label: item.is_active ? "Aktif" : "Non-Aktif",
        },
      ],
      action: [
        {
          type: "edit",
          icon: IconEdit,
          onClick: () => console.log("Edit"),
        },
      ],
    }));

    return {
      finalData,
    };
  };

  return {
    useGetCategoriesService,
  };
};

export default useCategoryController;
