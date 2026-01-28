export const generateBreadcrumb = (pathname: string) => {
  const breadcrumb = [];

  if (pathname === "/") {
    breadcrumb.push({
      dest: "/",
      label: "Ringkasan",
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
