import { Client, GatewayIntentBits } from "discord.js";
import { Routes } from "discord-api-types/v9";
import { rest } from "./utils/rest";
import { commands, actions } from "./commands";
import { DISCORD_BOT_TOKEN } from "./utils/env";

export const client = new Client({
	intents: [GatewayIntentBits.Guilds],
});

client.once("ready", async () => {
	console.log("connected as: " + client.user?.tag);

	try {
		await rest?.put(
			Routes.applicationGuildCommands(
				"1124819354387759164",
				"1124819151626715327"
			),
			{ body: commands }
		);
	} catch (error) {
		console.error(error);
	}
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isCommand()) return;

	const action = actions[interaction.commandName];

	if (action) {
		try {
			await action(interaction);
		} catch (error) {
			console.error(error);
			interaction.reply("error!");
		}
	} else {
		console.error("action not found");
		interaction.reply("action not found");
	}
});

export const start = () => {
	client.login(DISCORD_BOT_TOKEN);
};
