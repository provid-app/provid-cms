import { useAuth } from "@stores/page.store";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const withToken = config.withAuth;

  if (withToken) {
    const access = localStorage.getItem("@access");
    const refresh = localStorage.getItem("@refresh");

    config.headers.set("Authorization", `Bearer ${access}`);
    config.headers.set("X-Refresh-Token", refresh);
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status === 401) {
      console.log("Hello World");
      localStorage.removeItem("@refresh");
      localStorage.removeItem("@access");
      useAuth.getState().resetToken();
    }

    return Promise.reject(error);
  },
);
