import { INBOX } from "@/lib/messages";

// Sends a form submission to the New Lexis inbox through Resend.
// Returns { sent: false } when RESEND_API_KEY is not set, so the browser can fall back to mailto.
export async function sendToInbox({ subject, lines, replyTo }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { sent: false };

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: process.env.MAIL_FROM || "New Lexis Website <onboarding@resend.dev>",
      to: [process.env.MAIL_TO || INBOX],
      reply_to: replyTo || undefined,
      subject,
      text: lines.join("\n"),
    }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}: ${await res.text()}`);
  return { sent: true };
}

// Trims a form field and caps its length; anything that isn't a string becomes "".
export function field(v, max = 500) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
