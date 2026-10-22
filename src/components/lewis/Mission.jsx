import React from "react";
import { Image } from "@/components/ui/image";
import CONTROL_IMG from "../../../images/control-room.png?no-inline";

export default function Mission() {
  return (
    <section id="overview" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={CONTROL_IMG}
          alt="Studio 42 control room"
          className="w-full h-full"
          fittingType="fill"
        />
      </div>
      <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-24 sm:py-32">
        <div className="max-w-2xl">
          <p className="text-[11px] font-body font-semibold uppercase tracking-[0.22em] text-accent">The Mission</p>
          <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold leading-tight text-foreground">
            A foundation built on solid ground.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-foreground/80">
            The Center for Student Success gives Colangelo College of Business students experiences
            no other business college in America can offer — from a live broadcast studio and
            podcast room to a dedicated career services office and an executive speaker series.
          </p>
          <p className="mt-4 text-base leading-relaxed text-foreground/65">
            It is the vision of award-winning Arizona homebuilder and philanthropist Tom Lewis,
            whose life story — documented in his book <em className="text-foreground">Solid Ground</em> —
            is a testament to working hard and smart. The Center carries that conviction forward:
            Christ at the center of business, and students yards and leagues ahead as they step
            into their careers.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-foreground/15 pt-8">
            <Stat value="Purpose" label="Christ-centered leadership" />
            <Stat value="Practice" label="Hands-on learning" />
            <Stat value="2025" label="Center opened to students" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-heading text-3xl sm:text-4xl font-bold text-accent">{value}</p>
      <p className="mt-1 text-xs text-foreground/60 leading-snug">{label}</p>
    </div>
  );
}