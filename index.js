import {
  html,
  render as renderComponent,
  Component,
} from "htm/preact/index.mjs";
import render from "preact-render-to-string";

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

const htmlContent = render(Layout);

console.log(htmlContent);
