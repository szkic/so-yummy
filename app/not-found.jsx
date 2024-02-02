import React from "react";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="mb-3.5 tablet:mb-8">
        <Image
          src="/../assets/images/404.svg"
          width={259}
          height={170}
          priority={true}
          alt="not found"
          className="tablet:h-[327px] tablet:w-[498px]"
        />
      </div>
      <h2 className="mb-2 text-lg font-semibold leading-5 tracking-[-0.36px] tablet:mb-3.5 tablet:text-2xl tablet:leading-7 tablet:tracking-[-0.48px]">
        We are sorry,
      </h2>
      <p className="max-w-[206px] text-center text-sm leading-[18px] tracking-[-0.26px] opacity-50 tablet:max-w-[440px] tablet:text-lg tablet:leading-6 tablet:tracking-[-0.36px]">
        but the page you were looking for can’t be found...
      </p>
    </section>
  );
};

export default NotFoundPage;
