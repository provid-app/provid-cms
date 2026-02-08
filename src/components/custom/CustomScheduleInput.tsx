import type { ControllerRenderProps, FieldError } from "react-hook-form";
import Flex from "./Flex";
import { convertDateFormat } from "@utils/helper/converter";
import { IconAlertTriangle, IconCalendarWeek } from "@tabler/icons-react";
import Calendar from "./Calendar";

type Props = {
  field: ControllerRenderProps<any, string>;
  error?: FieldError;
};

const CustomScheduleInput = ({ field, error }: Props) => {
  return (
    <Flex className="gap-5 flex-1">
      <Flex className="gap-2">
        <Flex
          className={`flex-row! items-center justify-between p-3 border ${error ? "border-danger-primary bg-danger-main" : "border-border bg-white"} rounded-md text-title`}
        >
          <p className="text-body2">
            {field.value
              ? convertDateFormat(field.value, "dd LLLL yyyy")
              : "Pilih Tanggal"}
          </p>

          <IconCalendarWeek size={16} />
        </Flex>

        {error && (
          <Flex className="flex-row! items-center gap-1 text-danger-primary">
            <IconAlertTriangle size={20} stroke={1.5} />

            <p className="text-caption">{error.message}</p>
          </Flex>
        )}
      </Flex>

      <Flex className="border border-border rounded-md p-3">
        <Calendar
          value={field.value}
          onSelect={(date) => field.onChange(date)}
        />
      </Flex>
    </Flex>
  );
};

export default CustomScheduleInput;
