const languages = [
  {
    code: "EN",
    name: "Αγγλικά",
    sub: "English",
    desc: "Από τα πρώτα βήματα μέχρι Proficiency. Cambridge, Michigan, IELTS, TOEIC.",
    flag: "🇬🇧",
  },
  {
    code: "FR",
    name: "Γαλλικά",
    sub: "Français",
    desc: "Η γλώσσα του πολιτισμού. DELF, DALF, Sorbonne C1/C2.",
    flag: "🇫🇷",
  },
  {
    code: "DE",
    name: "Γερμανικά",
    sub: "Deutsch",
    desc: "Για σπουδές & καριέρα. Goethe-Zertifikat, ÖSD, TestDaF.",
    flag: "🇩🇪",
  },
  {
    code: "IT",
    name: "Ιταλικά",
    sub: "Italiano",
    desc: "Μελωδία & τέχνη. CELI, CILS, PLIDA σε όλα τα επίπεδα.",
    flag: "🇮🇹",
  },
  {
    code: "ES",
    name: "Ισπανικά",
    sub: "Español",
    desc: "Η δεύτερη πιο ομιλούμενη γλώσσα παγκοσμίως. DELE, SIELE.",
    flag: "🇪🇸",
  },
  {
    code: "A1-C2",
    name: "Όλα τα επίπεδα",
    sub: "Κοινό Ευρωπαϊκό Πλαίσιο",
    desc: "Από αρχάριους μέχρι κάτοχοι Proficiency, σε κάθε γλώσσα.",
    flag: "✦",
  },
];

export default function Levels() {
  return (
    <section
      id="levels"
      data-testid="levels"
      className="py-24 lg:py-36 border-b border-black/10 bg-white"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <span data-reveal className="label-eyebrow inline-block">02 — Μαθήματα</span>
            <h2 data-split className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-medium">
              <em className="italic mark">Πέντε</em> γλώσσες.
              <br />
              Μία φιλοσοφία.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 self-end">
            <p data-reveal className="text-[15px] leading-[1.75] text-[var(--ink-soft)] font-light">
              Σχεδιάζουμε εξατομικευμένα προγράμματα για κάθε γλώσσα και επίπεδο
              του{" "}
              <span className="font-medium text-[var(--ink)]">
                Κοινού Ευρωπαϊκού Πλαισίου Αναφοράς
              </span>{" "}
              — με σαφή στόχο: την επιτυχία στις διεθνώς αναγνωρισμένες
              πιστοποιήσεις.
            </p>
          </div>
        </div>

        <div data-stagger-inner className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {languages.map((l, i) => (
            <article
              key={l.code}
              data-testid={`language-${l.code}`}
              className="lx-card group bg-white p-8 lg:p-10 hover:bg-[var(--accent-pale)] transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between">
                <span className="lx-card-name font-serif text-5xl lg:text-6xl font-medium leading-none">
                  {l.name}
                </span>
                <span className="num-tag text-2xl">/0{i + 1}</span>
              </div>
              <div className="mt-3 label-eyebrow text-[10px] text-[var(--muted)]">
                {l.sub}
              </div>
              <p className="mt-5 text-[14px] leading-[1.6] text-[var(--ink-soft)] min-h-[70px]">
                {l.desc}
              </p>
              <div className="mt-8 pt-5 border-t border-black/10 flex items-center justify-between text-xs text-[var(--muted)]">
                <span>Επίπεδα</span>
                <span className="text-[var(--ink)] font-medium">A1 — C2</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
