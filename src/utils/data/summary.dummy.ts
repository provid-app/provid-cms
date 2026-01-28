import type {
  FinancialEstimationDTO,
  MissionAnalyticDTO,
  MissionLeaderboardDTO,
  SummaryKPIDTO,
} from "@models/summary.model";
import { faker } from "@faker-js/faker";

export const MONTH = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

export const generateSummaryKPI = (): SummaryKPIDTO => ({
  total_users: {
    value: faker.number.int({ min: 1000, max: 10000 }),
    percent_from_last: faker.number.float({
      min: -100,
      max: 100,
      fractionDigits: 2,
    }),
  },
  active_users: {
    value: faker.number.int({ min: 1000, max: 10000 }),
    percent_from_last: faker.number.float({
      min: -100,
      max: 100,
      fractionDigits: 2,
    }),
  },
  total_completed_missions: {
    value: faker.number.int({ min: 1000, max: 10000 }),
    percent_from_last: faker.number.float({
      min: -100,
      max: 100,
      fractionDigits: 2,
    }),
  },
  completed_mission_rate: {
    value: faker.number.int({ min: 1, max: 100 }),
    percent_from_last: faker.number.float({
      min: -100,
      max: 100,
      fractionDigits: 2,
    }),
  },
});

export const generateMissionAnalytic = (): MissionAnalyticDTO => ({
  ads: faker.number.int({ min: 1000, max: 10000 }),
  app: faker.number.int({ min: 1000, max: 10000 }),
});

export const generateMissionLeaderboard = (): MissionLeaderboardDTO[] =>
  Array.from({ length: 5 }, () => ({
    mission_name: faker.commerce.productName(),
    contribute: faker.number.int({ min: 1000, max: 10000 }),
  }));

export const generateFinancialEstimation = (): FinancialEstimationDTO => ({
  income_estimation: faker.number.int({ min: 1000000, max: 100000000 }),
  reward_estimation: faker.number.int({ min: 1000000, max: 50000000 }),
  margin_estimation: faker.number.int({ min: 1000000, max: 50000000 }),
  estimations: MONTH.map((item) => ({
    month: item,
    income: faker.number.int({ min: 1000000, max: 100000000 }),
    reward: faker.number.int({ min: 1000000, max: 50000000 }),
  })),
});
