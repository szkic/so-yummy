import React from "react";
import Image from "next/image";

const NotFound = () => {
  return (
    <>
      <div className="mb-3.5 tablet:mb-8">
        <Image
          src="/../assets/images/404.svg"
          width={259}
          height={170}
          alt="not found"
          className="tablet:hidden"
        />
        <Image
          src="/../assets/images/404.svg"
          width={498}
          height={327}
          alt="not found"
          className="hidden tablet:block"
        />
      </div>
      <h2 className="mb-2 text-lg font-semibold leading-5 tracking-[-0.36px] tablet:mb-3.5 tablet:text-2xl tablet:leading-7 tablet:tracking-[-0.48px]">
        We are sorry,
      </h2>
      <p className="max-w-[206px] text-center text-sm leading-[18px] tracking-[-0.26px] opacity-50 tablet:max-w-[440px] tablet:text-lg tablet:leading-6 tablet:tracking-[-0.36px]">
        but the page you were looking for can’t be found...
      </p>
    </>
  );
};

export default NotFound;
