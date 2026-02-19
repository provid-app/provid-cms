import type {
  CategoryModalStateType,
  ConfirmationModalStateType,
  EditCoinValueModalStateType,
  EditMissionModalStateType,
  EditScheduleModalStateType,
  EditWithdrawModalStateType,
  LoadingStateType,
  MissionDetailModalStateType,
  MissionModalStateType,
  SegmentModalStateType,
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

export const useEditScheduleModal = create<EditScheduleModalStateType>(
  (set) => ({
    show: false,
    lastSchedule: "",
    onShow: (lastSchedule) => set({ show: true, lastSchedule }),
    onHide: () => set({ show: false, lastSchedule: "" }),
  }),
);

export const useConfirmationModal = create<ConfirmationModalStateType>(
  (set) => ({
    show: false,
    type: "default",
    title: "",
    description: "",
    buttonLabel: "",
    onSubmit: undefined,
    onShow: (type, title, description, buttonLabel, onSubmit) =>
      set({ show: true, type, title, description, buttonLabel, onSubmit }),
    onHide: () =>
      set({
        show: false,
        type: "default",
        title: "",
        description: "",
        buttonLabel: "",
      }),
  }),
);

export const useAddScheduleModal = create<LoadingStateType>((set) => ({
  show: false,
  onShow: () => set({ show: true }),
  onHide: () => set({ show: false }),
}));

export const useSegmentModal = create<SegmentModalStateType>((set) => ({
  show: false,
  type: "add",
  form: null,
  onShow: (form, type) => set({ show: true, form, type }),
  onHide: () => set({ show: false, type: "add", form: null }),
}));

export const useEditRewardModal = create<EditCoinValueModalStateType>(
  (set) => ({
    show: false,
    form: null,
    onShow: (form) => set({ show: true, form }),
    onHide: () => set({ show: false, form: null }),
  }),
);

export const useEditWithdrawModal = create<EditWithdrawModalStateType>(
  (set) => ({
    show: false,
    form: null,
    onShow: (form) => set({ show: true, form }),
    onHide: () => set({ show: false, form: null }),
  }),
);
