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
