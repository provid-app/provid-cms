import {
  IconBell,
  IconChartPie,
  IconEdit,
  IconLayoutDashboard,
  IconReplaceUser,
} from "@tabler/icons-react";
import type { SidebarType } from "types/page.type";

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
