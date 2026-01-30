import type { KPIDTO } from "./summary.model";

export interface MissionKPIDTO {
  total_active_mission: KPIDTO;
  total_completed_mission: KPIDTO;
  mission_complete_rate: KPIDTO;
  avg_mission_success: KPIDTO;
}

export interface MissionTrendDTO {
  day: string;
  completed: number;
}

export interface MissionCompletedDTO {
  mission_name: string;
  completed: number;
}
