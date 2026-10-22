import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HERO_VIDEO from "../../../images/Studio42Commercial.mp4?no-inline";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <video
          src={HERO_VIDEO}
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>
      {/* purple duotone + cinematic darken */}
      <div className="pointer-events-none absolute inset-0 bg-primary/40 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-black/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent" />

      <div className="pointer-events-none relative mx-auto max-w-7xl px-5 sm:px-8 w-full pt-32 pb-20 sm:pb-28">
        <p className="inline-flex items-center gap-2 text-[11px] font-body font-semibold uppercase tracking-[0.22em] text-accent">
          <span className="h-px w-8 bg-accent" /> Colangelo College of Business
        </p>
        <h1 className="mt-6 font-heading font-bold leading-[1.02] text-foreground text-5xl sm:text-7xl lg:text-8xl max-w-4xl">
          The Architecture<br />
          <span className="italic font-medium text-accent">of Character.</span>
        </h1>
        <p className="mt-7 text-lg sm:text-xl text-foreground/80 leading-relaxed max-w-xl">
          The T.W. Lewis Center for Student Success equips GCU business students with the tools,
          exposure, and experience to lead — where purpose meets production.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/studio-42"
            className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-4 text-sm font-body font-bold uppercase tracking-[0.12em] transition-transform hover:scale-[1.03]"
          >
            Enter Studio 42
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/#programs"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-4 text-sm font-body font-semibold uppercase tracking-[0.12em] text-foreground hover:bg-foreground/10 transition-colors"
          >
            Explore Programs
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px hairline" />
    </section>
  );
}