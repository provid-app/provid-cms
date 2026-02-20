import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;

export const generateBreadcrumb = (pathname: string) => {
  const breadcrumb = [];

  if (pathname === "/") {
    breadcrumb.push({
      dest: "/",
      label: "Ringkasan",
    });
  } else if (pathname.includes("/analytic")) {
    breadcrumb.push({
      dest: "/analytic",
      label: "Analitik",
    });

    if (pathname.includes("/mission")) {
      breadcrumb.push({
        dest: "/analytic/mission",
        label: "Misi",
      });
    } else if (pathname.includes("/user")) {
      breadcrumb.push({
        dest: "/analytic/user",
        label: "Pengguna",
      });
    }
  } else if (pathname.includes("/manage")) {
    breadcrumb.push({
      dest: "/manage",
      label: "Kelola",
    });

    if (pathname.includes("/category")) {
      breadcrumb.push({
        dest: "/manage/category",
        label: "Kategori",
      });
    } else if (pathname.includes("/mission")) {
      breadcrumb.push({
        dest: "/manage/mission",
        label: "Misi",
      });
    } else if (pathname.includes("/segment")) {
      breadcrumb.push({
        dest: "/manage/segment",
        label: "Segmen",
      });
    }
  } else if (pathname.includes("/reward")) {
    breadcrumb.push({
      dest: "/reward",
      label: "Reward",
    });
  } else if (pathname.includes("/transaction")) {
    breadcrumb.push({
      dest: "/transaction",
      label: "Transaksi",
    });
  } else if (pathname.includes("/notif")) {
    breadcrumb.push({
      dest: "/notif",
      label: "Notifikasi",
    });
  }

  if (pathname.includes("/edit")) {
    breadcrumb.push({
      dest: pathname,
      label: "Edit",
    });
  } else if (pathname.includes("/detail")) {
    breadcrumb.push({
      dest: pathname,
      label: "Detail",
    });
  }

  return breadcrumb;
};

export const generateCalendarDays = (month: Date) => {
  return eachDayOfInterval({
    start: startOfWeek(startOfMonth(month), { weekStartsOn: 0 }),
    end: endOfWeek(endOfMonth(month), { weekStartsOn: 0 }),
  });
};

export const generateEncryption = (value: string): string => {
  const encrypted = CryptoJS.AES.encrypt(value, SECRET_KEY);

  return encrypted.toString();
};
