import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers";
import bcrypt from "bcrypt";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@config/mongodbAdapter";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),

  providers: [],
};

export default NextAuth(authOptions);
