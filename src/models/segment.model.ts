import { getSegments } from "@services/segment.service";
import { useQuery } from "@tanstack/react-query";

export interface SegmentDTO {
  id: number;
  segment_name: string;
  description: string;
  layout: string;
}

const useSegmentModel = () => {
  const useGetSegments = (
    page: number,
    search: string,
    sortBy: string,
    sortOrder: "asc" | "desc" | "",
  ) =>
    useQuery({
      queryKey: ["getSegments", page, search, sortBy, sortOrder],
      queryFn: () => getSegments(page, search, sortBy, sortOrder),
    });

  return {
    useGetSegments,
  };
};

export default useSegmentModel;
