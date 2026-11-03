"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Instagram } from "@/components/SocialIcons";
import { INBOX, contactEmail, mailtoHref } from "@/lib/messages";

const API = "/api";

const EMPTY = { name: "", email: "", phone: "", subject: "", message: "" };

// Searching the business name (not the bare street address) makes the embed show the New Lexis
// listing card with its Google rating, and "Open in Maps" / directions land on that listing.
const PLACE = "New Lexis Language Centre, Ιωάννου Χρυσοστόμου 94, Πετρούπολη";
const MAP_SRC = `https://maps.google.com/maps?q=${encodeURIComponent(PLACE)}&z=17&output=embed`;
const DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(PLACE)}`;

export default function ContactSection() {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contacts`, form);
      toast.success("Το μήνυμά σου εστάλη. Θα απαντήσουμε άμεσα!");
      setForm(EMPTY);
    } catch (err) {
      if (err?.response?.data?.mailto) {
        window.location.href = mailtoHref(contactEmail(form));
        toast("Άνοιξε το email σου για να ολοκληρώσεις την αποστολή.");
      } else {
        toast.error("Σφάλμα. Δοκίμασε ξανά.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="py-24 lg:py-36 border-b border-black/10"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-5">
          <span data-reveal className="label-eyebrow inline-block">07 — Επικοινωνία</span>
          <h2 data-split className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-medium">
            Έλα <em className="italic mark">από κοντά</em>.
          </h2>

          <div data-stagger className="mt-12 space-y-6">
            <div className="flex items-start gap-4" data-testid="contact-address">
              <MapPin className="w-5 h-5 text-[var(--ink)] mt-1" strokeWidth={1.5} />
              <div>
                <div className="label-eyebrow text-[10px] text-[var(--muted)]">Διεύθυνση</div>
                <div className="text-[15px] mt-1">
                  Ιωάννου Χρυσοστόμου 94,
                  <br />
                  Πετρούπολη 132 31
                </div>
                <div className="label-eyebrow text-[10px] text-[var(--muted)] mt-4">Παράρτημα</div>
                <div className="text-[15px] mt-1" data-testid="contact-branch">
                  Ιωάννου Χρυσοστόμου 95,
                  <br />
                  Πετρούπολη 132 31
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4" data-testid="contact-phone">
              <Phone className="w-5 h-5 text-[var(--ink)] mt-1" strokeWidth={1.5} />
              <div>
                <div className="label-eyebrow text-[10px] text-[var(--muted)]">Τηλέφωνο</div>
                <a
                  href="tel:+302105060025"
                  className="link-hover text-[15px] mt-1 block"
                >
                  21 0506 0025
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4" data-testid="contact-hours">
              <Clock className="w-5 h-5 text-[var(--ink)] mt-1" strokeWidth={1.5} />
              <div>
                <div className="label-eyebrow text-[10px] text-[var(--muted)]">Ώρες</div>
                <div className="text-[15px] mt-1">
                  Δευτέρα – Παρασκευή
                  <br />
                  13:30 – 21:30
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4" data-testid="contact-email">
              <Mail className="w-5 h-5 text-[var(--ink)] mt-1" strokeWidth={1.5} />
              <div>
                <div className="label-eyebrow text-[10px] text-[var(--muted)]">Email</div>
                <a
                  href={`mailto:${INBOX}`}
                  className="link-hover text-[15px] mt-1 block"
                >
                  {INBOX}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4" data-testid="contact-instagram">
              <Instagram className="w-5 h-5 text-[var(--ink)] mt-1" strokeWidth={1.5} />
              <div>
                <div className="label-eyebrow text-[10px] text-[var(--muted)]">Instagram</div>
                <a
                  href="https://www.instagram.com/new_lexis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-hover text-[15px] mt-1 block"
                >
                  @new_lexis
                </a>
              </div>
            </div>
          </div>

          <div data-img className="mt-10 border border-black/15 overflow-hidden">
            <img
              src="/images/storefront.jpg"
              loading="lazy"
              alt="New Lexis — η πρόσοψη στην Ιωάννου Χρυσοστόμου 94"
              className="w-full h-[300px] object-cover"
              data-testid="contact-storefront"
            />
          </div>

          <div data-reveal className="mt-6">
            <div className="border border-black/15">
              <iframe
                title="New Lexis Language Centre στο Google Maps"
                data-testid="contact-map"
                className="block w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                src={MAP_SRC}
              />
            </div>
            <a
              href={DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-directions"
              className="link-hover mt-4 inline-flex items-center gap-2 text-sm font-medium"
            >
              <MapPin className="w-4 h-4" strokeWidth={1.5} /> Οδηγίες στο Google Maps →
            </a>
          </div>
        </div>

        <form
          onSubmit={submit}
          data-testid="contact-form"
          data-reveal
          className="col-span-12 lg:col-span-6 lg:col-start-7 bg-white border border-black/15 p-8 lg:p-12 self-start"
        >
          <h3 className="font-serif text-3xl font-medium mb-8">Στείλε μας μήνυμα</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="label-eyebrow text-[10px] block mb-2">Όνομα</label>
              <input
                required
                value={form.name}
                onChange={update("name")}
                className="lx-input"
                data-testid="contact-name"
              />
            </div>
            <div>
              <label className="label-eyebrow text-[10px] block mb-2">Email</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={update("email")}
                className="lx-input"
                data-testid="contact-email-input"
              />
            </div>
            <div>
              <label className="label-eyebrow text-[10px] block mb-2">Τηλέφωνο</label>
              <input
                value={form.phone}
                onChange={update("phone")}
                className="lx-input"
                data-testid="contact-phone-input"
              />
            </div>
            <div>
              <label className="label-eyebrow text-[10px] block mb-2">Θέμα</label>
              <input
                value={form.subject}
                onChange={update("subject")}
                className="lx-input"
                data-testid="contact-subject"
              />
            </div>
            <div className="md:col-span-2">
              <label className="label-eyebrow text-[10px] block mb-2">Μήνυμα</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={update("message")}
                className="lx-input resize-none"
                data-testid="contact-message"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            data-testid="contact-submit"
            className="mt-8 lx-btn-primary disabled:opacity-60"
          >
            {loading ? "Αποστολή…" : "Αποστολή μηνύματος →"}
          </button>
        </form>
      </div>
    </section>
  );
}
