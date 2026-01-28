import z from "zod/v3";

export const loginValidator = z.object({
  email: z.string().min(1, { message: "Email harus diisi!" }),
  password: z.string().min(1, { message: "Password harus diisi!" }),
});

export type LoginInput = z.infer<typeof loginValidator>;
