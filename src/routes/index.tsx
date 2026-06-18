import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Compass, DraftingCompass as Drafting, Hammer, Home, Sparkles, TreePine, Building2, Ruler, Instagram, ExternalLink } from "lucide-react";
import heroVilla from "@/assets/hero-villa.jpg";
import beforeLiving from "@/assets/before-living.jpg";
import afterLiving from "@/assets/after-living.jpg";
import { SiteLayout } from "@/components/site/Layout";
import { BeforeAfter } from "@/components/site/BeforeAfter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PDS — Design, Build & Deliver" },
      { name: "description", content: "A trusted design & build practice crafting residences, workplaces and turnkey builds with precision since 2009." },
      { property: "og:title", content: "PDS — Design, Build & Deliver" },
      { property: "og:description", content: "Architecture, interior design, and turnkey construction by an integrated practice of designers and builders." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Drafting, title: "Architectural Design", desc: "Conceptual to construction documentation for buildings of enduring character." },
  { icon: Sparkles, title: "Interior Design", desc: "Considered interiors with bespoke joinery, lighting and materials." },
  { icon: Home, title: "Residential Construction", desc: "Single-family residences and estates built with craftsman-grade precision." },
  { icon: Building2, title: "Commercial Construction", desc: "Workplaces, hospitality and retail delivered on programme and budget." },
  { icon: Hammer, title: "Renovation & Remodel", desc: "Sensitive transformations of heritage and contemporary properties." },
  { icon: Compass, title: "Turnkey Projects", desc: "One studio, one contract — design through handover keys." },
  { icon: Ruler, title: "Project Management", desc: "Independent oversight of consultants, contractors and budgets." },
  { icon: TreePine, title: "Landscape Design", desc: "Site-responsive gardens, terraces and pools that frame the architecture." },
];


const testimonials = [
  { quote: "PDS delivered a residence that we still discover, room by room. A practice that designs with discipline and builds with conscience.", author: "Helena & Marc Voss", role: "Private Client, Gurugram" },
  { quote: "From masterplan to door handle, a single intelligence ran through the project. The result speaks for itself.", author: "Dr. K. Hartmann", role: "CEO, Hartmann Capital" },
  { quote: "The most professional, materially literate team we have ever engaged. They make the complicated look effortless.", author: "Isabella Conti", role: "Hospitality Group Director" },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <img
          src={heroVilla}
          alt="Sculptural concrete villa at dusk"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-24 pt-40 lg:px-10">
          <div className="max-w-5xl animate-fade-up text-center mx-auto">
            <p className="eyebrow">— One Stop Solution For Architecture & Build —</p>
            <h1 className="mt-8 font-display text-6xl leading-[0.95] text-foreground sm:text-8xl lg:text-[9rem]">
              Design That<br />
              <em className="text-gradient-gold not-italic italic">Defines Space</em>
            </h1>
            <p className="mx-auto mt-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Where architectural vision meets exceptional craftsmanship — homes, workplaces and
              turnkey builds, all under one studio.
            </p>


            <div className="mt-14 flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-[0.22em] text-muted-foreground">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rotate-45 bg-gold" />Design + Build</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rotate-45 bg-gold" />Turnkey Execution</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rotate-45 bg-gold" />Delhi NCR</span>
            </div>
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">The Studio</p>
            <div className="mt-4 hairline w-24" />
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-display text-4xl leading-[1.1] sm:text-6xl">
              One contract. One vision.<br />
              <span className="text-muted-foreground">Architecture and building, under one roof.</span>
            </h2>
            <p className="mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              PDS is a vertically integrated practice. The same hands that draw the wall
              specify the stone, source the joiner, and supervise the pour. The result is
              architecture that does not negotiate its way to completion — it arrives whole.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative border-y border-border/60 bg-charcoal/40 py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Capabilities</p>
              <h2 className="mt-4 font-display text-4xl sm:text-6xl">Services</h2>
            </div>
            <Link to="/services" className="group inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-gold">
              All services <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-16 grid gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative bg-background p-8 transition-colors duration-500 hover:bg-card"
              >
                <s.icon className="h-6 w-6 text-gold transition-transform duration-500 group-hover:-translate-y-1" strokeWidth={1.2} />
                <h3 className="mt-8 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 h-px w-8 bg-gold transition-all duration-500 group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO / INSTAGRAM */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl">Recent projects</h2>
          </div>
          <Link to="/portfolio" className="group inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-gold">
            View on Instagram <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-16 max-w-lg mx-auto">
          <a
            href="https://instagram.com/the_pds_architects"
            target="_blank"
            rel="noreferrer"
            className="group block overflow-hidden border border-gold/30 bg-charcoal/60 transition-all duration-500 hover:border-gold hover:shadow-lg"
          >
            <div className="aspect-[4/3] flex items-center justify-center bg-charcoal/40 relative">
              <Instagram className="h-20 w-20 text-muted-foreground/20 transition-all duration-500 group-hover:scale-110 group-hover:text-gold/30" strokeWidth={1} />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-gold">@the_pds_architects</p>
                  <h3 className="mt-2 font-display text-3xl text-foreground">Latest Project</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Click to view on Instagram</p>
                </div>
                <ExternalLink className="h-6 w-6 text-foreground/70 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* WHY US */}
      <section className="relative overflow-hidden border-y border-border/60 py-32">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial-gold)" }} />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Why PDS</p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-6xl">
              The difference is in the <em className="text-gradient-gold not-italic">discipline</em>.
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground leading-relaxed">
              We are not a contractor with a designer, nor a designer with subcontractors. Every
              project is led by a partner-in-charge and delivered by a dedicated, in-house team.
            </p>
          </div>
          <div className="grid gap-px bg-border/40 sm:grid-cols-2">
            {[
              { k: "01", t: "Integrated practice", d: "Architecture and construction under one fee." },
              { k: "02", t: "Material literacy", d: "A 1,400-sample library curated over 16 years." },
              { k: "03", t: "Fixed-price delivery", d: "Open books, no surprises, accountable timelines." },
              { k: "04", t: "10-year guarantee", d: "Every turnkey project is warranted for a decade." },
            ].map((f) => (
              <div key={f.k} className="bg-background p-8">
                <p className="font-mono text-xs text-gold">{f.k}</p>
                <h3 className="mt-4 font-display text-xl">{f.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-32">
        <div className="max-w-2xl">
          <p className="eyebrow">Our Process</p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl">The PDS Method.</h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A proven sequence refined across a decade of delivering exceptional spaces.
          </p>
        </div>
        <ol className="mt-16 grid gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { n: "01", t: "Discover", w: "Week 1–2", d: "In-depth consultation to understand your vision and brief." },
            { n: "02", t: "Concept", w: "Week 3–4", d: "Unique concepts blending aesthetics with function." },
            { n: "03", t: "Visualise", w: "Week 5–6", d: "Photoreal 3D renders to experience the space first." },
            { n: "04", t: "Execute", w: "Week 7–16", d: "Skilled craftsmen bring the design to life." },
            { n: "05", t: "Handover", w: "Final week", d: "Seamless handover with full documentation and warranty." },
          ].map((p) => (
            <li key={p.n} className="bg-background p-8">
              <p className="font-mono text-xs text-gold">{p.n}</p>
              <h3 className="mt-6 font-display text-2xl">{p.t}</h3>
              <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">{p.w}</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* BEFORE / AFTER */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-32">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Before · After</p>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl">
              From bare shell to <em className="text-gradient-gold not-italic">finished home</em>.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Drag the handle to reveal the transformation. A 2,800 sq ft residence in Gurugram —
              16 weeks, fixed-price, one contract.
            </p>
          </div>
        </div>
        <div className="mt-14">
          <BeforeAfter before={beforeLiving} after={afterLiving} beforeAlt="Raw shell before renovation" afterAlt="Finished living room after renovation" />
          <p className="mt-4 text-center font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
            Drag the slider · Project: Westend Villa, Sector 42 Gurugram · 2024
          </p>
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section className="border-y border-border/60 bg-charcoal/40 py-20 overflow-hidden text-center">
        <div className="mx-auto max-w-2xl px-6">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold/40">
            <Instagram className="h-8 w-8 text-gold" strokeWidth={1.2} />
          </div>
          <h2 className="mt-6 font-display text-4xl sm:text-5xl">Follow our work</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Daily updates on Instagram — behind the scenes, finished projects, and everything in between.
          </p>
          <div className="mt-8">
            <a
              href="https://instagram.com/the_pds_architects"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-gold px-7 py-4 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-all duration-500 hover:bg-gold-soft hover:gap-5"
            >
              Follow @the_pds_architects <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-32">
        <p className="eyebrow">Trust Metrics</p>
        <h2 className="mt-4 font-display text-4xl sm:text-6xl">Numbers that speak.</h2>
        <div className="mt-16 grid gap-px bg-border/40 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "100%", v: "On-time delivery" },
            { k: "240+", v: "Happy families" },
            { k: "16", v: "Years of excellence" },
            { k: "10 Yr", v: "Workmanship warranty" },
          ].map((m) => (
            <div key={m.v} className="bg-background p-10">
              <p className="font-display text-5xl sm:text-6xl text-gradient-gold">{m.k}</p>
              <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">{m.v}</p>
            </div>
          ))}
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-32">
        <p className="eyebrow">Clients</p>
        <h2 className="mt-4 font-display text-4xl sm:text-6xl">Word from the inside.</h2>

        <div className="mt-16 grid gap-px bg-border/40 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="bg-background p-10 flex flex-col">
              <Sparkles className="h-5 w-5 text-gold" strokeWidth={1.2} />
              <blockquote className="mt-8 font-display text-2xl leading-snug text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-10 pt-6 border-t border-border/60">
                <p className="font-display text-lg">{t.author}</p>
                <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-32">
        <div className="relative overflow-hidden border border-gold/30 bg-charcoal/60 p-12 sm:p-20" style={{ boxShadow: "var(--shadow-gold-glow)" }}>
          <div className="absolute -top-20 -right-20 h-80 w-80 rounded-full opacity-30" style={{ background: "var(--gradient-gold)", filter: "blur(80px)" }} />
          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="eyebrow">Begin</p>
              <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-6xl">
                A conversation is the<br /> first drawing.
              </h2>
            </div>
            <div className="lg:text-right">
              <p className="text-muted-foreground max-w-md lg:ml-auto">
                Tell us about your site, programme and ambition. We respond within two business days
                with an initial point of view.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 lg:justify-end">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-gold px-7 py-4 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-all duration-500 hover:bg-gold-soft hover:gap-5"
                >
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:poshdesigningstudio@gmail.com"
                  className="group inline-flex items-center gap-3 border border-foreground/30 px-7 py-4 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-foreground transition-all duration-500 hover:border-gold hover:text-gold"
                >
                  poshdesigningstudio@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
