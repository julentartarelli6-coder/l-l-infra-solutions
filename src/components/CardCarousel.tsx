import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function CardCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [i, setI] = useState(0);
  const total = images.length;
  const go = (d: number) => setI((p) => (p + d + total) % total);

  return (
    <div className="group relative h-44 w-full overflow-hidden bg-secondary">
      {images.map((src, idx) => (
        <img
          key={src}
          src={src}
          alt={`${alt} — foto ${idx + 1}`}
          loading="lazy"
          className={cn(
            "absolute inset-0 h-full w-full object-cover transition-opacity duration-500",
            idx === i ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label={`Foto anterior de ${alt}`}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-graphite/60 p-1.5 text-graphite-foreground opacity-0 transition-opacity duration-200 hover:bg-graphite/80 focus-visible:opacity-100 group-hover:opacity-100"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label={`Próxima foto de ${alt}`}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-graphite/60 p-1.5 text-graphite-foreground opacity-0 transition-opacity duration-200 hover:bg-graphite/80 focus-visible:opacity-100 group-hover:opacity-100"
          >
            <ChevronRight size={18} />
          </button>
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((src, idx) => (
              <button
                key={src}
                type="button"
                onClick={() => setI(idx)}
                aria-label={`Ver foto ${idx + 1} de ${alt}`}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  idx === i ? "w-5 bg-primary-foreground" : "w-1.5 bg-primary-foreground/50",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
