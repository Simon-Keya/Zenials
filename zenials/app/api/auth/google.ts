import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!, // Your Google Client ID
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!, // Your Google Client Secret
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      // Handle sign in logic here, such as checking profile or creating a user in your DB
      console.log("Google account:", account);
      console.log("Google profile:", profile);

      // You can add additional logic to check if the account is verified, etc.
      return true; // or false based on your conditions
    },
  },
};

export default NextAuth(authOptions);
