import { config } from "dotenv";

config();

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

export { DISCORD_BOT_TOKEN };
