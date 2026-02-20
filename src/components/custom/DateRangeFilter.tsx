import { ButtonFlex } from "@components/layout";
import Flex from "./Flex";
import { IconCalendarWeek } from "@tabler/icons-react";
import { format, getYear } from "date-fns";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
// import Calendar from "./Calendar";
import CustomButton from "./CustomButton";

type Props = {
  dateRange: { start: Date; end: Date };
};

const DateRangeFilter = ({ dateRange }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !wrapperRef.current?.contains(event.target as Node) &&
        !dropdownRef.current?.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return (
    <Flex ref={wrapperRef} className="relative">
      <ButtonFlex
        className="px-4 py-2 border border-border rounded-md gap-2 text-title hover:bg-brand-main hover:text-primary transition-colors duration-300"
        onClick={() => setShowDropdown((prev) => !prev)}
      >
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
        {showDropdown && (
          <motion.div
            ref={dropdownRef}
            className="flex flex-col absolute w-122 bg-white border border-border rounded-lg shadow-md left-0 top-[calc(100%+5px)] origin-top z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2, ease: "circOut" }}
          >
            {/* <Flex className="p-3 gap-4">
              <Calendar />

              <Calendar />
            </Flex> */}

            <Flex className="items-center border-t border-t-border py-2.5">
              <CustomButton label="Hapus Filter" mode="ghost" size="md" />
            </Flex>
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default DateRangeFilter;
