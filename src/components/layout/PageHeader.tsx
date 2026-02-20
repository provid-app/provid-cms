import {
  CustomButton,
  DateRangeFilter,
  Flex,
  SearchInput,
} from "@components/custom";
import PageFilter from "@components/custom/PageFilter";
import { IconPlus, IconTrash } from "@tabler/icons-react";
import type { FilterType } from "types/page.type";

type Props = {
  buttonLabel?: string;
  withDelete?: boolean;
  deleteCount?: number;
  filterData?: FilterType[];
  dateRange?: { start: Date; end: Date };
  onClick?: () => void;
  onDelete?: () => void;
};

const PageHeader = ({
  buttonLabel,
  withDelete,
  deleteCount,
  filterData,
  dateRange,
  onClick,
  onDelete,
}: Props) => {
  return (
    <Flex className="flex-row! items-center justify-between">
      <Flex className="flex-row! items-center gap-2">
        <SearchInput />

        {filterData && <PageFilter filterData={filterData} />}

        {dateRange && <DateRangeFilter dateRange={dateRange} />}
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
              onClick={onDelete}
            />
          </>
        )}

        {buttonLabel && (
          <CustomButton
            label={buttonLabel}
            icon={IconPlus}
            size="md"
            onClick={onClick}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default PageHeader;
