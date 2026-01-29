import type { ChartBoxType } from "types/page.type";
import Flex from "./Flex";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import CustomTooltip from "./CustomTooltip";
import DropdownFilter from "./DropdownFilter";
import { convertNumberFormat } from "@utils/helper/converter";
import { useMotionValue, useTransform, motion } from "motion/react";
import { useEffect, useState } from "react";
import { animate } from "motion";
import type { ChartFilterStateType } from "types/state.type";

type Props = {
  title: string;
  subTitle: string;
  chartData: ChartBoxType[];
  footnote1: string;
  footnote2: string;
  filterData: ChartFilterStateType;
};

const PieChartBox = ({
  title,
  subTitle,
  chartData,
  footnote1,
  footnote2,
  filterData,
}: Props) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));
  const formatted = useTransform(rounded, (value) => {
    return convertNumberFormat(value);
  });

  useEffect(() => {
    if (!isAnimating) return;

    const controls = animate(
      count,
      chartData.reduce((acc, curr) => acc + curr.value, 0),
      {
        duration: 1,
        ease: "easeOut",
      },
    );

    return controls.stop;
  }, [isAnimating, chartData]);

  return (
    <Flex className="border border-border rounded-xl">
      <Flex className="px-3 py-2.5 border-b border-b-border">
        <p className="text-body2 text-text">{title}</p>
      </Flex>

      <Flex className="p-4 gap-6">
        <Flex className="flex-row! items-center justify-between">
          <p className="text-body1 font-semibold text-title">{subTitle}</p>

          <DropdownFilter filterData={filterData} />
        </Flex>

        <Flex className="relative items-center">
          <ResponsiveContainer width="100%" height={214}>
            <PieChart>
              <Tooltip
                content={({ payload }) => (
                  <CustomTooltip
                    payloadData={payload}
                    type="number"
                    mode="pie"
                  />
                )}
              />

              <Pie
                data={chartData}
                dataKey="value"
                outerRadius="100%"
                innerRadius="70%"
                animationBegin={0}
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationEnd={() => setIsAnimating(false)}
              >
                <Cell fill="#51a933" />
                <Cell fill="#b9ddad" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <motion.p className="absolute top-1/2 -translate-y-1/2 text-subtitle font-bold text-title">
            {formatted}
          </motion.p>
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
