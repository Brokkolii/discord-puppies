import { CommandInteraction, User } from "discord.js";
import { puppyService } from "../services/puppy-service";

export const adopt = {
    name: "adopt",
    description: "adopt a puppy",
};

export const adoptAction = async (interaction: CommandInteraction) => {
    console.log(interaction);
    const owner = interaction.user;
    try {
        const puppy = puppyService.adoptPuppy(owner);
        interaction.reply(puppy.owner.username + " adopted " + puppy.name);
    } catch (error: any) {
        interaction.reply(error.message);
    }
};
