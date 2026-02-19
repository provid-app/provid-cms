import { ButtonFlex } from "@components/layout";
import Flex from "./Flex";
import { IconInfoCircle, IconPencilMinus } from "@tabler/icons-react";
import { convertNumberToCurrency } from "@utils/helper/converter";
import CustomButton from "./CustomButton";

type Props = {
  title: string;
  value: number;
  onEdit: () => void;
  withFraction?: boolean;
};

const RewardCoinBox = ({ title, value, onEdit, withFraction }: Props) => {
  return (
    <Flex className="flex-row! items-start justify-between p-4 border border-border rounded-[14px] w-full">
      <Flex className="gap-2">
        <Flex className="flex-row! items-center gap-1">
          <p className="text-body2 text-text">{title}</p>

          <ButtonFlex
            tooltipId={`reward-tooltip-${title}`}
            className="text-text"
          >
            <IconInfoCircle size={16} stroke={1.5} />
          </ButtonFlex>
        </Flex>

        <p className="text-subtitle font-bold text-title">
          {convertNumberToCurrency(value, withFraction ? 2 : 0)}
        </p>
      </Flex>

      <CustomButton
        label="Ubah"
        icon={IconPencilMinus}
        mode="outline"
        size="md"
        onClick={onEdit}
      />
    </Flex>
  );
};

export default RewardCoinBox;
