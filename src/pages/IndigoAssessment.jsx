import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Compass, ClipboardCheck, MessageSquare, Target, ArrowRight, CheckCircle2 } from "lucide-react";

const STEPS = [
  { icon: ClipboardCheck, title: "Take the assessment", body: "A ~30-minute online assessment captures your strengths, motivations, and behaviors." },
  { icon: MessageSquare, title: "Review your profile", body: "Meet with Career Services to walk through your personalized Indigo profile together." },
  { icon: Target, title: "Align your path", body: "Map your results to majors, internships, and careers that fit who you are." },
];

const OUTCOMES = ["Your top strengths", "What motivates you", "Your natural behaviors", "Best-fit careers & majors"];

export default function IndigoAssessment() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-primary/25 via-background to-background">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-primary/20 blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-4xl px-5 sm:px-8 pt-40 pb-20 sm:pb-28 text-center">
            <p className="inline-flex items-center gap-2 text-[11px] font-body font-semibold uppercase tracking-[0.22em] text-accent">
              <Compass size={14} /> Career Services
            </p>
            <h1 className="mt-5 font-heading text-4xl sm:text-6xl font-bold leading-[1.05] text-foreground">
              The <span className="italic text-accent">Indigo Assessment.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/75 leading-relaxed max-w-2xl mx-auto">
              Discover your strengths, motivations, and best-fit career path — the foundation the
              T.W. Lewis Center uses to help you step into your calling.
            </p>
            <Link
              to="/studio-42#contact"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm font-body font-bold uppercase tracking-[0.12em] transition-transform hover:scale-[1.03]"
            >
              Request Access
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
            <p className="text-[11px] font-body font-semibold uppercase tracking-[0.22em] text-accent">What it is</p>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold leading-tight text-foreground">A clearer picture of who you are.</h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed">
              The Indigo Assessment combines behavioral and motivational science to give you a
              personalized profile — your strengths, what drives you, and how you naturally work.
              It's the starting point for every conversation in the Career Services office.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16 border-t border-border">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid md:grid-cols-3 gap-4">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="rounded-sm border border-border bg-card/60 p-7">
                    <span className="font-mono text-[11px] uppercase tracking-widest text-accent">Step 0{i + 1}</span>
                    <span className="mt-4 grid place-items-center w-11 h-11 rounded-sm bg-accent/15 text-accent">
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{s.body}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
            <p className="text-[11px] font-body font-semibold uppercase tracking-[0.22em] text-accent">What you'll discover</p>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold leading-tight text-foreground">A profile you can build on.</h2>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
              {OUTCOMES.map((o) => (
                <li key={o} className="flex items-center gap-3 rounded-sm border border-border bg-card/60 px-5 py-4">
                  <CheckCircle2 size={18} className="text-accent shrink-0" />
                  <span className="text-foreground/85">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-r from-primary/25 to-background border-t border-border">
          <div className="mx-auto max-w-4xl px-5 sm:px-8 py-20 sm:py-28 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-foreground">Ready to find your path?</h2>
            <p className="mt-5 text-lg text-foreground/70 max-w-xl mx-auto">
              Request access through the T.W. Lewis Center Career Services office and take the first step.
            </p>
            <Link
              to="/studio-42#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm font-body font-bold uppercase tracking-[0.12em] transition-transform hover:scale-[1.03]"
            >
              Request Access
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}