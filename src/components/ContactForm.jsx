import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({ name: "", email: "", studio: "", message: "", company: "" });

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setForm({ name: "", email: "", studio: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-line bg-paper-dim p-8 text-center">
        <p className="font-display text-2xl">Thank you — message sent.</p>
        <p className="mt-2 text-sm text-clay">Kelcey will follow up within 1–2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <Field label="Studio / Business Name" name="studio" value={form.studio} onChange={handleChange} />
      <div>
        <label htmlFor="message" className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-clay">
          What are you looking for help with?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          className="w-full rounded-md border border-ink bg-transparent px-3 py-2 font-body text-ink outline-none focus:border-ink"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={form.company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div aria-live="polite">
        {status === "error" && (
          <p className="text-sm text-red-700">
            Something went wrong sending that — try again, or email hello@kelceyandco.com directly.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-fit rounded-full bg-ink px-8 py-3 text-[11px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-ink-soft disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-clay">{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-md border border-ink bg-transparent px-3 py-2 font-body text-ink outline-none focus:border-ink"
      />
    </div>
  );
}
