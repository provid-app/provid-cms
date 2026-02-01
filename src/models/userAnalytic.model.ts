import type { KPIDTO } from "./summary.model";

export interface UserKPIDTO {
  total_users: KPIDTO;
  active_users: KPIDTO;
  engagement_rate: KPIDTO;
}

export interface UserCompletedMissionDTO {
  mission_count: string;
  completed: number;
}

export interface UserAgeAnalyticDTO {
  age_range: string;
  total_registered: number;
}

export interface UserGenderAnalyticDTO {
  male: number;
  female: number;
}
