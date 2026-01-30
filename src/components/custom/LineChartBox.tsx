import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Flex from "./Flex";
import type { ChartBoxType } from "types/page.type";
import CustomTooltip from "./CustomTooltip";

type Props = {
  title: string;
  subTitle: string;
  chartData: ChartBoxType[];
  footnote1: string;
  footnote2: string;
};

const LineChartBox = ({
  title,
  subTitle,
  chartData,
  footnote1,
  footnote2,
}: Props) => {
  console.log(chartData);

  return (
    <Flex className="border border-border rounded-xl">
      <Flex className="px-3 py-2.5 border-b border-b-border">
        <p className="text-body2 text-text">{title}</p>
      </Flex>

      <Flex className="p-4 gap-6">
        <Flex className="flex-row! items-center justify-between">
          <p className="text-body1 font-semibold text-title">{subTitle}</p>
        </Flex>

        <Flex className="h-53.5">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <CartesianGrid vertical={false} stroke="#e1e5e8" />

              <XAxis
                dataKey="name"
                tick={{ className: "text-caption fill-text" }}
                height={17}
                tickSize={0}
                tickMargin={10}
                axisLine={false}
              />

              <YAxis
                type="number"
                tick={{ className: "text-caption fill-text" }}
                width="auto"
                tickSize={0}
                tickMargin={10}
                axisLine={false}
              />

              <Tooltip
                content={({ payload }) => (
                  <CustomTooltip payloadData={payload} type="percent" />
                )}
              />

              <Line
                type="monotone"
                dataKey="value"
                name="Semua Misi"
                stroke="#51A933"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
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

export default LineChartBox;
