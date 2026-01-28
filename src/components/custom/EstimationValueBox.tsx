import type { KPIType } from "types/page.type";
import Flex from "./Flex";
import { useMotionValue, useTransform, motion } from "motion/react";
import { convertNumberFormat } from "@utils/helper/converter";
import { useEffect } from "react";
import { animate } from "motion";

type Props = {
  valueData: KPIType;
  isLast: boolean;
};

const EstimationValueBox = ({ valueData, isLast }: Props) => {
  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  const formatted = useTransform(rounded, (value) => {
    return convertNumberFormat(value);
  });

  useEffect(() => {
    const controls = animate(count, valueData.value, {
      duration: 1,
      ease: "easeOut",
    });

    return controls.stop;
  }, [valueData.value]);

  return (
    <Flex
      className={`px-4 py-4.75 gap-1 ${!isLast && "border-r border-r-border"}`}
    >
      <p className="text-body2 text-text truncate">{valueData.label}</p>

      <motion.p className="text-subtitle font-bold text-title truncate">
        {formatted}
      </motion.p>
    </Flex>
  );
};

export default EstimationValueBox;
