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
import { convertNumberToCurrency } from "@utils/helper/converter";

type Props = {
  chartData: EstimationChartType;
};

const SummaryLineChart = ({ chartData }: Props) => {
  return (
    <Flex className="border border-border rounded-xl">
      <Flex className="px-3 py-2.5 border-b border-b-border">
        <p className="text-body2 text-text">Ringkasan Keuangan</p>
      </Flex>

      <Flex className="flex-row! border-b border-b-border gap-1.5">
        <Flex className="flex-1 pt-7 px-6 pb-6 gap-1">
          <p className="text-body1 font-semibold text-title truncate">
            Estimasi Kinerja Finansial
          </p>

          <p className="text-body2 text-text truncate">
            Perkiraan hasil pendapatan, reward, dan margin dari aktivitas misi.
          </p>
        </Flex>

        <Flex className="flex-row! border-l border-l-border">
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
              content={({ payload }) => {
                return (
                  <Flex className="px-4 py-2 bg-white rounded-lg shadow-[0px_4px_9px_0px_rgba(9,45,115,0.09)] gap-2">
                    {payload.map((item, index) => (
                      <Flex
                        key={index.toString()}
                        className="flex-row! items-center justify-between gap-5.5"
                      >
                        <Flex className="flex-row! items-center gap-2">
                          <div
                            className="size-4 rounded-sm"
                            style={{ backgroundColor: item.stroke }}
                          />

                          <p className="text-body2 text-text">{item.name}</p>
                        </Flex>

                        <p className="text-body2 font-semibold text-title">
                          {convertNumberToCurrency(item.value)}
                        </p>
                      </Flex>
                    ))}
                  </Flex>
                );
              }}
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
