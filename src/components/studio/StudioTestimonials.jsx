import React from "react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "We want a space that is completely customizable for whoever comes in to do their podcast — every show has its own unique feel.",
    name: "Mark Petroff",
    role: "Director, T.W. Lewis Center",
  },
  {
    quote: "We want them to come in here, get the experience running the entire studio. Whenever they apply for that career, they're yards and leagues above everyone else.",
    name: "Mark Petroff",
    role: "Director, T.W. Lewis Center",
  },
  {
    quote: "Having a place like this to attend awesome events and meet professional people is a great opportunity for all of the students.",
    name: "Jayden Nelson",
    role: "Sophomore, Finance",
  },
];

export default function StudioTestimonials() {
  return (
    <section id="testimonials" className="bg-studio py-20 sm:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-studio-yellow mb-4">Testimonials</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-studio-foreground">
            Heard inside the studio.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name + t.quote.slice(0, 12)} className="flex flex-col rounded-sm border border-white/10 bg-white/[0.03] p-7">
              <div className="flex gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-studio-yellow fill-studio-yellow" />
                ))}
              </div>
              <blockquote className="font-heading text-lg italic leading-snug text-studio-foreground/90 flex-1">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-white/10">
                <p className="font-semibold text-studio-foreground text-sm">{t.name}</p>
                <p className="text-xs text-studio-muted mt-0.5">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}