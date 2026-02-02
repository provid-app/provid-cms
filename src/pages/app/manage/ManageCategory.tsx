import { Flex } from "@components/custom";
import { PageHeader } from "@components/layout";
import PageTable from "@components/layout/PageTable";
import useCategoryController from "@controllers/category.controller";
import { categoryHeaderData } from "@utils/constant/page.data";

const ManageCategory = () => {
  const { useGetCategoriesService } = useCategoryController();

  const { finalData } = useGetCategoriesService();

  return (
    <Flex className="grow basis-0 p-4 gap-4 overflow-y-auto">
      <PageHeader buttonLabel="Tambah Kategori" />

      <PageTable headerData={categoryHeaderData} bodyData={finalData} />
    </Flex>
  );
};

export default ManageCategory;
