import type { AddCategoryInput } from "@utils/validator/category.validator";
import type { DropdownType, FormType, MissionFormType } from "./form.type";

export type AuthStateType = {
  token: string | null;
  addToken: (token: string) => void;
  resetToken: () => void;
};

export type ChartFilterStateType = {
  data: DropdownType;
  list: readonly DropdownType[];
  onChange: (data: DropdownType) => void;
};

export type ToastStateType = {
  show: boolean;
  type: "success" | "failed";
  message: string;
  onShow: (type: "success" | "failed", message: string) => void;
  onHide: () => void;
};

export type CategoryModalStateType = {
  show: boolean;
  type: "add" | "edit";
  form: FormType<AddCategoryInput> | null;
  onShow: (form: FormType<AddCategoryInput>, type: "add" | "edit") => void;
  onHide: () => void;
};

export type MissionModalStateType = {
  show: boolean;
  type: "add" | "edit";
  form: MissionFormType | null;
  onShow: (form: MissionFormType, type: "add" | "edit") => void;
  onHide: () => void;
};
