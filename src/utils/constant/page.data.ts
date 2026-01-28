import {
  IconBell,
  IconChartPie,
  IconEdit,
  IconLayoutDashboard,
  IconReplaceUser,
} from "@tabler/icons-react";
import type { SidebarType } from "types/page.type";

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
