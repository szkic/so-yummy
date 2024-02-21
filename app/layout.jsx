import React from "react";
import "@styles/globals.css";
import { poppins } from "@styles/fonts";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Image from "next/image";
import ReactQueryClientProvider from "@components/ReactQueryClientProvider";
import Providers from "./Providers";

export const metadata = {
  title: "So Yummy",
  description: "Cooking recipes app",
};

/* 
dodać czcionke w ten sposób???

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

https://nextjs.org/docs/app/building-your-application/optimizing/fonts#with-tailwind-css
*/

const RootLayout = ({ children }) => {
  const isLoggedIn = true;

  return (
    <ReactQueryClientProvider>
      <html lang="pl" suppressHydrationWarning>
        <body
          className={`${poppins.className} antialiased dark:bg-secondary-dark-color`}
        >
          <Providers>
            <div className="main min-h-screen flex-col">
              <div className="w-full flex-1">
                {isLoggedIn && (
                  <header>
                    <Header />
                  </header>
                )}
                <main>
                  <div
                    className={
                      isLoggedIn &&
                      "m-auto flex max-w-[375px] flex-col px-4 pb-[100px] pt-[50px] tablet:max-w-screen-tablet tablet:px-8 desktop:max-w-screen-desktop desktop:px-24"
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
              </div>
              {isLoggedIn && (
                <footer>
                  <Footer />
                </footer>
              )}
            </div>
          </Providers>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
};

export default RootLayout;
