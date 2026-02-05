import {
  CustomDropdown,
  CustomRadioBoxInput,
  CustomTextArea,
  CustomTextInput,
  Flex,
} from "@components/custom";
import { Controller, type Control } from "react-hook-form";
import type { InputType } from "types/form.type";
import HorizontalForm from "./HorizontalForm";

type Props = {
  control: Control<any, any>;
  listData: InputType[];
};

const FormList = ({ control, listData }: Props) => {
  return (
    <Flex className="gap-3">
      {listData.map((item, index) => {
        if (item.type === "horizontal")
          return (
            <HorizontalForm
              key={index.toString()}
              control={control}
              formData={item}
            />
          );

        return (
          <Controller
            key={index.toString()}
            control={control}
            name={item.name}
            render={({ field }) => {
              if (item.type === "dropdown")
                return <CustomDropdown inputData={item} field={field} />;

              if (item.type === "textarea")
                return <CustomTextArea inputData={item} field={field} />;

              if (item.type === "radiobox")
                return <CustomRadioBoxInput inputData={item} field={field} />;

              return <CustomTextInput inputData={item} field={field} />;
            }}
          />
        );
      })}
    </Flex>
  );
};

export default FormList;
