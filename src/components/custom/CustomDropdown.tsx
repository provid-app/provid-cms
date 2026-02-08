import type { ControllerRenderProps, FieldError } from "react-hook-form";
import type { InputType } from "types/form.type";
import Flex from "./Flex";
import {
  IconAlertTriangle,
  IconCheck,
  IconChevronDown,
} from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ButtonFlex } from "@components/layout";

type Props = {
  inputData: InputType;
  field: ControllerRenderProps<any, string>;
  error?: FieldError;
};

const CustomDropdown = ({ inputData, field, error }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const wrapperRef = useRef<HTMLButtonElement>(null);
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
    <Flex className="relative gap-2">
      <p className="text-caption font-semibold text-title">{inputData.label}</p>

      <button
        ref={wrapperRef}
        type="button"
        className={`flex items-center justify-between p-3 border ${error ? "border-danger-primary bg-danger-main" : "border-border bg-white"} rounded-lg cursor-pointer`}
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        <p className={`text-body2 ${field.value ? "text-title" : "text-text"}`}>
          {field.value?.label ?? inputData.placeholder}
        </p>

        <IconChevronDown size={20} color="#071220" stroke={1.5} />
      </button>

      {error && (
        <Flex className="flex-row! items-center gap-1 text-danger-primary">
          <IconAlertTriangle size={20} stroke={1.5} />

          <p className="text-caption">{error.message}</p>
        </Flex>
      )}

      <AnimatePresence>
        {showDropdown && (
          <motion.div
            ref={dropdownRef}
            className="flex flex-col min-w-39 absolute bg-white border border-border rounded-lg shadow-md left-0 right-0 top-[calc(100%+5px)] origin-top z-50 overflow-hidden"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2, ease: "circOut" }}
          >
            {inputData.dropdown!.map((item, index) => (
              <ButtonFlex
                key={index.toString()}
                className="justify-between! p-2 hover:bg-border transition-colors duration-300 gap-6"
                onClick={(e) => {
                  e?.stopPropagation();
                  field.onChange(item);
                  setShowDropdown(false);
                }}
              >
                <p className="text-body2 text-title truncate">{item.label}</p>

                <IconCheck
                  size={16}
                  color={
                    field.value && field.value.label === item.label
                      ? "#071220"
                      : "white"
                  }
                />
              </ButtonFlex>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Flex>
  );
};

export default CustomDropdown;
