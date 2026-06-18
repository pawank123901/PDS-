import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Instagram, ArrowRight, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — PDS" },
      { name: "description", content: "Follow our latest projects on Instagram @the_pds_architects." },
      { property: "og:title", content: "Portfolio — PDS" },
      { property: "og:description", content: "Browse our latest architecture, interior and construction projects on Instagram." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pt-40 pb-16">
        <p className="eyebrow">Our Work</p>
        <h1 className="mt-6 font-display text-5xl leading-[1.05] sm:text-7xl lg:text-8xl">
          Portfolio
        </h1>
        <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed text-lg">
          Follow our journey on Instagram — every project, every detail, every space we create.
        </p>
      </section>

      {/* INSTAGRAM EMBED SECTION */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-32">
        <div className="relative overflow-hidden border border-gold/20 bg-charcoal/40 p-8 sm:p-16 text-center">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full opacity-20" style={{ background: "var(--gradient-gold)", filter: "blur(60px)" }} />
          <div className="relative">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/40">
              <Instagram className="h-10 w-10 text-gold" strokeWidth={1.2} />
            </div>
            <h2 className="mt-8 font-display text-4xl sm:text-5xl">@the_pds_architects</h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
              Follow us for daily updates on our latest residential, commercial and interior projects across Delhi NCR.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://instagram.com/the_pds_architects"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-gold px-8 py-4 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-primary-foreground transition-all duration-500 hover:bg-gold-soft hover:gap-5"
              >
                Follow on Instagram <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/917419181819"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 border border-foreground/30 px-8 py-4 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-foreground transition-all duration-500 hover:border-gold hover:text-gold"
              >
                Enquire on WhatsApp <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INSTAGRAM CARDS */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 pb-32">
        <p className="eyebrow text-center">Latest Updates</p>
        <h2 className="mt-4 text-center font-display text-4xl sm:text-5xl">From our feed</h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <a
              key={i}
              href="https://instagram.com/the_pds_architects"
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-square overflow-hidden border border-border/40 bg-charcoal/60 transition-all duration-500 hover:border-gold/40 hover:shadow-lg"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Instagram className="h-12 w-12 text-muted-foreground/30" strokeWidth={1} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-ink/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-gold">View on Instagram</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/90 to-transparent p-5 pt-12">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-gold">Latest Project</p>
                <p className="mt-1 font-display text-lg text-foreground">@the_pds_architects</p>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://instagram.com/the_pds_architects"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-gold transition-colors hover:text-gold-soft"
          >
            See all posts on Instagram <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
