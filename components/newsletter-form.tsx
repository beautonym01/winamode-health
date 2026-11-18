"use client";

import { useState, type FormEvent } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input id="newsletter-email" type="email" placeholder="Your email address" required className="h-12 min-w-0 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-white/50 focus:border-white" />
      <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-brand transition hover:bg-[#e9f4f1]">
        {submitted ? <>You&apos;re in <FiCheck /></> : <>Subscribe <FiArrowRight /></>}
      </button>
      {submitted && <p role="status" className="sr-only">Thanks for subscribing.</p>}
    </form>
  );
}
