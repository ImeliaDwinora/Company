import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "e.g your password",
        },
        password: { type: "password", label: "Password", placeholder: "***" },
      },
      authorize: async (credentials) => {
        if (!credentials) return null;
        const response = await fetch(
          `http://localhost:3000/api/user?email=${credentials.email}`
        );
        if (!response.ok) return null;
        const userData = await response.json();

        if (userData.error || userData.password !== credentials.password)
          return null;

        return {
          id: userData.id,
          name: userData.name,
          email: userData.email,
          role: userData.role,
        };
      },
    }),
    Google,
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user && token.role) {
        session.user.role = token.role;
      }

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: { signIn: "/auth/sign-in" },
});
