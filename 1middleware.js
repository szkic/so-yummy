export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/",
    "/add",
    "/categories",
    "/favorite",
    "/my",
    "/recipe",
    "/search",
    "/shopping-list",
  ],
};
