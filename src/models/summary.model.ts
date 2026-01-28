export interface KPIDTO {
  value: number;
  percent_from_last: number;
}

export interface SummaryKPIDTO {
  total_users: KPIDTO;
  active_users: KPIDTO;
  total_completed_missions: KPIDTO;
  completed_mission_rate: KPIDTO;
}

export interface MissionAnalyticDTO {
  ads: number;
  app: number;
}

export interface MissionLeaderboardDTO {
  mission_name: string;
  contribute: number;
}

export interface FinancialEstimationDataDTO {
  month: string;
  income: number;
  reward: number;
}

export interface FinancialEstimationDTO {
  income_estimation: number;
  reward_estimation: number;
  margin_estimation: number;
  estimations: FinancialEstimationDataDTO[];
}
