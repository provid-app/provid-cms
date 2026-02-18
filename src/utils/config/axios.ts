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
