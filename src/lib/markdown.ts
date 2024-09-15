// lib/markdown.ts
import fs from "fs";
import path from "path";

export async function getMarkdownContent(filePath: string) {
  try {
    const fullPath = path.join(process.cwd(), filePath);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return fileContents;
  } catch (error) {
    console.error(error);
    return "";
  }
}
