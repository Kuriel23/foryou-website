/* eslint-disable no-param-reassign */
<<<<<<< HEAD
=======

>>>>>>> 2239464 (feat: create user page)
import NextAuth, { type NextAuthOptions } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';

export const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
<<<<<<< HEAD
    session: async ({ session, token }) => {
=======
    session: async ({ session, token }: any) => {
>>>>>>> 2239464 (feat: create user page)
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
<<<<<<< HEAD
    jwt: async ({ user, token }) => {
=======
    jwt: async ({ user, token }: any) => {
>>>>>>> 2239464 (feat: create user page)
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);
