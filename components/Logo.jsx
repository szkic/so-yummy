import React from "react";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link
      className="flex h-10 w-10 cursor-pointer justify-center rounded-xl bg-primary-color pl-[0.5px] pt-1 tablet:h-11 tablet:w-11"
      href="/"
    >
      <Image
        src="/../assets/images/logo.svg"
        height={28}
        width={28}
        alt="logo"
        className="tablet:hidden"
      />
      <Image
        src="/../assets/images/logo.svg"
        height={30}
        width={30}
        alt="logo"
        className="hidden tablet:block"
      />
    </Link>
  );
};

export default Logo;
