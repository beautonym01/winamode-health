"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { FiMessageCircle, FiSend, FiX } from "react-icons/fi";
import { products } from "@/lib/data";

type ChatMessage = {
  from: "user" | "assistant";
  text: string;
  links?: { href: string; label: string }[];
};

function getAssistantResponse(message: string): Omit<ChatMessage, "from"> {
  if (/symptom|pain|sick|medicine|diagnos|treat|illness|condition|side effect/i.test(message)) {
    return { text: "I can share general store information, but I can't diagnose or give medical advice. Please speak with a qualified healthcare professional about health concerns." };
  }
  if (/book|appointment|consult|coach/i.test(message)) {
    return {
      text: "We offer nutrition, wellness, and lifestyle consultations. Choose a service and request a time that works for you.",
      links: [{ href: "/consultations", label: "Explore consultations" }]
    };
  }
  if (/delivery|shipping|order/i.test(message)) {
    return { text: "We are based in Zambia and support customers locally and abroad. Standard delivery is free on orders over ZMW 500. For help, call +260 770 460 087 or email winamodehealthcaresolution@gmail.com." };
  }
  if (/clean|janitor|laboratory|orthop|wound|clinic|bulk|wholesale|decontamin|supplier/i.test(message)) {
    return {
      text: "We can help with pharmacy, clinical, orthopedic, laboratory, and cleaning-supply enquiries. Contact us to confirm product specifications and availability.",
      links: [{ href: "/services", label: "Browse business and healthcare supplies" }]
    };
  }

  const category = /protein|fitness|creatine|workout/i.test(message)
    ? "Fitness & Nutrition"
    : /skin|sunscreen|face|lotion|cleanser/i.test(message)
      ? "Personal Care"
      : /blood pressure|thermometer|glucose|device|monitor/i.test(message)
        ? "Medical Devices"
        : /detergent|disinfect|cleaner|wipes|cleaning/i.test(message)
        ? "Cleaning & Laboratory Supplies"
        : /wound/i.test(message)
          ? "Wound Care"
          : /orthop|mobility|traction|rehab/i.test(message)
            ? "Orthopedic & Mobility"
        : /vitamin|immune|immunity|supplement|zinc|omega/i.test(message)
          ? "Vitamins & Supplements"
          : null;

  if (category || /recommend|product|shop|find/i.test(message)) {
    const matches = products
      .filter((product) => category ? product.category === category : product.badge === "Bestseller")
      .slice(0, 3);
    return {
      text: matches.length
        ? "Here are a few options to explore. Product needs can be personal, so check the label and ask a healthcare professional if you need tailored advice."
        : "Browse our wellness essentials, or book a consultation for guidance tailored to you.",
      links: matches.map((product) => ({ href: `/product/${product.slug}`, label: product.name }))
    };
  }

  return { text: "I can help with product ideas, delivery details, and consultations. For personal medical advice, please speak with a qualified healthcare professional." };
}

export function AskWina() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: "assistant", text: "Hi, I'm WINA. I can help you find products, answer store FAQs, or get started with a consultation. What can I help with?" }
  ]);

  function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = message.trim();
    if (!text) return;
    const response = getAssistantResponse(text);
    setMessages((current) => [...current, { from: "user", text }, { from: "assistant", ...response }]);
    setMessage("");
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <section aria-label="Ask WINA chat" className="mb-3 flex h-[440px] w-[min(360px,calc(100vw-32px))] flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-2xl">
          <div className="flex items-center justify-between bg-brand px-5 py-4 text-white">
            <div><p className="font-semibold">Ask WINA</p><p className="text-xs text-white/70">Your wellness shopping assistant</p></div>
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)} className="grid h-8 w-8 place-items-center rounded-full hover:bg-white/15"><FiX /></button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((item, index) => <div key={`${index}-${item.from}`} className={`max-w-[88%] rounded-2xl px-3.5 py-3 text-xs leading-5 ${item.from === "assistant" ? "bg-[#F2F5F2] text-[#454e4b]" : "ml-auto bg-brand text-white"}`}><p>{item.text}</p>{item.links && <div className="mt-2 flex flex-col gap-1">{item.links.map((link) => <Link key={link.href} href={link.href} className="font-semibold text-brand underline underline-offset-2">{link.label} ↗</Link>)}</div>}</div>)}
          </div>
          <form onSubmit={sendMessage} className="flex gap-2 border-t border-black/5 p-3">
            <label htmlFor="wina-message" className="sr-only">Message Ask WINA</label>
            <input id="wina-message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Ask us anything..." className="min-w-0 flex-1 rounded-full bg-[#F5F5F2] px-4 text-xs outline-none" />
            <button type="submit" aria-label="Send message" className="grid h-9 w-9 place-items-center rounded-full bg-brand text-white"><FiSend /></button>
          </form>
        </section>
      )}
      <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close Ask WINA" : "Open Ask WINA"} className="ml-auto flex h-14 items-center gap-2 rounded-full bg-brand px-5 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-dark">
        {open ? <FiX className="text-lg" /> : <FiMessageCircle className="text-lg" />}<span>{open ? "Close" : "Ask WINA"}</span>
      </button>
    </div>
  );
}
