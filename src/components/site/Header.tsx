import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/portfolio" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-6 bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-gold/40 text-gold font-display text-lg">
            P
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg tracking-wide text-foreground">PDS</span>
            <span className="eyebrow !text-[0.55rem] text-muted-foreground">Design · Build · Deliver</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative font-mono text-xs uppercase tracking-[0.2em] text-foreground/80 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden items-center gap-2 border border-gold/50 px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.22em] text-gold transition-all duration-500 hover:bg-gold hover:text-primary-foreground md:inline-flex"
        >
          Get Quote
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass mt-3 mx-6 px-6 py-6 flex flex-col gap-5">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/80"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="border border-gold/50 px-5 py-3 text-center font-mono text-xs uppercase tracking-[0.22em] text-gold"
          >
            Get Quote
          </Link>
        </div>
      )}
    </header>
  );
}
