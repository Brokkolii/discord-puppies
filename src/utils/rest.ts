import { REST } from "@discordjs/rest";

const token = process.env.DISCORD_BOT_TOKEN;

let restX = undefined;
if (token) {
	restX = new REST({ version: "9" }).setToken(token);
}

export const rest = restX;
