import z from "zod/v3";

export const addMissionValidator = z
  .object({
    mission_name: z
      .string()
      .min(1, { message: "Nama misi harus diisi!" })
      .max(15, { message: "Nama misi maksimal 15 karakter!" }),
    mission_desc: z
      .string()
      .min(1, { message: "Deskripsi harus diisi!" })
      .max(30, { message: "Deskripsi maksimal 30 karakter!" }),
    reward: z.number().min(1, { message: "Reward coin tidak boleh 0!" }),
    segment_id: z
      .object({
        label: z.string(),
        value: z.string(),
      })
      .optional(),
    instruction: z.string().min(1, { message: "Instruksi harus diisi!" }),
    mission_type: z
      .object({
        label: z.string(),
        value: z.string(),
        subTitle: z.string(),
      })
      .optional(),
    mission_quantity: z
      .number()
      .min(1, { message: "Jumlah misi harus diisi!" }),
  })
  .refine((data) => data.segment_id !== undefined, {
    message: "Segmen harus diisi!",
    path: ["segment_id"],
  })
  .refine((data) => data.mission_type !== undefined, {
    message: "Tipe misi harus diisi!",
    path: ["mission_type"],
  });

export type AddMissionInput = z.infer<typeof addMissionValidator>;
