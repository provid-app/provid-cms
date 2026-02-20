import { faker } from "@faker-js/faker";
import type { TransactionDTO } from "@models/transaction.model";

export const generateTransaction = (length: number): TransactionDTO[] =>
  Array.from(
    {
      length,
    },
    () => ({
      created_at: faker.date.anytime().toISOString(),
      withdraw_number: `A-${faker.number.int({ min: 1, max: 10000000 }).toString().padStart(8, "0")}`,
      full_name: faker.person.fullName(),
      nominal: faker.number.int({ min: 50000, max: 1000000 }),
      withdraw_method: {
        method: faker.helpers.arrayElement(["Gopay", "Dana", "OVO"]),
        account: faker.phone.number({ style: "national" }),
      },
      status: faker.helpers.arrayElement(["Dalam Proses", "Berhasil", "Gagal"]),
    }),
  );
