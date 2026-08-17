// Step 2 of the Decap CMS GitHub OAuth handshake. GitHub redirects here after
// the editor approves access. We verify the anti-CSRF `state` value matches
// what api/auth.js set, exchange the code for an access token, and hand that
// token back to the /admin popup that started the flow via postMessage.
import { AuthorizationCode } from "simple-oauth2";
import { oauthClientConfig, STATE_COOKIE } from "../lib/oauth-config.js";

function parseCookies(header) {
  const cookies = {};
  if (!header) return cookies;
  for (const pair of header.split(";")) {
    const idx = pair.indexOf("=");
    if (idx === -1) continue;
    cookies[pair.slice(0, idx).trim()] = decodeURIComponent(pair.slice(idx + 1).trim());
  }
  return cookies;
}

function renderMessage(status, payload) {
  return `<!doctype html>
<html><body>
<script>
  (function () {
    function receiveMessage(message) {
      window.opener.postMessage(
        'authorization:github:${status}:${JSON.stringify(payload).replace(/</g, "\\u003c")}',
        message.origin
      );
      window.removeEventListener("message", receiveMessage, false);
    }
    window.addEventListener("message", receiveMessage, false);
    window.opener.postMessage("authorizing:github", "*");
  })();
</script>
</body></html>`;
}

export default async function handler(req, res) {
  // Always clear the one-time state cookie, regardless of outcome.
  res.setHeader("Set-Cookie", `${STATE_COOKIE}=; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Path=/`);

  const cookies = parseCookies(req.headers.cookie);
  const { code, state } = req.query || {};

  if (!state || !cookies[STATE_COOKIE] || state !== cookies[STATE_COOKIE]) {
    res.status(403);
    res.setHeader("Content-Type", "text/html");
    return res.end(renderMessage("error", { message: "Invalid or missing state — request rejected." }));
  }

  if (!code) {
    res.status(400);
    res.setHeader("Content-Type", "text/html");
    return res.end(renderMessage("error", { message: "Missing authorization code." }));
  }

  try {
    const protocol = req.headers["x-forwarded-proto"] || "https";
    const redirectUri = `${protocol}://${req.headers.host}/api/callback`;

    const client = new AuthorizationCode(oauthClientConfig);
    const accessToken = await client.getToken({ code, redirect_uri: redirectUri });
    const token = accessToken.token["access_token"];

    res.status(200);
    res.setHeader("Content-Type", "text/html");
    res.end(renderMessage("success", { token, provider: "github" }));
  } catch (err) {
    console.error("OAuth token exchange failed:", err.message);
    res.status(502);
    res.setHeader("Content-Type", "text/html");
    res.end(renderMessage("error", { message: "Token exchange failed." }));
  }
}
