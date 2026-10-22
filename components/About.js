import { Check } from "lucide-react";

const stats = [
  { num: "100%", count: 100, suffix: "%", label: "Επιτυχία σε εξετάσεις" },
  { num: "30+", count: 30, suffix: "+", label: "Χρόνια εμπειρίας" },
  { num: "5", count: 5, label: "Γλώσσες" },
  { num: "5.0", count: 5, decimals: 1, label: "Google rating" },
];

const bullets = [
  "Εξειδικευμένες καθηγήτριες με σπουδές στο εξωτερικό",
  "Μικρά τμήματα — εξατομικευμένη προσοχή σε κάθε μαθητή",
  "Δια ζώσης & online τμήματα, με ευέλικτο ωράριο",
  "Σύγχρονο διδακτικό υλικό & συνεχής αξιολόγηση",
];

export default function About() {
  return (
    <section
      id="about"
      data-testid="about"
      className="py-24 lg:py-36 border-b border-black/10"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-5">
          <span data-reveal className="label-eyebrow inline-block">01 — Το Φροντιστήριο</span>
          <h2 data-split className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-medium">
            Ένα κέντρο ξένων γλωσσών{" "}
            <em className="italic mark">από γυναίκες</em>, για
            όλους όσοι θέλουν να μάθουν σωστά.
          </h2>

          <div data-img className="hidden lg:block mt-10 border border-black/15 overflow-hidden">
            <img
              src="/images/school-interior.jpg"
              loading="lazy"
              alt="New Lexis Language Centre — εσωτερικός χώρος"
              className="w-full h-[360px] object-cover"
              data-testid="about-image"
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <p data-reveal className="text-[15px] leading-[1.85] text-[var(--ink-soft)] font-light">
            Το{" "}
            <span className="font-medium text-[var(--ink)]">
              New Lexis Language Centre
            </span>{" "}
            βρίσκεται στην καρδιά της Πετρούπολης και αποτελεί σημείο αναφοράς
            για τη διδασκαλία των ξένων γλωσσών. Με μια ομάδα έμπειρων
            καθηγητριών, προετοιμάζουμε μαθητές κάθε ηλικίας — από τα πρώτα τους
            βήματα στο <em className="italic">A1</em> μέχρι την κορυφαία
            πιστοποίηση <em className="italic">C2</em> — σε{" "}
            <span className="font-medium text-[var(--ink)]">
              Αγγλικά, Γαλλικά, Γερμανικά, Ιταλικά και Ισπανικά
            </span>
            .
          </p>

          <ul data-stagger className="mt-10 space-y-5">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-4"
                data-testid={`about-bullet-${i}`}
              >
                <span className="mt-[6px] w-5 h-5 bg-[var(--accent)] border border-[var(--ink)] flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[var(--ink)]" strokeWidth={2.5} />
                </span>
                <span className="text-[15px] leading-[1.65] text-[var(--ink-soft)]">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <div data-stagger-inner className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white p-6 flex flex-col"
                data-testid={`stat-${i}`}
              >
                <span className="font-serif text-4xl lg:text-5xl font-medium leading-none">
                  <span
                    className="mark"
                    data-count={s.count}
                    data-suffix={s.suffix}
                    data-decimals={s.decimals}
                  >
                    {s.num}
                  </span>
                </span>
                <span className="mt-3 label-eyebrow text-[10px] text-[var(--muted)]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
