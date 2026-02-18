import type {
  AuthStateType,
  ChartFilterStateType,
  LoadingStateType,
  ToastStateType,
} from "types/state.type";
import { create } from "zustand";

export const useAuth = create<AuthStateType>((set) => ({
  token: null,
  addToken: (token) => set({ token }),
  resetToken: () => set({ token: null }),
  checkIsLoggedIn: () => {
    const token = localStorage.getItem("@access");

    if (token) set({ token });
  },
}));

export const useChartFilter = create<ChartFilterStateType>((set) => ({
  data: {
    label: "30 Hari Terakhir",
    value: "30-days",
  },
  list: [
    {
      label: "7 Hari Terakhir",
      value: "7-days",
    },
    {
      label: "30 Hari Terakhir",
      value: "30-days",
    },
    {
      label: "Bulan ini",
      value: "curr-month",
    },
    {
      label: "Sepanjang Masa",
      value: "all-time",
    },
  ],
  onChange: (data) => set({ data }),
}));

export const useCategoryFilter = create<ChartFilterStateType>((set) => ({
  data: {
    label: "Berdasarkan jumlah misi",
    value: "mission",
  },
  list: [
    {
      label: "Berdasarkan jumlah misi",
      value: "mission",
    },
    {
      label: "Berdasarkan total penyelesaian",
      value: "completion",
    },
  ],
  onChange: (data) => set({ data }),
}));

export const useLeaderboardFilter = create<ChartFilterStateType>((set) => ({
  data: {
    label: "Semua Misi",
    value: "all",
  },
  list: [
    {
      label: "Semua Misi",
      value: "all",
    },
    {
      label: "Ads",
      value: "ads",
    },
    {
      label: "App",
      value: "app",
    },
  ],
  onChange: (data) => set({ data }),
}));

export const useUserFilter = create<ChartFilterStateType>((set) => ({
  data: {
    label: "Berdasarkan total pengguna",
    value: "users",
  },
  list: [
    {
      label: "Berdasarkan total pengguna",
      value: "users",
    },
    {
      label: "Berdasarkan penyelesaian misi terbanyak",
      value: "missions",
    },
  ],
  onChange: (data) => set({ data }),
}));

export const useToast = create<ToastStateType>((set) => ({
  show: false,
  type: "failed",
  message: "",
  onShow: (type, message) => set({ show: true, type, message }),
  onHide: () => set({ show: false, type: "failed", message: "" }),
}));

export const useLoadingButton = create<LoadingStateType>((set) => ({
  show: false,
  onShow: () => set({ show: true }),
  onHide: () => set({ show: false }),
}));
