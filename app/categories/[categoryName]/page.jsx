"use client";

import { usePathname } from "next/navigation";

const CategoryNamePage = () => {
  const pathname = usePathname();

  console.log(pathname.split("/"));

  return <div>page</div>;
};

export default CategoryNamePage;
