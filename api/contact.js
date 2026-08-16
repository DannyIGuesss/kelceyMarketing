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
