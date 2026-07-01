import { Stagger } from "@/components/ui/stagger";
import { cn } from "@/lib/utils";

export interface Step {
  title: string;
  body: string;
}

/**
 * Process timeline: numbered nodes sitting on a connector rail (horizontal on
 * sm+). Each node's bg-colored ring masks the rail so it reads as one connected
 * line. Reveals in sequence on scroll.
 */
export function ProcessSteps({
  steps,
  columns = 3,
}: {
  steps: Step[];
  columns?: 3 | 4;
}) {
  return (
    <div className="relative">
      {/* Connector rail (sm+) */}
      <span
        aria-hidden
        className="absolute inset-x-[10%] top-[19px] hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent sm:block"
      />
      <Stagger
        className={cn(
          "relative grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2",
          columns === 4 ? "lg:grid-cols-4" : "sm:grid-cols-3",
        )}
      >
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="flex flex-col items-center text-center"
          >
            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-blue/40 bg-surface-2 font-mono text-[13px] font-bold text-blue shadow-[0_0_0_8px_var(--bg)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 font-display text-[17px] font-bold tracking-[-0.3px] text-primary">
              {step.title}
            </h3>
            <p className="mt-1.5 max-w-[240px] text-[13px] leading-relaxed text-secondary">
              {step.body}
            </p>
          </div>
        ))}
      </Stagger>
    </div>
  );
}
