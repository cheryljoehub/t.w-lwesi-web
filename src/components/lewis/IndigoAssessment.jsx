import React from "react";
import { Link } from "react-router-dom";
import { Compass, ArrowRight } from "lucide-react";

export default function IndigoAssessment() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/25 via-background to-background border-y border-border">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center gap-2 text-[11px] font-body font-semibold uppercase tracking-[0.22em] text-accent">
            <Compass size={14} /> Career Services
          </p>
          <h2 className="mt-5 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            Discover your path with the <span className="italic text-accent">Indigo Assessment.</span>
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-xl">
            The Indigo Assessment reveals your strengths, motivations, and natural behaviors —
            then maps them to careers and majors that fit who you are. It's the starting point
            the Career Services office uses to help you step into your calling.
          </p>
          <Link
            to="/indigo-assessment"
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm font-body font-bold uppercase tracking-[0.12em] transition-transform hover:scale-[1.03]"
          >
            Explore the Assessment
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <div className="grid grid-cols-2 gap-3">
            {["Strengths", "Motivations", "Behaviors", "Career fit"].map((t, i) => (
              <div key={t} className="rounded-sm border border-border bg-card/60 px-5 py-6 text-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">0{i + 1}</span>
                <p className="mt-2 font-heading text-base font-bold text-foreground">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}