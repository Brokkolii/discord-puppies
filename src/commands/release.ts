import { CommandInteraction } from "discord.js";
import { puppyService } from "../services/puppy-service";

export const release = {
    name: "release",
    description: "Release a Puppy into the wild.",
    options: [
        {
            name: "name",
            type: 3,
            description: "Name of the Puppy you want to release.",
            required: true,
        },
    ],
};

export const releaseAction = async (interaction: CommandInteraction) => {
    console.log(interaction);
    const owner = interaction.user;
    const name = interaction.options.get("name")?.value as string;

    try {
        puppyService.releasePuppy(name, owner);
        interaction.reply(`${name} has been released into the wild.`);
    } catch (error: any) {
        interaction.reply(error.message);
    }
};
