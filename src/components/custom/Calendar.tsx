import { useState } from "react";
import Flex from "./Flex";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { ButtonFlex } from "@components/layout";
import { convertDateFormat } from "@utils/helper/converter";
import { DAY_CALENDAR } from "@utils/constant/page.data";
import { generateCalendarDays } from "@utils/helper/generator";
import {
  addMonths,
  isBefore,
  isSameDay,
  isSameMonth,
  subMonths,
} from "date-fns";

type Props = {
  value?: Date;
  onSelect: (day: Date) => void;
};

const Calendar = ({ value, onSelect }: Props) => {
  const [baseMonth, setBaseMonth] = useState(value || new Date());

  const currDays = generateCalendarDays(baseMonth);

  return (
    <Flex className="gap-4">
      <Flex className="flex-row! items-center justify-between px-1">
        <ButtonFlex
          type="button"
          className={`size-7 rounded-md items-center justify-center border border-border ${isBefore(baseMonth, new Date()) ? "bg-border text-inactive" : "bg-white text-title"} hover:bg-border transition-colors duration-300`}
          disabled={isBefore(baseMonth, new Date())}
          onClick={() => setBaseMonth((prev) => subMonths(prev, 1))}
        >
          <IconChevronLeft size={16} />
        </ButtonFlex>

        <p className="text-body2 font-semibold text-title">
          {convertDateFormat(baseMonth, "LLLL yyyy")}
        </p>

        <ButtonFlex
          type="button"
          className="size-7 rounded-md items-center justify-center border border-border text-title hover:bg-border transition-colors duration-300"
          onClick={() => setBaseMonth((prev) => addMonths(prev, 1))}
        >
          <IconChevronRight size={16} />
        </ButtonFlex>
      </Flex>

      <Flex className="flex-1 gap-2">
        <div className="grid grid-cols-7">
          {DAY_CALENDAR.map((item, index) => (
            <Flex key={index.toString()} className="items-center">
              <p className="text-caption text-text">{item}</p>
            </Flex>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-y-2">
          {currDays.map((item, index) => {
            const isCurrentMonth = isSameMonth(item, baseMonth);
            const isBelowToday = isBefore(item, new Date());
            const isSelected = value && isSameDay(item, value);

            return (
              <Flex key={index.toString()} className="items-center">
                {isCurrentMonth && (
                  <ButtonFlex
                    className={`size-8 items-center justify-center ${isSelected ? "bg-primary" : "bg-white"} rounded-md ${isSelected ? "text-white" : isBelowToday ? "text-text" : "text-title hover:bg-primary hover:text-white transition-colors duration-300"}`}
                    disabled={isBelowToday}
                    onClick={() => onSelect(item)}
                  >
                    <p className="text-body2">{convertDateFormat(item, "d")}</p>
                  </ButtonFlex>
                )}
              </Flex>
            );
          })}
        </div>
      </Flex>
    </Flex>
  );
};

export default Calendar;
