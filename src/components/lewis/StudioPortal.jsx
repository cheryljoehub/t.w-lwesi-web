import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import STUDIO42_TW_LEWIS_LOGO from "../../../images/4.png?no-inline";
import STUDIO_IMG from "../../../images/studio-room.png?no-inline";

export default function StudioPortal() {
  return (
    <section className="py-6">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        <div className="studio-portal engraved-frame rounded-sm overflow-hidden relative">
          <div className="grid lg:grid-cols-2">
            {/* Left — image */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[520px] order-1 lg:order-1">
              <Image src={STUDIO_IMG} alt="Studio 42 podcast space" className="w-full h-full" fittingType="fill" />
              <div className="absolute inset-0 bg-gradient-to-t from-studio via-studio/40 to-transparent lg:bg-gradient-to-r" />
            </div>

            {/* Right — content */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center order-2">
              <div className="mb-8">
                <img
                  src={STUDIO42_TW_LEWIS_LOGO}
                  alt="Studio 42 at the T.W. Lewis Center"
                  className="h-auto w-full max-w-md object-contain object-left"
                />
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.05] text-studio-foreground">
                Where Purpose<br />
                <span className="text-studio-yellow italic font-medium">Meets Production.</span>
              </h2>
              <p className="mt-6 text-base sm:text-lg text-studio-muted leading-relaxed max-w-md">
                Studio 42 is the Colangelo College's Christ-centered podcast and broadcast studio —
                a hands-on workspace where students run the entire production, from onboarding to
                publishing, and graduate yards and leagues ahead.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  to="/studio-42"
                  className="group inline-flex items-center gap-2 rounded-full bg-studio-yellow text-studio-yellow-foreground px-6 py-3.5 text-sm font-body font-bold uppercase tracking-[0.12em] transition-transform hover:scale-[1.03]"
                >
                  Enter Studio 42
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/studio-42#contact"
                  className="inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 text-sm font-body font-semibold uppercase tracking-[0.12em] text-studio-foreground hover:bg-white/5 transition-colors"
                >
                  Book the Studio
                </Link>
              </div>
            </div>
          </div>

          {/* control room strip */}
          <div className="border-t border-white/10 grid sm:grid-cols-3 gap-px bg-white/5">
            {[
              ["6×", "Mac mini graphics stations"],
              ["PTZ", "Pan-tilt-zoom lobby cameras"],
              ["Multi", "Isolated channel recording"],
            ].map(([k, v]) => (
              <div key={v} className="bg-studio px-8 py-6 flex items-baseline gap-3">
                <span className="font-mono text-lg font-bold text-studio-yellow">{k}</span>
                <span className="text-sm text-studio-muted">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}