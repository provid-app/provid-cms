import z from "zod/v3";

export const addCategoryValidator = z
  .object({
    category: z
      .object({
        label: z.string(),
        value: z.string(),
      })
      .optional(),
  })
  .refine((data) => data.category !== undefined, {
    message: "Kategori harus diisi!",
    path: ["category"],
  });

export type AddCategoryInput = z.infer<typeof addCategoryValidator>;
