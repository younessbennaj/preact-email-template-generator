import { html } from "htm/preact/index.mjs";
import { Layout } from "../layouts/layout.js";
import { SmallTransactionalTemplateWrapper } from "../components/wrapper.js";
import { HighlightedText } from "../components/typography.js";

const title = "Un nouveau relevé de compte est disponible !";

const paragraph = html`
  Bonjour,
  <br />
  <br />
  Votre dernier relevé de compte pour le
  <span style="color: #079cee"> compte ASC </span>
  sur le mois de
  <span style="color: #079cee"> janvier 2022 </span>
  est à présent disponible.
  <br />
  <br />
  Retrouvez celui-ci sur votre espace Leeto, rubrique
  <strong style="font-weight: 600"> Comptes.</strong>
`;

const AccountStatementTemplate = html`
  <${SmallTransactionalTemplateWrapper}
    title=${title}
    paragraph=${paragraph}
    buttonLink=${"https://app.leeto.co/admin/comptes"}
    buttonLabel=${"Voir mon relevé"}
  />
`;

export const template = html`
  <${Layout}
    pageTitle="Account Statement Template"
    template=${AccountStatementTemplate}
  />
`;
