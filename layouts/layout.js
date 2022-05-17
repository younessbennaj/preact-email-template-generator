import { html } from "htm/preact/index.mjs";

const Footer = () => html`
  <div
    style="max-width: 680px; padding: 24px 48px; margin: 0 auto"
    class="email-container"
  >
    <table
      align="center"
      border="0"
      cellpadding="0"
      cellspacing="0"
      role="presentation"
      style="width: 100%"
    >
      <tr>
        <td style="text-align: left">
          <p
            style="
                  color: #8295a9;
                  font-size: 12px;
                  line-height: 20px;
                  word-break: break-word; ;
                "
          >
            Toute l’équipe est disponible par chat ou par e-mail sur
            <a
              class="link"
              href="contact@leeto.co"
              style="text-decoration: none; color: #079cee"
            >
              ${" "}contact@leeto.co</a
            >
            si vous avez la moindre question.<br />
            Besoin d’aide ?
            <a
              class="link"
              href="https://leeto.helpscoutdocs.com/"
              target="_blank"
              style="text-decoration: none; color: #079cee"
            >
              ${" "}Consultez notre foire aux questions</a
            >.
          </p>
        </td>
      </tr>
    </table>
  </div>
`;

export const Layout = ({ pageTitle, template }) => html`
  <!-- <!DOCTYPE html> -->
  <html
    xmlns="http://www.w3.org/1999/xhtml"
    xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office"
    lang="fr"
  >
    <head>
      <meta charset="utf-8" />
      <!-- utf-8 works for most cases -->
      <meta name="viewport" content="width=device-width" />
      <!-- Forcing initial-scale shouldn't be necessary -->
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <!-- Use the latest (edge) version of IE rendering engine -->
      <meta name="x-apple-disable-message-reformatting" />
      <!-- Disable auto-scale in iOS 10 Mail entirely -->
      <meta
        name="format-detection"
        content="telephone=no,address=no,email=no,date=no,url=no"
      />
      <!-- Tell iOS not to automatically link certain text strings. -->
      <meta name="color-scheme" content="light" />
      <meta name="supported-color-schemes" content="light" />
      <!-- The title tag shows in email notifications, like Android 4.4. -->

      <title>${pageTitle}</title>

      <style type="text/css">
        body {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
            Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
            sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
          margin: 0;
          padding: 48px;
        }

        @media (max-width: 480px) {
          body {
            padding: 0px !important;
          }
        }
      </style>
    </head>
    <body style="word-spacing: normal; background-color: #f0f3f7">
      <center
        role="article"
        aria-roledescription="email"
        lang="fr"
        style="width: 100%; background-color: #f0f3f7"
      >
        <!--
            Set the email width. Defined in two places:
            1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 680px.
            2. MSO tags for Desktop Windows Outlook enforce a 680px width.
            Note: The Fluid and Responsive templates have a different width (600px). The hybrid grid is more "fragile", and I've found that 680px is a good width. Change with caution.
        -->
        <div
          style="border-radius: 8px; background-color: #ffffff; max-width: 680px; margin: 0 auto; padding: 48px;"
          class="email-container"
        >
          <!-- Email Body : BEGIN -->
          <table
            role="presentation"
            cellspacing="0"
            cellpadding="0"
            border="0"
            width="100%"
            style="margin: auto"
          >
            <!-- Email Header : BEGIN -->
            <tr>
              <td style="padding-bottom: 48px; width: 100px">
                <img
                  height="auto"
                  src="https://i.ibb.co/q9qcHxq/logo.png"
                  style="
                    border: 0;
                    display: block;
                    outline: none;
                    text-decoration: none;
                    height: auto;
                  "
                  width="100"
                />
              </td>
            </tr>
            <tr>
              <td style="background-color: #ffffff">
                <table
                  role="presentation"
                  cellspacing="0"
                  cellpadding="0"
                  border="0"
                  width="100%"
                >
                  <tr>
                    <td>${template}</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
        <!-- Email Footer : BEGIN -->
        <${Footer} />
      </center>
    </body>
  </html>
`;
