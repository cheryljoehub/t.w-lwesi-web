import React from "react";
import { Image } from "@/components/ui/image";
import { CheckCircle2 } from "lucide-react";
import CAREER_IMG from "../../../images/8.jpg?inline";

const POINTS = [
  "Onboarding & preproduction planning",
  "Hands-on studio operation experience",
  "Postproduction editing & publishing",
  "Direct exposure to the marketplace",
];

export default function CareerServices() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={CAREER_IMG}
          alt="GCU business students collaborating"
          className="w-full h-full"
          fittingType="fill"
        />
      </div>
      <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="max-w-xl">
          <p className="text-[11px] font-body font-semibold uppercase tracking-[0.22em] text-accent">Career Readiness</p>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold leading-tight text-foreground">
            Yards and leagues ahead.
          </h2>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            From the Career Services office to the Studio 42 control room, students do the
            real work — so when they apply for that internship or that career post-graduation,
            they stand apart from everyone else who applies.
          </p>
          <ul className="mt-8 space-y-3">
            {POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="text-accent mt-0.5 shrink-0" />
                <span className="text-foreground/85">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}