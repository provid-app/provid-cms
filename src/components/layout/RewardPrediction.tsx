import {
  CustomDropdownEstimation,
  CustomTextInput,
  Flex,
} from "@components/custom";
import { convertNumberToCurrency } from "@utils/helper/converter";
import { Controller, useForm, useWatch } from "react-hook-form";

type Props = {
  coinValue: number;
};

const RewardPrediction = ({ coinValue }: Props) => {
  const { control } = useForm({
    defaultValues: {
      mission: undefined,
      estimation: "0",
    },
  });

  const values = useWatch({ control });

  return (
    <Flex className="w-119.25 border border-border rounded-xl">
      <Flex className="px-4 py-2.5 border-b border-b-border">
        <p className="text-body2 text-text">Simulasi Dampak Anggaran</p>
      </Flex>

      <Flex className="p-4 gap-4">
        <Flex className="p-4 border border-border bg-second rounded-lg gap-4">
          <p className="text-metadata font-semibold text-text">LANGKAH 1</p>

          <Controller
            control={control}
            name="mission"
            render={({ field }) => <CustomDropdownEstimation field={field} />}
          />
        </Flex>

        <Flex className="p-4 border border-border bg-second rounded-lg gap-4">
          <p className="text-metadata font-semibold text-text">LANGKAH 2</p>

          <Controller
            control={control}
            name="estimation"
            render={({ field }) => (
              <CustomTextInput
                field={field}
                inputData={{
                  type: "number",
                  name: "estimation",
                  label: "Estimasi Penyelesaian",
                  placeholder: "0",
                  extraPlaceholder: "Pengguna",
                  required: true,
                }}
              />
            )}
          />
        </Flex>
      </Flex>

      <Flex className="border-t border-t-border p-4 gap-2">
        <p className="text-body2 text-title">Estimasi Biaya Reward</p>

        <p className="text-subtitle font-bold text-title">
          {convertNumberToCurrency(
            values.mission && values.estimation && Number(values.estimation) > 0
              ? coinValue *
                  (values.mission as any).value *
                  Number(values.estimation)
              : 0,
          )}
        </p>
      </Flex>
    </Flex>
  );
};

export default RewardPrediction;
