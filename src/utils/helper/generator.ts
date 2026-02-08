import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from "date-fns";

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
        dest: "/category",
        label: "Kategori",
      });
    } else if (pathname.includes("/mission")) {
      breadcrumb.push({
        dest: "/mission",
        label: "Misi",
      });
    }
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
