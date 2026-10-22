import React from "react";
import { Users, FileText, MessagesSquare, Search, Network, Compass, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const OFFERINGS = [
  { icon: Users, title: "1:1 Career Advising", body: "Personalized guidance from the dedicated Career Services office inside the Center." },
  { icon: FileText, title: "Resume & Cover Letters", body: "Professional reviews and refinement to make every application stand apart." },
  { icon: MessagesSquare, title: "Mock Interviews", body: "Practice with real feedback so you walk into every interview prepared and confident." },
  { icon: Search, title: "Internships & Jobs", body: "Direct connections to advanced avenues of employment and the marketplace." },
  { icon: Network, title: "Networking & Mentorship", body: "Relationships with executives, alumni, and mentors through the Speaker Series." },
  { icon: Compass, title: "Indigo Assessment", body: "Discover your strengths, motivations, and best-fit career path.", to: "/indigo-assessment" },
];

export default function CareerServicesSection() {
  return (
    <section id="career" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-[11px] font-body font-semibold uppercase tracking-[0.22em] text-accent">Career Services</p>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl font-bold leading-tight text-foreground">
            The career services side of the T.W. Lewis Center.
          </h2>
          <p className="mt-5 text-base text-foreground/70 leading-relaxed">
            A dedicated career office inside the Center, built to move students from classroom to
            career — with advising, preparation, and the connections that set them apart.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OFFERINGS.map((o) => {
            const Icon = o.icon;
            const inner = (
              <div className="group relative h-full rounded-sm border border-border bg-card/60 p-7 transition-colors hover:border-accent/50 hover:bg-card">
                <span className="grid place-items-center w-11 h-11 rounded-sm bg-accent/15 text-accent">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{o.title}</h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{o.body}</p>
                {o.to && (
                  <ArrowUpRight size={18} className="absolute top-6 right-6 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </div>
            );
            return o.to ? (
              <Link key={o.title} to={o.to} className="block h-full">{inner}</Link>
            ) : (
              <div key={o.title} className="h-full">{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}