import type { ControllerRenderProps } from "react-hook-form";
import type { InputType } from "types/form.type";
import Flex from "./Flex";

type Props = {
  inputData: InputType;
  field: ControllerRenderProps<any, string>;
};

const CustomTextArea = ({ inputData, field }: Props) => {
  return (
    <Flex className="gap-2">
      {inputData.label && (
        <p className="text-caption font-semibold text-title">
          {inputData.label}
        </p>
      )}

      <Flex className="p-3 border border-neutral-200 rounded-lg bg-white">
        <textarea
          {...field}
          placeholder={inputData.placeholder}
          className=""
        ></textarea>
      </Flex>
    </Flex>
  );
};

export default CustomTextArea;
