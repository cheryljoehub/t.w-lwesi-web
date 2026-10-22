import React from "react";
import { Mail, MapPin } from "lucide-react";

export default function StudioContact() {
  /** @param {React.FormEvent<HTMLFormElement>} e */
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fields = [];
    formData.forEach((value, label) => fields.push(`${label}: ${value}`));
    const body = fields.join("\n");
    const subject = encodeURIComponent("Studio 42 booking request");
    window.location.href = `mailto:studio42@gcu.edu?subject=${subject}&body=${encodeURIComponent(body)}`;
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
          <form onSubmit={onSubmit} className="rounded-sm border border-white/10 bg-white/[0.03] p-6 sm:p-8 space-y-5">
              <p className="text-sm text-studio-muted">
                Submitting opens your email app with your booking details ready to send.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" placeholder="jane@email.com" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Organization" name="organization" placeholder="Optional" required={false} />
                <Field label="Show type" name="type" placeholder="Podcast, interview, livestream…" />
              </div>
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.15em] text-studio-muted mb-2">Tell us about your project</label>
                <textarea
                  name="project"
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
        </div>
      </div>
    </section>
  );
}

/** @param {{ label: string, name: string, type?: string, placeholder?: string, required?: boolean }} props */
function Field({ label, name, type = "text", placeholder, required = true }) {
  return (
    <div>
      <label className="block text-[11px] font-mono uppercase tracking-[0.15em] text-studio-muted mb-2">{label}</label>
      <input
        required={required}
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-sm bg-studio border border-white/15 px-4 py-3 text-sm text-studio-foreground placeholder:text-studio-muted/60 focus:outline-none focus:border-studio-yellow"
      />
    </div>
  );
}