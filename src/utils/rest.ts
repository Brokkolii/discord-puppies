import { REST } from "@discordjs/rest";
import { DISCORD_BOT_TOKEN } from "./env";

export let rest = new REST();

if (DISCORD_BOT_TOKEN) {
	rest = new REST({ version: "9" }).setToken(DISCORD_BOT_TOKEN);
}
