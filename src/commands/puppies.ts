import { CommandInteraction } from "discord.js";
export const puppies = {
    name: "puppies",
    description: "Get all your puppies",
};
//TODO return list of puppies owned by a user
export const puppiesAction = async (interaction: CommandInteraction) => {
    await interaction.reply("puppy!!!");
};
