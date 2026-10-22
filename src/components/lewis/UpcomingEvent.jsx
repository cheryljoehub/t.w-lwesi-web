import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import EVENT_IMG from "../../../images/studio-room.png?no-inline";

export default function UpcomingEvent() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={EVENT_IMG} alt="Upcoming T.W. Lewis Center event" className="w-full h-full" fittingType="fill" />
      </div>
      <div className="absolute inset-0 bg-primary/45 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-xl">
          <p className="inline-flex items-center gap-2 text-[11px] font-body font-semibold uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-8 bg-accent" /> Upcoming Event
          </p>

          <div className="mt-6 flex items-center gap-4">
            <div className="grid place-items-center w-16 h-16 rounded-sm bg-accent text-accent-foreground shrink-0">
              <div className="text-center leading-none">
                <span className="block font-heading text-2xl font-bold">12</span>
                <span className="block font-mono text-[10px] uppercase tracking-widest">Nov</span>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold leading-tight text-foreground">
                T.W. Lewis Speaker Series
              </h2>
              <p className="text-sm text-foreground/70">Live from the CCOB Lobby</p>
            </div>
          </div>

          <p className="mt-6 text-lg text-foreground/80 leading-relaxed">
            Join us for an evening with a top business executive, broadcast live from the
            Colangelo College lobby. PTZ cameras connect the room to the Studio 42 control room,
            with overflow seating and a livestream across the college.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/70">
            <span className="inline-flex items-center gap-2"><Calendar size={15} className="text-accent" /> November 12, 2026</span>
            <span className="inline-flex items-center gap-2"><Clock size={15} className="text-accent" /> 6:00 PM MST</span>
            <span className="inline-flex items-center gap-2"><MapPin size={15} className="text-accent" /> Building 42, GCU</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/studio-42#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-sm font-body font-bold uppercase tracking-[0.12em] transition-transform hover:scale-[1.03]"
            >
              Reserve a Seat
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/#speakers"
              className="inline-flex items-center rounded-full border border-foreground/25 px-6 py-3.5 text-sm font-body font-semibold uppercase tracking-[0.12em] text-foreground hover:bg-foreground/10 transition-colors"
            >
              About the Series
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}