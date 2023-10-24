import React from "react";
import "@styles/globals.css";

export const metadata = {
  title: "So Yummy",
  description: "coś tu ładnie opisać",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
