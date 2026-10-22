import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(projectRoot, "dist");
const htmlPath = path.join(outputDirectory, "index.html");
let html = await readFile(htmlPath, "utf8");

const inlineAsset = async (tagPattern, replacement) => {
  const match = html.match(tagPattern);
  if (!match) {
    throw new Error(`Could not find built asset tag in ${htmlPath}`);
  }

  const assetFile = path.resolve(outputDirectory, match[1]);
  if (!assetFile.startsWith(`${outputDirectory}${path.sep}`)) {
    throw new Error(`Built asset path escapes output directory: ${match[1]}`);
  }

  const content = await readFile(assetFile, "utf8");
  html = html.replace(match[0], () => replacement(content, match[1]));
};

await inlineAsset(
  /<link rel="stylesheet" crossorigin href="([^"]+)">/,
  (content) => `<style>\n${content}\n</style>`,
);

await inlineAsset(
  /<script type="module" crossorigin src="([^"]+)"><\/script>/,
  (content, assetPath) => {
    const moduleUrl = `new URL(${JSON.stringify(assetPath)}, location.protocol === "file:" ? document.baseURI : \`\${location.origin}/\`).href`;
    const inlineContent = content.replaceAll("import.meta.url", moduleUrl);
    return `<script type="module">\n${inlineContent}\n</script>`;
  },
);

await writeFile(htmlPath, html);
