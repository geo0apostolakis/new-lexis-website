import { BookOpen, GraduationCap } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Μελέτη Δημοτικού",
    desc: "Τμήματα μελέτης για όλες τις τάξεις του Δημοτικού, με σταθερή καθοδήγηση και άμεση επαφή με τους γονείς.",
  },
  {
    icon: GraduationCap,
    title: "Μέση Εκπαίδευση · Γυμνάσιο",
    desc: "Φροντιστηριακά μαθήματα Γυμνασίου από άρτια καταρτισμένο και έμπειρο προσωπικό.",
  },
];

// The school-support side of New Lexis, on a pale lilac band (--lilac-bg in app/globals.css).
export default function Study() {
  return (
    <section
      id="meleti"
      data-testid="study"
      className="py-24 lg:py-36 border-b border-black/10 bg-[var(--lilac-bg)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="col-span-12 lg:col-span-5">
            <span data-reveal className="label-eyebrow tag inline-block">Μέση Εκπαίδευση</span>
            <h2 data-split className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-medium">
              Μελέτη <em className="italic mark">Δημοτικού – Γυμνασίου</em>.
            </h2>
            <p data-reveal className="mt-6 text-[15px] leading-[1.75] text-[var(--ink-soft)] font-light max-w-md">
              Δίπλα στις ξένες γλώσσες, στηρίζουμε τους μαθητές μας και στο σχολείο.
              Τη μελέτη τους αναλαμβάνει μια{" "}
              <span className="font-medium text-[var(--ink)]">20μελής ακαδημαϊκή ομάδα</span>, από
              το Δημοτικό μέχρι το Γυμνάσιο.
            </p>

            <div data-reveal className="mt-10 flex items-end gap-5 pt-8 border-t border-black/10" data-testid="study-team">
              <span className="font-serif text-7xl lg:text-8xl font-medium leading-none">
                <span className="mark" data-count={20}>
                  20
                </span>
              </span>
              <span className="pb-2 label-eyebrow text-[11px] leading-[1.7]">
                μελής
                <br />
                ακαδημαϊκή ομάδα
              </span>
            </div>

            <div data-reveal className="mt-10">
              <a href="#contact" className="lx-btn-primary cta-cursor" data-testid="study-cta" data-magnetic>
                Ρώτησε για τα τμήματα →
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div data-img className="border border-black/15 overflow-hidden">
              <img
                src="/images/meleti.jpg"
                loading="lazy"
                alt="New Lexis — μελέτη Δημοτικού και Γυμνασίου"
                className="w-full h-[420px] sm:h-[540px] lg:h-[700px] object-cover"
                data-testid="study-image"
              />
            </div>
          </div>
        </div>

        <div data-stagger-inner className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-px bg-black/10 border border-black/10">
          {programs.map((p, i) => (
            <article
              key={p.title}
              data-testid={`study-program-${i}`}
              className="lx-card bg-white p-8 lg:p-10 hover:bg-[var(--accent-pale)] transition-colors duration-300"
            >
              <span className="w-12 h-12 bg-[var(--accent)] border border-[var(--ink)] flex items-center justify-center">
                <p.icon className="w-5 h-5 text-[var(--ink)]" strokeWidth={1.6} />
              </span>
              <h3 className="lx-card-name mt-8 font-serif text-3xl lg:text-4xl font-medium leading-tight">
                {p.title}
              </h3>
              <p className="mt-4 text-[14px] leading-[1.6] text-[var(--ink-soft)]">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
