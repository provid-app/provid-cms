import { Coin } from "@assets/index";
import { CustomActionButton, CustomSwitch, Flex } from "@components/custom";
import {
  IconCalendarWeek,
  IconCheck,
  IconCircleCheck,
  IconCircleDashed,
  IconClock,
  IconSelector,
  IconSend,
  IconXboxX,
} from "@tabler/icons-react";
import type { TableBodyType, TableHeaderType } from "types/page.type";
import * as CheckBox from "@radix-ui/react-checkbox";
import { TableSkeleton } from "@components/skeleton";
import ButtonFlex from "./ButtonFlex";

type Props = {
  headerData: TableHeaderType;
  bodyData: TableBodyType[];
  isLoading?: boolean;
  onSelectAll?: () => void;
};

const PageTable = ({ headerData, bodyData, isLoading, onSelectAll }: Props) => {
  return (
    <Flex className="flex-1 border border-border rounded-md">
      {isLoading ? (
        <TableSkeleton />
      ) : (
        <table className="table-fixed">
          <thead>
            <tr>
              {headerData.withCheckbox && (
                <th className="w-12 border-b border-b-border">
                  <Flex className="items-center justify-center">
                    <CheckBox.Root
                      checked={bodyData.every((item) => item.isSelected)}
                      onCheckedChange={() => {
                        if (onSelectAll) onSelectAll();
                      }}
                      className="size-4 rounded-sm border border-border cursor-pointer transition data-[state=checked]:bg-primary data-[state=checked]:border-brand-main"
                    >
                      <CheckBox.Indicator>
                        <IconCheck size={14} color="#ffffff" />
                      </CheckBox.Indicator>
                    </CheckBox.Root>
                  </Flex>
                </th>
              )}

              {headerData.header.map((item, index) => (
                <th
                  key={index.toString()}
                  className="px-4 py-[13.5px] border-b border-b-border"
                >
                  <Flex className="flex-row! items-center text-text gap-2">
                    <p className="text-caption font-semibold text-left truncate">
                      {item.label}
                    </p>

                    {item.sortable && (
                      <ButtonFlex className="size-4 text-text hover:bg-border transition-colors duration-300 rounded-sm">
                        <IconSelector size={12} />
                      </ButtonFlex>
                    )}
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
                {item.onSelect && (
                  <td className="w-12 border-b border-b-border">
                    <Flex className="items-center justify-center">
                      <CheckBox.Root
                        checked={item.isSelected}
                        onCheckedChange={() => {
                          if (item.onSelect) item.onSelect();
                        }}
                        className="size-4 rounded-sm border border-border cursor-pointer transition data-[state=checked]:bg-primary data-[state=checked]:border-brand-main"
                      >
                        <CheckBox.Indicator>
                          <IconCheck size={14} color="#ffffff" />
                        </CheckBox.Indicator>
                      </CheckBox.Root>
                    </Flex>
                  </td>
                )}

                {item.row.map((item2, index2) => (
                  <td
                    key={index2.toString()}
                    className={`px-4 py-2.5 border-b border-b-border text-left ${item2.type === "text" ? "max-w-[299.33px]" : ""}`}
                  >
                    {item2.type === "image" ? (
                      <img src={item2.label} className="size-5" />
                    ) : item2.type === "switch" ? (
                      <CustomSwitch
                        label={item2.label}
                        value={item2.label === "Aktif"}
                      />
                    ) : item2.type === "text" ? (
                      <p className="text-body2 text-title line-clamp-1">
                        {item2.label}
                      </p>
                    ) : item2.type === "coin" ? (
                      <Flex className="flex-row! items-center gap-2">
                        <Coin width={16} height={16} />

                        <p className="text-body2 text-title">{item2.label}</p>
                      </Flex>
                    ) : item2.type === "withdraw" ? (
                      <Flex className="gap-2">
                        <p className="text-body2 text-title">{item2.label}</p>

                        <p className="text-caption text-text">
                          {item2.subLabel}
                        </p>
                      </Flex>
                    ) : (
                      <Flex className="items-start">
                        <Flex
                          className={`flex-row! items-center gap-2 px-2 py-1 border rounded-[5px] ${item2.type === "publish" ? "text-primary bg-brand-main border-brand-second" : item2.type === "arrange" || item2.type === "success" ? "text-blue-primary bg-blue-main border-blue-second" : item2.type === "draft" ? "text-text bg-second border-border" : item2.type === "progress" ? "text-teal-primary bg-teal-main border-teal-second" : "text-danger-primary bg-danger-main border-danger-second"}`}
                        >
                          {item2.type === "publish" ? (
                            <IconSend size={16} />
                          ) : item2.type === "arrange" ? (
                            <IconCalendarWeek size={16} />
                          ) : item2.type === "draft" ? (
                            <IconCircleDashed size={16} />
                          ) : item2.type === "success" ? (
                            <IconCircleCheck size={16} />
                          ) : item2.type === "progress" ? (
                            <IconClock size={16} />
                          ) : (
                            <IconXboxX size={16} />
                          )}

                          <p className="text-body2 font-semibold">
                            {item2.label}
                          </p>
                        </Flex>
                      </Flex>
                    )}
                  </td>
                ))}

                {item.action && (
                  <td className="text-center border-b border-b-border">
                    <Flex className="items-center">
                      <CustomActionButton actionData={item.action} />
                    </Flex>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Flex>
  );
};

export default PageTable;
