import { REST } from '@discordjs/rest';

const discord = new REST({ version: '10' });

discord.setToken(process.env.DISCORD_CLIENT_TOKEN);

export { discord };
