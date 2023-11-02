import React from "react";
import "@styles/globals.css";
import { poppins } from "@styles/fonts";
import Header from "@components/Header";

export const metadata = {
  title: "So Yummy",
  description: "Cooking recipes app",
};

const RootLayout = ({ children }) => {
  const isLoggedIn = false;

  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <div className="main">
          {isLoggedIn && (
            <header>
              <Header />
            </header>
          )}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
