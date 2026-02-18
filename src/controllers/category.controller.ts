import { generateCategory } from "@utils/data/category.dummy";
import type { DropdownType } from "types/form.type";
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
    }));

    return {
      finalData,
    };
  };

  const useGetCategoryDropdownService = () => {
    const category = generateCategory();

    let finalData: DropdownType[] = [];

    finalData = category.map((item) => ({
      label: item.category_name,
      value: item.id.toString(),
    }));

    return {
      finalData,
    };
  };

  return {
    useGetCategoriesService,
    useGetCategoryDropdownService,
  };
};

export default useCategoryController;
