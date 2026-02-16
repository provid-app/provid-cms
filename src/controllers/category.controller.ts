// import { useCategoryModal } from "@stores/modal.store";
// import { categoryForm } from "@utils/constant/form.data";
import { generateCategory } from "@utils/data/category.dummy";
import type { DropdownType } from "types/form.type";
import type { TableBodyType } from "types/page.type";

const useCategoryController = () => {
  // const showCategoryModal = useCategoryModal((state) => state.onShow);

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
      // action: [
      //   {
      //     type: "custom",
      //     label: "Edit",
      //     onClick: () =>
      //       showCategoryModal(
      //         {
      //           ...categoryForm,
      //           inputs: categoryForm.inputs.map((input) => {
      //             if (input.name === "category") {
      //               return {
      //                 ...input,
      //                 dropdown: category.map((item) => ({
      //                   label: item.category_name,
      //                   value: item.id.toString(),
      //                 })),
      //               };
      //             }

      //             return input;
      //           }),
      //           defaultValues: {
      //             category: {
      //               label: item.category_name,
      //               value: item.id.toString(),
      //             },
      //           },
      //         },
      //         "edit",
      //       ),
      //   },
      // ],
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
