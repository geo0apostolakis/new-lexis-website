import { Facebook, Instagram } from "@/components/SocialIcons";
import { INBOX } from "@/lib/messages";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="bg-[var(--dark)] text-white py-16"
    >
      <div data-stagger className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5">
          <img
            src="/brand/logo.png"
            alt="New Lexis · Linguistic Studies"
            width={725}
            height={275}
            className="h-[84px] w-auto"
          />
          <div className="label-eyebrow text-[10px] mt-4 text-white/60">
            Κέντρο Ξένων Γλωσσών & Πιστοποιήσεων · Πετρούπολη
          </div>
          <p className="mt-6 text-sm text-white/70 leading-[1.7] max-w-sm">
            Διδάσκουμε Αγγλικά, Γαλλικά, Γερμανικά, Ιταλικά και Ισπανικά με
            100% επιτυχία στις εξετάσεις και 5.0/5 αξιολόγηση στο Google.
          </p>

          <div className="mt-8 flex items-center gap-3" data-testid="footer-socials">
            <a
              href="https://www.facebook.com/newlexis/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-facebook"
              className="w-10 h-10 border border-white/25 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--ink)] transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" strokeWidth={1.6} />
            </a>
            <a
              href="https://www.instagram.com/new_lexis/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram"
              className="w-10 h-10 border border-white/25 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--ink)] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.6} />
            </a>
          </div>
        </div>

        <div className="col-span-6 lg:col-span-3 lg:col-start-7">
          <div className="label-eyebrow text-[10px] text-white/60 mb-4">
            Επικοινωνία
          </div>
          <ul className="space-y-2 text-sm">
            <li>Ιωάννου Χρυσοστόμου 94</li>
            <li>Παράρτημα: Ιωάννου Χρυσοστόμου 95</li>
            <li>Πετρούπολη 132 31</li>
            <li>
              <a href="tel:+302105060025" className="hover:text-[var(--accent)]">
                21 0506 0025
              </a>
            </li>
            <li>
              <a href={`mailto:${INBOX}`} className="hover:text-[var(--accent)] break-all">
                {INBOX}
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-3">
          <div className="label-eyebrow text-[10px] text-white/60 mb-4">
            Πλοήγηση
          </div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#events" className="hover:text-[var(--accent)]">Events</a>
            </li>
            <li>
              <a href="#about" className="hover:text-[var(--accent)]">Σχολή</a>
            </li>
            <li>
              <a href="#levels" className="hover:text-[var(--accent)]">Μαθήματα</a>
            </li>
            <li>
              <a href="#exams" className="hover:text-[var(--accent)]">Εξετάσεις</a>
            </li>
            <li>
              <a href="#meleti" className="hover:text-[var(--accent)]">Μελέτη</a>
            </li>
            <li>
              <a href="#booking" className="hover:text-[var(--accent)]">Δωρεάν Τεστ</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[var(--accent)]">Επικοινωνία</a>
            </li>
          </ul>
        </div>

        <div className="col-span-12 mt-12 pt-8 border-t border-white/15 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} New Lexis Language Centre. Με επιφύλαξη παντός δικαιώματος.</div>
          <div className="label-eyebrow text-[10px] text-white/50">
            Κέντρο Ξένων Γλωσσών & Πιστοποιήσεων
          </div>
        </div>
      </div>
    </footer>
  );
}
