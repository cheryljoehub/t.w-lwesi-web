import React from "react";
import { Mic, Radio, Briefcase, Presentation, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";
import STUDIO_IMG from "../../../images/1.jpg?inline";
import CONTROL_IMG from "../../../images/control-room.png?no-inline";
import CAREER_IMG from "../../../images/career-services.png?no-inline";
import SPEAKER_IMG from "../../../images/speaker-series.png?no-inline";

const PILLARS = [
  {
    icon: Radio,
    title: "Broadcast Studio",
    body: "A professional-grade control room with six Mac minis, full-screen graphics, teleprompter feeds, and multitrack recording — built for live and produced media.",
    tag: "Studio 42",
    to: "/studio-42",
    img: CONTROL_IMG,
  },
  {
    icon: Mic,
    title: "Podcast Room",
    body: "A fully customizable space for podcasts, interviews, and testimonies. Every show gets its own unique feel — from signage to lighting to furniture.",
    tag: "Studio 42",
    to: "/studio-42",
    img: STUDIO_IMG,
  },
  {
    icon: Briefcase,
    title: "Career Services",
    body: "A dedicated career office inside the Center, connecting students to advanced avenues of employment and the marketplace.",
    tag: "Programs",
    to: "/#programs",
    img: CAREER_IMG,
  },
  {
    icon: Presentation,
    title: "Speaker Series",
    body: "The T.W. Lewis Speaker Series spotlights top business executives, broadcast live from the CCOB lobby and streamed to overflow seating.",
    tag: "Events",
    to: "/#speakers",
    img: SPEAKER_IMG,
  },
];

export default function Pillars() {
  return (
    <section id="programs" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-[11px] font-body font-semibold uppercase tracking-[0.22em] text-accent">The Four Pillars</p>
            <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold leading-tight max-w-xl text-foreground">
              Everything a student needs to step into their career.
            </h2>
          </div>
          <p className="text-sm text-foreground/60 max-w-xs">
            A first-floor ecosystem designed for content, connection, and career readiness.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.title}
                to={p.to}
                className="group relative aspect-[3/4] rounded-sm overflow-hidden"
              >
                <Image
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-primary/45 mix-blend-multiply transition-opacity duration-500 group-hover:bg-primary/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="grid place-items-center w-11 h-11 rounded-sm bg-accent text-accent-foreground mb-4">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-heading text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{p.body}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{p.tag}</p>
                    <ArrowUpRight size={18} className="text-foreground/70 group-hover:text-accent transition-colors" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}