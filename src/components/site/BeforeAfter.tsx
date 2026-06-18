import { useRef, useState, useCallback, useEffect } from "react";

export function BeforeAfter({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
}: {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const cx = "touches" in e ? e.touches[0].clientX : e.clientX;
      setFromClientX(cx);
    };
    const stop = () => (dragging.current = false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, [setFromClientX]);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[3/2] overflow-hidden select-none cursor-ew-resize border border-border/60"
      onMouseDown={(e) => {
        dragging.current = true;
        setFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        setFromClientX(e.touches[0].clientX);
      }}
    >
      <img src={after} alt={afterAlt} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={beforeAlt}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
          draggable={false}
        />
      </div>

      <span className="absolute top-4 left-4 z-10 font-mono text-[0.6rem] uppercase tracking-[0.22em] bg-ink/70 text-foreground px-3 py-1.5 backdrop-blur">
        Before
      </span>
      <span className="absolute top-4 right-4 z-10 font-mono text-[0.6rem] uppercase tracking-[0.22em] bg-gold text-primary-foreground px-3 py-1.5">
        After
      </span>

      <div
        className="absolute top-0 bottom-0 w-px bg-gold pointer-events-none"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-12 w-12 rounded-full bg-gold border-4 border-background grid place-items-center shadow-xl">
          <span className="text-primary-foreground text-lg font-bold leading-none">⇆</span>
        </div>
      </div>
    </div>
  );
}
