import { faker } from "@faker-js/faker";
import type { MissionDTO } from "@models/mission.model";

export const generateMission = (length: number): MissionDTO[] =>
  Array.from({ length }, (_, index) => ({
    id: index + 1,
    mission_name: faker.commerce.productAdjective(),
    mission_status: faker.helpers.arrayElement([
      "Draf",
      "Terjadwal",
      "Diterbitkan",
    ]),
    publication_date: faker.date.anytime().toISOString(),
    task: `${faker.number.int({ min: 1, max: 100 })} ${faker.helpers.arrayElement(["Ads", "App"])}`,
    reward: faker.number.int({ min: 1000, max: 50000 }),
  }));
