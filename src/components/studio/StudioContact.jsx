import React, { useState } from "react";
import { CheckCircle2, Mail, MapPin } from "lucide-react";

export default function StudioContact() {
  const [sent, setSent] = useState(false);

  /** @param {React.FormEvent<HTMLFormElement>} e */
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="bg-studio py-20 sm:py-28 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-studio-yellow mb-4">Book the Studio</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold leading-tight text-studio-foreground">
            Bring your show to Studio 42.
          </h2>
          <p className="mt-6 text-base text-studio-muted leading-relaxed max-w-md">
            Studio 42 is available to individuals and groups outside of GCU. Student workers
            are involved in every production — and if you need branding or a website, the
            student-driven Canyon Creative team can build it with you.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-studio-foreground/85">
              <MapPin size={18} className="text-studio-yellow" />
              <span className="text-sm">Building 42 · Colangelo College of Business · GCU, Phoenix AZ</span>
            </div>
            <div className="flex items-center gap-3 text-studio-foreground/85">
              <Mail size={18} className="text-studio-yellow" />
              <span className="text-sm">studio42@gcu.edu</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {sent ? (
            <div className="h-full min-h-[320px] grid place-items-center rounded-sm border border-white/10 bg-white/[0.03] p-10 text-center">
              <div>
                <CheckCircle2 size={40} className="text-studio-yellow mx-auto" />
                <h3 className="mt-5 font-heading text-2xl font-bold text-studio-foreground">Request received</h3>
                <p className="mt-3 text-sm text-studio-muted max-w-sm mx-auto">
                  Thanks — the Studio 42 team will reach out shortly to coordinate your booking.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="rounded-sm border border-white/10 bg-white/[0.03] p-6 sm:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" placeholder="jane@email.com" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Organization" name="org" placeholder="Optional" />
                <Field label="Show type" name="type" placeholder="Podcast, interview, livestream…" />
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.15em] text-studio-muted mb-2">Tell us about your project</label>
                <textarea
                  required
                  rows={4}
                  placeholder="What are you looking to produce?"
                  className="w-full rounded-sm bg-studio border border-white/15 px-4 py-3 text-sm text-studio-foreground placeholder:text-studio-muted/60 focus:outline-none focus:border-studio-yellow"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-studio-yellow text-studio-yellow-foreground px-6 py-4 text-sm font-body font-bold uppercase tracking-[0.14em] transition-transform hover:scale-[1.02]"
              >
                Book the Studio
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/** @param {{ label: string, name: string, type?: string, placeholder?: string }} props */
function Field({ label, name, type = "text", placeholder }) {
  return (
    <div>
      <label className="block text-[11px] font-mono uppercase tracking-[0.15em] text-studio-muted mb-2">{label}</label>
      <input
        required
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-sm bg-studio border border-white/15 px-4 py-3 text-sm text-studio-foreground placeholder:text-studio-muted/60 focus:outline-none focus:border-studio-yellow"
      />
    </div>
  );
}