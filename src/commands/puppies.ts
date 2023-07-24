import { CommandInteraction } from "discord.js";
import { puppyService } from "../services/puppy-service";

export const puppies = {
    name: "puppies",
    description: "Get all your puppies",
};

export const puppiesAction = async (interaction: CommandInteraction) => {
    console.log(interaction);
    const owner = interaction.user;
    let reply = ".";
    try {
        const puppies = puppyService.getPuppiesByUser(owner);
        if (puppies.length <= 0) {
            reply = "You dont own any Puppies.";
        } else if (puppies.length === 1) {
            const puppy = puppies[0];
            reply = `Your Puppy is ${puppy.name}.`;
        } else if (puppies.length >= 2) {
            const puppieNames = puppies.map((puppy) => puppy.name).join(", ");
            reply = `Your Puppies are ${puppieNames}.`;
        }
        interaction.reply(reply);
    } catch (error: any) {
        interaction.reply(error.message);
    }
};
