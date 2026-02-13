import { CustomButton, Flex, SearchInput } from "@components/custom";
import { IconPlus, IconTrash } from "@tabler/icons-react";

type Props = {
  buttonLabel: string;
  withDelete?: boolean;
  deleteCount?: number;
  onClick?: () => void;
};

const PageHeader = ({
  buttonLabel,
  withDelete,
  deleteCount,
  onClick,
}: Props) => {
  return (
    <Flex className="flex-row! items-center justify-between">
      <Flex className="flex-row! items-center">
        <SearchInput />
      </Flex>

      <Flex className="flex-row! items-center gap-2">
        {withDelete && (
          <>
            {deleteCount && (
              <p className="text-body2 text-title">{deleteCount} Terpilih</p>
            )}

            <CustomButton
              label="Hapus"
              icon={IconTrash}
              size="md"
              mode="danger-outline"
              disabled={deleteCount === undefined}
            />
          </>
        )}

        <CustomButton
          label={buttonLabel}
          icon={IconPlus}
          size="md"
          onClick={onClick}
        />
      </Flex>
    </Flex>
  );
};

export default PageHeader;
