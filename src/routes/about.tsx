import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import projInterior from "@/assets/project-interior.jpg";
import heroVilla from "@/assets/hero-villa.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Studio — PDS, Palwal" },
      { name: "description", content: "Founded in 2009 in Gurugram, PDS is an integrated design-build practice of architects, interior designers and contractors delivering turnkey homes and workplaces across Delhi NCR." },
      { property: "og:title", content: "Studio — PDS" },
      { property: "og:description", content: "An integrated architecture, interior and construction practice based in Gurugram, serving Delhi NCR since 2009." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { y: "2009", t: "Founded in Gurugram by Aakash Nanda (Architect, SPA Delhi '04) and Ritika Sehgal (Interior Designer, NID '05)." },
  { y: "2012", t: "First turnkey villa delivered in DLF Phase 2 — 8,400 sq ft, completed in 11 months on a fixed-price contract." },
  { y: "2015", t: "In-house execution division set up with 24 on-roll site engineers, carpenters and finishing crews." },
  { y: "2018", t: "Featured in Architectural Digest India 'Top 50 Design Firms'. Crossed 100 completed homes." },
  { y: "2021", t: "Opened studio in Chhatarpur and launched the 10-Year Workmanship Warranty programme." },
  { y: "2024", t: "Handed over our 240th family home. Active across Gurugram, Noida, South Delhi, Faridabad and Chandigarh." },
];

const team = [
  { n: "Aakash Nanda", r: "Founding Partner — Architecture", c: "SPA Delhi · 19 yrs" },
  { n: "Ritika Sehgal", r: "Founding Partner — Interiors", c: "NID Ahmedabad · 18 yrs" },
  { n: "Vikram Malhotra", r: "Director — Construction", c: "IIT Roorkee · 22 yrs" },
  { n: "Neha Kapoor", r: "Head — Project Delivery", c: "PMP · 14 yrs" },
];

const stats = [
  { k: "240+", v: "Homes delivered" },
  { k: "16", v: "Years in practice" },
  { k: "38", v: "In-house specialists" },
  { k: "10 Yr", v: "Workmanship warranty" },
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <img src={heroVilla} alt="PDS studio" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-28">
          <p className="eyebrow">The Studio · Est. 2009 · Gurugram</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl max-w-5xl">
            We design and build as a <em className="text-gradient-gold not-italic">single act</em>.
          </h1>
          <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
            PDS is a Delhi NCR–based design-build practice. Architects, interior designers,
            structural engineers and a 38-person execution team — one studio, one contract, from
            first sketch to handover keys.
          </p>
        </div>
      </section>

      {/* HOME / OVERVIEW */}
      <section id="home" className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Home</p>
            <div className="mt-4 hairline w-24" />
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">
              An integrated practice for homes that are{" "}
              <span className="text-muted-foreground">lived in, not just looked at.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
              From a 2,400 sq ft builder-floor in Greater Kailash to a 14,000 sq ft farmhouse in
              Westend Greens — every project is led by a partner-in-charge and executed by our
              own crew. No subletting, no surprises, no second contractor on speed dial.
            </p>
            <div className="mt-10 grid gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div key={s.v} className="bg-background p-6">
                  <p className="font-display text-3xl text-gradient-gold">{s.k}</p>
                  <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/portfolio" className="group inline-flex items-center gap-3 bg-gold px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-primary-foreground transition-all hover:gap-5">
                View our work <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-3 border border-foreground/30 px-6 py-3 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-all hover:border-gold hover:text-gold">
                Book a site visit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VISION / MISSION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-16 lg:grid-cols-12 pb-32">
        <div className="lg:col-span-7">
          <img src={projInterior} alt="Studio interior, Gurugram" loading="lazy" className="w-full object-cover" />
        </div>
        <div className="lg:col-span-5 space-y-10">
          <div>
            <p className="eyebrow">Vision</p>
            <p className="mt-4 font-display text-2xl leading-snug">
              To raise the standard of how India's families build their homes — through
              transparency, craftsmanship and accountable design.
            </p>
          </div>
          <div>
            <p className="eyebrow">Mission</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Deliver architecture, interiors and construction under one fixed-price contract.
              Close the gap between the drawing and the detail — the gap where most projects
              quietly lose their character.
            </p>
          </div>
          <div>
            <p className="eyebrow">Founders' note</p>
            <p className="mt-4 text-muted-foreground leading-relaxed italic">
              "We started PDS in a one-room office in Sector 44 because we were tired of
              watching beautiful drawings die on site. Sixteen years later, our answer is still
              the same — do both, and be measured by the building, not the brochure."
              <span className="not-italic block mt-3 font-mono text-xs text-gold">— Aakash Nanda & Ritika Sehgal</span>
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="border-y border-border/60 bg-charcoal/30 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow">Timeline</p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl">Sixteen years, one studio.</h2>
          <ol className="mt-16 divide-y divide-border/60">
            {timeline.map((m) => (
              <li key={m.y} className="grid gap-6 py-8 md:grid-cols-12 md:items-baseline">
                <span className="md:col-span-2 font-display text-3xl text-gradient-gold">{m.y}</span>
                <p className="md:col-span-10 text-lg leading-relaxed">{m.t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-32">
        <p className="eyebrow">Partners</p>
        <h2 className="mt-4 font-display text-4xl sm:text-6xl">The people behind the work.</h2>
        <div className="mt-16 grid gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((p) => (
            <div key={p.n} className="bg-background p-8">
              <div className="aspect-[3/4] bg-gradient-to-br from-charcoal to-ink border border-border/60" />
              <h3 className="mt-6 font-display text-xl">{p.n}</h3>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">{p.r}</p>
              <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-gold">{p.c}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
