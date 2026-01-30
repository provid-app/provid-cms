import type { KPICardType } from "types/page.type";
import Flex from "./Flex";
import { ButtonFlex } from "@components/layout";
import {
  IconInfoCircle,
  IconTrendingDown,
  IconTrendingUp,
} from "@tabler/icons-react";
import { Tooltip } from "react-tooltip";
import { useMotionValue, useTransform, motion } from "motion/react";
import { useEffect } from "react";
import { animate } from "motion";
import { convertNumberFormat } from "@utils/helper/converter";

type Props = {
  cardData: KPICardType;
};

const KPICard = ({ cardData }: Props) => {
  const count = useMotionValue(0);
  const countMean = useMotionValue(0);

  const rounded = useTransform(count, (latest) => Math.round(latest));

  const formatted = useTransform(rounded, (value) => {
    if (cardData.type === "percent") return `${convertNumberFormat(value)}%`;

    return convertNumberFormat(value);
  });

  const formattedMean = useTransform(
    countMean,
    (latest) =>
      `${cardData.percent_from_last >= 0 ? "+" : ""}${latest.toLocaleString(
        "id-ID",
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      )}% dari 30 hari sebelum`,
  );

  useEffect(() => {
    const controls = animate(count, cardData.value, {
      duration: 1,
      ease: "easeOut",
    });

    return controls.stop;
  }, [cardData.value]);

  useEffect(() => {
    const controls = animate(countMean, cardData.percent_from_last, {
      duration: 1,
      ease: "easeOut",
    });

    return controls.stop;
  }, [cardData.percent_from_last]);

  return (
    <Flex className="border border-border rounded-[14px] p-4 gap-2">
      <Flex className="flex-row! items-center gap-1 overflow-visible">
        <p className="text-body2 text-text">{cardData.label}</p>

        <ButtonFlex
          tooltipId={`kpi-tooltip-${cardData.label}`}
          className="text-text"
        >
          <IconInfoCircle size={16} stroke={1.5} />
        </ButtonFlex>

        <Tooltip
          id={`kpi-tooltip-${cardData.label}`}
          place="bottom"
          className="bg-relative! rounded-lg! max-w-56.25"
        >
          <p className="text-body2">{cardData.tooltip}</p>
        </Tooltip>
      </Flex>

      <motion.h3 className="font-bold text-title">{formatted}</motion.h3>

      <Flex className="flex-row! items-center gap-1 px-2 py-[2.5px] border border-border rounded-lg text-title self-start">
        {cardData.percent_from_last < 0 ? (
          <IconTrendingDown size={16} stroke={1} />
        ) : (
          <IconTrendingUp size={16} stroke={1} />
        )}

        <motion.p className="text-caption font-semibold">
          {formattedMean}
        </motion.p>
      </Flex>
    </Flex>
  );
};

export default KPICard;
