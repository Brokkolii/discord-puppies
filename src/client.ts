import { Client, GatewayIntentBits } from "discord.js";
import { Routes } from "discord-api-types/v9";
import { rest } from "./utils/rest";
import { commands } from "./commands";

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

	if (interaction.commandName === "puppies") {
		await interaction.reply("puppy!");
	}
});

export const start = () => {
	client.login(process.env.DISCORD_BOT_TOKEN);
};
