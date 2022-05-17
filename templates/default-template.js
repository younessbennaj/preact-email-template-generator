import { html } from "htm/preact/index.mjs";
import { Layout } from "../layouts/layout.js";
import { SmallTransactionalTemplateWrapper } from "../components/wrapper.js";

const title = "Nulla fermentum semper porta !";

const paragraph = html`
  Hi XXX,
  <br />
  <br />
  Lorem ipsum dolor sit amet, consectetur
  <span class="blue-text" style="color: #079cee">${" "}adipiscing${" "}</span
  >elit. Proin viverra cursus fringilla. Nam tempus, nisi in iaculis euismod,
  nibh felis cursus nunc, in sollicitudin enim elit sed mauris.
  <br />
  <br />
  Phasellus sit amet tortor dictum nibh suscipit placerat at in
  <strong style="font-weight: 600">${" "}justo.</strong>
`;

const DefaultTemplate = html`
  <${SmallTransactionalTemplateWrapper}
    title=${title}
    paragraph=${paragraph}
    buttonLink=${"https://app.leeto.co/admin/comptes"}
    buttonLabel=${"Click me"}
  />
`;

export const template = html`
  <${Layout}
    pageTitle="Default Email Template Generated"
    template=${DefaultTemplate}
  />
`;
