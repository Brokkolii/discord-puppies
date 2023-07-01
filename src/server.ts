import { config } from "dotenv";
import { Client, GatewayIntentBits, REST } from "discord.js";
import { Routes } from "discord-api-types/v9";

config();

if (process.env.DISCORD_BOT_TOKEN) {
	const rest = new REST({ version: "9" }).setToken(
		process.env.DISCORD_BOT_TOKEN
	);

	const client = new Client({
		intents: [GatewayIntentBits.Guilds],
	});

	client.once("ready", async () => {
		console.log(`bot started as: ${client.user?.tag}`);

		const commands = [
			{
				name: "puppies",
				description: "Get all puppies owned by you",
			},
		];

		try {
			console.log("Started refreshing application (/) commands.");

			await rest.put(
				Routes.applicationGuildCommands(
					"1124819354387759164",
					"1124819151626715327"
				),
				{
					body: commands,
				}
			);
		} catch (error) {
			console.error(error);
		}
	});

	client.on("interactionCreate", async (interaction) => {
		if (!interaction.isCommand()) return;

		const { commandName } = interaction;

		if (commandName === "puppies") {
			await interaction.reply("pup");
		}
	});

	client.login(process.env.DISCORD_BOT_TOKEN);
} else {
	console.error("DISCORD_BOT_TOKEN not set");
}
