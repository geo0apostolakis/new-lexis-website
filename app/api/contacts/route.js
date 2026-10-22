import { contactEmail } from "@/lib/messages";
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
    email: field(body.email, 200),
    phone: field(body.phone, 40),
    subject: field(body.subject, 200),
    message: field(body.message, 5000),
  };
  if (!form.name || !form.email || !form.message) {
    return Response.json({ detail: "Συμπλήρωσε όλα τα υποχρεωτικά πεδία." }, { status: 422 });
  }
  if (!EMAIL_RE.test(form.email)) {
    return Response.json({ detail: "Το email δεν είναι έγκυρο." }, { status: 422 });
  }

  try {
    const { sent } = await sendToInbox({ ...contactEmail(form), replyTo: form.email });
    if (!sent) return Response.json({ mailto: true }, { status: 503 });
    return Response.json({ ok: true });
  } catch (err) {
    console.error("contact email failed", err);
    return Response.json({ mailto: true }, { status: 502 });
  }
}
