import type { ChartBoxType } from "types/page.type";
import Flex from "./Flex";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";
import type { ChartFilterStateType } from "types/state.type";
import DropdownFilter from "./DropdownFilter";

type Props = {
  title: string;
  subTitle: string;
  chartData: ChartBoxType[];
  footnote1: string;
  footnote2: string;
  type: "number" | "currency" | "percent";
  filterData?: ChartFilterStateType;
};

const BarChartBox = ({
  title,
  subTitle,
  chartData,
  footnote1,
  footnote2,
  type,
  filterData,
}: Props) => {
  return (
    <Flex className="border border-border rounded-xl">
      <Flex className="px-3 py-2.5 border-b border-b-border">
        <p className="text-body2 text-text">{title}</p>
      </Flex>

      <Flex className="flex-1 p-4 gap-6">
        <Flex className="flex-row! items-center justify-between">
          <p className="text-body1 font-semibold text-title">{subTitle}</p>

          {filterData && <DropdownFilter filterData={filterData} />}
        </Flex>

        <Flex className="h-53.5">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} stroke="#e1e5e8" />

              <XAxis
                type="category"
                dataKey="name"
                tick={{ className: "text-caption" }}
                height={17}
                tickSize={0}
                tickMargin={10}
                axisLine={false}
              />

              <YAxis
                type="number"
                tick={{ className: "text-caption" }}
                width="auto"
                tickSize={0}
                tickMargin={10}
                axisLine={false}
              />

              <Tooltip
                cursor={false}
                content={({ payload }) => {
                  return (
                    <CustomTooltip
                      payloadData={payload}
                      mode="bar"
                      barColor={
                        payload[0]
                          ? payload[0].payload.isMax
                            ? "#1069C5"
                            : "#9FC3E8"
                          : "#9FC3E8"
                      }
                      type={type}
                    />
                  );
                }}
              />

              <Bar
                dataKey="value"
                background={false}
                barSize={50}
                radius={[4, 4, 4, 4]}
                style={{ padding: 0 }}
              >
                {chartData.map((item, index) => (
                  <Cell key={index} fill={item.isMax ? "#1069C5" : "#9FC3E8"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Flex>

        <Flex className="gap-2">
          <p className="text-body2 font-semibold text-title">{footnote1}</p>

          <p className="text-body2 text-text">{footnote2}</p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BarChartBox;
