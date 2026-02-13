import type { EstimationChartType } from "types/page.type";
import Flex from "./Flex";
import EstimationValueBox from "./EstimationValueBox";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import CustomTooltip from "./CustomTooltip";

type Props = {
  chartData: EstimationChartType;
};

const SummaryLineChart = ({ chartData }: Props) => {
  return (
    <Flex className="border border-border rounded-xl">
      <Flex className="px-3 py-2.5 border-b border-b-border">
        <p className="text-body2 text-text">Ringkasan Keuangan</p>
      </Flex>

      <Flex className="lg:flex-row! border-b border-b-border lg:gap-1.5">
        <Flex className="px-4 pt-4 pb-3 border-b border-b-border lg:border-b-0 lg:flex-1 lg:pt-7 lg:px-6 lg:pb-6 gap-1">
          <p className="text-body1 font-semibold text-title truncate">
            Estimasi Kinerja Finansial
          </p>

          <p className="text-body2 text-text truncate">
            Perkiraan hasil pendapatan, reward, dan margin dari aktivitas misi.
          </p>
        </Flex>

        <Flex className="lg:flex-row! lg:border-l border-l-border">
          {chartData.kpi.map((item, index) => (
            <EstimationValueBox
              key={index.toString()}
              valueData={item}
              isLast={index === chartData.kpi.length - 1}
            />
          ))}
        </Flex>
      </Flex>

      <Flex className="p-6">
        <ResponsiveContainer width="100%" height={211}>
          <LineChart data={chartData.data} width="100%">
            <CartesianGrid vertical={false} stroke="#e1e5e8" />

            <XAxis
              dataKey="month"
              tick={{ className: "text-caption fill-text" }}
              tickLine={false}
              axisLine={false}
              height={17}
              tickSize={0}
              tickMargin={10}
            />

            <YAxis type="number" hide />

            <Tooltip
              content={({ payload }) => (
                <CustomTooltip payloadData={payload} type="currency" />
              )}
            />

            <Line
              type="monotone"
              dataKey="income"
              name="Total Pendapatan"
              stroke="#51A933"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="reward"
              name="Total Reward Dikeluarkan"
              stroke="#1069C5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </Flex>
    </Flex>
  );
};

export default SummaryLineChart;
