import Image from "next/image";
import React from "react";
import Nav from "./Nav";
import FollowUs from "./FollowUs";
import SubscribeForm from "./SubscribeForm";

const Footer = () => {
  return (
    <>
      <section className="bg-secondary-color">
        <div className="m-auto flex flex-col items-center justify-start pb-5 pt-7  tablet:max-w-screen-tablet tablet:flex-row tablet:flex-wrap tablet:items-start tablet:pb-6 tablet:pl-8 tablet:pt-[50px] desktop:max-w-screen-desktop desktop:px-[100px] desktop:pb-[50px] desktop:pt-16">
          <div className="mb-8 tablet:mb-[72px] tablet:flex tablet:basis-3/4 tablet:flex-col tablet:gap-6 desktop:basis-2/5 desktop:gap-10">
            <div className="flex items-center gap-[9px] tablet:gap-3">
              <Image
                src="/../assets/images/footer_logo.svg"
                width={32}
                height={32}
                alt="logo"
                className="tablet:h-11 tablet:w-11"
              />

              <h3 className="text-lg font-bold tracking-[0.27px] text-primary-text-color tablet:text-[28px] tablet:tracking-[0.42px]">
                So Yummy
              </h3>
            </div>

            <ul className="hidden list-outside list-disc text-sm tracking-[-0.28px] text-primary-text-color tablet:block desktop:max-w-[458px] desktop:text-lg">
              <li className="mb-[10px] desktop:mb-3">
                Database of recipes that can be replenished
              </li>
              <li className="mb-[10px] desktop:mb-3">
                Flexible search for desired and unwanted ingredients
              </li>
              <li className="mb-[10px] desktop:mb-3">
                Ability to add your own recipes with photos
              </li>
              <li>Convenient and easy to use</li>
            </ul>
          </div>

          <Nav />
          <div className="hidden desktop:block desktop:grow" />
          <SubscribeForm />
          <div className="flex justify-center tablet:basis-full">
            <FollowUs />
          </div>
        </div>
      </section>
      <section className="flex justify-center gap-3.5 py-7 text-[10px] opacity-50 tablet:gap-7 tablet:py-8 tablet:text-sm desktop:gap-10 desktop:py-[50px]">
        {/* <Image
          src="/../assets/images/footer_mobile_leaf.png"
          width={160}
          height={172}
          alt="leafs"
          className="sticky right-0 -z-10"
        /> */}
        <p className="font-medium">&copy; 2024 All Rights Reserved.</p>
        <p>Terms of service</p>
      </section>
    </>
  );
};

export default Footer;
