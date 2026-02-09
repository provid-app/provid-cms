import type {
  CategoryModalStateType,
  MissionDetailModalStateType,
  MissionModalStateType,
} from "types/state.type";
import { create } from "zustand";

export const useCategoryModal = create<CategoryModalStateType>((set) => ({
  show: false,
  type: "add",
  form: null,
  onShow: (form, type) => set({ show: true, form, type }),
  onHide: () => set({ show: false, form: null, type: "add" }),
}));

export const useMissionModal = create<MissionModalStateType>((set) => ({
  show: false,
  type: "add",
  form: null,
  onShow: (form, type) => set({ show: true, form, type }),
  onHide: () => set({ show: false, form: null, type: "add" }),
}));

export const useMissionDetailModal = create<MissionDetailModalStateType>(
  (set) => ({
    show: false,
    data: null,
    onShow: (data) => set({ show: true, data }),
    onHide: () => set({ show: false, data: null }),
  }),
);
