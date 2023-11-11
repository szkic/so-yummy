import React from "react";
import "@styles/globals.css";
import { poppins } from "@styles/fonts";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Image from "next/image";

export const metadata = {
  title: "So Yummy",
  description: "Cooking recipes app",
};

const RootLayout = ({ children }) => {
  const isLoggedIn = true;

  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="main flex-col">
          {isLoggedIn && (
            <header>
              <Header />
            </header>
          )}
          <main>
            <div
              className={
                isLoggedIn &&
                "relative m-auto flex flex-col items-center py-[100px] tablet:max-w-screen-tablet tablet:pb-[204px] desktop:max-w-screen-desktop desktop:pt-[140px]"
              }
            >
              {isLoggedIn && (
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
          {isLoggedIn && (
            <footer>
              <Footer />
            </footer>
          )}
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
