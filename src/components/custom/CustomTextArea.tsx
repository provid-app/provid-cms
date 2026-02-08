import type { ControllerRenderProps, FieldError } from "react-hook-form";
import type { InputType } from "types/form.type";
import Flex from "./Flex";
import { IconAlertTriangle } from "@tabler/icons-react";

type Props = {
  inputData: InputType;
  field: ControllerRenderProps<any, string>;
  error?: FieldError;
};

const CustomTextArea = ({ inputData, field, error }: Props) => {
  return (
    <Flex className="gap-2">
      {inputData.label && (
        <p className="text-caption font-semibold text-title">
          {inputData.label}
        </p>
      )}

      <Flex
        className={`p-3 border ${error ? "border-danger-primary bg-danger-main" : "border-border bg-white"} rounded-lg`}
      >
        <textarea
          {...field}
          placeholder={inputData.placeholder}
          className=""
        ></textarea>
      </Flex>

      {error && (
        <Flex className="flex-row! items-center gap-1 text-danger-primary">
          <IconAlertTriangle size={20} stroke={1.5} />

          <p className="text-caption">{error.message}</p>
        </Flex>
      )}
    </Flex>
  );
};

export default CustomTextArea;
