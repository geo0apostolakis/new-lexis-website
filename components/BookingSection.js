"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { bookingEmail, mailtoHref } from "@/lib/messages";

const API = "/api";

const languages = ["Αγγλικά", "Γαλλικά", "Γερμανικά", "Ιταλικά", "Ισπανικά"];
const levels = ["Άγνωστο / Αρχάριος", "A1", "A2", "B1", "B2", "C1", "C2"];

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  language: "Αγγλικά",
  current_level: "Άγνωστο / Αρχάριος",
  preferred_datetime: "",
  message: "",
};

export default function BookingSection() {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/bookings`, form);
      toast.success("Λάβαμε το αίτημά σου! Θα σε καλέσουμε σύντομα.");
      setSuccess(true);
      setForm(EMPTY);
    } catch (err) {
      if (err?.response?.data?.mailto) {
        // No email service configured (or it failed): hand the request to the visitor's mail app instead of losing it
        window.location.href = mailtoHref(bookingEmail(form));
        toast("Άνοιξε το email σου για να ολοκληρώσεις την αποστολή.");
      } else {
        const msg = err?.response?.data?.detail || "Παρουσιάστηκε σφάλμα. Δοκίμασε ξανά.";
        toast.error(typeof msg === "string" ? msg : "Σφάλμα.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="booking"
      data-testid="booking-section"
      className="py-24 lg:py-36 border-b border-black/10 bg-[var(--grey-pale)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-5">
          <span data-reveal className="label-eyebrow tag inline-block">06 — Δωρεάν Τεστ</span>
          <h2 data-split className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-medium">
            Κλείσε <em className="italic mark">δωρεάν</em> διαγνωστικό τεστ.
          </h2>
          <p data-reveal className="mt-6 text-[15px] leading-[1.75] text-[var(--ink-soft)] font-light max-w-md">
            Συμπλήρωσε τη φόρμα και θα σε καλέσουμε για να συμφωνήσουμε ημέρα,
            ώρα και γλώσσα. Εντελώς δωρεάν & χωρίς καμία δέσμευση.
          </p>
          <ul data-stagger className="mt-10 space-y-3 text-sm text-[var(--ink-soft)]">
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[var(--ink)]" /> 5 γλώσσες · A1—C2
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[var(--ink)]" /> Δια ζώσης ή online
            </li>
            <li className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[var(--ink)]" /> Γραπτή αναφορά επιπέδου
            </li>
          </ul>
        </div>

        <form
          onSubmit={submit}
          data-testid="booking-form"
          data-reveal
          className="col-span-12 lg:col-span-7 bg-white border border-black/15 p-8 lg:p-12"
        >
          {success && (
            <div
              data-testid="booking-success"
              className="mb-6 border border-[var(--ink)] border-l-4 border-l-[var(--accent)] bg-[var(--accent-pale)] p-4 text-sm"
            >
              <strong className="font-medium">Ευχαριστούμε!</strong> Θα
              επικοινωνήσουμε μαζί σου σύντομα.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="label-eyebrow text-[10px] block mb-2">
                Ονοματεπώνυμο
              </label>
              <input
                required
                value={form.name}
                onChange={update("name")}
                className="lx-input"
                placeholder="Π.χ. Μαρία Παπαδοπούλου"
                data-testid="booking-name"
              />
            </div>
            <div>
              <label className="label-eyebrow text-[10px] block mb-2">
                Τηλέφωνο
              </label>
              <input
                required
                value={form.phone}
                onChange={update("phone")}
                className="lx-input"
                placeholder="69XXXXXXXX"
                data-testid="booking-phone"
              />
            </div>
            <div className="md:col-span-2">
              <label className="label-eyebrow text-[10px] block mb-2">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                className="lx-input"
                placeholder="name@email.com"
                data-testid="booking-email"
              />
            </div>
            <div>
              <label className="label-eyebrow text-[10px] block mb-2">
                Γλώσσα ενδιαφέροντος
              </label>
              <select
                value={form.language}
                onChange={update("language")}
                className="lx-input"
                data-testid="booking-language"
              >
                {languages.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="label-eyebrow text-[10px] block mb-2">
                Τρέχον επίπεδο
              </label>
              <select
                value={form.current_level}
                onChange={update("current_level")}
                className="lx-input"
                data-testid="booking-level"
              >
                {levels.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="label-eyebrow text-[10px] block mb-2">
                Προτιμώμενη ώρα
              </label>
              <input
                required
                value={form.preferred_datetime}
                onChange={update("preferred_datetime")}
                className="lx-input"
                placeholder="Π.χ. Τρίτη 18:00"
                data-testid="booking-datetime"
              />
            </div>
            <div className="md:col-span-2">
              <label className="label-eyebrow text-[10px] block mb-2">
                Σχόλια (προαιρετικό)
              </label>
              <textarea
                value={form.message}
                onChange={update("message")}
                rows={3}
                className="lx-input resize-none"
                placeholder="Πες μας οτιδήποτε σχετικό…"
                data-testid="booking-message"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            data-testid="booking-submit"
            className="mt-8 lx-btn-primary w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Αποστολή…" : "Κλείσε δωρεάν διαγνωστικό τεστ →"}
          </button>

          <p className="mt-5 text-xs text-[var(--muted)]">
            Με την υποβολή αποδέχεσαι την επικοινωνία μας μέσω τηλεφώνου ή email.
            Δεν κοινοποιούμε ποτέ τα στοιχεία σου.
          </p>
        </form>
      </div>
    </section>
  );
}
