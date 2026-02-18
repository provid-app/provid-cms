import z from "zod/v3";

export const addSegmentValidator = z
  .object({
    segment_name: z.string().min(1, { message: "Nama segmen harus diisi!" }),
    description: z.string().min(1, { message: "Deskripsi harus diisi!" }),
    layout: z
      .object({
        label: z.string(),
        value: z.string(),
        subTitle: z.string(),
      })
      .optional(),
  })
  .refine((data) => data.layout !== undefined, {
    message: "Tipe arah harus diisi!",
    path: ["layout"],
  });

export type AddSegmentInput = z.infer<typeof addSegmentValidator>;
