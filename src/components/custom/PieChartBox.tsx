import type { ChartBoxType } from "types/page.type";
import Flex from "./Flex";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  title: string;
  subTitle: string;
  chartData: ChartBoxType[];
  footnote1: string;
  footnote2: string;
};

const PieChartBox = ({
  title,
  subTitle,
  chartData,
  footnote1,
  footnote2,
}: Props) => {
  return (
    <Flex className="border border-border rounded-xl">
      <Flex className="px-3 py-2.5 border-b border-b-border">
        <p className="text-body2 text-text">{title}</p>
      </Flex>

      <Flex className="p-4 gap-6">
        <Flex className="flex-row! items-center">
          <p className="text-body1 font-semibold text-title">{subTitle}</p>
        </Flex>

        <Flex className="items-center">
          <ResponsiveContainer width="100%" height={214}>
            <PieChart>
              <Tooltip />

              <Pie
                data={chartData}
                dataKey="value"
                outerRadius="100%"
                innerRadius="70%"
              >
                <Cell className="fill-primary" />
                <Cell className="fill-brand-second" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </Flex>

        <Flex className="items-center gap-2">
          <p className="text-body2 font-semibold text-title">{footnote1}</p>

          <p className="text-body2 text-text">{footnote2}</p>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PieChartBox;
