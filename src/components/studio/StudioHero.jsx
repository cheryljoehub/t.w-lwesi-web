import React from "react";
import { ArrowDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import STUDIO42_LOGO_TAGLINE from "../../../images/2.png?no-inline";

const STUDIO_IMG = "https://media.base44.com/images/public/6ad27cb92782a0ec31c3bb2a/413d547a4_generated_7c2b2041.png";

export default function StudioHero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-studio">
      <div className="absolute inset-0">
        <Image src={STUDIO_IMG} alt="Studio 42 podcast space" className="w-full h-full" fittingType="fill" />
        <div className="absolute inset-0 bg-gradient-to-b from-studio/80 via-studio/70 to-studio" />
      </div>

      <div className="relative z-10 text-center px-5 pt-20 pb-16">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-studio-yellow mb-8">
          T.W. Lewis Center · Building 42
        </p>
        <img
          src={STUDIO42_LOGO_TAGLINE}
          alt="Studio 42 — Where Purpose Meets Production"
          className="mx-auto w-[min(88vw,42rem)] h-auto object-contain"
        />
        <p className="mt-8 font-heading text-xl sm:text-2xl text-studio-foreground/90 italic font-medium">
          Taking your content to the next level.
        </p>
        <div className="mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-studio-yellow text-studio-yellow-foreground px-8 py-4 text-sm font-body font-bold uppercase tracking-[0.14em] transition-transform hover:scale-[1.04]"
          >
            Book the Studio
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-studio-muted hover:text-studio-yellow transition-colors flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}