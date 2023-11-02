import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthNav = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-11 bg-[url('/assets/images/welcome-mobile.png')] bg-cover bg-no-repeat text-primary-text-color tablet:gap-10 tablet:bg-[url('/assets/images/welcome-tablet.png')] desktop:bg-[url('/assets/images/welcome-desktop.png')]">
      <div className="flex h-[54px] w-[54px] justify-center rounded-xl bg-primary-color pl-[0.5px] pt-1 tablet:hidden">
        <Image
          src="/../assets/images/logo.svg"
          height={44}
          width={44}
          alt="logo"
        />
      </div>

      <div className="hidden h-[68px] w-[68px] justify-center rounded-xl bg-primary-color pl-[0.7px] pt-1 tablet:flex">
        <Image
          src="/../assets/images/logo.svg"
          height={44}
          width={44}
          alt="logo"
        />
      </div>
      <div className="w-[305px] text-center tablet:w-[505px] desktop:w-[540px]">
        <h2 className="mb-3.5 text-2xl leading-6 tracking-[-0.48px] tablet:text-[28px] tablet:leading-7 tablet:tracking-[-0.56px]">
          Welcome to the app!
        </h2>
        <p className="text-sm leading-[18px] tracking-[-0.28px] tablet:text-[18px] tablet:leading-6 tablet:tracking-[-0.36px]">
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </p>
      </div>
      <div className="flex gap-3 tablet:gap-[18px]">
        <Link
          href="/register"
          className="rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] bg-primary-color px-6 py-3 text-sm tablet:rounded-bl-[70px] tablet:rounded-br-[30px] tablet:rounded-tl-[30px] tablet:rounded-tr-[70px] tablet:px-11 tablet:py-[22px] tablet:text-base"
        >
          Registration
        </Link>
        <Link
          href="/signin"
          className="rounded-bl-[35px] rounded-br-[15px] rounded-tl-[15px] rounded-tr-[35px] border-2 px-6 py-3 text-sm tablet:rounded-bl-[70px] tablet:rounded-br-[30px] tablet:rounded-tl-[30px] tablet:rounded-tr-[70px] tablet:px-11 tablet:py-[22px] tablet:text-base"
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default AuthNav;

// flex h-screen w-[375px] flex-col items-center justify-center gap-11 bg-[url('/assets/images/welcome-mobile.png')] text-primary-text-color tablet:w-[768px] tablet:gap-10 tablet:bg-[url('/assets/images/welcome-tablet.png')] desktop:h-[770px] desktop:w-[1440px] desktop:bg-[url('/assets/images/welcome-desktop.png')]
