import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — PDS" },
      { name: "description", content: "Architecture, interior design, residential and commercial construction, renovation, turnkey delivery, project management, landscape and structural planning." },
      { property: "og:title", content: "Services — PDS" },
      { property: "og:description", content: "An integrated suite of design and construction services delivered under a single contract." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { n: "01", t: "Architectural Design", d: "Site analysis, concept design, planning, technical drawings and construction documentation. Residential, commercial and hospitality." },
  { n: "02", t: "Interior Design", d: "Bespoke interior architecture, joinery design, lighting, FF&E procurement and styling." },
  { n: "03", t: "Residential Construction", d: "Single-family residences, estates and extensions built to craftsman tolerances." },
  { n: "04", t: "Commercial Construction", d: "Workplaces, retail, hospitality and mixed-use, delivered on programme and on budget." },
  { n: "05", t: "Renovation & Remodelling", d: "Sensitive intervention in heritage buildings and contemporary properties alike." },
  { n: "06", t: "Turnkey Projects", d: "A single contract from initial brief to a fully furnished, ready-to-occupy result." },
  { n: "07", t: "Project Management", d: "Independent oversight of design teams, contractors, costs, programme and quality." },
  { n: "08", t: "3D Design & Visualisation", d: "Photoreal CGI, VR walkthroughs and physical models for decision-grade clarity." },
  { n: "09", t: "Landscape Design", d: "Gardens, terraces, swimming pools and exterior lighting integrated with the architecture." },
  { n: "10", t: "Structural Planning", d: "In-house structural engineering coordination from feasibility through site." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-24">
        <p className="eyebrow">Capabilities</p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
          A complete <em className="text-gradient-gold not-italic">studio</em>,<br /> a complete <em className="text-gradient-gold not-italic">builder</em>.
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Ten disciplines, one team. Engage us for a single service or the entire arc — concept,
          construction, and key handover.
        </p>
      </section>

      <section className="border-y border-border/60 bg-charcoal/30">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 divide-y divide-border/60">
          {services.map((s) => (
            <article key={s.n} className="group grid gap-8 py-12 md:grid-cols-12 md:items-center">
              <p className="md:col-span-1 font-mono text-xs text-gold">{s.n}</p>
              <h2 className="md:col-span-4 font-display text-3xl sm:text-4xl transition-transform duration-500 group-hover:translate-x-2">
                {s.t}
              </h2>
              <p className="md:col-span-6 text-muted-foreground leading-relaxed">{s.d}</p>
              <Link to="/contact" className="md:col-span-1 inline-flex items-center justify-end text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <ArrowRight />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-32 text-center">
        <h2 className="font-display text-4xl sm:text-6xl">Discuss your project.</h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
          A 30-minute conversation, no obligation. We will tell you whether we are the right studio for the work.
        </p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 bg-gold px-7 py-4 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-all duration-500 hover:bg-gold-soft"
        >
          Book consultation <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </SiteLayout>
  );
}
