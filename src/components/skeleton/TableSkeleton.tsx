import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import type { TableHeaderType } from "types/page.type";

type Props = {
  headerData: TableHeaderType;
};

const TableSkeleton = ({ headerData }: Props) => {
  return Array.from({ length: 10 }).map((_, index) => (
    <tr key={index.toString()}>
      {headerData.withCheckbox && (
        <td className="w-12 border-b border-b-border p-0">
          <Skeleton height={44} width="100%" className="m-0" />
        </td>
      )}

      {Array.from({ length: headerData.header.length }).map((_, index2) => (
        <td key={index2.toString()} className="p-0">
          <Skeleton height={44} width="100%" className="m-0" />
        </td>
      ))}

      {headerData.withAction && (
        <td className="w-13 border-b border-b-border p-0">
          <Skeleton height={44} width="100%" className="m-0" />
        </td>
      )}
    </tr>
  ));
};

export default TableSkeleton;
