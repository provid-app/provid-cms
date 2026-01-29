import type { DropdownType } from "./form.type";

export type ChartFilterStateType = {
  data: DropdownType;
  list: readonly DropdownType[];
  onChange: (data: DropdownType) => void;
};
