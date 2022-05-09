import { html } from "htm/preact/index.mjs";

export const Heading = ({ text, spacing }) => html` <h1
  style="
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      margin: 0;
      margin-bottom: ${spacing};
      text-align: left;
      color: #000000;"
>
  ${text}
</h1>`;

export const Text = ({ text, spacing }) => html`
  <p
    style="
      font-size: 14px;
      line-height: 22px;
      margin: 0;
      margin-bottom: ${spacing};
      text-align: left;
      color: #8295a9;"
  >
    ${text}
  </p>
`;
