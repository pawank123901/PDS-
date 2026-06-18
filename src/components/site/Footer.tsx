import { Link } from "@tanstack/react-router";
import { Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-ink/60 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-gold/40 text-gold font-display text-lg">P</span>
          <span className="font-display text-2xl tracking-wide">PDS</span>
          </div>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            A trusted design & build practice crafting residences,
            workplaces and hospitality spaces with precision and care.
          </p>
          <div className="mt-8 hairline w-32" />
          <p className="mt-6 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Est. 2009 · 16 years in practice
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Studio</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-gold transition-colors">Portfolio</Link></li>
            <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow">Visit</p>
          <address className="mt-5 not-italic text-sm text-muted-foreground leading-relaxed">
            Shop no. 11<br />
            Phase:1 Omaxe City<br />
            Palwal, Haryana 121102 · India
          </address>
          <p className="mt-5 text-sm space-y-2">
            <a href="mailto:poshdesigningstudio@gmail.com" className="hover:text-gold transition-colors block">poshdesigningstudio@gmail.com</a>
            <a href="tel:+917419181819" className="hover:text-gold transition-colors block">+91 7419 181 819</a>
            <a href="https://instagram.com/the_pds_architects" target="_blank" rel="noreferrer" className="hover:text-gold transition-colors inline-flex items-center gap-2 mt-2">
              <Instagram className="h-4 w-4" /> @the_pds_architects
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} PDS — All rights reserved</p>
          <p>Crafted with intent</p>
        </div>
      </div>
    </footer>
  );
}
