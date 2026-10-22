import React from "react";
import { Image } from "@/components/ui/image";
import { Quote } from "lucide-react";
import SPEAKER_IMG from "../../../images/6.jpg?no-inline";

export default function SpeakerSeries() {
  return (
    <section id="speakers" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={SPEAKER_IMG}
          alt="T.W. Lewis Speaker Series event"
          className="w-full h-full"
          fittingType="fill"
        />
      </div>
      <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-l from-background via-background/85 to-background/40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="max-w-xl ml-auto">
          <p className="text-[11px] font-body font-semibold uppercase tracking-[0.22em] text-accent">The Speaker Series</p>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold leading-tight text-foreground">
            Top executives, broadcast live.
          </h2>
          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            The T.W. Lewis Speaker Series brings business leaders to the CCOB lobby stage.
            Pan-tilt-zoom cameras connect the lobby to the Studio 42 control room, so every
            event is livestreamed and recorded for overflow seating across the college.
          </p>
          <figure className="mt-8 border-r-2 border-accent pr-5 text-right">
            <Quote size={18} className="text-accent ml-auto" />
            <blockquote className="mt-2 font-heading text-xl italic leading-snug text-foreground/90">
              "Successful people don't waste time. In your 20s, it's your defining decade."
            </blockquote>
            <figcaption className="mt-3 text-sm text-foreground/60">
              Tom Lewis — author of <em className="text-foreground/80">Solid Ground</em>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}