import React from "react";
import "@styles/globals.css";
import { poppins } from "@styles/fonts";

import ReactQueryClientProvider from "@components/ReactQueryClientProvider";
import Providers from "./Providers";
import AuthProvider from "@Providers/AuthProvider";
import SharedElements from "@components/SharedElements";

export const metadata = {
  title: "So Yummy",
  description: "Cooking recipes app",
  icons: {
    icon: "/assets/images/favicon.ico",
  },
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
  return (
    <ReactQueryClientProvider>
      <html lang="pl" suppressHydrationWarning>
        <AuthProvider>
          <body
            className={`${poppins.className} antialiased dark:bg-secondary-dark-color`}
          >
            <Providers>
              <SharedElements>{children}</SharedElements>
            </Providers>
          </body>
        </AuthProvider>
      </html>
    </ReactQueryClientProvider>
  );
};

export default RootLayout;
