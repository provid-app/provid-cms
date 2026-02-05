import { generateSegment } from "@utils/data/segment.dummy";
import type { DropdownType } from "types/form.type";

const useSegmentController = () => {
  const useGetSegmentDropdown = () => {
    const segment = generateSegment();

    let finalData: DropdownType[] = [];

    finalData = segment.map((item) => ({
      label: item.segment_name,
      value: item.id.toString(),
    }));

    return {
      finalData,
    };
  };

  return {
    useGetSegmentDropdown,
  };
};

export default useSegmentController;
