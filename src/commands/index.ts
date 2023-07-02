import { puppies, puppiesAction } from "./puppies";
import { adopt, adoptAction } from "./adopt";
import { CommandInteraction } from "discord.js";

export const commands = [puppies, adopt];

interface Actions {
	[key: string]: (interaction: CommandInteraction) => void | Promise<void>;
}

export const actions: Actions = { puppies: puppiesAction, adopt: adoptAction };
