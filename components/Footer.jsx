import Image from "next/image";
import Link from "next/link";
import React from "react";

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
                className="tablet:hidden"
              />
              <Image
                src="/../assets/images/footer_logo.svg"
                width={44}
                height={44}
                alt="logo"
                className="hidden tablet:block"
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

          {/* sprawdzić czy nav może być w footerze */}
          <div className="o mb-8 text-center text-sm font-medium tracking-[-0.28px] text-primary-text-color tablet:basis-1/4 tablet:items-end tablet:pr-[94px] desktop:m-0 desktop:flex desktop:basis-1/5 desktop:justify-center desktop:p-0">
            <nav className="flex flex-col gap-3.5 tablet:gap-5 tablet:text-start desktop:gap-6">
              <Link href="">Ingredients</Link>
              <Link href="">Add recipes</Link>
              <Link href="">My recipes</Link>
              <Link href="">Favorite</Link>
              <Link href="">Shopping list</Link>
            </nav>
          </div>

          <div className="hidden desktop:block desktop:grow" />

          {/* subscription */}
          <div className="m-auto mb-11 flex flex-col gap-2 tablet:mb-10 tablet:basis-full tablet:flex-row tablet:justify-center desktop:m-0 desktop:max-w-[339px] desktop:basis-2/5 desktop:flex-col desktop:gap-0">
            <div className="hidden text-primary-text-color desktop:mb-7 desktop:block">
              <h4 className="mb-3.5 text-lg font-bold">
                Subscribe to our Newsletter
              </h4>
              <p className="text-sm">
                Subscribe up to our newsletter. Be in touch with latest news and
                special offers, etc.
              </p>
            </div>
            <div className="relative opacity-80 hover:opacity-100 desktop:mb-4">
              <label htmlFor="email"></label>
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 25"
                  fill="none"
                  className="h-[12px] w-[16px] tablet:h-4 tablet:w-5 desktop:h-5 desktop:w-6"
                >
                  <g>
                    <path
                      d="M2 7.5L10.1649 13.2154C10.8261 13.6783 11.1567 13.9097 11.5163 13.9993C11.8339 14.0785 12.1661 14.0785 12.4837 13.9993C12.8433 13.9097 13.1739 13.6783 13.8351 13.2154L22 7.5M6.8 20.5H17.2C18.8802 20.5 19.7202 20.5 20.362 20.173C20.9265 19.8854 21.3854 19.4265 21.673 18.862C22 18.2202 22 17.3802 22 15.7V9.3C22 7.61984 22 6.77976 21.673 6.13803C21.3854 5.57354 20.9265 5.1146 20.362 4.82698C19.7202 4.5 18.8802 4.5 17.2 4.5H6.8C5.11984 4.5 4.27976 4.5 3.63803 4.82698C3.07354 5.1146 2.6146 5.57354 2.32698 6.13803C2 6.77976 2 7.61984 2 9.3V15.7C2 17.3802 2 18.2202 2.32698 18.862C2.6146 19.4265 3.07354 19.8854 3.63803 20.173C4.27976 20.5 5.11984 20.5 6.8 20.5Z"
                      stroke="#FAFAFA"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <input
                type="email"
                id="email"
                name="email"
                className="block h-[38px] w-[204px] rounded-lg border border-primary-text-color border-opacity-50 bg-secondary-light-color stroke-1 p-3.5 pl-[42px] text-[10px] text-primary-text-color outline-none placeholder:text-[10px] placeholder:tracking-[-0.2px] placeholder:text-primary-text-color focus:border-primary-text-color tablet:h-[50px] tablet:w-[259px] tablet:text-sm tablet:placeholder:text-sm desktop:h-[60px] desktop:w-full desktop:pl-[51px] desktop:text-lg desktop:placeholder:text-lg"
                placeholder="Enter your email address"
              />
            </div>
            <button
              type="submit"
              className="h-[38px] w-full rounded-md  bg-primary-color text-sm text-primary-text-color transition-colors
                  duration-300 ease-in-out hover:bg-[#6c8828] tablet:h-[50px] tablet:w-[187px] tablet:text-base desktop:h-[60px] desktop:w-full"
            >
              Subscribe
            </button>
          </div>

          {/* social networks */}
          <div className="flex justify-center tablet:basis-full">
            <ul className="flex items-center gap-3.5 text-primary-text-color">
              <li>
                <a
                  href="http://www.facebook.com"
                  rel="noopener"
                  target="_blank"
                >
                  <Image
                    src="/../assets/images/fb.svg"
                    width={20}
                    height={20}
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a href="http://youtube.com" rel="noopener" target="_blank">
                  <Image
                    src="/../assets/images/yt.svg"
                    width={20}
                    height={15}
                    alt="youtube"
                  />
                </a>
              </li>
              <li>
                <a href="http://twitter.com" rel="noopener" target="_blank">
                  <Image
                    src="/../assets/images/tt.svg"
                    width={20}
                    height={16}
                    alt="twitter"
                  />
                </a>
              </li>
              <li>
                <a href="http://instagram.com" rel="noopener" target="_blank">
                  <Image
                    src="/../assets/images/insta.svg"
                    width={17}
                    height={17}
                    alt="instagram"
                  />
                </a>
              </li>
            </ul>
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
        <p className="font-medium">&copy; 2023 All Rights Reserved.</p>
        <p>Terms of service</p>
      </section>
    </>
  );
};

export default Footer;
