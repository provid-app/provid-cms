import { Flex } from "@components/custom";
import type { TableHeaderType } from "types/page.type";

type Props = {
  headerData: TableHeaderType;
};

const PageTable = ({ headerData }: Props) => {
  return (
    <Flex className="border border-border rounded-md">
      <table className="table-fixed">
        <thead>
          <tr>
            {headerData.header.map((item, index) => (
              <th
                key={index.toString()}
                className="px-4 py-[13.5px] border-b border-b-border"
              >
                <Flex className="flex-row! items-center text-text">
                  <p className="text-caption font-semibold">{item.label}</p>
                </Flex>
              </th>
            ))}

            {headerData.withAction && (
              <th className="w-13 border-b border-b-border" />
            )}
          </tr>
        </thead>
      </table>
    </Flex>
  );
};

export default PageTable;
