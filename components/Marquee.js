const items = [
  "ΑΓΓΛΙΚΑ · CAMBRIDGE · MICHIGAN · IELTS",
  "ΓΑΛΛΙΚΑ · DELF · DALF · SORBONNE",
  "ΓΕΡΜΑΝΙΚΑ · GOETHE · ÖSD",
  "ΙΤΑΛΙΚΑ · CELI · CILS · PLIDA",
  "ΙΣΠΑΝΙΚΑ · DELE · CERVANTES",
  "ΟΛΑ ΤΑ ΕΠΙΠΕΔΑ · A1 — C2",
];

export default function Marquee() {
  const repeated = [...items, ...items, ...items];
  return (
    <section
      data-testid="marquee"
      className="py-6 bg-[var(--dark)] overflow-hidden"
    >
      <div className="marquee" data-marquee>
        {repeated.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-12 pr-12 whitespace-nowrap"
          >
            <span className="label-eyebrow text-[11px] text-white/85">
              {item}
            </span>
            <span className="font-serif italic text-[var(--accent)] text-lg">
              ✦
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
