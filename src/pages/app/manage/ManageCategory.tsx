import { Flex } from "@components/custom";
import { PageHeader } from "@components/layout";
import PageTable from "@components/layout/PageTable";
import { categoryHeaderData } from "@utils/constant/page.data";

const ManageCategory = () => {
  return (
    <Flex className="grow basis-0 p-4 gap-4 overflow-y-auto">
      <PageHeader buttonLabel="Tambah Kategori" />

      <PageTable headerData={categoryHeaderData} />
    </Flex>
  );
};

export default ManageCategory;
