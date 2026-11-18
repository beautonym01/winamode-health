"use client";

import { useState, type FormEvent } from "react";
import { FiCheck } from "react-icons/fi";

export function BookingForm() {
  const [booked, setBooked] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBooked(true);
  }

  return (
    <form onSubmit={submit} className="rounded-2xl border border-black/[0.05] bg-white p-5 sm:p-7">
      <h2 className="font-display text-xl font-semibold">Request a consultation</h2>
      <p className="mt-2 text-sm text-[#7b8380]">Share a few details and our team will follow up to confirm a suitable time.</p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-medium text-[#5d6663]">Full name<input required name="name" autoComplete="name" className="mt-2 h-11 w-full rounded-xl border border-black/10 px-3 text-sm" placeholder="Your name" /></label>
        <label className="text-xs font-medium text-[#5d6663]">Email<input required name="email" type="email" autoComplete="email" className="mt-2 h-11 w-full rounded-xl border border-black/10 px-3 text-sm" placeholder="you@example.com" /></label>
        <label className="text-xs font-medium text-[#5d6663]">Phone<input required name="phone" type="tel" autoComplete="tel" className="mt-2 h-11 w-full rounded-xl border border-black/10 px-3 text-sm" placeholder="+260 97 000 0000" /></label>
        <label className="text-xs font-medium text-[#5d6663]">Consultation type<select name="service" className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm"><option>Nutrition consultation</option><option>Wellness consultation</option><option>Lifestyle coaching</option></select></label>
        <label className="text-xs font-medium text-[#5d6663]">Preferred date<input required name="date" type="date" min={new Date().toISOString().slice(0, 10)} className="mt-2 h-11 w-full rounded-xl border border-black/10 px-3 text-sm" /></label>
        <label className="text-xs font-medium text-[#5d6663]">Preferred time<select name="time" className="mt-2 h-11 w-full rounded-xl border border-black/10 bg-white px-3 text-sm"><option>Morning (9am–12pm)</option><option>Afternoon (12pm–4pm)</option><option>Evening (4pm–6pm)</option></select></label>
        <label className="text-xs font-medium text-[#5d6663] sm:col-span-2">What would you like to focus on? <span className="font-normal text-[#939a97]">(optional)</span><textarea name="focus" rows={3} className="mt-2 w-full rounded-xl border border-black/10 px-3 py-3 text-sm" placeholder="A little context helps us prepare." /></label>
      </div>
      <button type="submit" className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white">{booked ? <>Request received <FiCheck /></> : "Request a time"}</button>
      {booked && <p role="status" className="mt-3 text-xs text-brand">Thanks — your request is noted. In a live service, our team would contact you to confirm.</p>}
    </form>
  );
}
