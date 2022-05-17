import { html } from "htm/preact/index.mjs";
import { Heading, Text } from "../components/typography.js";
import { PrimaryButton } from "../components/primary-button.js";

export const SmallTransactionalTemplateWrapper = ({
  title,
  paragraph,
  buttonLabel,
  buttonLink,
}) => html`
  <div>
    <${Heading} spacing=${24}>${title}<//>
    <${Text} spacing=${24}>${paragraph}<//>
    <${PrimaryButton}
      align="left"
      href=${buttonLink}
      content=${buttonLabel}
      spacing=${24}
    />
    <${Text} text=${"À bientôt,"} />
    <table
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="
        border-collapse: collapse;
        border-spacing: 0px;
      "
    >
      <tbody>
        <tr>
          <td style="width: 105px">
            <img
              height="auto"
              src="https://i.ibb.co/J2Wb8K8/signature.png"
              style="
                      border: 0;
                      display: block;
                      outline: none;
                      text-decoration: none;
                      height: auto;
                      width: 100%;
                      font-size: 13px;
                    "
              width="105"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
`;
