"use client";

import Header from "@components/Header";
import Footer from "@components/Footer";
import Image from "next/image";
import { useSession } from "next-auth/react";

const SharedElements = ({ children }) => {
  const { status } = useSession();

  console.log(status);

  return (
    <div className="main min-h-screen flex-col">
      <div className="w-full flex-1">
        {status === "authenticated" && (
          <header>
            <Header />
          </header>
        )}
        <main>
          <div
            className={
              status === "authenticated"
                ? "m-auto flex max-w-[375px] flex-col px-4 pb-[100px] pt-[50px] tablet:max-w-screen-tablet tablet:px-8 desktop:max-w-screen-desktop desktop:px-24"
                : undefined
            }
          >
            {status === "authenticated" && (
              <div>
                <Image
                  src="/../assets/images/dot-left.svg"
                  width={8}
                  height={8}
                  alt="dot"
                  className="absolute left-[120px] top-[12px] tablet:left-[219px] tablet:top-[21px] tablet:h-3.5 tablet:w-3.5 desktop:left-[328px] desktop:top-[58px]"
                />
                <Image
                  src="/../assets/images/dot-middle.svg"
                  width={6}
                  height={6}
                  alt="dot"
                  className="absolute right-[120px] top-[77px] tablet:right-[315px] tablet:top-[91px] tablet:h-3 tablet:w-3 desktop:right-[617px] desktop:top-[141px]"
                />
                <Image
                  src="/../assets/images/dot-right.svg"
                  width={8}
                  height={8}
                  alt="dot"
                  className="absolute right-[15px] top-[44px] tablet:right-[23px] tablet:top-[34px] tablet:h-3.5 tablet:w-3.5 desktop:right-[171px] desktop:top-[69px]"
                />
              </div>
            )}
            {children}
          </div>
        </main>
      </div>
      {status === "authenticated" && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default SharedElements;
