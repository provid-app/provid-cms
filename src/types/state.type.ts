import type { DropdownType } from "./form.type";

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
