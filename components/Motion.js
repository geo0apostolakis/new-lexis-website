"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const EASE = "expo.out";
const NAV_OFFSET = -80;
const SHOWN = "inset(0% 0% 0% 0%)";
const HIDDEN = "inset(100% 0% 0% 0%)";

// Drives every animation on the page from data attributes the sections carry:
//   data-hero / data-hero-line / data-hero-star / data-nav-item  opening sequence
//   data-split         heading lines rise out of masks, .mark highlights sweep in
//   data-reveal        fade up as it enters
//   data-stagger       children fade up one after another
//   data-stagger-inner each card's contents fade up, card by card
//   data-img           image wipes up from the bottom, then drifts with scroll (parallax)
//   data-count         number counts up
//   data-marquee       language strip, speeds up and flips direction with scroll
//   data-magnetic      follows the cursor a little, springs back (mouse only)
export default function Motion() {
  useGSAP(() => {
    const root = document.documentElement;
    // No .motion: reduced motion, or the failsafe in app/layout.js already showed the page as-is
    if (!root.classList.contains("motion")) return;
    window.__nlMotion = true;
    window.scrollTo(0, 0);

    const lenis = new Lenis({ lerp: 0.1, anchors: { offset: NAV_OFFSET }, autoRaf: false });
    lenis.stop();
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    playIntro(root, () => {
      document.getElementById("intro").style.display = "none";
      root.classList.remove("intro-lock");
      lenis.start();
      try {
        sessionStorage.setItem("nl-intro", "1");
      } catch {}
      ScrollTrigger.refresh();
      if (location.hash.length > 1) {
        const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (target) lenis.scrollTo(target, { offset: NAV_OFFSET });
      }
    });

    splitHeadings();
    reveals();
    images();
    counters();
    marquee();
    gsap.to(".scroll-progress", {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
    });

    const mm = gsap.matchMedia();
    mm.add("(hover: hover) and (pointer: fine)", magnetic);

    // Fonts or images that arrive late shift the layout after the triggers were measured. Re-measure then,
    // and once more at the very bottom, so a section measured too low can't stay hidden on a slow phone.
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    let bottomRefreshed = false;
    lenis.on("scroll", ({ scroll, limit }) => {
      if (!bottomRefreshed && scroll >= limit - 4) {
        bottomRefreshed = true;
        ScrollTrigger.refresh();
      }
    });

    return () => {
      window.removeEventListener("load", onLoad);
      mm.revert();
      gsap.ticker.remove(raf);
      lenis.destroy();
      window.__nlMotion = false;
    };
  });

  return null;
}

function playIntro(root, onDone) {
  const seen = root.classList.contains("intro-seen");
  const tl = gsap.timeline({ defaults: { ease: EASE } });

  if (seen) {
    // Second load in the same tab: no logo moment, just get out of the way
    tl.addLabel("curtain", 0).to("#intro", { opacity: 0, duration: 0.35, ease: "power2.out" }, 0);
  } else {
    tl.fromTo("[data-intro-logo]", { opacity: 0, y: 14, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 1 }, 0)
      .fromTo("[data-intro-line]", { scaleX: 0 }, { scaleX: 1, duration: 1, ease: "expo.inOut" }, 0.2)
      .fromTo("[data-intro-tag]", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.7 }, 0.55)
      .to("[data-intro-inner]", { opacity: 0, y: -12, duration: 0.4, ease: "power2.inOut" }, 1.45)
      .addLabel("curtain", 1.6)
      .to('[data-intro-panel="dark"]', { yPercent: -100, duration: 0.95, ease: "expo.inOut" }, "curtain")
      .to('[data-intro-panel="accent"]', { yPercent: -100, duration: 0.95, ease: "expo.inOut" }, "curtain+=0.12");
  }

  tl.add(heroIn(), seen ? 0.1 : "curtain+=0.45");
  tl.call(onDone, null, seen ? 0.35 : "curtain+=1.07");

  // The hero image drifts a little slower than the page once you start scrolling
  gsap.to('[data-img="hero"] img', {
    yPercent: 3,
    ease: "none",
    scrollTrigger: { trigger: "#top", start: "top top", end: "bottom top", scrub: true },
  });
}

function heroIn() {
  return gsap
    .timeline({ defaults: { ease: EASE } })
    .fromTo("[data-nav-item]", { opacity: 0, y: -14 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.07 }, 0)
    .set("[data-hero-title]", { visibility: "visible" }, 0)
    .fromTo(
      "[data-hero-line]",
      { yPercent: 115, rotate: 3 },
      { yPercent: 0, rotate: 0, transformOrigin: "0% 100%", duration: 1.2, stagger: 0.1 },
      0,
    )
    .fromTo(
      "[data-hero-title] .mark",
      { backgroundSize: "0% 34%" },
      { backgroundSize: "100% 34%", duration: 0.9, ease: "power3.inOut" },
      0.55,
    )
    .fromTo('[data-img="hero"]', { clipPath: HIDDEN }, { clipPath: SHOWN, duration: 1.4, ease: "expo.inOut" }, 0.05)
    .fromTo('[data-img="hero"] img', { scale: 1.25 }, { scale: 1.06, duration: 1.8 }, 0.05)
    .fromTo('[data-hero="eyebrow"]', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9 }, 0.15)
    .fromTo('[data-hero="copy"]', { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 1, stagger: 0.08 }, 0.4)
    .fromTo(
      "[data-hero-star]",
      { opacity: 0, scale: 0.4 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.06, ease: "back.out(2.2)" },
      0.75,
    )
    .fromTo('[data-hero="quote"]', { opacity: 0, x: -24 }, { opacity: 1, x: 0, duration: 1 }, 0.85);
}

function splitHeadings() {
  gsap.utils.toArray("[data-split]").forEach((el) => {
    SplitText.create(el, {
      type: "lines",
      mask: "lines",
      linesClass: "split-line",
      autoSplit: true,
      // Returning the timeline lets SplitText carry its progress over when it re-splits on resize
      onSplit(self) {
        gsap.set(el, { visibility: "visible" });
        const tl = gsap
          .timeline({ scrollTrigger: { trigger: el, start: "top 85%", once: true } })
          .from(self.lines, {
            yPercent: 110,
            rotate: 2,
            transformOrigin: "0% 100%",
            duration: 1.1,
            ease: EASE,
            stagger: 0.09,
          });
        const marks = el.querySelectorAll(".mark");
        if (marks.length) {
          tl.to(marks, { backgroundSize: "100% 34%", duration: 0.85, ease: "power3.inOut", stagger: 0.1 }, 0.45);
        }
        return tl;
      },
    });
  });
}

function reveals() {
  ScrollTrigger.batch("[data-reveal]", {
    start: "top 88%",
    once: true,
    onEnter: (els) =>
      gsap.fromTo(els, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 1, ease: EASE, stagger: 0.08 }),
  });

  gsap.utils.toArray("[data-stagger]").forEach((group) => {
    ScrollTrigger.batch(group.children, {
      start: "top 90%",
      once: true,
      onEnter: (els) =>
        gsap.fromTo(els, { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 1, ease: EASE, stagger: 0.07 }),
    });
  });

  // Grids drawn with gap-px lines: keep the cards (and so the lines) in place, bring their contents in
  gsap.utils.toArray("[data-stagger-inner]").forEach((grid) => {
    ScrollTrigger.batch(grid.children, {
      start: "top 90%",
      once: true,
      onEnter: (cards) =>
        cards.forEach((card, i) =>
          gsap.fromTo(
            card.children,
            { opacity: 0, y: 28 },
            { opacity: 1, y: 0, duration: 0.9, ease: EASE, stagger: 0.05, delay: i * 0.08 },
          ),
        ),
    });
  });
}

function images() {
  gsap.utils.toArray('[data-img]:not([data-img="hero"])').forEach((wrap) => {
    const img = wrap.querySelector("img");
    gsap
      .timeline({ scrollTrigger: { trigger: wrap, start: "top 85%", once: true } })
      .fromTo(wrap, { clipPath: HIDDEN }, { clipPath: SHOWN, duration: 1.3, ease: "expo.inOut" })
      .fromTo(img, { scale: 1.25 }, { scale: 1.06, duration: 1.8, ease: EASE }, 0);
    // 6% overscale leaves exactly enough room for a ±3% drift without enlarging the photo further
    gsap.fromTo(
      img,
      { yPercent: -3 },
      {
        yPercent: 3,
        ease: "none",
        scrollTrigger: { trigger: wrap, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  });
}

function counters() {
  gsap.utils.toArray("[data-count]").forEach((el) => {
    const end = parseFloat(el.dataset.count);
    const decimals = Number(el.dataset.decimals || 0);
    const suffix = el.dataset.suffix || "";
    const n = { v: 0 };
    const render = () => (el.textContent = n.v.toFixed(decimals) + suffix);
    render();
    const trigger = { trigger: el, start: "top 90%", once: true };
    gsap.to(n, { v: end, duration: 1.8, ease: "power3.out", onUpdate: render, scrollTrigger: trigger });
    if (el.classList.contains("mark")) {
      gsap.to(el, {
        backgroundSize: "100% 34%",
        duration: 0.9,
        delay: 0.3,
        ease: "power3.inOut",
        scrollTrigger: trigger,
      });
    }
  });
}

function marquee() {
  const track = document.querySelector("[data-marquee]");
  if (!track) return;
  const loop = gsap.to(track, { xPercent: -50, ease: "none", duration: 50, repeat: -1 });
  loop.totalTime(loop.duration() * 100); // headroom so it can also run backwards
  ScrollTrigger.create({
    onUpdate(self) {
      const v = self.getVelocity();
      const speed = gsap.utils.clamp(1, 7, 1 + Math.abs(v) / 350);
      gsap.to(loop, { timeScale: self.direction * speed, duration: 0.2, overwrite: true });
      gsap.to(loop, { timeScale: self.direction, duration: 1.2, delay: 0.25, ease: "power2.out" });
      gsap.to(track, { skewX: gsap.utils.clamp(-6, 6, v / -300), duration: 0.25, overwrite: "auto" });
      gsap.to(track, { skewX: 0, duration: 0.9, delay: 0.25, ease: "power3.out" });
    },
  });
}

function magnetic() {
  const offs = gsap.utils.toArray("[data-magnetic]").map((el) => {
    const pos = { x: 0, y: 0 };
    const apply = () => (el.style.translate = `${pos.x}px ${pos.y}px`);
    const move = (e) => {
      const r = el.getBoundingClientRect();
      gsap.to(pos, {
        x: (e.clientX - (r.left + r.width / 2)) * 0.25,
        y: (e.clientY - (r.top + r.height / 2)) * 0.35,
        duration: 0.5,
        ease: "power3.out",
        overwrite: true,
        onUpdate: apply,
      });
    };
    const leave = () =>
      gsap.to(pos, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.4)", overwrite: true, onUpdate: apply });
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", leave);
    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", leave);
      el.style.translate = "";
    };
  });
  return () => offs.forEach((off) => off());
}
