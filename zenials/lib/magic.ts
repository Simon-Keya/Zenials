import { Magic } from "magic-sdk";

const magic = new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY || "");

export default magic;
