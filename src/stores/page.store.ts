import type { ChartFilterStateType } from "types/state.type";
import { create } from "zustand";

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
