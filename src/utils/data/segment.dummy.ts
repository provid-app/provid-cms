import { faker } from "@faker-js/faker";
import type { SegmentDTO } from "@models/segment.model";

export const generateSegment = (): SegmentDTO[] => [
  {
    id: 1,
    segment_name: faker.company.buzzAdjective(),
    description: faker.lorem.paragraph(),
    layout: faker.helpers.arrayElement(["vertical", "horizontal"]),
  },
  {
    id: 2,
    segment_name: faker.company.buzzAdjective(),
    description: faker.lorem.paragraph(),
    layout: faker.helpers.arrayElement(["vertical", "horizontal"]),
  },
];
