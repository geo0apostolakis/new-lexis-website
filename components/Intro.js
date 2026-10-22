// Opening screen. Hidden unless <html> has .motion; components/Motion.js plays it and then removes it.
// Two stacked curtains: the charcoal one lifts first, then the yellow one behind it.
export default function Intro() {
  return (
    <div id="intro" aria-hidden="true" className="fixed inset-0 z-[100]">
      <div data-intro-panel="accent" className="absolute inset-0 bg-[var(--accent)]" />
      <div
        data-intro-panel="dark"
        className="absolute inset-0 bg-[var(--dark)] flex items-center justify-center"
      >
        <div data-intro-inner className="flex flex-col items-center px-6">
          <img
            data-intro-logo
            src="/brand/logo.png"
            alt=""
            width={725}
            height={275}
            className="w-[min(80vw,520px)] h-auto"
          />
          <span
            data-intro-line
            className="mt-8 block h-[3px] w-[min(62vw,380px)] bg-[var(--accent)] origin-left"
          />
          <span data-intro-tag className="mt-5 label-eyebrow text-[10px] text-white/60">
            Από το 1989 · Πετρούπολη
          </span>
        </div>
      </div>
    </div>
  );
}
