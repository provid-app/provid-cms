import type { CategoryModalStateType } from "types/state.type";
import { create } from "zustand";

export const useCategoryModal = create<CategoryModalStateType>((set) => ({
  show: false,
  type: "add",
  form: null,
  onShow: (form, type) => set({ show: true, form, type }),
  onHide: () => set({ show: false, form: null, type: "add" }),
}));
