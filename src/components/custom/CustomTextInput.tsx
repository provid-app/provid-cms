import type { ControllerRenderProps, FieldError } from "react-hook-form";
import type { InputType } from "types/form.type";
import Flex from "./Flex";
import { useState, type ChangeEvent } from "react";
import {
  IconAlertTriangle,
  IconEye,
  IconEyeOff,
  IconLock,
} from "@tabler/icons-react";
import { convertNumberFormat } from "@utils/helper/converter";
import { Tooltip } from "react-tooltip";

type Props = {
  inputData: InputType;
  field: ControllerRenderProps<any, string>;
  error?: FieldError;
};

const CustomTextInput = ({ inputData, field, error }: Props) => {
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

      <Flex
        className={`p-3 border ${error ? "border-danger-primary bg-danger-main" : "border-border bg-white"} rounded-lg flex-row! items-center`}
      >
        <input
          {...field}
          value={
            inputData.type === "number"
              ? convertNumberFormat(Number(field.value))
              : field.value
          }
          type={
            inputData.type === "password"
              ? showPassword
                ? "text"
                : "password"
              : "text"
          }
          placeholder={inputData.placeholder}
          className={`flex-1 ${inputData.lock ? "opacity-50" : ""}`}
          disabled={inputData.lock}
          onChange={onHandleChange}
        />

        {inputData.lock ? (
          <>
            <Flex tooltipId={`input-lock-${inputData.name}`}>
              <IconLock
                size={20}
                color="#071220"
                stroke={1.5}
                className="opacity-50"
              />
            </Flex>

            <Tooltip
              id={`input-lock-${inputData.name}`}
              place="bottom"
              className="bg-relative! rounded-lg! z-40"
            >
              <p className="text-body2">{inputData.label} tidak dapat diubah</p>
            </Tooltip>
          </>
        ) : (
          inputData.type === "password" && (
            <button
              type="button"
              className="text-title cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {!showPassword ? <IconEyeOff size={20} /> : <IconEye size={20} />}
            </button>
          )
        )}
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

export default CustomTextInput;
