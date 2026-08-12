import logoUrl from "@/assets/logolenon.png";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src={logoUrl}
        alt="L&L Rental - locação de veículos para transporte de passageiros"
        className="h-10 w-auto shrink-0 object-contain"
        loading="eager"
      />
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
