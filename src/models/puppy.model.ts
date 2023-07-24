import { User } from "discord.js";

export interface Puppy {
    id: string;
    name: string;
    owner: User;
}
