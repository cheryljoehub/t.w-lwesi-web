import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Studio42Logo from "@/components/Studio42Logo";
import TW_LEWIS_LOGO from "../../images/5.png?no-inline";

const LEWIS_LINKS = [
  { label: "Overview", to: "/#overview" },
  { label: "Programs", to: "/#programs" },
  { label: "Career", to: "/#career" },
  { label: "Studio 42", to: "/studio-42" },
  { label: "Indigo", to: "/indigo-assessment" },
  { label: "Speakers", to: "/#speakers" },
];

const STUDIO_LINKS = [
  { label: "About", to: "/studio-42#about" },
  { label: "Testimonials", to: "/studio-42#testimonials" },
  { label: "Contact", to: "/studio-42#contact" },
];

export default function Navbar() {
  const location = useLocation();
  const onStudio = location.pathname.startsWith("/studio-42");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const links = onStudio ? STUDIO_LINKS : LEWIS_LINKS;

  const barClass = onStudio
    ? cn("transition-all duration-300", scrolled ? "bg-studio/85 backdrop-blur-md border-white/10" : "bg-transparent border-transparent")
    : cn("transition-all duration-300", scrolled ? "bg-background/85 backdrop-blur-md border-border" : "bg-transparent border-transparent");

  return (
    <header className={cn("fixed top-0 inset-x-0 z-50 border-b", barClass)}>
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          {onStudio ? (
            <Studio42Logo className="h-10 w-auto" />
          ) : (
            <img
              src={TW_LEWIS_LOGO}
              alt="T.W. Lewis"
              className="h-8 w-auto object-contain"
            />
          )}
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className={cn(
                "text-[12px] font-body font-semibold uppercase tracking-[0.14em] transition-colors",
                onStudio ? "text-studio-foreground/80 hover:text-studio-yellow" : "text-foreground/70 hover:text-accent"
              )}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/studio-42#contact"
            className={cn(
              "rounded-full px-5 py-2 text-[12px] font-body font-bold uppercase tracking-[0.14em] transition-transform hover:scale-[1.03]",
              onStudio
                ? "bg-studio-yellow text-studio-yellow-foreground"
                : "bg-accent text-accent-foreground"
            )}
          >
            Book the Studio
          </Link>
        </div>

        <button
          className={cn("md:hidden p-2", onStudio ? "text-studio-foreground" : "text-foreground")}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className={cn("md:hidden border-t", onStudio ? "bg-studio border-white/10" : "bg-background border-border")}>
          <div className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className={cn(
                  "py-2.5 text-sm font-body font-semibold uppercase tracking-[0.12em]",
                  onStudio ? "text-studio-foreground/85" : "text-foreground/80"
                )}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/studio-42#contact"
              className={cn(
                "mt-2 rounded-full px-5 py-3 text-center text-sm font-body font-bold uppercase tracking-[0.12em]",
                onStudio ? "bg-studio-yellow text-studio-yellow-foreground" : "bg-accent text-accent-foreground"
              )}
            >
              Book the Studio
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}