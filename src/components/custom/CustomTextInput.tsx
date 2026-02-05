import type { ControllerRenderProps } from "react-hook-form";
import type { InputType } from "types/form.type";
import Flex from "./Flex";
import { useState, type ChangeEvent } from "react";
import { IconEye, IconEyeOff } from "@tabler/icons-react";

type Props = {
  inputData: InputType;
  field: ControllerRenderProps<any, string>;
};

const CustomTextInput = ({ inputData, field }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (inputData.type === "number") {
      const clean = value.replace(/\D/g, "");
      field.onChange(clean);
    } else {
      field.onChange(value);
    }
  };

  return (
    <Flex className="gap-2">
      {inputData.label && (
        <p className="text-caption font-semibold text-title">
          {inputData.label}
        </p>
      )}

      <Flex className="p-3 border border-neutral-200 rounded-lg flex-row! items-center bg-white">
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
          onChange={onHandleChange}
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
