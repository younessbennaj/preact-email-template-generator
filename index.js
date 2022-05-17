import { html } from "htm/preact/index.mjs";
import render from "preact-render-to-string";
import { promises as fs } from "fs";
import { fileURLToPath } from "url";
import { getDirUrl } from "./utils/index.js";
import { template } from "./templates/account-statement-template.js";

const outputDirUrl = getDirUrl("html-templates");

const templatesDir = getDirUrl("templates");

const templatesFiles = await fs.readdir(fileURLToPath(templatesDir));

for (const templateFile of templatesFiles) {
  // Get output file url
  const outputFile = new URL(
    // html file is named same as js file name
    templateFile.replace(/\.js$/, ".html"),
    outputDirUrl
  );
  // Get template file path
  const templatePath = new URL(templateFile, templatesDir);

  // import template component from template file
  const { template } = await import(templatePath);

  // Get html string from template built by preact-render-to-string
  const documentOutput = render(template);

  // Save generated html in /output directory
  await fs.writeFile(fileURLToPath(outputFile), documentOutput);
}
