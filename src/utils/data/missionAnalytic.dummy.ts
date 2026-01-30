import { faker } from "@faker-js/faker";
import type {
  MissionCompletedDTO,
  MissionKPIDTO,
  MissionTrendDTO,
} from "@models/missionAnalytic.model";
import { DAY } from "@utils/constant/page.data";

export const generateMissionKPI = (): MissionKPIDTO => ({
  total_active_mission: {
    value: faker.number.int({ min: 1000, max: 10000 }),
    percent_from_last: faker.number.float({
      min: -100,
      max: 100,
      fractionDigits: 2,
    }),
  },
  total_completed_mission: {
    value: faker.number.int({ min: 1000, max: 10000 }),
    percent_from_last: faker.number.float({
      min: -100,
      max: 100,
      fractionDigits: 2,
    }),
  },
  mission_complete_rate: {
    value: faker.number.int({ min: 1, max: 100 }),
    percent_from_last: faker.number.float({
      min: -100,
      max: 100,
      fractionDigits: 2,
    }),
  },
  avg_mission_success: {
    value: faker.number.int({ min: 1, max: 50 }),
    percent_from_last: faker.number.float({
      min: -100,
      max: 100,
      fractionDigits: 2,
    }),
  },
});

export const generateMissionTrend = (): MissionTrendDTO[] =>
  DAY.map((item) => ({
    day: item,
    completed: faker.number.int({ min: 1, max: 100 }),
  }));

export const generateMissionCompleted = (): MissionCompletedDTO[] =>
  Array.from({ length: 5 }, () => ({
    mission_name: faker.commerce.productName(),
    completed: faker.number.int({ min: 1, max: 100 }),
  }));
