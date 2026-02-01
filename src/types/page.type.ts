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
  type: "text";
};

export type TableHeaderType = {
  withAction: boolean;
  header: RowType[];
};
