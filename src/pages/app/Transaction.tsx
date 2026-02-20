import { Flex, PaginationFooter } from "@components/custom";
import { PageHeader } from "@components/layout";
import PageTable from "@components/layout/PageTable";
import useTransactionController from "@controllers/transaction.controller";
import { transactionHeaderData } from "@utils/constant/page.data";

const Transaction = () => {
  const { useGetTransactionsService } = useTransactionController();

  const { finalData, filterData, dateRange } = useGetTransactionsService();

  return (
    <Flex className="grow basis-0 p-4 gap-4 overflow-y-auto">
      <PageHeader filterData={filterData} dateRange={dateRange} />

      <Flex className="gap-1.5">
        <PageTable headerData={transactionHeaderData} bodyData={finalData} />

        <PaginationFooter />
      </Flex>
    </Flex>
  );
};

export default Transaction;
