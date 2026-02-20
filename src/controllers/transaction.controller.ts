import { generateTransaction } from "@utils/data/transaction.dummy";
import { convertNumberToCurrency } from "@utils/helper/converter";
import { format } from "date-fns";
import { useState } from "react";
import type { FilterType, TableBodyType } from "types/page.type";

const useTransactionController = () => {
  const useGetTransactionsService = () => {
    const [filter, setFilter] = useState<{
      method: string[];
      status: string[];
      nominal: string[];
    }>({
      method: [],
      status: [],
      nominal: [],
    });
    const [dateRange, setDateRange] = useState<{ start: Date; end: Date }>({
      start: new Date(),
      end: new Date(),
    });

    const transaction = generateTransaction(10);

    const onSelectFilter = (
      type: "method" | "status" | "nominal",
      value: string,
    ) => {
      if (type === "method") {
        if (filter.method.includes(value)) {
          setFilter((prev) => ({
            ...prev,
            method: prev.method.filter((val) => val !== value),
          }));
        } else {
          setFilter((prev) => ({
            ...prev,
            method: [...prev.method, value],
          }));
        }
      } else if (type === "status") {
        if (filter.status.includes(value)) {
          setFilter((prev) => ({
            ...prev,
            status: prev.status.filter((val) => val !== value),
          }));
        } else {
          setFilter((prev) => ({
            ...prev,
            status: [...prev.status, value],
          }));
        }
      } else if (type === "nominal") {
        if (filter.nominal.includes(value)) {
          setFilter((prev) => ({
            ...prev,
            nominal: prev.nominal.filter((val) => val !== value),
          }));
        } else {
          setFilter((prev) => ({
            ...prev,
            nominal: [...prev.nominal, value],
          }));
        }
      }
    };

    let finalData: TableBodyType[] = [];

    finalData = transaction.map((item) => ({
      row: [
        {
          label: format(new Date(item.created_at), "LLL dd, yyyy HH.mm"),
          type: "text",
        },
        {
          label: item.withdraw_number,
          type: "text",
        },
        {
          label: item.full_name,
          type: "text",
        },
        {
          label: convertNumberToCurrency(item.nominal),
          type: "text",
        },
        {
          label: item.withdraw_method.method,
          subLabel: item.withdraw_method.account,
          type: "withdraw",
        },
        {
          label: item.status,
          type:
            item.status === "Gagal"
              ? "failed"
              : item.status === "Berhasil"
                ? "success"
                : "progress",
        },
      ],
    }));

    const filterData: FilterType[] = [
      {
        title: "METODE PENARIKAN",
        data: [
          {
            label: "OVO",
            count: 1,
            isSelected: filter.method.includes("ovo"),
            onSelect: () => onSelectFilter("method", "ovo"),
          },
          {
            label: "Gopay",
            count: 2,
            isSelected: filter.method.includes("gopay"),
            onSelect: () => onSelectFilter("method", "gopay"),
          },
          {
            label: "Dana",
            count: 1,
            isSelected: filter.method.includes("dana"),
            onSelect: () => onSelectFilter("method", "dana"),
          },
        ],
      },
      {
        title: "STATUS",
        data: [
          {
            label: "Berhasil",
            count: 2,
            isSelected: filter.status.includes("success"),
            onSelect: () => onSelectFilter("status", "success"),
          },
          {
            label: "Dalam Proses",
            count: 2,
            isSelected: filter.status.includes("progress"),
            onSelect: () => onSelectFilter("status", "progress"),
          },
          {
            label: "Gagal",
            count: 2,
            isSelected: filter.status.includes("failed"),
            onSelect: () => onSelectFilter("status", "failed"),
          },
        ],
      },
    ];

    return {
      finalData,
      filterData,
      dateRange,
      setDateRange,
    };
  };

  return {
    useGetTransactionsService,
  };
};

export default useTransactionController;
