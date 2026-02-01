import { faker } from "@faker-js/faker";
import type {
  UserAgeAnalyticDTO,
  UserCompletedMissionDTO,
  UserGenderAnalyticDTO,
  UserKPIDTO,
} from "@models/userAnalytic.model";
import { AGE, MISSION_COUNT } from "@utils/constant/page.data";

export const generateUserKPI = (): UserKPIDTO => ({
  total_users: {
    value: faker.number.int({ min: 1, max: 10000 }),
    percent_from_last: faker.number.int({ min: 1, max: 100 }),
  },
  active_users: {
    value: faker.number.int({ min: 1, max: 10000 }),
    percent_from_last: faker.number.int({ min: 1, max: 100 }),
  },
  engagement_rate: {
    value: faker.number.int({ min: 1, max: 100 }),
    percent_from_last: faker.number.int({ min: 1, max: 100 }),
  },
});

export const generateUserCompletedMission = (): UserCompletedMissionDTO[] =>
  MISSION_COUNT.map((item) => ({
    mission_count: item,
    completed: faker.number.int({ min: 1, max: 100 }),
  }));

export const generateUserAgeAnalytic = (): UserAgeAnalyticDTO[] =>
  AGE.map((item) => ({
    age_range: item,
    total_registered: faker.number.int({ min: 1, max: 100 }),
  }));

export const generateUserGenderAnalytic = (): UserGenderAnalyticDTO => ({
  male: faker.number.int({ min: 1, max: 1000 }),
  female: faker.number.int({ min: 1, max: 1000 }),
});
