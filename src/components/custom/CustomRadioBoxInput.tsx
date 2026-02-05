import type { ControllerRenderProps } from "react-hook-form";
import type { InputType } from "types/form.type";
import Flex from "./Flex";
import { motion } from "motion/react";
import { IconCheck } from "@tabler/icons-react";

type Props = {
  inputData: InputType;
  field: ControllerRenderProps<any, string>;
};

const CustomRadioBoxInput = ({ inputData, field }: Props) => {
  return (
    <Flex className="gap-2">
      {inputData.label && (
        <p className="text-caption font-semibold text-title">
          {inputData.label}
        </p>
      )}

      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: inputData.radiobox!.map(() => "auto").join(" "),
        }}
      >
        {inputData.radiobox!.map((item, index) => (
          <motion.div
            key={index.toString()}
            className="flex flex-col border rounded-lg p-3 gap-2 bg-white"
            initial={{ borderColor: "#e1e5e8", backgroundColor: "#ffffff" }}
            animate={{
              borderColor:
                field.value && field.value.value === item.value
                  ? "#b9ddad"
                  : "#e1e5e8",
              backgroundColor:
                field.value && field.value.value === item.value
                  ? "#dceed6"
                  : "#ffffff",
            }}
            transition={{ duration: 0.2 }}
          >
            <Flex className="flex-row! items-center justify-between">
              <p className="text-body2 font-semibold text-title">
                {item.label}
              </p>

              <motion.button
                type="button"
                className="flex items-center justify-center size-5 rounded-full cursor-pointer border border-border"
                onClick={() => field.onChange(item)}
                initial={{ backgroundColor: "#ffffff" }}
                animate={{
                  backgroundColor:
                    field.value && field.value.value === item.value
                      ? "#51a933"
                      : "#ffffff",
                }}
              >
                <IconCheck size={12} color="white" />
              </motion.button>
            </Flex>

            <p className="text-body2 text-text">{item.subTitle}</p>
          </motion.div>
        ))}
      </div>
    </Flex>
  );
};

export default CustomRadioBoxInput;
