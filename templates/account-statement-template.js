import { html } from "htm/preact/index.mjs";
import { SmallTransactionalTemplateWrapper } from "../components/wrapper.js";

const title = "Un nouveau relevé de compte est disponible!";

const paragraph = html`
  Bonjour XXX,
  <br />
  <br />
  Votre dernier relevé de compte pour le
  <span class="blue-text" style="color: #079cee">${" "}compte ASC${" "}</span>
  sur le mois de
  <span class="blue-text" style="color: #079cee">${" "}janvier 2022${" "}</span>
  est à présent disponible.
  <br />
  <br />
  Retrouvez celui-ci sur votre espace Leeto, rubrique
  <strong style="font-weight: 600">${" "}Comptes</strong>
`;

export const AccountStatementTemplate = html`
  <${SmallTransactionalTemplateWrapper}
    title=${title}
    paragraph=${paragraph}
    buttonLink=${"https://app.leeto.co/admin/comptes"}
    buttonLabel=${"Voir mon relevé"}
  />
`;
