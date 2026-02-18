import type { SegmentDTO } from "@models/segment.model";
import { API_ENDPOINT } from "@utils/config/api";
import { axiosInstance } from "@utils/config/axios";
import { errorResponse, successResponse } from "@utils/helper/responseHandler";
import type { MetaResType, ResType } from "types/res.type";

export const getSegments = async (
  page: number,
  search: string,
  sortBy: string,
  sortOrder: "asc" | "desc" | "",
): Promise<ResType<MetaResType<SegmentDTO[]>>> => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINT.getSegments}?search=${search}&sort_by=${sortBy}&sort_order=${sortOrder}&page=${page}&limit=10`,
      { withAuth: true },
    );

    return successResponse<MetaResType<SegmentDTO[]>>(response);
  } catch (error) {
    throw errorResponse(error);
  }
};
