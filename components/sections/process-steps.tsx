import { Stagger } from "@/components/ui/stagger";
import { cn } from "@/lib/utils";

export interface Step {
  title: string;
  body: string;
}

/** Numbered process steps. Reveals in sequence on scroll. */
export function ProcessSteps({
  steps,
  columns = 3,
}: {
  steps: Step[];
  columns?: 3 | 4;
}) {
  return (
    <Stagger
      className={cn(
        "grid grid-cols-1 gap-6 sm:grid-cols-2",
        columns === 4 ? "lg:grid-cols-4" : "sm:grid-cols-3",
      )}
    >
      {steps.map((step, i) => (
        <div key={step.title}>
          <div className="font-mono text-[13px] font-medium text-blue">
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="mt-1.5 font-display text-base font-bold tracking-[-0.3px] text-primary">
            {step.title}
          </h3>
          <p className="mt-1.5 text-[13px] leading-relaxed text-secondary">
            {step.body}
          </p>
        </div>
      ))}
    </Stagger>
  );
}
