import { faker } from "@faker-js/faker";
import type { CategoryDTO } from "@models/category.model";

export const generateCategory = (): CategoryDTO[] => [
  {
    id: 1,
    category_name: "General",
    icon: faker.image.avatarGitHub(),
    is_active: faker.datatype.boolean(),
  },
  {
    id: 2,
    category_name: "Gaming",
    icon: faker.image.avatarGitHub(),
    is_active: faker.datatype.boolean(),
  },
  {
    id: 3,
    category_name: "Finance",
    icon: faker.image.avatarGitHub(),
    is_active: faker.datatype.boolean(),
  },
  {
    id: 4,
    category_name: "Lifestyle",
    icon: faker.image.avatarGitHub(),
    is_active: faker.datatype.boolean(),
  },
  {
    id: 5,
    category_name: "E-Commerce",
    icon: faker.image.avatarGitHub(),
    is_active: faker.datatype.boolean(),
  },
  {
    id: 6,
    category_name: "Travel",
    icon: faker.image.avatarGitHub(),
    is_active: faker.datatype.boolean(),
  },
];
