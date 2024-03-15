export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/add",
    "/categories/:path*",
    "/favorite",
    "/my",
    "/recipe/:path*",
    "/search",
    "/shopping-list",
  ],
};
