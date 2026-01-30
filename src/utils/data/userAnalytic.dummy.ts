import { faker } from "@faker-js/faker";
import type { UserKPIDTO } from "@models/userAnalytic.model";

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
