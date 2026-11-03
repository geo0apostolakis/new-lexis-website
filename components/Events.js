import { CalendarHeart, Plane, Award, PartyPopper, ArrowUpRight } from "lucide-react";
import { Instagram } from "@/components/SocialIcons";

const moments = [
  {
    name: "Events",
    icon: CalendarHeart,
    desc: "Εκδηλώσεις και δραστηριότητες για τους μαθητές μας όλη τη χρονιά.",
  },
  {
    name: "Ταξίδια",
    icon: Plane,
    desc: "Ομαδικές εκδρομές και ταξίδια, γιατί η γλώσσα μαθαίνεται και έξω από την τάξη.",
  },
  {
    name: "Απονομές",
    icon: Award,
    desc: "Τελετές απονομής πτυχίων για να γιορτάσουμε μαζί κάθε επιτυχία.",
  },
  {
    name: "Party",
    icon: PartyPopper,
    desc: "Γιορτές και πάρτι, γιατί μαζί μας η μάθηση είναι και χαρά.",
  },
];

export default function Events() {
  return (
    <section
      id="events"
      data-testid="events"
      className="py-24 lg:py-32 border-b border-black/10 bg-white"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-6">
            <span data-reveal className="label-eyebrow tag inline-block">Events · Ταξίδια · Απονομές · Party</span>
            <h2 data-split className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-medium">
              Η μάθηση είναι <em className="italic mark">χαρά</em>, παιχνίδι και εμπειρίες.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 self-end">
            <p data-reveal className="text-[15px] leading-[1.75] text-[var(--ink-soft)] font-light">
              Στο{" "}
              <span className="font-medium text-[var(--ink)]">New Lexis</span>{" "}
              οι μαθητές μας ζουν τη χρονιά και έξω από την τάξη: εκδηλώσεις,
              ταξίδια, απονομές πτυχίων και πάρτι που φέρνουν όλη την ομάδα πιο κοντά.
            </p>
            <a
              data-reveal
              href="https://www.instagram.com/new_lexis/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="events-instagram"
              className="link-hover mt-6 inline-flex items-center gap-2 text-sm font-medium"
            >
              <Instagram className="w-4 h-4" strokeWidth={1.6} /> Δες τις στιγμές μας στο Instagram
              <ArrowUpRight className="w-4 h-4" strokeWidth={1.6} />
            </a>
          </div>
        </div>

        <div data-stagger-inner className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/10 border border-black/10">
          {moments.map((m, i) => (
            <article
              key={m.name}
              data-testid={`event-${i}`}
              className="lx-card bg-white p-8 lg:p-10 hover:bg-[var(--accent-pale)] transition-colors duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="w-12 h-12 bg-[var(--accent)] border border-[var(--ink)] flex items-center justify-center">
                  <m.icon className="w-5 h-5 text-[var(--ink)]" strokeWidth={1.6} />
                </span>
                <span className="num-tag text-2xl">/0{i + 1}</span>
              </div>
              <h3 className="lx-card-name mt-8 font-serif text-4xl lg:text-5xl font-medium leading-none">
                {m.name}
              </h3>
              <p className="mt-5 text-[14px] leading-[1.6] text-[var(--ink-soft)]">
                {m.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
