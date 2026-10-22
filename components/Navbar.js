"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Σχολή" },
  { href: "#levels", label: "Επίπεδα" },
  { href: "#exams", label: "Εξετάσεις" },
  { href: "#testimonials", label: "Αξιολογήσεις" },
  { href: "#booking", label: "Δωρεάν Τεστ" },
  { href: "#contact", label: "Επικοινωνία" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      // Slide away while reading down, come back as soon as the visitor scrolls up
      if (Math.abs(y - last) > 4) {
        setHidden(y > last && y > 160);
        last = y;
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[var(--ease-out)] ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/10"
          : "bg-transparent border-b border-transparent"
      } ${hidden && !open ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 flex items-center justify-between h-[72px]">
        <a href="#top" data-testid="navbar-logo" data-nav-item className="flex items-center">
          <img
            src="/brand/logo.png"
            alt="New Lexis · Κέντρο Ξένων Γλωσσών & Πιστοποιήσεων · Linguistic Studies"
            width={725}
            height={275}
            className="h-[46px] sm:h-[54px] w-auto"
          />
        </a>

        <nav data-nav-item className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-${l.label}`}
              className="link-hover text-sm tracking-wide text-[var(--ink-soft)] hover:text-[var(--ink)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div data-nav-item className="flex items-center gap-3">
          <a
            href="tel:+302105060025"
            data-testid="navbar-phone"
            className="link-hover hidden md:inline-flex text-sm font-medium tracking-wide text-[var(--ink)]"
          >
            21 0506 0025
          </a>
          <a
            href="#booking"
            data-testid="navbar-cta"
            data-magnetic
            className="lx-btn-primary text-[12px] py-3 px-4"
          >
            Δωρεάν Τεστ →
          </a>
          <button
            data-testid="navbar-burger"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 border border-black/10"
            aria-label="menu"
          >
            <span className="block w-5 h-[1.5px] bg-[var(--ink)] mb-1.5" />
            <span className="block w-5 h-[1.5px] bg-[var(--ink)] mb-1.5" />
            <span className="block w-5 h-[1.5px] bg-[var(--ink)]" />
          </button>
        </div>
      </div>

      {open && (
        <div className="menu-drop lg:hidden bg-white border-t border-black/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="link-hover self-start text-sm tracking-wide text-[var(--ink-soft)] hover:text-[var(--ink)]"
                data-testid={`mobile-nav-${l.label}`}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
