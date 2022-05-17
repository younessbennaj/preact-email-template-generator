import { html } from "htm/preact/index.mjs";
import render from "preact-render-to-string";
import { promises as fs } from "fs";
import { fileURLToPath, pathToFileURL } from "url";

import { template } from "./templates/account-statement-template.js";

const output = render(template);

const outputUrl = pathToFileURL(`${process.cwd()}/${"./output/"}`);

const templatesUrl = pathToFileURL(`${process.cwd()}/${"./templates/"}`);

const templates = await fs.readdir(fileURLToPath(templatesUrl));

for (const file of templates) {
  // Get output file url
  const outputFile = new URL(file.replace(/\.js$/, ".html"), outputUrl);
  // Get template file path
  const path = new URL(file, templatesUrl);

  // import template component from template file
  const { template } = await import(path);

  // Get html string from template built by preact-render-to-string
  const output = render(template);

  // Save generated html in /output directory
  await fs.writeFile(fileURLToPath(outputFile), output);
}
