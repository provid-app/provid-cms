import type { AxiosError, AxiosResponse } from "axios";
import type { ResType } from "types/res.type";

export const successResponse = <T = any>(
  response: AxiosResponse<any, any>,
): ResType<T> => response.data as ResType<T>;

export const errorResponse = (error: unknown): ResType => {
  const axiosError = error as AxiosError;

  console.log(axiosError.response);

  return axiosError.response!.data as ResType;
};
