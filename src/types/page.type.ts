import type { FinancialEstimationDataDTO } from "@models/summary.model";
import type { IconProps } from "@tabler/icons-react";
import type { ForwardRefExoticComponent } from "react";
import type { To } from "react-router";

export type SidebarType = {
  label: string;
  icon: ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
  dest: To;
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
};

export type EstimationChartType = {
  kpi: KPIType[];
  data: FinancialEstimationDataDTO[];
};
