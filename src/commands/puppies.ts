import { CommandInteraction } from "discord.js";
export const puppies = {
	name: "puppies",
	description: "Get all your puppies",
};

export const puppiesAction = async (interaction: CommandInteraction) => {
	await interaction.reply("puppy!!!");
};
