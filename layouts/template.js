import { html } from "htm/preact/index.mjs";
import { Heading, Text } from "../components/typography.js";
import { PrimaryButton } from "../components/primary-button.js";

const title = "Un nouveau relevé de compte est disponible!";

const paragraph = html`
  Bonjour XXX,
  <br />
  <br />
  Votre dernier relevé de compte pour le
  <span class="blue-text" style="color: #079cee">&nbsp;compte ASC&nbsp;</span>
  sur le mois de
  <span class="blue-text" style="color: #079cee">&nbsp;janvier 2022&nbsp;</span>
  est à présent disponible.
  <br />
  <br />
  Retrouvez celui-ci sur votre espace Leeto, rubrique
  <strong style="font-weight: 600">&nbsp;Comptes</strong>
`;

export const Template = ({ title, paragraph }) => html`
  <div>
    <${Heading} text=${title} spacing=${24} />
    <${Text} text=${paragraph} spacing=${24} />
    <${PrimaryButton}
      align="left"
      href=${"https://app.leeto.co/admin/comptes"}
      content=${"Voir mon relevé"}
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

export const AccountStatementTemplate = html`
  <${Template} title=${title} paragraph=${paragraph} />
`;
