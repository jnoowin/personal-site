import fs from "fs";
import path from "path";

export function getIcons() {
  const filenames = fs.readdirSync(path.join(process.cwd(), "public/icons"));
  return filenames;
}
