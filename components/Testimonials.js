import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text:
      "Η καλύτερη εμπειρία που είχα από φροντιστήριο ξένων γλωσσών. Δεν είναι τυχαία η απόλυτη επιτυχία των υποψηφίων του σε όλες τις εξετάσεις. Δεν υπάρχει κανένα ισάξιο του.",
    name: "Μαργαρίτα Παπασπύρου",
    role: "Τοπικός οδηγός · Google",
  },
  {
    text:
      "Εξαιρετικά όλα τα κορίτσια — πραγματικά δεν έχω λόγια, κάνουν τη δουλειά τους όπως πρέπει να την κάνουν.",
    name: "Παναγιώτης Σκλαβενίτης",
    role: "22 κριτικές · Google",
  },
  {
    text:
      "Είναι το καλύτερο φροντιστήριο, έχει τις καλύτερες καθηγήτριες!",
    name: "Παναγιώτα-Αλεξάνδρα Ψωμαδέλη",
    role: "Τοπικός οδηγός · Google",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid="testimonials"
      className="py-24 lg:py-36 border-b border-black/10 bg-white"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-16 items-end">
          <div className="col-span-12 lg:col-span-7">
            <span data-reveal className="label-eyebrow inline-block">05 — Μαρτυρίες</span>
            <h2 data-split className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] font-medium">
              <em className="italic mark">5.028</em> άνθρωποι έχουν ήδη μιλήσει.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div data-reveal className="flex items-center gap-4 justify-start lg:justify-end">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[var(--accent)] text-[var(--ink)]"
                    strokeWidth={1.2}
                  />
                ))}
              </div>
              <div>
                <div className="font-serif text-3xl font-medium leading-none">5,0/5</div>
                <div className="label-eyebrow text-[10px] text-[var(--muted)] mt-1">
                  Google Reviews
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-stagger-inner className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {reviews.map((r, i) => (
            <figure
              key={i}
              data-testid={`testimonial-${i}`}
              className="bg-white p-8 lg:p-10 flex flex-col"
            >
              <Quote className="w-7 h-7 fill-[var(--accent)] text-[var(--ink)]" strokeWidth={1.2} />
              <blockquote className="mt-6 font-serif text-[22px] lg:text-2xl leading-[1.35] text-[var(--ink)] flex-grow">
                &quot;{r.text}&quot;
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-black/10">
                <div className="font-medium text-sm">{r.name}</div>
                <div className="label-eyebrow text-[10px] text-[var(--muted)] mt-1">
                  {r.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
