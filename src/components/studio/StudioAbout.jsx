import React from "react";
import { Image } from "@/components/ui/image";
import { Cross, Radio, Mic, Video, SlidersHorizontal } from "lucide-react";

const CONTROL_IMG = "https://media.base44.com/images/public/6ad27cb92782a0ec31c3bb2a/ed86d3395_generated_846b1a0f.png";

const FEATURES = [
  { icon: Radio, label: "Broadcast control room" },
  { icon: Mic, label: "Customizable podcast sets" },
  { icon: Video, label: "PTZ lobby cameras & livestream" },
  { icon: SlidersHorizontal, label: "Multitrack isolated recording" },
];

export default function StudioAbout() {
  return (
    <section id="about" className="bg-studio py-20 sm:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-white/10">
            <Image src={CONTROL_IMG} alt="Studio 42 control room" className="w-full h-full" fittingType="fill" />
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-studio-yellow mb-4">About the Studio</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-studio-foreground">
            A Christ-centered media studio, run by students.
          </h2>
          <p className="mt-6 text-base text-studio-muted leading-relaxed">
            Studio 42 is the Colangelo College of Business's hands-on podcast and production
            workspace — named for the building it lives in. Students handle onboarding,
            preproduction, postproduction, editing, and publishing, gaining real experience
            running an entire studio before they ever graduate.
          </p>
          <p className="mt-4 text-base text-studio-muted leading-relaxed">
            Its focus is podcasts, speaker series, business, finance and lifestyle shows,
            interviews and testimonies. The logo carries a cross on the four — a reminder of
            the mission to produce professional, Christ-centered media and develop the next
            generation of servant leaders.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="flex items-center gap-3 rounded-sm border border-white/10 px-4 py-3 bg-white/[0.03]">
                  <Icon size={18} className="text-studio-yellow shrink-0" />
                  <span className="text-sm text-studio-foreground/85">{f.label}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-8 flex items-center gap-3 text-studio-muted">
            <Cross size={16} className="text-studio-yellow" />
            <span className="font-mono text-xs uppercase tracking-[0.15em]">Christ at the center of business</span>
          </div>
        </div>
      </div>
    </section>
  );
}