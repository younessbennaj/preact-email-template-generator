import { html } from "htm/preact/index.mjs";
import render from "preact-render-to-string";
import { promises as fs } from "fs";
import { fileURLToPath, pathToFileURL } from "url";

import { Layout } from "./layouts/layout.js";
import { AccountStatementTemplate } from "./templates/account-statement-template.js";

import { Heading, Text } from "./components/typography.js";

const Document = html`
  <${Layout}
    pageTitle="Email Template Generated"
    template=${AccountStatementTemplate}
  />
`;

const output = render(Document);

console.log(output);

// Save generated html in /output directory
const outputUrl = pathToFileURL(`${process.cwd()}/${"./output/"}`);
const outfile = new URL("index.html", outputUrl);
await fs.writeFile(fileURLToPath(outfile), output);
// const outfile = new URL(file.replace(/\.js$/, ".html"), outputUrl);
