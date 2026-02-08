import {
  IconBell,
  IconChartPie,
  IconEdit,
  IconLayoutDashboard,
  IconReplaceUser,
} from "@tabler/icons-react";
import type { SidebarType, TableHeaderType } from "types/page.type";

export const MONTH = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mei",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Okt",
  "Nov",
  "Des",
];

export const DAY = ["Sen", "Sel", "Rab", "Kam", "Jum", "Sab", "Min"];

export const DAY_CALENDAR = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

export const MISSION_COUNT = ["1 Misi", "2-5 Misi", "6-10 Misi", "> 10 Misi"];

export const AGE = ["< 17", "17-25", "26-35", "36-45", "46-55", "> 55"];

export const sidebarData: SidebarType[] = [
  {
    label: "Ringkasan",
    icon: IconLayoutDashboard,
    dest: "/",
  },
  {
    label: "Analitik",
    icon: IconChartPie,
    dest: "/analytic",
    sub: [
      {
        label: "Misi",
        dest: "/mission",
      },
      {
        label: "Pengguna",
        dest: "/user",
      },
    ],
  },
  {
    label: "Kelola",
    icon: IconEdit,
    dest: "/manage",
    sub: [
      {
        label: "Kategori",
        dest: "/category",
      },
      {
        label: "Misi",
        dest: "/mission",
      },
      {
        label: "Segmen",
        dest: "/segment",
      },
    ],
  },
  {
    label: "Transaksi",
    icon: IconReplaceUser,
    dest: "/transaction",
  },
  {
    label: "Notifikasi",
    icon: IconBell,
    dest: "/notification",
  },
];

export const categoryHeaderData: TableHeaderType = {
  withAction: true,
  header: [
    {
      label: "Kategori",
      type: "text",
    },
    {
      label: "Simbol",
      type: "text",
    },
    {
      label: "Status",
      type: "text",
    },
  ],
};

export const missionHeaderData: TableHeaderType = {
  withAction: true,
  header: [
    {
      label: "Nama Misi",
      type: "text",
      sortable: "mission_name",
    },
    {
      label: "Status",
      type: "text",
      sortable: "mission_status",
    },
    {
      label: "Tanggal Publikasi",
      type: "text",
      sortable: "publication_date",
    },
    {
      label: "Task",
      type: "text",
      sortable: "task",
    },
    {
      label: "Reward",
      type: "text",
      sortable: "reward",
    },
  ],
};
