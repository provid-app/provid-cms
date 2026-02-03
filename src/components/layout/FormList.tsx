import { CustomDropdown, CustomTextInput, Flex } from "@components/custom";
import { Controller, type Control } from "react-hook-form";
import type { InputType } from "types/form.type";

type Props = {
  control: Control<any, any>;
  listData: InputType[];
};

const FormList = ({ control, listData }: Props) => {
  return (
    <Flex className="gap-3">
      {listData.map((item, index) => (
        <Controller
          key={index.toString()}
          control={control}
          name={item.name}
          render={({ field }) => {
            if (item.type === "dropdown")
              return <CustomDropdown inputData={item} field={field} />;

            return <CustomTextInput inputData={item} field={field} />;
          }}
        />
      ))}
    </Flex>
  );
};

export default FormList;
