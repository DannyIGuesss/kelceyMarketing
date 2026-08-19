// Vercel serverless function — receives contact form POSTs and emails them to Kelcey.
// Uses Resend (resend.com): free tier covers ~3,000 emails/month, no server to run.
//
// Setup (one-time, ~5 min):
// 1. Create a free account at https://resend.com
// 2. Verify a sending domain (or use their default onboarding domain for testing)
// 3. Create an API key
// 4. In Vercel: Project Settings > Environment Variables, add:
//      RESEND_API_KEY = <your key>
//      CONTACT_TO_EMAIL = kelcey's real inbox address
// 5. Redeploy

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

function renderEmailHtml({ name, email, studio, website, message, challenges, budget }) {
  const row = (label, value) => `
    <tr>
      <td style="padding: 10px 0; border-bottom: 1px solid #e5e5e5; color: #8a8a8a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; white-space: nowrap; vertical-align: top;">${label}</td>
      <td style="padding: 10px 0 10px 20px; border-bottom: 1px solid #e5e5e5; color: #1c1b19; font-size: 15px; vertical-align: top;">${value}</td>
    </tr>`;

  const block = (label, value) => `
    <div style="margin-top: 24px;">
      <p style="margin: 0 0 6px; color: #8a8a8a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em;">${label}</p>
      <p style="margin: 0; color: #1c1b19; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${value}</p>
    </div>`;

  return `
  <div style="background-color: #f5f5f5; padding: 32px 16px; font-family: Georgia, 'Times New Roman', serif;">
    <div style="max-width: 560px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #262626; padding: 28px 32px;">
        <p style="margin: 0; color: #ffffff; font-size: 20px; letter-spacing: 0.05em;">Heart &amp; Glass Socials</p>
        <p style="margin: 4px 0 0; color: #ffffff99; font-size: 13px; text-transform: uppercase; letter-spacing: 0.15em;">New Consult Request</p>
      </div>
      <div style="padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          ${row("Name", escapeHtml(name))}
          ${row("Email", `<a href="mailto:${escapeHtml(email)}" style="color: #1c1b19;">${escapeHtml(email)}</a>`)}
          ${row("Studio", escapeHtml(studio || "—"))}
          ${row("Website / Instagram", escapeHtml(website || "—"))}
          ${row("Budget range", escapeHtml(budget || "—"))}
        </table>
        ${block("What support are they looking for?", escapeHtml(message))}
        ${block("Current marketing challenges", escapeHtml(challenges || "—"))}
      </div>
    </div>
  </div>`;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, studio, website, message, challenges, budget, company } = req.body || {};

  // Honeypot: real visitors never see or fill this field, so a non-empty
  // value means a bot filled the form. Pretend success without emailing.
  if (company) {
    return res.status(200).json({ ok: true });
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    console.error("Contact form misconfigured: RESEND_API_KEY or CONTACT_TO_EMAIL is not set");
    return res.status(500).json({ error: "Contact form is not configured" });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Heart & Glass Socials Website <onboarding@resend.dev>", // swap once a domain is verified in Resend
        to: process.env.CONTACT_TO_EMAIL,
        reply_to: email,
        subject: `New consult request from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nStudio: ${studio || "—"}\nWebsite/Instagram: ${
          website || "—"
        }\nBudget range: ${budget || "—"}\n\nWhat support are you looking for?\n${message}\n\nCurrent marketing challenges:\n${
          challenges || "—"
        }`,
        html: renderEmailHtml({ name, email, studio, website, message, challenges, budget }),
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("Resend error:", err);
      return res.status(502).json({ error: "Email provider error" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
