import type {
  CategoryModalStateType,
  EditMissionModalStateType,
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
  form: null,
  onShow: (form) => set({ show: true, form }),
  onHide: () => set({ show: false, form: null }),
}));

export const useEditMissionModal = create<EditMissionModalStateType>((set) => ({
  show: false,
  form: null,
  onShow: (form) => set({ show: true, form }),
  onHide: () => set({ show: false, form: null }),
}));

export const useMissionDetailModal = create<MissionDetailModalStateType>(
  (set) => ({
    show: false,
    data: null,
    onShow: (data) => set({ show: true, data }),
    onHide: () => set({ show: false, data: null }),
  }),
);
