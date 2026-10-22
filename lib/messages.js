// Email text for form submissions. Shared by the API routes (sent through Resend)
// and the browser (mailto fallback when no email key is configured).

export const INBOX = "newlexis@outlook.com";

export function bookingEmail(f) {
  return {
    subject: `Δωρεάν διαγνωστικό τεστ · ${f.name}`,
    lines: [
      "Νέο αίτημα για δωρεάν διαγνωστικό τεστ από το site.",
      "",
      `Ονοματεπώνυμο: ${f.name}`,
      `Τηλέφωνο: ${f.phone}`,
      `Email: ${f.email}`,
      `Γλώσσα: ${f.language}`,
      `Τρέχον επίπεδο: ${f.current_level}`,
      `Προτιμώμενη ώρα: ${f.preferred_datetime}`,
      `Σχόλια: ${f.message || "—"}`,
    ],
  };
}

export function contactEmail(f) {
  return {
    subject: `Μήνυμα από το site · ${f.subject || f.name}`,
    lines: [
      "Νέο μήνυμα από τη φόρμα επικοινωνίας.",
      "",
      `Όνομα: ${f.name}`,
      `Email: ${f.email}`,
      `Τηλέφωνο: ${f.phone || "—"}`,
      `Θέμα: ${f.subject || "—"}`,
      "",
      f.message,
    ],
  };
}

export function mailtoHref({ subject, lines }) {
  return `mailto:${INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
