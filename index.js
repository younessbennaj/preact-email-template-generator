import {
  html,
  render as renderComponent,
  Component,
} from "htm/preact/index.mjs";
import render from "preact-render-to-string";
import { promises as fs } from "fs";
import { fileURLToPath, pathToFileURL } from "url";

const title = "Email template title";

const Header = ({ text }) => html`<h1>${text}</h1>`;

export const Template = html`
  <div>
    <${Header} text=${title} />
    <p>A simple Email Tempmate Generate with React</p>
  </div>
`;

const Layout = html`
  <html>
    <head>
      <title>Mon premier template</title>
    </head>
    <body>
      ${Template}
    </body>
  </html>
`;

const output = render(Layout);

console.log(output);

// Save generated html in /output directory
const outputUrl = pathToFileURL(`${process.cwd()}/${"./output/"}`);
const outfile = new URL("index.html", outputUrl);
await fs.writeFile(fileURLToPath(outfile), output);
// const outfile = new URL(file.replace(/\.js$/, ".html"), outputUrl);
