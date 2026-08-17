// Step 1 of the Decap CMS GitHub OAuth handshake. Decap's admin UI redirects
// here (configured as `auth_endpoint: api/auth` in public/admin/config.yml)
// to start login. We generate a random anti-CSRF `state` value, store it in
// an HttpOnly cookie only we can read, and send the browser to GitHub.
import { AuthorizationCode } from "simple-oauth2";
import crypto from "crypto";
import { oauthClientConfig, GITHUB_SCOPE, STATE_COOKIE } from "../lib/oauth-config.js";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).send("Method not allowed");
  }

  if (!process.env.OAUTH_GITHUB_CLIENT_ID || !process.env.OAUTH_GITHUB_CLIENT_SECRET) {
    console.error("OAuth misconfigured: OAUTH_GITHUB_CLIENT_ID or OAUTH_GITHUB_CLIENT_SECRET is not set");
    return res.status(500).send("Content editor is not configured");
  }

  const state = crypto.randomBytes(16).toString("hex");
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const redirectUri = `${protocol}://${req.headers.host}/api/callback`;

  const client = new AuthorizationCode(oauthClientConfig);
  const authorizationUri = client.authorizeURL({
    redirect_uri: redirectUri,
    scope: GITHUB_SCOPE,
    state,
  });

  // SameSite=Lax (not Strict) is required here — the browser returns to
  // /api/callback via a top-level cross-site redirect from github.com, which
  // Strict cookies are not sent on.
  res.setHeader(
    "Set-Cookie",
    `${STATE_COOKIE}=${state}; HttpOnly; Secure; SameSite=Lax; Max-Age=600; Path=/`
  );
  res.setHeader("Location", authorizationUri);
  res.status(302).end();
}
