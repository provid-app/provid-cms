import { Flex } from "@components/custom";
import { PageHeader } from "@components/layout";

const Notification = () => {
  return (
    <Flex className="grow basis-0 p-4 gap-4 overflow-y-auto">
      <PageHeader buttonLabel="Tambah Notifikasi" />
    </Flex>
  );
};

export default Notification;
