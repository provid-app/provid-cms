import { CustomButton, Flex, SearchInput } from "@components/custom";
import { IconPlus } from "@tabler/icons-react";

type Props = {
  buttonLabel: string;
  onClick?: () => void;
};

const PageHeader = ({ buttonLabel, onClick }: Props) => {
  return (
    <Flex className="flex-row! items-center justify-between">
      <Flex className="flex-row! items-center">
        <SearchInput />
      </Flex>

      <CustomButton
        label={buttonLabel}
        icon={IconPlus}
        size="md"
        onClick={onClick}
      />
    </Flex>
  );
};

export default PageHeader;
