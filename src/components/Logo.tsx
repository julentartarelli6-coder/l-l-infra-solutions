export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width="40"
        height="32"
        viewBox="0 0 40 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="llwing" x1="0" y1="0" x2="40" y2="32">
            <stop offset="0%" stopColor="var(--primary-light)" />
            <stop offset="100%" stopColor="var(--primary-deep)" />
          </linearGradient>
        </defs>
        <path
          d="M2 22c8-1 14-5 18-12 1 6-1 11-5 15-4 4-9 5-13 4Z"
          fill="url(#llwing)"
        />
        <path
          d="M14 27c8-1 15-6 19-14 1 7-2 13-7 17-4 3-9 4-12 3Z"
          fill="url(#llwing)"
          opacity="0.55"
        />
      </svg>
      <span
        className={`font-display text-xl font-extrabold italic uppercase tracking-tight ${
          inverted ? "text-graphite-foreground" : "text-foreground"
        }`}
      >
        L&amp;L <span className="text-gradient-brand">Rental</span>
      </span>
    </div>
  );
}
