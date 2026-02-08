import { CustomDropdown, CustomTextInput, Flex } from "@components/custom";
import { Controller, type Control } from "react-hook-form";
import type { InputType } from "types/form.type";

type Props = {
  control: Control<any, any>;
  formData: InputType;
};

const HorizontalForm = ({ control, formData }: Props) => {
  return (
    <Flex className="flex-row! items-center gap-4">
      {formData.inputs!.map((input, index) => (
        <Flex key={index.toString()} className="flex-1">
          <Controller
            key={index.toString()}
            control={control}
            name={input.name}
            render={({ field, fieldState: { error } }) => {
              if (input.type === "dropdown")
                return (
                  <CustomDropdown
                    inputData={input}
                    field={field}
                    error={error}
                  />
                );

              return (
                <CustomTextInput
                  inputData={input}
                  field={field}
                  error={error}
                />
              );
            }}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default HorizontalForm;
