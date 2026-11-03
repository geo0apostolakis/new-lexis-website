import { Star, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero"
      className="relative pt-[120px] lg:pt-[140px] pb-20 lg:pb-28 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          {/* Left text */}
          <div className="col-span-12 lg:col-span-7">
            <div data-hero="eyebrow" className="flex flex-wrap items-center gap-3 mb-8">
              <span className="label-eyebrow">Από το 2006 · Πετρούπολη</span>
              <span className="w-12 h-px bg-black/30" />
              <span className="label-eyebrow tag">5 Γλώσσες · A1 — C2</span>
            </div>

            <h1
              data-testid="hero-headline"
              data-hero-title
              className="font-serif font-medium leading-[0.95] tracking-[-0.02em] text-[56px] sm:text-[88px] lg:text-[120px]"
            >
              <span className="hero-line">
                <span data-hero-line className="block">Μάθε</span>
              </span>
              <span className="hero-line">
                <span data-hero-line className="block">
                  <span className="italic mark">ξένες γλώσσες</span>
                </span>
              </span>
              <span className="hero-line">
                <span data-hero-line className="block text-[var(--ink-soft)]">με σιγουριά.</span>
              </span>
            </h1>

            <p data-hero="copy" className="mt-10 max-w-xl text-[15px] leading-[1.75] text-[var(--ink-soft)] font-light">
              Στο{" "}
              <span className="font-medium text-[var(--ink)]">
                New Lexis Language Centre
              </span>{" "}
              διδάσκουμε <span className="font-medium text-[var(--ink)]">Αγγλικά,
              Γαλλικά, Γερμανικά, Ιταλικά & Ισπανικά</span> με μικρά τμήματα,
              εξειδικευμένες καθηγήτριες και{" "}
              <span className="font-medium text-[var(--ink)]">
                100% επιτυχία
              </span>{" "}
              σε όλες τις διεθνείς πιστοποιήσεις.
            </p>

            <div data-hero="copy" className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#booking"
                className="lx-btn-primary cta-cursor"
                data-testid="hero-cta-primary"
                data-magnetic
              >
                Κλείσε δωρεάν διαγνωστικό τεστ
              </a>
              <a
                href="#levels"
                className="lx-btn-secondary cta-cursor"
                data-testid="hero-cta-secondary"
              >
                Δες τα μαθήματα
              </a>
            </div>

            <div
              className="mt-12 flex items-center gap-6 pt-8 border-t border-black/10"
              data-testid="hero-social-proof"
              data-hero="copy"
            >
              <div className="flex items-center gap-2">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    data-hero-star
                    className="w-4 h-4 fill-[var(--accent)] text-[var(--ink)]"
                    strokeWidth={1.2}
                  />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-3xl font-medium">5,0</span>
                <span className="text-xs text-[var(--muted)] tracking-wider uppercase">
                  Google · 5.028 αξιολογήσεις
                </span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative border border-black/15">
              <div data-img="hero" className="overflow-hidden">
                <img
                  src="/images/hero-reception.jpg"
                  alt="New Lexis Language Centre — γραφείο υποδοχής"
                  data-testid="hero-image"
                  className="w-full h-[460px] lg:h-[620px] object-cover"
                />
              </div>
              <div
                data-hero="quote"
                className="absolute -bottom-6 -left-6 bg-white border border-black/15 border-l-4 border-l-[var(--accent)] px-6 py-5 max-w-[260px]"
              >
                <p className="font-serif italic text-[15px] leading-snug text-[var(--ink-soft)]">
                  «Η καλύτερη εμπειρία που είχα από φροντιστήριο ξένων γλωσσών.»
                </p>
                <p className="mt-3 label-eyebrow text-[10px] text-[var(--muted)]">
                  Μαργαρίτα Παπασπύρου · Google
                </p>
              </div>
            </div>
            <div className="hidden lg:flex absolute -right-4 top-6 flex-col items-center gap-3 label-eyebrow text-[10px] text-[var(--muted)]">
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="hidden lg:flex mt-20 items-center gap-3 label-eyebrow text-[10px] text-[var(--muted)] hover:text-[var(--ink)] transition-colors"
          data-testid="hero-scroll"
          data-hero="copy"
        >
          <ArrowDown className="w-3 h-3" /> Κύλισε για περισσότερα
        </a>
      </div>
    </section>
  );
}
