import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers";
import bcrypt from "bcrypt";

export const authOptions = {
  providers: [],
};

export default NextAuth(authOptions);
