import type { FinancialEstimationDataDTO } from "@models/summary.model";
import type { IconProps } from "@tabler/icons-react";
import type { ForwardRefExoticComponent } from "react";
import type { To } from "react-router";

export type SidebarSubType = {
  label: string;
  dest: To;
};

export type SidebarType = SidebarSubType & {
  icon: ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  sub?: SidebarSubType[];
};

export type KPIType = {
  label: string;
  value: number;
};

export type KPICardType = KPIType & {
  type: "number" | "percent";
  tooltip: string;
  percent_from_last: number;
};

export type ChartBoxType = {
  name: string;
  value: number;
  isMax?: boolean;
};

export type EstimationChartType = {
  kpi: KPIType[];
  data: FinancialEstimationDataDTO[];
};

export type RowType = {
  label: string;
  type:
    | "text"
    | "image"
    | "switch"
    | "draft"
    | "arrange"
    | "publish"
    | "coin"
    | "success"
    | "progress"
    | "failed"
    | "withdraw";
  subLabel?: string;
  sortable?: string;
  onSwitch?: () => void;
};

export type TableHeaderType = {
  withAction: boolean;
  withCheckbox: boolean;
  header: RowType[];
};

export type RowActionType = {
  type: "custom" | "delete";
  label: string;
  onClick: () => void;
};

export type TableBodyType = {
  row: RowType[];
  action?: RowActionType[];
  isSelected?: boolean;
  onSelect?: () => void;
};

export type FilterDataType = {
  label: string;
  count: number;
  isSelected: boolean;
  onSelect: () => void;
};

export type FilterType = {
  title: string;
  data: FilterDataType[];
};

export type SelectedType = {
  id: number;
  name: string;
};
