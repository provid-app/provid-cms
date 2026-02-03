import type { LoginInput } from "@utils/validator/auth.validator";
import type { AddCategoryInput } from "@utils/validator/category.validator";
import type { FormType } from "types/form.type";

export const loginForm: FormType<LoginInput> = {
  inputs: [
    {
      type: "text",
      name: "email",
      placeholder: "Email",
      required: false,
    },
    {
      type: "password",
      name: "password",
      placeholder: "Kata Sandi",
      required: false,
    },
  ],
  defaultValues: {
    email: "",
    password: "",
  },
};

export const categoryForm: FormType<AddCategoryInput> = {
  inputs: [
    {
      type: "dropdown",
      name: "category",
      label: "Kategori",
      placeholder: "Pilih kategori",
      required: false,
    },
  ],
  defaultValues: {
    category: undefined,
  },
};
