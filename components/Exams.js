const exams = [
  { name: "Cambridge / Michigan / IELTS", levels: "Αγγλικά · A1—C2", desc: "Όλες οι κορυφαίες πιστοποιήσεις αγγλικής γλώσσας." },
  { name: "Goethe-Zertifikat / ÖSD", levels: "Γερμανικά · A1—C2", desc: "Επίσημες πιστοποιήσεις Γερμανίας και Αυστρίας." },
  { name: "DELF / DALF / Sorbonne", levels: "Γαλλικά · A1—C2", desc: "Διπλώματα του γαλλικού υπουργείου παιδείας." },
  { name: "DELE / SIELE", levels: "Ισπανικά · A1—C2", desc: "Αναγνωρισμένα από το Ινστιτούτο Θερβάντες." },
  { name: "CELI / CILS / PLIDA", levels: "Ιταλικά · A1—C2", desc: "Διεθνείς πιστοποιήσεις ιταλικής γλώσσας." },
  { name: "TestDaF / TOEIC / Επαγγελματικά", levels: "Όλες οι γλώσσες · B1+", desc: "Στοχευμένες πιστοποιήσεις για σπουδές & καριέρα." },
];

export default function Exams() {
  return (
    <section
      id="exams"
      data-testid="exams"
      className="py-24 lg:py-36 border-b border-black/10 relative overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 grid grid-cols-12 gap-6 lg:gap-12">
        <div className="col-span-12 lg:col-span-5">
          <span data-reveal className="label-eyebrow inline-block">03 — Πιστοποιήσεις</span>
          <h2 data-split className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-medium">
            Προετοιμασία για κάθε διεθνή{" "}
            <em className="italic mark">εξέταση</em>.
          </h2>
          <p data-reveal className="mt-6 text-[15px] leading-[1.75] text-[var(--ink-soft)] font-light max-w-md">
            Έντονη, στοχευμένη προετοιμασία με στρατηγική για κάθε δοκιμασία —
            γραπτό, προφορικό, ακουστική κατανόηση. Σε όλες τις γλώσσες που
            διδάσκουμε.
          </p>
          <div data-img className="mt-10 border border-black/15 overflow-hidden">
            <img
              src="/images/classroom.jpg"
              loading="lazy"
              alt="New Lexis — χώρος μελέτης"
              className="w-full h-[320px] object-cover"
              data-testid="exams-image"
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 lg:col-start-7">
          <div data-stagger className="divide-y divide-black/10 border-y border-black/10">
            {exams.map((e, i) => (
              <div
                key={i}
                data-testid={`exam-${i}`}
                className="py-8 grid grid-cols-12 gap-3 hover:px-3 transition-[padding] duration-300"
              >
                <span className="col-span-1 num-tag text-lg">0{i + 1}</span>
                <div className="col-span-7">
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium leading-tight">
                    {e.name}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--ink-soft)] font-light">
                    {e.desc}
                  </p>
                </div>
                <div className="col-span-4 text-right">
                  <span className="label-eyebrow text-[10px] text-[var(--muted)]">
                    {e.levels}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
