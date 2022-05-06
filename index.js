import { html } from "htm/preact/index.mjs";
import render from "preact-render-to-string";

export const body = html`
  <html>
    <head>
      <title>Mon premier template</title>
    </head>
    <body>
      <div>
        <h1>Hello World!</h1>
        <p>A simple Email Tempmate Generate with React</p>
      </div>
    </body>
  </html>
`;

const htmlContent = render(body);

console.log(htmlContent);
