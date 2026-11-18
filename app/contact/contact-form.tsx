"use client";

import { useState, type FormEvent } from "react";
import { FiCheck } from "react-icons/fi";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-black/[0.05] bg-white p-5 sm:p-7">
      <h2 className="font-display text-xl font-semibold">Send us a note</h2>
      <p className="mt-2 text-sm text-[#7b8380]">We usually get back to you within one business day.</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-medium text-[#5d6663]">Your name<input required name="name" autoComplete="name" className="mt-2 h-11 w-full rounded-xl border border-black/10 px-3 text-sm" placeholder="Name" /></label>
        <label className="text-xs font-medium text-[#5d6663]">Email address<input required name="email" type="email" autoComplete="email" className="mt-2 h-11 w-full rounded-xl border border-black/10 px-3 text-sm" placeholder="you@example.com" /></label>
        <label className="text-xs font-medium text-[#5d6663] sm:col-span-2">How can we help?<select name="topic" className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm"><option>General question</option><option>Order support</option><option>Pharmacy or health products</option><option>Orthopedic or wound-care supplies</option><option>Cleaning kits or laboratory supplies</option><option>Consultation</option></select></label>
        <label className="text-xs font-medium text-[#5d6663] sm:col-span-2">Your message<textarea required name="message" rows={5} className="mt-2 w-full resize-y rounded-xl border border-black/10 px-3 py-3 text-sm" placeholder="Write your message..." /></label>
      </div>
      <button type="submit" className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white">{sent ? <>Message received <FiCheck /></> : "Send message"}</button>
      {sent && <p role="status" className="mt-3 text-xs text-brand">Thanks for reaching out. This demo form is ready to connect to your support inbox.</p>}
    </form>
  );
}
