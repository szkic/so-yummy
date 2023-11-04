import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const active = "font-semibold text-primary-color";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-[30px] font-medium desktop:text-sm">
      <li>
        <Link
          href="/categories"
          className={pathname === "/categories" ? active : ""}
        >
          Categories
        </Link>
      </li>
      <li>
        <Link href="/add" className={pathname === "/add" ? active : ""}>
          Add recipes
        </Link>
      </li>
      <li>
        <Link href="/my" className={pathname === "/my" ? active : ""}>
          My recipes
        </Link>
      </li>
      <li>
        <Link
          href="/favorite"
          className={pathname === "/favorite" ? active : ""}
        >
          Favorites
        </Link>
      </li>
      <li>
        <Link
          href="/shopping-list"
          className={pathname === "/shopping-list" ? active : ""}
        >
          Shopping list
        </Link>
      </li>
      <li>
        <Link href="/search" className={pathname === "/search" ? active : ""}>
          Search
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
