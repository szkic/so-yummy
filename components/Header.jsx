"use client";

import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserLogo from "./UserLogo";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <nav className="m-auto flex w-screen items-center justify-between bg-blue-300 px-4 pb-3 pt-[18px] tablet:px-8 desktop:px-[100px] desktop:pt-3.5">
      <div className="desktop:mr-[187px]">
        <Logo />
      </div>

      <div className="hidden desktop:flex">
        <Navigation />
      </div>

      {/* trzeba to dać w jakiś inny sposób do diva na górze albo na dole */}
      <div className="grow"></div>

      <div className="mr-6">
        <UserLogo />
      </div>

      <div className="hidden desktop:flex">
        <ThemeToggler />
      </div>

      <button type="button" className="pointer desktop:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          fill="none"
          className="h-7 w-7 tablet:h-8 tablet:w-8"
        >
          <path
            d="M3.5 14H24.5M3.5 7H24.5M3.5 21H17.5"
            stroke="#22252A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {/* <button className="ml-2">Logout</button> */}
    </nav>
  );
};

export default Header;
