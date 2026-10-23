"use client";

import type { FormEvent } from "react";

export default function ContactForm({ email }: { email: string }) {
  function openDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const name = String(fields.get("name") ?? "").trim();
    const replyTo = String(fields.get("email") ?? "").trim();
    const message = String(fields.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Let’s connect — ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${replyTo}`);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form contact-note" onSubmit={openDraft}>
      <div className="contact-note-heading">
        <p className="eyebrow">A note to Cameron</p>
        <h3>What’s on your mind?</h3>
        <p>A project, an opportunity, or just a hello.</p>
      </div>
      <div className="contact-details-row">
        <label className="form-field" htmlFor="contact-name">
          Your name
          <input id="contact-name" name="name" autoComplete="name" placeholder="Alex Morgan" required maxLength={120} />
        </label>
        <label className="form-field" htmlFor="contact-email">
          Your email
          <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="alex@example.com" required maxLength={254} />
        </label>
      </div>
      <label className="form-field" htmlFor="contact-message">
        Your message
        <textarea id="contact-message" name="message" rows={5} placeholder="Tell me a little about what you have in mind…" required maxLength={4000} />
      </label>
      <div className="contact-note-footer">
        <button className="button" type="submit">Create email draft <span aria-hidden="true">↗</span></button>
        <p id="contact-draft-hint">Opens your email app.<br />Review your note before sending.</p>
      </div>
    </form>
  );
}
