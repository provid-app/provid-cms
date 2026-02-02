import { CustomSwitch, Flex } from "@components/custom";
import type { TableBodyType, TableHeaderType } from "types/page.type";

type Props = {
  headerData: TableHeaderType;
  bodyData: TableBodyType[];
};

const PageTable = ({ headerData, bodyData }: Props) => {
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

        <tbody>
          {bodyData.map((item, index) => (
            <tr key={index.toString()}>
              {item.row.map((item2, index2) => (
                <td
                  key={index2.toString()}
                  className="px-4 py-2.5 border-b border-b-border"
                >
                  {item2.type === "image" ? (
                    <img src={item2.label} className="size-5" />
                  ) : item2.type === "switch" ? (
                    <CustomSwitch
                      label={item2.label}
                      value={item2.label === "Aktif"}
                    />
                  ) : (
                    <p className="text-body2 text-title">{item2.label}</p>
                  )}
                </td>
              ))}

              {item.action && (
                <td className="text-center border-b border-b-border">
                  {item.action.map((action, index2) => {
                    const Icon = action.icon;

                    return (
                      <button
                        key={index2.toString()}
                        type="button"
                        className="text-inactive cursor-pointer"
                      >
                        <Icon size={20} stroke={1.5} />
                      </button>
                    );
                  })}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </Flex>
  );
};

export default PageTable;
