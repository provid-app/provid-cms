import type { LoginDTO } from "@models/auth.model";
import { API_ENDPOINT } from "@utils/config/api";
import { axiosInstance } from "@utils/config/axios";
import { errorResponse, successResponse } from "@utils/helper/responseHandler";
import type { LoginInput } from "@utils/validator/auth.validator";
import type { ResType } from "types/res.type";

export const login = async (body: LoginInput): Promise<ResType<LoginDTO>> => {
  try {
    const response = await axiosInstance.post(API_ENDPOINT.login, body);

    return successResponse(response);
  } catch (error) {
    throw errorResponse(error);
  }
};

export const logout = async (): Promise<ResType> => {
  try {
    const response = await axiosInstance.post(
      API_ENDPOINT.logout,
      {},
      {
        withAuth: true,
      },
    );

    return successResponse(response);
  } catch (error) {
    throw errorResponse(error);
  }
};
