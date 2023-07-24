import { CommandInteraction } from "discord.js";
import { puppyService } from "../services/puppy-service";

export const rename = {
    name: "rename",
    description: "Rename one of your puppies",
    options: [
        {
            name: "oldname",
            type: 3,
            description: "The old name of the puppy you want to rename.",
            required: true,
        },
        {
            name: "newname",
            type: 3,
            description: "The name the puppy should be renamed to.",
            required: true,
        },
    ],
};

export const renameAction = async (interaction: CommandInteraction) => {
    console.log(interaction);
    const owner = interaction.user;
    const oldName = interaction.options.get("oldname")?.value as string;
    const newName = interaction.options.get("newname")?.value as string;

    try {
        puppyService.renamePuppy(oldName, newName, owner);
        //! Currently does not work. after renaming both the old and the new exist
        interaction.reply(`${oldName} is now named ${newName}`);
    } catch (error: any) {
        interaction.reply(error.message);
    }
};
