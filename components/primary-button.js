import { html } from "htm/preact/index.mjs";

export const PrimaryButton = ({ align, href, content, spacing }) => html`
  <table
    align=${align}
    role="presentation"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="margin: auto;"
    width="100%"
  >
    <tr>
      <td class="button-td button-td-primary">
        <a
          class="button-a button-a-primary"
          href=${href}
          style="
            display: inline-block;
            background: #079cee;
            color: #ffffff;
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            margin: 0;
            text-decoration: none;
            text-transform: none;
            padding: 8px 16px;
            margin-bottom: ${spacing};
            mso-padding-alt: 0px;
            border-radius: 8px;"
          >${content}</a
        >
      </td>
    </tr>
  </table>
`;
