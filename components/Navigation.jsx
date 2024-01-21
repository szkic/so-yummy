import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const active = "font-semibold text-primary-color";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <ul className="flex min-h-screen flex-col items-center justify-center gap-[30px] font-medium desktop:min-h-0 desktop:flex-row desktop:text-sm">
      <li>
        <Link
          href="/categories/beef"
          className={pathname.includes("categories") ? active : ""}
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
          <div className="flex">
            <MagnifyingGlassIcon className="h-5 w-5 tablet:h-6 tablet:w-6" />
            <span className="ml-2 desktop:hidden">Search</span>
          </div>
        </Link>
      </li>
    </ul>
  );
};

export default Navigation;
