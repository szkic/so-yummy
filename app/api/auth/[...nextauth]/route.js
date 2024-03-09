import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@config/mongodbAdapter";
import { connectToDB } from "@utils/database";
import User from "@models/user";

export const authOptions = {
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        email: { label: "Email", type: "text" },
      },
      async authorize(credentials) {
        console.log("Credentials:", credentials);
        // check if email & password are valid
        if (!credentials.email || !credentials.password) {
          return { error: "Invalid credentials" };
        }

        try {
          await connectToDB();

          // check if user exists
          const user = await User.findOne({ email: credentials.email });
          console.log("User:", user);

          if (!user) {
            return null;
          }

          // check if passwords match
          const paswordMatch = await bcrypt.compare(
            credentials.password,
            user.password,
          );
          console.log("Password match:", paswordMatch);

          if (!paswordMatch) {
            return null;
          }

          // return user object if everything is valid
          return user;
        } catch (error) {
          console.error("Error connecting to DB:", error);
        }

        // // check if user exists
        // const user = await User.findOne({ email: credentials.email });

        // console.log("User:", user);

        // if (!user) {
        //   return { error: "Invalid credentials" };
        // }

        // // check if passwords match
        // const paswordMatch = await bcrypt.compare(
        //   credentials.password,
        //   user.password,
        // );

        // if (!paswordMatch) {
        //   return { error: "Invalid credentials" };
        // }

        // // return user object if everything is valid
        // return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
