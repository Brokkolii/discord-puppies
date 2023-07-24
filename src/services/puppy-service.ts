import { User } from "discord.js";
import { Puppy } from "../models/puppy.model";
import { v4 as uuidv4 } from "uuid";
import { names } from "../resources/puppy-names";
import { db } from "../utils/db";

function createPuppy(owner: User): Puppy {
    const id = uuidv4();
    const name = names[Math.floor(Math.random() * names.length)];
    return {
        id,
        name,
        owner,
    };
}

function adoptPuppy(owner: User): Puppy {
    const puppiesOfUser = getPuppiesByUser(owner);
    if (puppiesOfUser.length === 0) {
        const puppy = createPuppy(owner);
        persistPuppy(puppy);
        return puppy;
    } else {
        throw new Error("You can only adopt one Puppy at a time.");
    }
}

function releasePuppy(name: string, owner: User) {
    const puppy = getPuppyByName(name, owner);
    if (puppy) {
        removePuppy(puppy);
    } else {
        throw new Error("Puppy does not exist.");
    }
}

function renamePuppy(oldName: string, newName: string, owner: User) {
    const puppy = getPuppyByName(oldName, owner);
    if (puppy) {
        puppy.name = newName;
        persistPuppy(puppy);
    } else {
        throw new Error("Puppy does not exist.");
    }
}

function getPuppyByName(name: string, user: User) {
    const { puppies } = db.readData();
    return puppies.find(
        (puppy) => puppy.name === name && puppy.owner.id === user.id
    );
}

function getPuppiesByUser(user: User): Puppy[] {
    const { puppies } = db.readData();
    return puppies.filter((puppy) => puppy.owner.id === user.id);
}

function persistPuppy(newPuppy: Puppy) {
    const data = db.readData();
    data.puppies.filter((puppy) => puppy.id === newPuppy.id);
    data.puppies.push(newPuppy);
    db.saveData(data);
}

function removePuppy(removePuppy: Puppy) {
    const data = db.readData();
    data.puppies.filter((puppy) => puppy.id === removePuppy.id);
    db.saveData(data);
}

export const puppyService = {
    adoptPuppy,
    releasePuppy,
    renamePuppy,
    getPuppiesByUser,
};
