import { Ripples } from "ldrs/react";
import "ldrs/react/Ripples.css";
import { Flex } from "@components/custom";

const TableSkeleton = () => {
  return (
    <Flex className="flex-1 items-center justify-center">
      <Ripples size="70" speed="2" color="#51a933" />
    </Flex>
  );
};

export default TableSkeleton;
