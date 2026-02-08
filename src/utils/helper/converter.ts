import { format } from "date-fns";
import { id } from "date-fns/locale";

export const convertNumberFormat = (value: number): string => {
  return value.toLocaleString("id-ID").replace(/\./g, ",");
};

export const convertNumberToCurrency = (value: number): string => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  });

  return formatter.format(value);
};

export const convertDateFormat = (value: Date, formatter: string): string => {
  return format(value, formatter, {
    locale: id,
  });
};
