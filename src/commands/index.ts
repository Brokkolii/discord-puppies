import { puppies, puppiesAction } from "./puppies";
import { CommandInteraction } from "discord.js";
export const commands = [puppies];

interface Actions {
	[key: string]: (interaction: CommandInteraction) => void | Promise<void>;
}

export const actions: Actions = { puppies: puppiesAction };
