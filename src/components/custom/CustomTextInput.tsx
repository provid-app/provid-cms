import type { ControllerRenderProps } from "react-hook-form";
import type { InputType } from "types/form.type";
import Flex from "./Flex";
import { useState } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

type Props = {
  inputData: InputType;
  field: ControllerRenderProps<any, string>;
};

const CustomTextInput = ({ inputData, field }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex className="gap-2">
      <Flex className="p-3 border border-neutral-200 rounded-lg flex-row! items-center bg-second">
        <input
          {...field}
          type={
            inputData.type === "password"
              ? showPassword
                ? "text"
                : "password"
              : "text"
          }
          placeholder={inputData.placeholder}
          className="flex-1"
        />

        {inputData.type === "password" && (
          <button
            type="button"
            className="text-title cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {!showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
          </button>
        )}
      </Flex>
    </Flex>
  );
};

export default CustomTextInput;
