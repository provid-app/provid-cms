import {
  Bar,
  BarChart,
  Cell,
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

const LeaderboardChart = ({
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

      <Flex className="flex-1 p-4 gap-6">
        <Flex className="flex-row! items-center">
          <p className="text-body1 font-semibold text-title">{subTitle}</p>
        </Flex>

        <Flex className="flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
              barCategoryGap={6}
            >
              <XAxis
                type="number"
                tick={{ className: "text-caption" }}
                axisLine={false}
                tickLine={false}
              />

              <YAxis
                width={100}
                type="category"
                dataKey="name"
                tickLine={false}
                axisLine={false}
                tick={({ x, y, payload }) => {
                  const text = payload.value;
                  const maxChars = 12;

                  const display =
                    text.length > maxChars
                      ? `${text.slice(0, maxChars)}…`
                      : text;

                  return (
                    <text
                      x={x}
                      y={y}
                      dy={4}
                      dx={0}
                      textAnchor="end"
                      fontSize={12}
                      fill="#6B7280"
                    >
                      {display}
                    </text>
                  );
                }}
                tickMargin={0}
              />

              <Tooltip
                cursor={false}
                content={({ payload, activeIndex }) => {
                  console.log(activeIndex);

                  return (
                    <CustomTooltip
                      payloadData={payload}
                      type="number"
                      mode="bar"
                      barColor={
                        activeIndex && Number(activeIndex) === 0
                          ? "#1069C5"
                          : "#9FC3E8"
                      }
                    />
                  );
                }}
              />

              <Bar
                dataKey="value"
                background={{ radius: 8 }}
                radius={[4, 4, 4, 4]}
                style={{ padding: 0 }}
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={index}
                    fill={index === 0 ? "#1069C5" : "#9FC3E8"}
                  />
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

export default LeaderboardChart;
