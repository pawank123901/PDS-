import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteLayout } from "@/components/site/Layout";
import { Mail, MapPin, Phone, ArrowRight, Check, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PDS" },
      { name: "description", content: "Discuss a project with PDS. Palwal studio. Response within two business days." },
      { property: "og:title", content: "Contact — PDS" },
      { property: "og:description", content: "Get in touch to begin a project, book a consultation or request a quote." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-16">
        <p className="eyebrow">Begin</p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl max-w-4xl">
          A conversation is the <em className="text-gradient-gold not-italic">first drawing</em>.
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-32 grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {sent ? (
            <div className="border border-gold/40 bg-charcoal/40 p-12">
              <Check className="h-10 w-10 text-gold" strokeWidth={1.3} />
              <h2 className="mt-6 font-display text-3xl">Thank you.</h2>
              <p className="mt-3 text-muted-foreground">
                Your message has reached the studio. A partner will respond within two business days.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <div className="grid gap-8 sm:grid-cols-2">
                <Field label="Phone" name="phone" type="tel" />
                <Select label="Project type" name="type" options={[
                  "Architectural Design", "Interior Design", "Residential Construction",
                  "Commercial Project", "Renovation", "Turnkey", "Other",
                ]} />
              </div>
              <Select label="Approximate budget" name="budget" options={[
                "Under 500K", "500K – 1M", "1M – 3M", "3M – 10M", "10M+",
              ]} />
              <div>
                <label className="eyebrow block">Tell us about the project</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="mt-3 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-gold transition-colors resize-none"
                  placeholder="Site, programme, ambition, timeline…"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center gap-3 bg-gold px-8 py-4 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-all duration-500 hover:bg-gold-soft hover:gap-5"
              >
                Send enquiry <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </div>

        <aside className="lg:col-span-5 space-y-10 lg:pl-10 lg:border-l lg:border-border/60">
          <div>
            <p className="eyebrow">Studio</p>
            <div className="mt-5 space-y-5 text-sm">
              <Detail icon={MapPin} title="Palwal, India" body="Shop no. 11, Phase:1 Omaxe City, Palwal, Haryana 121102" />
              <Detail icon={Mail} title="poshdesigningstudio@gmail.com" body="General enquiries & press" link="mailto:poshdesigningstudio@gmail.com" />
              <Detail icon={Phone} title="+91 7419 181 819" body="Mon–Sat, 10:00–19:00 IST" link="tel:+917419181819" />
            </div>
          </div>

          <div>
            <p className="eyebrow">Response time</p>
            <p className="mt-4 font-display text-2xl">Within two business days.</p>
            <p className="mt-3 text-sm text-muted-foreground">Every enquiry is read by a partner before being assigned.</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/917419181819"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-gold/50 px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-gold transition-all duration-500 hover:bg-gold hover:text-primary-foreground"
            >
              Chat on WhatsApp <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://instagram.com/the_pds_architects"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 border border-gold/50 px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-gold transition-all duration-500 hover:bg-gold hover:text-primary-foreground"
            >
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="eyebrow block">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground placeholder:text-muted-foreground/60 outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}

function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label className="eyebrow block">{label}</label>
      <select
        name={name}
        className="mt-3 w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-foreground outline-none focus:border-gold transition-colors"
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o} value={o} className="bg-background">{o}</option>)}
      </select>
    </div>
  );
}

function Detail({ icon: Icon, title, body, link }: { icon: typeof Mail; title: string; body: string; link?: string }) {
  const content = (
    <div className="flex gap-4">
      <Icon className="h-5 w-5 text-gold mt-0.5" strokeWidth={1.3} />
      <div>
        <p className="font-display text-lg">{title}</p>
        <p className="text-sm text-muted-foreground mt-0.5">{body}</p>
      </div>
    </div>
  );
  return link ? <a href={link} className="block transition-opacity hover:opacity-80">{content}</a> : content;
}
