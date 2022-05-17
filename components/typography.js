import { html } from "htm/preact/index.mjs";

export const Heading = (props) => {
  const { spacing = 0, align = "left" } = props;
  return html`
    <h1
      ...${props}
      style="
      font-size: 24px;
      font-weight: 600;
      line-height: 32px;
      margin: 0;
      margin-bottom: ${props.spacing};
      text-align: ${props.align};
      color: #000000;"
    />
  `;
};

export const Text = (props) => {
  const { spacing = 0, align = "left" } = props;
  return html`
    <p
      ...${props}
      style="
      font-size: 14px;
      line-height: 22px;
      margin: 0;
      margin-bottom: ${spacing};
      text-align: ${align};
      color: #8295a9;"
    />
  `;
};

export const HighlightedText = (props) => {
  return html`
    <span
      ...${props}
      style="
      color: ${props.color};"
    />
  `;
};
