import { CustomButton, Flex, SearchInput } from "@components/custom";
import { IconPlus } from "@tabler/icons-react";

type Props = {
  buttonLabel: string;
};

const PageHeader = ({ buttonLabel }: Props) => {
  return (
    <Flex className="flex-row! items-center justify-between">
      <Flex className="flex-row! items-center">
        <SearchInput />
      </Flex>

      <CustomButton label={buttonLabel} icon={IconPlus} size="md" />
    </Flex>
  );
};

export default PageHeader;
