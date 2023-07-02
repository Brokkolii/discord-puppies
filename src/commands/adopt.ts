import { CommandInteraction } from "discord.js";

export const adopt = {
	name: "adopt",
	description: "adopt a puppy",
};

export const adoptAction = async (interaction: CommandInteraction) => {
	const puppy = generatePuppy();
	interaction.reply(puppy.name);
};

interface Puppy {
	name: string;
}

const names = ["eddie", "name1", "name2"];

//TODO:
//- generate uuid for puppy
//- save puppy
//- save owner
//- only adopt if you dont own a puppy
//- more properties
function generatePuppy(): Puppy {
	const name = names[Math.floor(Math.random() * names.length)];
	return {
		name,
	};
}
