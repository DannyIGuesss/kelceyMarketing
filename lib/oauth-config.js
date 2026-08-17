// Shared config for the GitHub OAuth proxy (api/auth.js + api/callback.js).
// Decap CMS's "github" backend expects a Netlify-shaped OAuth handshake; since
// this site is on Vercel, these two routes provide that handshake ourselves.

export const STATE_COOKIE = "decap_oauth_state";

// Client ID/secret are deliberately read from plain (non-VITE_-prefixed) env
// vars — Vite only inlines VITE_-prefixed vars into the client bundle, so this
// naming is what keeps the secret server-side only.
export const oauthClientConfig = {
  client: {
    id: process.env.OAUTH_GITHUB_CLIENT_ID,
    secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
  },
  auth: {
    tokenHost: "https://github.com",
    tokenPath: "/login/oauth/access_token",
    authorizePath: "/login/oauth/authorize",
  },
};

export const GITHUB_SCOPE = "repo,user";
