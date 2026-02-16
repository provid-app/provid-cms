import z from "zod/v3";

export const addMissionValidator = z
  .object({
    mission_name: z.string().min(1, { message: "Nama misi harus diisi!" }),
    mission_desc: z.string().min(1, { message: "Deskripsi harus diisi!" }),
    reward: z
      .string()
      .min(1, { message: "Reward coin tidak boleh 0!" })
      .regex(/^\d+$/, "Invalid number format"),
    segment_id: z.object(
      {
        label: z.string(),
        value: z.string(),
      },
      {
        required_error: "Segmen harus diisi!",
      },
    ),
    instruction: z.string().min(1, { message: "Instruksi harus diisi!" }),
    mission_type: z.object(
      {
        label: z.string(),
        value: z.string(),
        subTitle: z.string(),
      },
      {
        required_error: "Tipe misi harus diisi!",
      },
    ),
    mission_quantity: z
      .string()
      .min(1, { message: "Jumlah misi harus diisi!" })
      .regex(/^\d+$/, "Invalid number format"),
    with_schedule: z.boolean(),
    schedule_at: z.date().optional(),
  })
  .refine(
    (data) => {
      if (data.with_schedule) return data.schedule_at !== undefined;

      return;
    },
    { message: "Jadwal harus dipilih!", path: ["schedule_at"] },
  );

export const editMissionValidator = z.object({
  mission_name: z.string().min(1, { message: "Nama misi harus diisi!" }),
  mission_desc: z.string().min(1, { message: "Deskripsi harus diisi!" }),
  reward: z
    .string()
    .min(1, { message: "Reward coin tidak boleh 0!" })
    .regex(/^\d+$/, "Invalid number format"),
  segment_id: z.object(
    {
      label: z.string(),
      value: z.string(),
    },
    {
      required_error: "Segmen harus diisi!",
    },
  ),
  instruction: z.string().min(1, { message: "Instruksi harus diisi!" }),
});

export const addScheduleValidator = z.object({
  scheduled_at: z.date({ required_error: "Jadwal harus diisi!" }),
});

export type AddMissionInput = z.infer<typeof addMissionValidator>;
export type EditMissionInput = z.infer<typeof editMissionValidator>;
