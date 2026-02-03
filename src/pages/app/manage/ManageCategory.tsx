import { Flex } from "@components/custom";
import { PageHeader } from "@components/layout";
import PageTable from "@components/layout/PageTable";
import useCategoryController from "@controllers/category.controller";
import { useCategoryModal } from "@stores/modal.store";
import { categoryForm } from "@utils/constant/form.data";
import { categoryHeaderData } from "@utils/constant/page.data";

const ManageCategory = () => {
  const showCategoryModal = useCategoryModal((state) => state.onShow);

  const { useGetCategoriesService, useGetCategoryDropdownService } =
    useCategoryController();

  const { finalData: categories } = useGetCategoriesService();
  const { finalData: categoryDropdown } = useGetCategoryDropdownService();

  return (
    <Flex className="grow basis-0 p-4 gap-4 overflow-y-auto">
      <PageHeader
        buttonLabel="Tambah Kategori"
        onClick={() =>
          showCategoryModal(
            {
              ...categoryForm,
              inputs: categoryForm.inputs.map((input) => {
                if (input.name === "category") {
                  return {
                    ...input,
                    dropdown: categoryDropdown,
                  };
                }

                return input;
              }),
            },
            "add",
          )
        }
      />

      <PageTable headerData={categoryHeaderData} bodyData={categories} />
    </Flex>
  );
};

export default ManageCategory;
