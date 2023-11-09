import React from "react";
import "@styles/globals.css";
import { poppins } from "@styles/fonts";
import Header from "@components/Header";
import Footer from "@components/Footer";

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
          <main>{children}</main>
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
