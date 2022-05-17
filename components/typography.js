import { html } from "htm/preact/index.mjs";

export const Heading = (props) => html`
  <h1
    ...${props}
    style="
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      margin: 0;
      margin-bottom: ${props.spacing};
      text-align: left;
      color: #000000;"
  />
`;

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
