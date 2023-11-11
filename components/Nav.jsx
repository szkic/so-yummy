import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="o mb-8 text-center text-sm font-medium tracking-[-0.28px] text-primary-text-color tablet:basis-1/4 tablet:items-end tablet:pr-[94px] desktop:m-0 desktop:flex desktop:basis-1/5 desktop:justify-center desktop:p-0">
      <nav className="flex flex-col gap-3.5 tablet:gap-5 tablet:text-start desktop:gap-6">
        <Link href="/search">Ingredients</Link>
        <Link href="/add">Add recipes</Link>
        <Link href="/my">My recipes</Link>
        <Link href="/favorite">Favorite</Link>
        <Link href="/shopping-list">Shopping list</Link>
      </nav>
    </div>
  );
};

export default Nav;
