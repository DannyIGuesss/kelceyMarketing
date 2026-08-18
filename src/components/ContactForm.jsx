import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [form, setForm] = useState({
    name: "",
    email: "",
    studio: "",
    website: "",
    message: "",
    challenges: "",
    budget: "",
    company: "",
  });

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
      setForm({
        name: "",
        email: "",
        studio: "",
        website: "",
        message: "",
        challenges: "",
        budget: "",
        company: "",
      });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="text-center">
        <p className="font-display text-2xl text-paper">Thank you — message sent.</p>
        <p className="mt-2 text-sm text-paper/70">Kelcey will follow up within 1–2 business days.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
        <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Business / Studio Name" name="studio" value={form.studio} onChange={handleChange} />
        <Field label="Website / Instagram" name="website" value={form.website} onChange={handleChange} />
      </div>
      <Textarea
        label="What support are you looking for?"
        name="message"
        value={form.message}
        onChange={handleChange}
        required
      />
      <Textarea
        label="Current marketing challenges"
        name="challenges"
        value={form.challenges}
        onChange={handleChange}
        rows={3}
      />
      <Field label="Budget range (optional)" name="budget" value={form.budget} onChange={handleChange} />

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
          <p className="text-sm text-red-400">
            Something went wrong sending that — try again, or email kelceydelatorre2121@icloud.com directly.
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-fit rounded-md border border-paper px-8 py-3 text-[11px] uppercase tracking-[0.2em] text-paper transition-colors hover:bg-paper hover:text-ink disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Submit Inquiry"}
      </button>
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", required }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-paper/70">{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-md border border-paper/25 bg-transparent px-3 py-2 font-body text-paper outline-none placeholder:text-paper/40 focus:border-paper"
      />
    </div>
  );
}

function Textarea({ label, name, value, onChange, required, rows = 4 }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-paper/70">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-md border border-paper/25 bg-transparent px-3 py-2 font-body text-paper outline-none placeholder:text-paper/40 focus:border-paper"
      />
    </div>
  );
}
