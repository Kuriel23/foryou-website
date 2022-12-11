declare namespace NodeJS {
  interface ProcessEnv {
    DISCORD_CLIENT_ID: string;
    DISCORD_CLIENT_SECRET: string;
    DISCORD_CLIENT_TOKEN: string;
    NEXTAUTH_SECRET: string;
    DATABASE_URL: string;
    NEXT_PUBLIC_API_URL: string;
  }
}
