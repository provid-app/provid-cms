import {
  convertNumberFormat,
  convertNumberToCurrency,
} from "@utils/helper/converter";
import Flex from "./Flex";

type Props = {
  payloadData: readonly any[];
  type: "number" | "currency" | "percent";
  mode?: "pie" | "bar" | "default";
  barColor?: string;
};

const CustomTooltip = ({
  payloadData,
  type,
  mode = "default",
  barColor,
}: Props) => {
  return (
    <Flex className="px-4 py-2 bg-white rounded-lg shadow-[0px_4px_9px_0px_rgba(9,45,115,0.09)] gap-2 min-w-36.75">
      {payloadData.map((item, index) => {
        return (
          <Flex
            key={index.toString()}
            className="flex-row! items-center justify-between gap-5.5"
          >
            <Flex className="flex-row! items-center gap-2">
              <div
                className="size-4 rounded-sm"
                style={{
                  backgroundColor:
                    mode === "default"
                      ? item.color
                      : mode === "bar"
                        ? barColor
                        : item.payload.fill,
                }}
              />

              <p className="text-body2 text-text">
                {mode === "bar" ? item.payload.name : item.name}
              </p>
            </Flex>

            <p className="text-body2 font-semibold text-title">
              {type === "currency"
                ? convertNumberToCurrency(item.value)
                : `${convertNumberFormat(item.value)}${type === "percent" ? "%" : ""}`}
            </p>
          </Flex>
        );
      })}
    </Flex>
  );
};

export default CustomTooltip;
