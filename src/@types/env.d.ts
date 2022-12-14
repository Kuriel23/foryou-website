declare namespace NodeJS {
  interface ProcessEnv {
    DISCORD_CLIENT_ID: string;
    DISCORD_CLIENT_SECRET: string;
    DISCORD_CLIENT_TOKEN: string;

    DATABASE_URL: string;

    NEXTAUTH_SECRET: string;

    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_CONTRIBUTORS_SERVICE_URL: string;
  }
}
