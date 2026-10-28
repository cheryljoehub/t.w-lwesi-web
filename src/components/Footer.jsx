import React from "react";
import { Link } from "react-router-dom";
import STUDIO42_LOGO_TAGLINE from "../../images/9.png?no-inline";
import TW_LEWIS_LOGO from "../../images/5.png?no-inline";

export default function Footer() {
  return (
    <footer className="relative bg-background border-t border-border overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img
              src={TW_LEWIS_LOGO}
              alt="T.W. Lewis"
              className="h-8 w-auto object-contain"
            />
            <p className="text-sm text-foreground/60 mt-1">for Student Success</p>
            <p className="mt-5 text-sm text-foreground/70 max-w-xs leading-relaxed">
              A multifaceted facility in Grand Canyon University's Colangelo College of Business —
              building the next generation of servant leaders.
            </p>
          </div>

          <FooterCol title="Explore" links={[
            { label: "Overview", to: "/#overview" },
            { label: "Programs", to: "/#programs" },
            { label: "Speaker Series", to: "/#speakers" },
            { label: "Studio 42", to: "/studio-42" },
          ]} />

          <FooterCol title="Studio 42" links={[
            { label: "About the Studio", to: "/studio-42#about" },
            { label: "Testimonials", to: "/studio-42#testimonials" },
            { label: "Book the Studio", to: "/studio-42#contact" },
          ]} />

          <div>
            <p className="text-[11px] font-body font-semibold uppercase tracking-[0.18em] text-accent mb-4">Colangelo College</p>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Grand Canyon University<br />
              3300 W. Camelback Rd.<br />
              Phoenix, AZ 85017
            </p>
            <a href="https://www.gcu.edu/colangelo-college-of-business.php" target="_blank" rel="noreferrer" className="inline-block mt-4 text-sm font-semibold text-accent hover:underline">
              gcu.edu/colangelo →
            </a>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-foreground/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img
            src={STUDIO42_LOGO_TAGLINE}
            alt="Studio 42 — Where Purpose Meets Production"
            className="w-40 sm:w-48 h-auto object-contain"
          />
          <p className="text-xs text-foreground/50 text-center sm:text-right">
            © {new Date().getFullYear()} Grand Canyon University · Colangelo College of Business. Christ at the center of business.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p className="text-[11px] font-body font-semibold uppercase tracking-[0.18em] text-accent mb-4">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}