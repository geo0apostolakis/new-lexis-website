import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Levels from "@/components/Levels";
import Exams from "@/components/Exams";
import Events from "@/components/Events";
import Study from "@/components/Study";
import Approach from "@/components/Approach";
import Testimonials from "@/components/Testimonials";
import BookingSection from "@/components/BookingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Toasts from "@/components/Toasts";
import Intro from "@/components/Intro";
import Motion from "@/components/Motion";

export default function Landing() {
  return (
    <main data-testid="landing-page" className="bg-[var(--bg)] text-[var(--ink)]">
      <Intro />
      <div className="scroll-progress" aria-hidden="true" />
      <Navbar />
      <Hero />
      <Marquee />
      <Events />
      <About />
      <Levels />
      <Exams />
      <Approach />
      <Study />
      <Testimonials />
      <BookingSection />
      <ContactSection />
      <Footer />
      <Toasts />
      <Motion />
    </main>
  );
}
