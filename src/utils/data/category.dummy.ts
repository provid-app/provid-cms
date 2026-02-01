import { faker } from "@faker-js/faker";
import type { CategoryDTO } from "@models/category.model";

export const generateCategory = (): CategoryDTO[] => [
  {
    category_name: "General",
    icon: faker.image.avatarGitHub(),
    is_active: faker.datatype.boolean(),
  },
  {
    category_name: "Gaming",
    icon: faker.image.avatarGitHub(),
    is_active: faker.datatype.boolean(),
  },
  {
    category_name: "Finance",
    icon: faker.image.avatarGitHub(),
    is_active: faker.datatype.boolean(),
  },
  {
    category_name: "Lifestyle",
    icon: faker.image.avatarGitHub(),
    is_active: faker.datatype.boolean(),
  },
  {
    category_name: "E-Commerce",
    icon: faker.image.avatarGitHub(),
    is_active: faker.datatype.boolean(),
  },
  {
    category_name: "Travel",
    icon: faker.image.avatarGitHub(),
    is_active: faker.datatype.boolean(),
  },
];
