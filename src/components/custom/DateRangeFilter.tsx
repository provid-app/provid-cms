import { ButtonFlex } from "@components/layout";
import Flex from "./Flex";
import { IconCalendarWeek } from "@tabler/icons-react";
import { format, getYear } from "date-fns";
import { AnimatePresence, motion } from "motion/react";

type Props = {
  dateRange: { start: Date; end: Date };
};

const DateRangeFilter = ({ dateRange }: Props) => {
  return (
    <Flex className="relative">
      <ButtonFlex className="px-4 py-2 border border-border rounded-md gap-2 text-title hover:bg-brand-main hover:text-primary transition-colors duration-300">
        <IconCalendarWeek size={20} />

        <p className="text-body2 font-semibold">
          {format(
            dateRange.start,
            getYear(dateRange.start) === getYear(dateRange.end)
              ? "LLL dd"
              : "LLL dd, yyyy",
          )}{" "}
          - {format(dateRange.end, "LLL dd, yyyy")}
        </p>
      </ButtonFlex>

      <AnimatePresence>
        <motion.div className="flex flex-col absolute w-122 bg-white border border-border rounded-lg shadow-md left-0 top-[calc(100%+5px)] origin-top z-50 overflow-hidden"></motion.div>
      </AnimatePresence>
    </Flex>
  );
};

export default DateRangeFilter;
