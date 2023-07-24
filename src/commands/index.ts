import { puppies, puppiesAction } from "./puppies";
import { adopt, adoptAction } from "./adopt";
import { CommandInteraction } from "discord.js";
import { rename, renameAction } from "./rename";
import { release, releaseAction } from "./release";

export const commands = [puppies, adopt, rename, release];

interface Actions {
    [key: string]: (interaction: CommandInteraction) => void | Promise<void>;
}

export const actions: Actions = {
    puppies: puppiesAction,
    adopt: adoptAction,
    rename: renameAction,
    release: releaseAction,
};
