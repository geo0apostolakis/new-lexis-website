const steps = [
  {
    n: "01",
    title: "Δωρεάν διαγνωστικό τεστ",
    desc: "Αξιολογούμε το επίπεδό σου και προτείνουμε το κατάλληλο τμήμα.",
  },
  {
    n: "02",
    title: "Εξατομικευμένο πρόγραμμα",
    desc: "Σχεδιάζουμε διαδρομή μάθησης με σαφή στόχο και ορόσημα.",
  },
  {
    n: "03",
    title: "Μικρά τμήματα — μέγιστο 6",
    desc: "Συνεχής συμμετοχή, προφορική εξάσκηση, άμεση ανατροφοδότηση.",
  },
  {
    n: "04",
    title: "Επιτυχία στην πιστοποίηση",
    desc: "Στοχευμένη προετοιμασία εξετάσεων με τράπεζα θεμάτων & mock tests.",
  },
];

export default function Approach() {
  return (
    <section
      data-testid="approach"
      className="py-24 lg:py-36 bg-[var(--dark)] text-white"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-6">
            <span data-reveal className="label-eyebrow inline-block text-white">04 — Η Μέθοδος</span>
            <h2 data-split className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-medium text-white">
              Τέσσερα βήματα προς την{" "}
              <em className="italic text-[var(--accent)]">γλωσσική σου ευχέρεια</em>.
            </h2>
          </div>
        </div>

        <div data-stagger-inner className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/15 border border-white/15">
          {steps.map((s) => (
            <div
              key={s.n}
              data-testid={`approach-${s.n}`}
              className="bg-[var(--dark)] p-8 lg:p-10"
            >
              <span className="font-serif italic text-5xl lg:text-6xl text-[var(--accent)] font-medium">
                {s.n}
              </span>
              <h3 className="mt-6 font-serif text-2xl lg:text-3xl font-medium text-white">
                {s.title}
              </h3>
              <p className="mt-4 text-sm text-white/70 leading-[1.6]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
