import { REST } from '@discordjs/rest';

const DISCORD_API_VERSION = '10';

export function getRest(): REST {
  const rest = new REST({ version: DISCORD_API_VERSION });

  return rest.setToken(process.env.DISCORD_CLIENT_TOKEN);
}
