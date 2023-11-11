"use client";

import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import UserLogo from "./UserLogo";
import ThemeToggler from "./ThemeToggler";
import Image from "next/image";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const handleOpenMenu = () => setIsActive(!isActive);

  useEffect(() => {
    isActive
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    const keyDownHandler = (e) => {
      if (e.key === "Escape") setIsActive(false);
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => document.removeEventListener("keydown", keyDownHandler);
  }, [isActive]);

  return (
    <>
      <div className="">
        <div className="m-auto flex w-screen items-center justify-between px-4 pt-[18px] tablet:max-w-screen-tablet tablet:px-8 desktop:max-w-screen-desktop desktop:px-[100px] desktop:pt-3.5">
          <div className="grow desktop:mr-[187px] desktop:grow-0">
            <Logo />
          </div>

          <nav className="hidden grow desktop:flex">
            <Navigation />
          </nav>

          <div className="mr-6">
            <UserLogo />
          </div>

          <div className="hidden desktop:flex">
            <ThemeToggler />
          </div>

          <button
            type="button"
            className="pointer desktop:hidden"
            onClick={handleOpenMenu}
          >
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
        </div>
      </div>

      {/* mobilne menu */}
      <section
        className={`fixed top-0 w-full origin-top animate-open-menu flex-col justify-center bg-light-primary-color ${
          isActive ? "flex" : "hidden"
        }
        z-20 desktop:hidden`}
      >
        <div className="fixed left-0 right-0 top-0 flex justify-between px-4 pt-[18px]">
          <div className="">
            <Logo />
          </div>
          <button
            className="self-end px-6 text-5xl text-black"
            onClick={handleOpenMenu}
          >
            &times;
          </button>
        </div>
        <div className="absolute bottom-[18px] left-4 tablet:bottom-8 tablet:left-8">
          <ThemeToggler />
        </div>
        <Image
          src="/../assets/images/modal_mobile.png"
          width={360}
          height={550}
          alt="leaves"
          className="fixed bottom-0 right-0 -z-10 tablet:hidden"
        />
        <Image
          src="/../assets/images/modal_tablet.png"
          width={558}
          height={852}
          alt="leaves"
          className="fixed bottom-0 right-0 -z-10 hidden tablet:block"
        />
        <Navigation />
      </section>
    </>
  );
};

export default Header;
