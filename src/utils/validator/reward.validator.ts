import z from "zod/v3";

export const editCoinValueValidator = z.object({
  coin_value: z
    .string({ required_error: "Nilai rupiah harus diisi!" })
    .min(1, { message: "Nilai rupiah tidak boleh 0!" })
    .regex(/^\d+$/, "Invalid number format"),
});

export const editWithdrawValidator = z.object({
  min_withdraw: z
    .string({ required_error: "Minimum penarikan harus diisi!" })
    .min(1, { message: "Minimum penarikan tidak boleh 0!" })
    .regex(/^\d+$/, "Invalid number format"),
});

export type EditCoinValueInput = z.infer<typeof editCoinValueValidator>;
export type EditWithdrawInput = z.infer<typeof editWithdrawValidator>;
