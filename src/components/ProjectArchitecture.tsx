import { motion } from "framer-motion";
import {
  Brain,
  Cpu,
  Database,
  MonitorSmartphone,
  Server,
  Sparkles,
  Workflow,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { Architecture, StageKind } from "@/data/projectExtras";

const KIND_ICON: Record<StageKind, LucideIcon> = {
  input: MonitorSmartphone,
  process: Workflow,
  model: Brain,
  store: Database,
  serve: Server,
  output: Sparkles,
  interface: Cpu,
};

const KIND_LABEL: Record<StageKind, string> = {
  input: "Input",
  process: "Processing",
  model: "Intelligence",
  store: "Data",
  serve: "Service",
  output: "Output",
  interface: "Interface",
};

const ProjectArchitecture = ({ architecture }: { architecture: Architecture }) => {
  return (
    <div>
      {/* System tagline */}
      <div className="mb-8 flex items-start gap-3 rounded-2xl border border-border/50 bg-muted/20 p-4">
        <Workflow className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          {architecture.tagline}
        </p>
      </div>

      {/* Vertical timeline — every stage pre-expanded */}
      <div className="relative">
        {/* Spine: grows in on view */}
        <motion.div
          aria-hidden
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute bottom-6 left-[19px] top-2 w-px origin-top bg-gradient-to-b from-primary/50 via-border to-border/40 md:left-[23px]"
        />

        <ol className="space-y-7">
          {architecture.stages.map((stage, index) => {
            const Icon = KIND_ICON[stage.kind];
            return (
              <motion.li
                key={`${stage.label}-${index}`}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="relative pl-14 md:pl-16"
              >
                {/* Node on the spine */}
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-primary/25 bg-background text-primary shadow-[0_0_0_4px_hsl(var(--background))] md:h-12 md:w-12">
                  <Icon className="h-[18px] w-[18px] md:h-5 md:w-5" />
                </div>

                {/* Stage header */}
                <div className="flex items-baseline gap-2.5 pt-1">
                  <h3 className="text-lg font-bold tracking-tight text-foreground md:text-xl">
                    {stage.label}
                  </h3>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/70">
                    {KIND_LABEL[stage.kind]}
                  </span>
                </div>

                {/* How it works — always visible */}
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {stage.detail}
                </p>

                {/* Components */}
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {stage.nodes.map((node, ni) => (
                    <span
                      key={ni}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-muted/30 px-2.5 py-1.5 text-xs transition-colors duration-200 hover:border-primary/40 hover:bg-primary/5"
                    >
                      <span className="font-medium text-foreground">{node.label}</span>
                      {node.hint && (
                        <span className="text-[10px] text-muted-foreground">· {node.hint}</span>
                      )}
                    </span>
                  ))}
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>

      {/* Outcomes — what the system produces */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-10 rounded-2xl border border-primary/15 bg-primary/[0.04] p-5"
      >
        <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
          <Target className="h-4 w-4 text-primary" />
          What it produces
        </h3>
        <ul className="grid gap-3 sm:grid-cols-2">
          {architecture.outcomes.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2.5 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default ProjectArchitecture;
