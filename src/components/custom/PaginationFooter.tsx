import { ButtonFlex } from "@components/layout";
import Flex from "./Flex";
import {
  IconChevronLeft,
  IconChevronRight,
  IconChevronsLeft,
  IconChevronsRight,
} from "@tabler/icons-react";

const PaginationFooter = () => {
  return (
    <Flex className="flex-row! items-center justify-between p-2">
      <p className="text-body2 text-text">1 dari 1 halaman</p>

      <Flex className="flex-row! items-center gap-2">
        <ButtonFlex className="size-8 rounded-md border border-border items-center justify-center text-inactive cursor-not-allowed!">
          <IconChevronsLeft size={16} />
        </ButtonFlex>

        <ButtonFlex className="size-8 rounded-md border border-border items-center justify-center text-inactive cursor-not-allowed!">
          <IconChevronLeft size={16} />
        </ButtonFlex>

        <ButtonFlex className="size-8 rounded-md border border-border items-center justify-center text-inactive cursor-not-allowed!">
          <IconChevronRight size={16} />
        </ButtonFlex>

        <ButtonFlex className="size-8 rounded-md border border-border items-center justify-center text-inactive cursor-not-allowed!">
          <IconChevronsRight size={16} />
        </ButtonFlex>
      </Flex>
    </Flex>
  );
};

export default PaginationFooter;
