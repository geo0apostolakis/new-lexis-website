import { bookingEmail } from "@/lib/messages";
import { sendToInbox, field, EMAIL_RE } from "@/lib/notify";

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ detail: "Μη έγκυρο αίτημα." }, { status: 400 });
  }

  const form = {
    name: field(body.name, 120),
    phone: field(body.phone, 40),
    email: field(body.email, 200),
    language: field(body.language, 40),
    current_level: field(body.current_level, 40),
    preferred_datetime: field(body.preferred_datetime, 120),
    message: field(body.message, 2000),
  };
  if (!form.name || !form.phone || !form.email || !form.preferred_datetime) {
    return Response.json({ detail: "Συμπλήρωσε όλα τα υποχρεωτικά πεδία." }, { status: 422 });
  }
  if (!EMAIL_RE.test(form.email)) {
    return Response.json({ detail: "Το email δεν είναι έγκυρο." }, { status: 422 });
  }

  try {
    const { sent } = await sendToInbox({ ...bookingEmail(form), replyTo: form.email });
    if (!sent) return Response.json({ mailto: true }, { status: 503 });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("booking email failed", err);
    return Response.json({ mailto: true }, { status: 502 });
  }
}
