import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

interface Skill {
  name: string;
  logo?: string;
  invertOnDark?: boolean;
  blurb: string;
  url: string;
  level?: "Intermediate" | "Advanced" | "Expert";
  since?: number;
}

interface Category {
  index: string;
  label: string;
  tagline: string;
  blurb: string;
  glow: {
    from: string;
    to: string;
  };
  skills: Skill[];
}

const EASE_OUT_QUINT: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Scroll distance (in vh) allotted to each category while the panel is pinned.
// Lower = fewer scrolls to advance between categories. Section is pinned across
// CATEGORIES.length * SCROLL_PER_CATEGORY_VH, plus one viewport of lead-in.
const SCROLL_PER_CATEGORY_VH = 48;

const monogram = (name: string) => {
  const words = name.split(/[\s-]+/).filter(Boolean);
  if (words.length > 1) return words.map((w) => w[0]).join("").slice(0, 3).toUpperCase();
  return name.slice(0, 4);
};

const CATEGORIES: Category[] = [
  {
    index: "01",
    label: "AI Engineering",
    tagline: "AGENTS / ORCHESTRATION / RAG",
    blurb:
      "Building agentic systems and LLM apps end to end — orchestrating tools, memory, and multi-step reasoning over retrieval-augmented pipelines.",
    glow: { from: "239 84% 67%", to: "271 81% 56%" },
    skills: [
      { name: "LangChain", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4", blurb: "Composes LLM chains, tools, and memory into real apps.", url: "langchain.com", level: "Advanced", since: 2023 },
      { name: "LangGraph", logo: "https://avatars.githubusercontent.com/u/139558948?s=200&v=4", blurb: "Builds stateful, multi-step agent workflows as graphs.", url: "langchain-ai.github.io/langgraph", level: "Advanced", since: 2024 },
      { name: "LlamaIndex", logo: "https://avatars.githubusercontent.com/u/130722866?s=200&v=4", blurb: "Connects LLMs to data with indexing and retrieval pipelines.", url: "llamaindex.ai", level: "Intermediate", since: 2023 },
      { name: "CrewAI", logo: "https://avatars.githubusercontent.com/u/170677839?s=200&v=4", blurb: "Orchestrates role-based multi-agent crews that collaborate.", url: "crewai.com", level: "Intermediate", since: 2024 },
      { name: "HuggingFace", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg", blurb: "Models, datasets, and transformers for NLP and beyond.", url: "huggingface.co", level: "Advanced", since: 2022 },
      { name: "Deep Agents", logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4", blurb: "Advanced multi-step agent systems combining deep reasoning, persistent memory, and adaptive tool orchestration.", url: "langchain.com/agents", level: "Advanced", since: 2024 },
    ],
  },
  {
    index: "02",
    label: "ML & Computer Vision",
    tagline: "TRAINING / INFERENCE / VISION",
    blurb:
      "Training, evaluating, and shipping models — from classical ML to deep neural nets and real-time computer vision pipelines.",
    glow: { from: "199 89% 48%", to: "172 72% 45%" },
    skills: [
      { name: "PyTorch", logo: `${DEVICON}/pytorch/pytorch-original.svg`, blurb: "Deep learning framework for training and fine-tuning nets.", url: "pytorch.org", level: "Intermediate", since: 2022 },
      { name: "scikit-learn", logo: `${DEVICON}/scikitlearn/scikitlearn-original.svg`, blurb: "Classical ML — pipelines, models, and evaluation.", url: "scikit-learn.org", level: "Advanced", since: 2021 },
      { name: "OpenCV", logo: `${DEVICON}/opencv/opencv-original.svg`, blurb: "Real-time computer vision and image processing.", url: "opencv.org", level: "Intermediate", since: 2022 },
      { name: "NumPy", logo: `${DEVICON}/numpy/numpy-original.svg`, blurb: "The numerical backbone for arrays and linear algebra.", url: "numpy.org", level: "Advanced", since: 2021 },
      { name: "SciPy", logo: "https://cdn.simpleicons.org/scipy/0C55A5", blurb: "Scientific computing — optimization, signal processing, stats.", url: "scipy.org", level: "Intermediate", since: 2022 },
      { name: "Keras", logo: `${DEVICON}/keras/keras-original.svg`, blurb: "High-level neural network API for fast model prototyping.", url: "keras.io", level: "Intermediate", since: 2022 },
    ],
  },
  {
    index: "03",
    label: "Data Engineering",
    tagline: "PIPELINES / WRANGLING / ANALYSIS",
    blurb:
      "Building fast data pipelines and analytical workflows — from raw ingestion through transformations to insights, optimized for scale.",
    glow: { from: "35 92% 53%", to: "20 88% 52%" },
    skills: [
      { name: "Jupyter", logo: `${DEVICON}/jupyter/jupyter-original.svg`, blurb: "Interactive notebooks for experiments and analysis.", url: "jupyter.org", level: "Expert", since: 2021 },
      { name: "Pandas", logo: `${DEVICON}/pandas/pandas-original.svg`, blurb: "Tabular data wrangling, cleaning, and analysis.", url: "pandas.pydata.org", level: "Expert", since: 2021 },
      { name: "Streamlit", logo: `${DEVICON}/streamlit/streamlit-original.svg`, blurb: "Turns Python scripts into shareable data apps fast.", url: "streamlit.io", level: "Advanced", since: 2023 },
      { name: "Matplotlib", logo: `${DEVICON}/matplotlib/matplotlib-original.svg`, blurb: "Foundational plotting for charts and figures.", url: "matplotlib.org", level: "Advanced", since: 2021 },
      { name: "Polars", logo: "https://cdn.simpleicons.org/polars/CD792C", blurb: "Lightning-fast DataFrame library built for large-scale data.", url: "pola.rs", level: "Intermediate", since: 2024 },
      { name: "Pydantic", logo: "https://cdn.simpleicons.org/pydantic/E92063", blurb: "Validates data models, settings, and API payloads with Python type hints.", url: "docs.pydantic.dev", level: "Advanced", since: 2023 },
    ],
  },
  {
    index: "04",
    label: "APIs & Databases",
    tagline: "SERVING / STORAGE / REALTIME",
    blurb:
      "Serving models behind clean, typed APIs and persisting state across SQL and realtime stores — built for production reliability.",
    glow: { from: "151 72% 41%", to: "188 78% 41%" },
    skills: [
      { name: "FastAPI", logo: `${DEVICON}/fastapi/fastapi-original.svg`, blurb: "High-performance, typed Python APIs for serving models.", url: "fastapi.tiangolo.com", level: "Advanced", since: 2022 },
      { name: "Flask", logo: `${DEVICON}/flask/flask-original.svg`, invertOnDark: true, blurb: "Lightweight Python web framework for quick services.", url: "flask.palletsprojects.com", level: "Advanced", since: 2022 },
      { name: "PostgreSQL", logo: `${DEVICON}/postgresql/postgresql-original.svg`, blurb: "Relational database for structured, production data.", url: "postgresql.org", level: "Advanced", since: 2021 },
      { name: "MySQL", logo: `${DEVICON}/mysql/mysql-original.svg`, blurb: "Relational database for transactional workloads.", url: "mysql.com", level: "Intermediate", since: 2021 },
      { name: "Firebase", logo: `${DEVICON}/firebase/firebase-original.svg`, blurb: "Realtime data, auth, and hosting for fast launches.", url: "firebase.google.com", level: "Intermediate", since: 2022 },
      { name: "Supabase", logo: `${DEVICON}/supabase/supabase-original.svg`, blurb: "Postgres-backed backend with auth and realtime APIs.", url: "supabase.com", level: "Intermediate", since: 2023 },
    ],
  },
  {
    index: "05",
    label: "Languages & Tooling",
    tagline: "FOUNDATIONS / SHIP / ITERATE",
    blurb:
      "The languages and tools I reach for daily to design, build, and ship without friction — from first commit to production deploy.",
    glow: { from: "346 77% 54%", to: "262 72% 63%" },
    skills: [
      { name: "Python", logo: `${DEVICON}/python/python-original.svg`, blurb: "My primary language for ML, data, and backend work.", url: "python.org", level: "Expert", since: 2020 },
      { name: "TypeScript", logo: `${DEVICON}/typescript/typescript-original.svg`, blurb: "Typed JavaScript for reliable web frontends and tooling.", url: "typescriptlang.org", level: "Advanced", since: 2022 },
      { name: "Git", logo: `${DEVICON}/git/git-original.svg`, blurb: "Version control for everything I build.", url: "git-scm.com", level: "Expert", since: 2020 },
      { name: "GitHub", logo: `${DEVICON}/github/github-original.svg`, invertOnDark: true, blurb: "Hosting, reviews, and CI for collaborative work.", url: "github.com", level: "Expert", since: 2020 },
      { name: "Docker", logo: `${DEVICON}/docker/docker-original.svg`, blurb: "Containerizing apps for reproducible deploys.", url: "docker.com", level: "Intermediate", since: 2022 },
      { name: "VS Code", logo: `${DEVICON}/vscode/vscode-original.svg`, blurb: "My everyday editor, tuned for Python and TS.", url: "code.visualstudio.com", level: "Expert", since: 2020 },
    ],
  },
];

// Flatten skills with their owning category index for the unified grid
const FLAT: { skill: Skill; cat: number }[] = CATEGORIES.flatMap((c, ci) =>
  c.skills.map((skill) => ({ skill, cat: ci })),
);

// ─── SkillTile ────────────────────────────────────────────────────────────────
const SkillTile = ({
  skill,
  category,
  active,
  order,
  onEnter,
  onLeave,
}: {
  skill: Skill;
  category: Category;
  active: boolean;
  order: number;
  onEnter: (s: Skill, el: HTMLElement) => void;
  onLeave: () => void;
}) => {
  const [imgFailed, setImgFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const showLogo = skill.logo && !imgFailed;
  const tileGlow = `linear-gradient(135deg, hsl(${category.glow.from} / 0.22), hsl(${category.glow.to} / 0.12))`;
  const tileHalo = `radial-gradient(circle at 50% 25%, hsl(${category.glow.from} / 0.38), hsl(${category.glow.to} / 0.16) 48%, transparent 72%)`;

  return (
    <motion.div
      role="button"
      aria-label={skill.name}
      onMouseEnter={(e) => active && onEnter(skill, e.currentTarget as HTMLElement)}
      onMouseLeave={() => active && onLeave()}
      onFocus={(e) => active && onEnter(skill, e.currentTarget as HTMLElement)}
      onBlur={() => active && onLeave()}
      tabIndex={active ? 0 : -1}
      animate={{
        scale: shouldReduceMotion ? 1 : active ? 1 : 0.88,
        opacity: active ? 1 : 0.22,
        y: shouldReduceMotion ? 0 : active ? 0 : 8,
        boxShadow: active
          ? `0 18px 44px -30px hsl(${category.glow.from} / 0.55)`
          : `0 0 0 0 hsl(${category.glow.from} / 0)`,
      }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : active ? 0.42 : 0.28,
        delay: shouldReduceMotion || !active ? 0 : order * 0.015,
        ease: EASE_OUT_QUINT,
      }}
      whileHover={active && !shouldReduceMotion ? { scale: 1.08, y: -4 } : {}}
      className={`group relative isolate flex aspect-square w-full max-w-[3.5rem] cursor-default items-center justify-center rounded-2xl border p-2.5 backdrop-blur-sm transition-colors duration-300 sm:max-w-[4rem] sm:p-3 ${
        active
          ? "border-portfolio-accent/30 bg-card/85 dark:border-white/[0.14] dark:bg-white/[0.06] dark:hover:border-white/25"
          : "border-border/20 bg-card/30 dark:border-white/[0.04] dark:bg-white/[0.02]"
      }`}
    >
      <span
        className={`pointer-events-none absolute -inset-2 rounded-[1.35rem] blur-xl transition-opacity duration-500 ${
          active ? "opacity-30 group-hover:opacity-60" : "opacity-0"
        }`}
        style={{ background: tileHalo }}
      />
      <span
        className={`pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-500 ${
          active ? "opacity-10 group-hover:opacity-20" : "opacity-0"
        }`}
        style={{ background: tileGlow }}
      />
      {showLogo ? (
        <img
          src={skill.logo}
          alt={skill.name}
          loading="lazy"
          onError={() => setImgFailed(true)}
          className={`relative z-10 h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8 ${
            skill.invertOnDark ? "dark:invert" : ""
          }`}
        />
      ) : (
        <span className="relative z-10 font-mono text-[11px] font-bold tracking-tight text-foreground/80">
          {monogram(skill.name)}
        </span>
      )}
    </motion.div>
  );
};

// ─── HoverCard ───────────────────────────────────────────────────────────────
type CardPos = {
  skill: Skill;
  left: number;
  top?: number;
  bottom?: number;
  place: "above" | "below";
  connectorLeft: number;
  connectorTop: number;
  connectorHeight: number;
};

const LEVEL_COLOR: Record<string, string> = {
  Expert: "text-emerald-400",
  Advanced: "text-portfolio-accent",
  Intermediate: "text-sky-400",
};

const HoverCard = ({ pos }: { pos: CardPos }) => {
  const { skill, place } = pos;
  const [imgFailed, setImgFailed] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const showLogo = skill.logo && !imgFailed;
  const levelColor = skill.level ? (LEVEL_COLOR[skill.level] ?? "text-portfolio-accent") : "";

  return (
    <>
      {/* Connector line from tile to card */}
      <motion.span
        key={`${skill.name}-connector`}
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.18 }}
        className="pointer-events-none absolute z-20 w-px border-l border-dashed border-white/25"
        style={{
          left: pos.connectorLeft,
          top: pos.connectorTop,
          height: pos.connectorHeight,
        }}
      />
      <motion.div
        key={skill.name}
        initial={shouldReduceMotion ? false : { opacity: 0, y: place === "below" ? -6 : 6, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: place === "below" ? -3 : 3, scale: 0.98 }}
        transition={{ duration: shouldReduceMotion ? 0.01 : 0.18, ease: EASE_OUT_QUINT }}
        className="pointer-events-none absolute z-30 w-72 max-w-[calc(100vw-2.5rem)]"
        style={{
          left: pos.left,
          ...(place === "below" ? { top: pos.top } : { bottom: pos.bottom }),
        }}
      >
        <div className="overflow-hidden rounded-xl border border-white/[0.1] bg-[#0b0b0b] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.9)]">
        {/* Header */}
        <div className="flex items-center justify-between gap-3 px-4 pt-4 pb-3">
          <div className="flex items-center gap-2.5">
            {showLogo ? (
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] p-1.5">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  onError={() => setImgFailed(true)}
                  className={`h-full w-full object-contain ${skill.invertOnDark ? "dark:invert" : ""}`}
                />
              </div>
            ) : (
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                <span className="font-mono text-[10px] font-bold text-white/70">
                  {monogram(skill.name)}
                </span>
              </div>
            )}
            <h4 className="text-[15px] font-bold leading-tight text-white">
              {skill.name}
            </h4>
          </div>
          {skill.level && (
            <span className={`shrink-0 font-mono text-[9px] font-bold uppercase tracking-[0.2em] ${levelColor}`}>
              {skill.level}
            </span>
          )}
        </div>

        {/* Body */}
        <p className="px-4 pb-3 text-[12px] leading-relaxed text-white/45">
          {skill.blurb}
        </p>

        {/* Divider */}
        <div className="mx-4 h-px bg-white/[0.07]" />

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-3">
          {skill.since ? (
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/30">
              Since {skill.since}
            </span>
          ) : (
            <span />
          )}
          <a
            href={`https://${skill.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto text-[11px] text-portfolio-accent/65 transition-colors hover:text-portfolio-accent"
          >
            {skill.url}
          </a>
        </div>
        </div>
      </motion.div>
    </>
  );
};

// ─── Skills ───────────────────────────────────────────────────────────────────
const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(1);
  const [card, setCard] = useState<CardPos | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.18,
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const bounded = Math.max(0, Math.min(v, 0.999));
    const nextIndex = Math.min(
      CATEGORIES.length - 1,
      Math.floor(bounded * CATEGORIES.length),
    );

    if (activeIndexRef.current !== nextIndex) {
      setScrollDirection(nextIndex > activeIndexRef.current ? 1 : -1);
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      setCard(null);
    }
  });

  const handleEnter = (skill: Skill, el: HTMLElement) => {
    const grid = gridRef.current;
    if (!grid) return;
    const g = grid.getBoundingClientRect();
    const r = el.getBoundingClientRect();
    const relLeft = r.left - g.left;
    const relTop = r.top - g.top;
    const cx = relLeft + r.width / 2;
    const cardW = Math.min(288, g.width);
    const left = Math.max(0, Math.min(cx - cardW / 2, g.width - cardW));
    const gap = 14;
    const place: "above" | "below" = relTop > g.height * 0.5 ? "above" : "below";
    setCard({
      skill,
      left,
      place,
      connectorLeft: cx,
      connectorTop: place === "below" ? relTop + r.height : relTop - gap,
      connectorHeight: gap,
      ...(place === "below"
        ? { top: relTop + r.height + gap }
        : { bottom: g.height - relTop + gap }),
    });
  };

  const cat = CATEGORIES[activeIndex];
  const detailGlow = `radial-gradient(ellipse at 20% 20%, hsl(${cat.glow.from} / 0.14), transparent 55%), radial-gradient(ellipse at 80% 72%, hsl(${cat.glow.to} / 0.10), transparent 58%)`;
  const ambientGlow = `radial-gradient(ellipse at top, hsl(${cat.glow.from} / 0.10), hsl(${cat.glow.to} / 0.08) 40%, transparent 72%)`;
  const progressGradient = `linear-gradient(90deg, hsl(${cat.glow.from}), hsl(${cat.glow.to}))`;
  const detailVariants = {
    enter: (direction: number) => ({
      opacity: 0,
      y: shouldReduceMotion ? 0 : direction > 0 ? 18 : -18,
    }),
    center: {
      opacity: 1,
      y: 0,
    },
    exit: (direction: number) => ({
      opacity: 0,
      y: shouldReduceMotion ? 0 : direction > 0 ? -14 : 14,
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative"
      style={{ height: `${CATEGORIES.length * SCROLL_PER_CATEGORY_VH + 100}vh` }}
    >
      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="sticky top-0 flex h-screen items-center overflow-hidden pb-12">
        {/* Reduced ambient glow */}
        <motion.div
          key={`skill-ambient-${activeIndex}`}
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 0.45 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, ease: EASE_OUT_QUINT }}
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[140%] -translate-x-1/2 blur-[120px]"
          style={{ background: ambientGlow }}
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 lg:-translate-y-6">
            {/* ── Left: unified icon grid ─────────────────────── */}
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55 }}
                className="mb-8 text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl md:text-5xl"
              >
                Technical Skills
              </motion.h2>

              <div ref={gridRef} className="relative">
                <motion.div
                  key={`skill-grid-glow-${activeIndex}`}
                  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: shouldReduceMotion ? 0.01 : 0.5, ease: EASE_OUT_QUINT }}
                  className="pointer-events-none absolute -inset-8 rounded-[2rem] opacity-60 blur-3xl"
                  style={{ background: detailGlow }}
                />
                <div className="grid grid-cols-6 justify-items-center gap-2 sm:gap-3">
                  {FLAT.map(({ skill, cat: ci }, order) => (
                    <SkillTile
                      key={skill.name}
                      skill={skill}
                      category={CATEGORIES[ci]}
                      active={ci === activeIndex}
                      order={order % CATEGORIES[ci].skills.length}
                      onEnter={handleEnter}
                      onLeave={() => setCard(null)}
                    />
                  ))}
                </div>

                <AnimatePresence>
                  {card && <HoverCard pos={card} />}
                </AnimatePresence>
              </div>
            </div>

            {/* ── Right: active category detail ───────────────── */}
            <div className="relative min-h-[320px] sm:min-h-[300px] lg:min-h-[280px]">
              <AnimatePresence mode="sync" custom={scrollDirection}>
                <motion.div
                  key={activeIndex}
                  custom={scrollDirection}
                  variants={detailVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, ease: EASE_OUT_QUINT }}
                  className="absolute inset-x-0 top-0"
                >
                  {/* eyebrow */}
                  <p className="mb-4 font-mono text-xs font-medium tracking-[0.22em] text-portfolio-accent sm:text-sm">
                    {cat.index} — {cat.tagline}
                  </p>

                  {/* category heading */}
                  <h3 className="mb-5 text-3xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-4xl md:text-5xl">
                    {cat.label}
                  </h3>

                  {/* blurb */}
                  <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {cat.blurb}
                  </p>

                  <div className="mt-10 flex max-w-md items-center gap-3" aria-hidden="true">
                    <span className="font-mono text-[11px] font-semibold text-foreground/45">
                      {cat.index}
                    </span>
                    <div className="relative h-px flex-1 overflow-hidden rounded-full bg-border/70">
                      <motion.div
                        className="absolute left-0 top-1/2 h-[3px] w-full origin-left -translate-y-1/2 rounded-full"
                        style={{
                          scaleX: shouldReduceMotion ? scrollYProgress : smoothProgress,
                          background: progressGradient,
                        }}
                      />
                    </div>
                    <span className="font-mono text-[11px] font-semibold text-foreground/45">
                      {String(CATEGORIES.length).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
