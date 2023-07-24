import fs from "fs";
import path from "path";

import { Puppy } from "../models/puppy.model";

interface Data {
    puppies: Puppy[];
}

const FILE_PATH = path.join(__dirname, "db.json");

function saveData(data: Data): void {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data), "utf-8");
}

function readData(): Data {
    return JSON.parse(fs.readFileSync(FILE_PATH, "utf-8"));
}

export const db = { saveData, readData };
