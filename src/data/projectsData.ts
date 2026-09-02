import type { ComponentType } from "react";
import { Network, Search, Mic, Terminal, AudioWaveform } from "lucide-react";
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiThreedotjs,
  SiPrisma,
  SiCloudflare,
  SiLangchain,
  SiNodedotjs,
  SiFramer,
  SiTailwindcss,
  SiBun,
  SiEslint,
  SiRadixui,
  SiChartdotjs,
  SiGithub,
  SiFastapi,
  SiRedis,
  SiCelery,
  SiTldraw,
  SiCss,
  SiPython,
  SiAnthropic,
  SiClaude,
  SiGooglegemini,
  SiMeta,
  SiFlutter,
  SiSupabase,
  SiPostgresql,
  SiPytorch,
  SiArduino,
  SiGooglechrome,
  SiVite,
  SiAndroid,
  SiScikitlearn,
  SiBlender,
  SiDart,
  SiOpencv,
  SiOpenai,
  SiHuggingface,
  SiJavascript,
  SiGraphql,
} from "react-icons/si";

export type TechIcon = ComponentType<{ className?: string }>;
export type TechKey =
  | "next" | "ts" | "react" | "three" | "prisma" | "cloud" | "langchain" | "langgraph" | "rag"
  | "node" | "motion" | "tailwind" | "bun" | "eslint" | "radixui" | "charts" | "github" | "fastapi"
  | "redis" | "celery" | "tldraw" | "css3" | "python" | "anthropic" | "claude" | "gemini" | "llama"
  | "flutter" | "supabase" | "postgresql" | "pytorch" | "arduino" | "chrome" | "vite" | "android"
  | "scikitlearn" | "blender" | "dart" | "opencv" | "openai" | "huggingface" | "whisper" | "terminal"
  | "voice" | "js" | "graphql";

export type TechItem = TechKey | { label: string; tooltip?: string; };

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  imageTitle: string;
  src: string;
  lightModeSrc?: string;
  video?: string;
  /** One line, shown on the card. What it does — never repeated on the detail page. */
  description: string;
  /** Detail page only. The problem, how it works, why it is built this way. */
  longDescription?: string;
  /** Distinct capabilities. Must not restate description or longDescription. */
  features?: string[];
  /** Awards and external recognition only. Omit when there is none. */
  achievements?: string;
  /** A single measurable outcome. */
  impact?: string;
  status?: "Live" | "Building" | "Completed" | "Archived";
  role?: string;
  /** Shown only for projects a visitor can install and run themselves. */
  setup?: {
    /** Headline for the section, e.g. "Try it in your own assistant". */
    title: string;
    /** A copyable value — a server URL, an install command. */
    endpoint?: { label: string; value: string; note?: string };
    /** Ordered steps. `code` renders as a copyable line under the step. */
    steps?: { title: string; body: string; code?: string }[];
    /** Outbound links: repo files, docs, downloads. */
    links?: { label: string; href: string }[];
  };
  tech: TechItem[];
  github: string;
  live: string;
  blogLink?: string;
  backgroundImage?: string;
  hasPin?: boolean;
  galleryImages?: string[];
}

export const iconMap: Record<TechKey, TechIcon> = {
  next: SiNextdotjs, ts: SiTypescript, react: SiReact, three: SiThreedotjs, prisma: SiPrisma,
  cloud: SiCloudflare, langchain: SiLangchain, langgraph: Network, rag: Search, node: SiNodedotjs,
  motion: SiFramer, tailwind: SiTailwindcss, bun: SiBun, eslint: SiEslint, radixui: SiRadixui,
  charts: SiChartdotjs, github: SiGithub, fastapi: SiFastapi, redis: SiRedis, celery: SiCelery,
  tldraw: SiTldraw, css3: SiCss, python: SiPython, anthropic: SiAnthropic, claude: SiClaude,
  gemini: SiGooglegemini, llama: SiMeta, flutter: SiFlutter, supabase: SiSupabase, postgresql: SiPostgresql,
  pytorch: SiPytorch, arduino: SiArduino, chrome: SiGooglechrome, vite: SiVite, android: SiAndroid,
  scikitlearn: SiScikitlearn, blender: SiBlender, dart: SiDart, opencv: SiOpencv,
  openai: SiOpenai, huggingface: SiHuggingface, whisper: Mic, terminal: Terminal, voice: AudioWaveform,
  js: SiJavascript, graphql: SiGraphql,
};

export const techNames: Record<TechKey, string> = {
  next: "Next.js", ts: "TypeScript", react: "React", three: "Three.js", prisma: "Prisma",
  cloud: "Cloudflare", langchain: "LangChain", langgraph: "LangGraph", rag: "RAG",
  node: "Node.js", motion: "Framer Motion", tailwind: "Tailwind CSS", bun: "Bun", eslint: "ESLint",
  radixui: "Radix UI", charts: "Charts", github: "GitHub API", fastapi: "FastAPI", redis: "Redis",
  celery: "Celery", tldraw: "tldraw", css3: "CSS3", python: "Python", anthropic: "Anthropic",
  claude: "Claude", gemini: "Gemini", llama: "LLaMA", flutter: "Flutter", supabase: "Supabase",
  postgresql: "PostgreSQL", pytorch: "PyTorch", arduino: "Arduino", chrome: "Chrome Extension",
  vite: "Vite", android: "Android", scikitlearn: "Scikit-learn", blender: "Blender", dart: "Dart",
  opencv: "OpenCV", openai: "OpenAI", huggingface: "Hugging Face", whisper: "Whisper STT",
  terminal: "Textual TUI", voice: "Voice AI", js: "JavaScript", graphql: "GraphQL",
};

export const projectsData: Project[] = [
  {
    slug: "pyrrhon",
    title: "Pyrrhon – Voice First Agent",
    subtitle: "Senior-engineer reviewer agent you talk to",
    imageTitle: "Pyrrhon terminal agent",
    src: "/project-image/pyrrhon_white.webp",
    lightModeSrc: "/project-image/pyrrhon_black.webp",
    video: "",
    description: "Talk to a codebase out loud and get answers grounded in real file:line citations, from a reviewer agent that lives in your terminal.",
    longDescription:
      "Reading an unfamiliar repository means jumping between files while holding the shape of the system in your head. Pyrrhon lets you ask instead. It indexes a repo with Tree-sitter and answers through a streaming voice pipeline you can cut off mid-sentence, and it refuses to say anything it cannot back with a real file:line reference. Beyond questions it works as a design partner: it interrogates an architectural idea the way a senior engineer would, then writes the conclusions out as PRD, HLD, LLD, API, database and risk documents. Named after Pyrrho of Elis, the skeptic who withheld assent to unverified claims.",
    features: [
      "Barge-in voice loop — interrupt mid-answer and it stops, listens and re-plans",
      "Citation gate: every claim is checked against the repo before it is spoken",
      "Design mode that turns a conversation into PRD, HLD, LLD, API, DB and risk specs",
      "Provider-agnostic across Groq, OpenAI, Gemini, DeepSeek, Cerebras, Ollama and LM Studio",
      "Extends through stdio/HTTP MCP servers and trust-gated plugins",
      "Read-only by default, with credentials kept in owner-only local storage",
    ],
    impact: "Turns codebase onboarding into a conversation instead of a file hunt",
    status: "Live",
    role: "Creator",
    tech: ["python", "openai", "gemini", "claude", "terminal", "huggingface", { label: "Groq" }, { label: "MCP" }, { label: "Tree-sitter" }, { label: "Pipecat" }],
    github: "https://github.com/prabhjot0109/Pyrrhon",
    live: "https://pyrrhon.vercel.app",
    backgroundImage: "/image copy 3.png",
    hasPin: true,
    galleryImages: ["/project-image/pyrrhon_cli.webp", "/project-image/pyrrhon.png"],
  },
  {
    slug: "sentient",
    title: "Sentient – AI NPC Engine",
    subtitle: "Generated NPC dialogue in place of scripted trees",
    imageTitle: "Sentient dialogue engine",
    src: "/project-image/sentient.webp",
    lightModeSrc: "/project-image/sentient.webp",
    video: "",
    description: "Replaces hardcoded NPC dialogue trees with lines written on demand from the game's own lore, served over an OpenAI-compatible endpoint.",
    longDescription:
      "NPC dialogue is normally a hand-authored tree: a fixed set of lines, and anything a player asks outside them gets a shrug or a repeat. Sentient throws the tree out. Manuals, lore documents and dialogue style guides go in through a Next.js console; a FastAPI backend chunks and embeds them into a FAISS index. Every line is then written fresh at request time and grounded in those documents, served through an OpenAI-compatible endpoint — so an existing game client can point at it with a base-URL change and no new SDK.",
    features: [
      "Every line generated at request time instead of picked from a fixed tree",
      "Answers questions the writers never scripted, without leaving the lore",
      "PDF ingestion with chunking and embedding into a FAISS vector index",
      "OpenAI-compatible endpoint — swap the base URL and keep your client",
      "Per-NPC persona configuration layered over the shared lore index",
      "Browser console for uploading documents and testing lines before shipping",
    ],
    impact: "Sub-second replies that stay inside the game's established canon",
    status: "Live",
    role: "Full Stack Developer",
    tech: ["fastapi", "langchain", "next", "python", "ts", { label: "FAISS" }],
    github: "https://github.com/prabhjot0109/sentient",
    live: "https://sentient-npc.vercel.app",
    blogLink: "/blogs/sentient",
    backgroundImage: "/image copy 3.png",
    hasPin: true,
    galleryImages: ["/project-image/sentient.webp", "/project-image/sentient2.png", "/project-image/sentient4.webp", "/project-image/sentient6.webp"],
  },
  {
    slug: "signify",
    title: "Signify – Real Time ISL Translation",
    subtitle: "Two-way Indian Sign Language translation",
    imageTitle: "Signify ISL app",
    src: "/project-image/signify.webp",
    lightModeSrc: "/project-image/signify.webp",
    video: "",
    description: "Two-way Indian Sign Language translation on a phone — gestures to regional-language speech, and speech back to a signing 3D avatar.",
    longDescription:
      "Deaf and hard-of-hearing users in India have almost no real-time tooling for ISL. Signify runs MediaPipe hand tracking over a live camera feed inside a Flutter app, classifies the landmarks, and speaks the result in the user's regional language. The reverse direction takes typed or spoken input and animates a Blender-rigged 3D avatar through the matching signs, so both sides of a conversation work on one phone.",
    features: [
      "40+ ISL gestures classified from a live camera feed at 30fps",
      "Reverse direction driving a rigged 3D avatar through the matching signs",
      "Speech output in multiple Indian regional languages, not only English",
      "On-device recognition that keeps working with no connection",
      "One Flutter codebase across Android and iOS",
    ],
    achievements: "Winner, Smart India Hackathon 2024",
    impact: "95% recognition accuracy across the supported sign set",
    status: "Completed",
    role: "App & Backend Developer",
    tech: ["flutter", "python", "fastapi", "scikitlearn", "opencv", "blender", { label: "MediaPipe" }],
    github: "https://github.com/prabhjot0109/signify",
    live: "",
    blogLink: "/blogs/signify",
    backgroundImage: "/image copy 5.png",
    hasPin: true,
    galleryImages: ["/project-image/signify.webp", "/project-image/isl2.png", "/project-image/isl3.png", "/project-image/isl4.png", "/project-image/isl5.png", "/project-image/isl6.png", "/project-image/isl7.png"],
  },
  {
    slug: "generative-ui",
    title: "GenUI – Interfaces over Paragraphs",
    subtitle: "MCP server that renders in your design system",
    imageTitle: "GenUI MCP server",
    src: "/project-image/genui_dark.png",
    lightModeSrc: "/project-image/genui_light.png",
    video: "",
    description: "An MCP server that makes any assistant answer with a working interface instead of paragraphs — drawn in a real design system.",
    longDescription:
      "Assistants can already draw UI, but it comes out generic and a tap on it goes nowhere. GenUI fixes both halves. A design brief — palette, type, shape, density, voice — grounds every surface in an actual system, and on hosts supporting MCP Apps a click on “Book the 06:10 flight” arrives back as the user's next message. It never calls a model of its own: the host's LLM reads the brief and writes the HTML, so a stronger host model improves output for free. Briefs are deliberately prose rather than extracted tokens — an earlier machine-readable version with a class allowlist and lint gates was measured head-to-head against the model designing freely, and lost.",
    features: [
      "Ten systems ship in the box — Blade, shadcn, Linear, Vercel, Apple, Material, Carbon, Fluent, Ant and plain",
      "Adding a design system is writing one markdown file, with no build step",
      "Clicks return to the conversation as the user's next message via MCP Apps",
      "Local controls — tabs, steppers, toggles — run inside the surface and cost no model turn",
      "No LLM call of its own, no API key and no data service",
      "Surface ids are 128-bit capabilities, matching the MCP 2026-07-28 state model",
      "Oversized surfaces continue in append mode rather than failing outright",
    ],
    impact: "One remote connector serving claude.ai, Claude Desktop, ChatGPT, Grok, Gemini, VS Code and Goose",
    status: "Live",
    role: "Creator",
    setup: {
      title: "Try it in your own assistant",
      endpoint: {
        label: "Remote MCP server",
        value: "https://genui-bz6j.onrender.com/mcp",
        note: "No install and no auth. The free instance sleeps after 15 minutes idle, so the first render can take 30–60 seconds — send the request again if your host times out.",
      },
      steps: [
        {
          title: "Add the connector",
          body:
            "On claude.ai: Settings → Connectors → Add custom connector. Name it genui, paste the URL above, add it, then enable it in the chat's tools menu. ChatGPT, Grok, Gemini, VS Code and Goose take the same two fields under a different menu.",
        },
        {
          title: "Upload the skill (Claude hosts and Grok)",
          body:
            "These hosts discard the server's MCP instructions, so the render contract has to be installed alongside it. Clone the repo, build the ZIP, then go to Settings → Capabilities → Upload skill and pick dist/genui-skill.zip.",
          code: "git clone https://github.com/prabhjot0109/generative-ui && cd generative-ui && npm install && npm run build && npm run pack:skill",
        },
        {
          title: "Ask for a surface",
          body:
            "Type /genui, say \"render this as UI\", or just name a design system — \"show me pricing tiers, use the linear design system\". Ask it to list the design systems to see all ten.",
        },
      ],
      links: [
        { label: "SKILL.md — read the render contract", href: "https://github.com/prabhjot0109/generative-ui/blob/main/SKILL.md" },
        { label: "Design briefs — designs/", href: "https://github.com/prabhjot0109/generative-ui/tree/main/designs" },
        { label: "Download the repo as a ZIP", href: "https://github.com/prabhjot0109/generative-ui/archive/refs/heads/main.zip" },
      ],
    },
    tech: ["ts", "node", "claude", { label: "MCP" }, { label: "MCP Apps" }, { label: "Streamable HTTP" }, { label: "Render" }],
    github: "https://github.com/prabhjot0109/generative-ui",
    live: "",
    backgroundImage: "/image copy.png",
    hasPin: true,
    galleryImages: ["/project-image/genui3.png", "/project-image/genui2.png", "/project-image/genui_dark.png"],
  },
  {
    slug: "vrinda",
    title: "Vrinda – Smart Farming Assistant",
    subtitle: "Soil sensors, pest detection and crop advice",
    imageTitle: "Vrinda farming dashboard",
    src: "/project-image/vrinda1.webp",
    lightModeSrc: "/project-image/vrinda1.png",
    video: "",
    description: "Reads soil sensors, identifies pests from a leaf photo, and gives crop advice in the farmer's own language.",
    longDescription:
      "Farm advisory apps usually guess at field conditions. Vrinda measures them. Arduino sensors report soil moisture, nutrients and temperature into a Flutter app, which passes the live readings to Gemini alongside local weather to produce guidance for that specific plot. A photo of a damaged leaf runs through a YOLOv8 model for pest identification, and the whole interface speaks Hindi and regional languages.",
    features: [
      "Live soil moisture, nutrient and temperature readings from Arduino sensors",
      "YOLOv8 pest and disease identification from a single leaf photo",
      "Advice generated from the farmer's own sensor data rather than regional averages",
      "Hyper-local forecasts through the OpenWeather API",
      "Hindi and regional language interface throughout",
    ],
    achievements: "Field-tested with farmers around Indore",
    impact: "~20% yield improvement across 10+ pilot farms",
    status: "Completed",
    role: "Lead Developer",
    tech: ["flutter", "arduino", "fastapi", "opencv", "gemini", { label: "IoT" }, { label: "YOLOv8" }],
    github: "https://github.com/prabhjot0109/vrinda/tree/main",
    live: "",
    backgroundImage: "/image copy 4.png",
    hasPin: false,
    galleryImages: ["/project-image/vrinda1.webp", "/project-image/vrinda2.png", "/project-image/vrinda3.png"],
  },
  {
    slug: "leetgit",
    title: "LeetGit – LeetCode to GitHub",
    subtitle: "Auto-commit accepted solutions",
    imageTitle: "LeetGit extension",
    src: "/project-image/leetgit_dark.png",
    lightModeSrc: "/project-image/leetgit_light.png",
    video: "",
    description: "Chrome extension that commits your LeetCode solution to GitHub the moment all tests pass — no backend, no OAuth, no telemetry.",
    longDescription:
      "Keeping a LeetCode archive on GitHub normally means copying code out by hand after every accepted run. LeetGit does it for you: it detects the accepted submission, reads it back through LeetCode's GraphQL API, and commits it to your repository. Authentication is a personal access token you create and paste in yourself — held in chrome.storage.local and sent only to api.github.com — so there is no OAuth app, no server, and no third party ever holding your credentials.",
    features: [
      "Auto-commit on an accepted submission, plus a manual sync button for older ones",
      "Personal access token only — no OAuth app, no backend, no analytics",
      "Works across both leetcode.com and leetcode.cn",
      "Create a fresh repository or link an existing one straight from the popup",
      "Requests only storage permissions; CSS and fonts are vendored so the popup makes zero third-party requests",
    ],
    impact: "Builds a versioned, browsable solution archive with no manual steps",
    status: "Live",
    role: "Creator",
    tech: ["js", "chrome", "github", "graphql", { label: "Manifest V3" }],
    github: "https://github.com/prabhjot0109/LeetGit",
    live: "",
    backgroundImage: "/image copy 4.png",
    hasPin: true,
    galleryImages: ["/project-image/leetgit_dark.png"],
  },
  {
    slug: "tab-flow",
    title: "Tab Flow – Tab Switcher",
    subtitle: "Searchable, keyboard-driven tab overlay",
    imageTitle: "Tab Flow extension",
    src: "/project-image/tabflow1.png",
    lightModeSrc: "/project-image/tabflow1.png",
    video: "",
    description: "Chrome extension replacing the default tab cycle with a fuzzy-searchable, fully keyboard-driven overlay.",
    longDescription:
      "Ctrl+Tab stops being useful somewhere around fifteen tabs. Tab Flow injects a Shadow DOM overlay that fuzzy-searches titles and URLs, respects Chrome Tab Groups, and never needs the mouse. Virtual scrolling keeps rendering smooth as the tab count climbs, and Shadow DOM isolation means no page's CSS can leak into it.",
    features: [
      "Fuzzy search across every open tab's title and URL",
      "Tab Groups rendered as collapsible sections",
      "Virtual scrolling so large tab sets stay at 60fps",
      "Shadow DOM isolation, so host page styles never bleed in",
      "Built on Manifest V3 with no background page kept alive",
    ],
    impact: "Opens in under 100ms and holds 60fps past 50 open tabs",
    status: "Completed",
    role: "Full Stack Developer",
    tech: ["ts", "vite", "bun", "chrome", { label: "Manifest V3" }, { label: "Shadow DOM" }],
    github: "https://github.com/prabhjot0109/TabFlow",
    live: "",
    backgroundImage: "/image copy 3.png",
    hasPin: false,
    galleryImages: ["/project-image/tabflow1.png", "/project-image/tabflow2.png", "/project-image/tabflow3.png"],
  },
  {
    slug: "recall",
    title: "Recall – Smart Bookmark Manager",
    subtitle: "Realtime sync with AI page summaries",
    imageTitle: "Recall bookmark manager",
    src: "/project-image/recall1.png",
    lightModeSrc: "/project-image/recall1.png",
    video: "",
    description: "Bookmark manager that syncs across devices in real time and writes its own summary of every page you save.",
    longDescription:
      "Browser bookmarks are a list of blue links you cannot meaningfully search. Recall saves a URL, has Gemini fetch and summarise the page behind it, and pushes the result to every signed-in device over Supabase Realtime — no polling, no refresh button. Row Level Security keeps each user's collection isolated in the database rather than in application code.",
    features: [
      "Realtime sync over Supabase channels through a custom useRealtime hook",
      "Gemini-written summary and title generated for each saved page",
      "Google sign-in via Supabase Auth",
      "Row Level Security enforcing per-user isolation at the database layer",
      "Optimistic updates so a save lands instantly, before the round trip",
    ],
    impact: "New saves appear on every signed-in device with zero polling",
    status: "Live",
    role: "Full Stack Developer",
    tech: ["next", "ts", "tailwind", "supabase", "gemini"],
    github: "https://github.com/prabhjot0109/Recall",
    live: "https://recallbookmark.vercel.app/",
    backgroundImage: "/image copy 5.png",
    hasPin: false,
    galleryImages: ["/project-image/recall1.png", "/project-image/recall2.png", "/project-image/recall3.png", "/project-image/recall4.png"],
  },
  {
    slug: "quiz-generation-backend",
    title: "Peblo – Quiz Generation Backend",
    subtitle: "Adaptive questions from source material",
    imageTitle: "Peblo quiz engine",
    src: "/project-image/quiz-generation-backend.png",
    lightModeSrc: "/project-image/quiz-generation-backend.png",
    video: "",
    description: "FastAPI service that turns a PDF into graded questions and shifts difficulty based on how the student is answering.",
    longDescription:
      "Peblo ingests educational material — PDFs or raw text — chunks it, and has Gemini write questions from each chunk. Every generated question keeps a pointer back to the chunk it came from, so any answer can be traced to its source text. A sliding window over recent responses moves difficulty up or down as the student works through a set.",
    features: [
      "MCQ, true/false, fill-in-the-blank and short answer generated from the same source",
      "Each question stores the source chunk it was derived from",
      "Sliding-window difficulty adjustment over recent answer patterns",
      "Duplicate detection so one chunk never yields the same question twice",
      "Postgres schema managed through SQLAlchemy with Alembic migrations",
    ],
    impact: "Turns static course material into a traceable, adaptive question bank",
    status: "Completed",
    role: "Backend Developer",
    tech: ["fastapi", "python", "postgresql", "gemini", { label: "SQLAlchemy" }, { label: "Alembic" }, { label: "PyPDF" }],
    github: "https://github.com/prabhjot0109/Quiz-Generation-Backend.git",
    live: "",
    backgroundImage: "/image copy.png",
    hasPin: false,
    galleryImages: ["/project-image/quiz-generation-backend.png"],
  },
  {
    slug: "medai",
    title: "Med.AI – Healthcare Intelligence",
    subtitle: "X-ray screening support for clinicians",
    imageTitle: "Med.AI diagnostic assistant",
    src: "/project-image/project-medai.png",
    lightModeSrc: "/project-image/project-medai.png",
    video: "",
    description: "Flags possible abnormalities in chest X-rays and cross-checks reported symptoms, as review prompts for a clinician.",
    longDescription:
      "Med.AI runs an uploaded X-ray through a PyTorch CNN trained to flag abnormal regions, and separately matches a written symptom description against a structured medical knowledge base. Both outputs are framed as leads for a clinician to confirm — the system is built to narrow attention, not to diagnose.",
    features: [
      "PyTorch CNN classifier over uploaded chest X-ray images",
      "Symptom text matched against a structured medical knowledge base",
      "Findings surfaced as review prompts, never as a stated diagnosis",
      "Uploads handled without persisting identifying patient data",
    ],
    achievements: "3rd Runner-up, Prayatna Hackathon",
    impact: "15% accuracy gain over the baseline classifier during testing",
    status: "Completed",
    role: "AI Researcher & Developer",
    tech: ["python", "pytorch", "scikitlearn", "opencv", { label: "Medical Imaging" }],
    github: "https://github.com/prabhjot0109/medai-webapp",
    live: "https://medaiweb.vercel.app/",
    backgroundImage: "/image copy 4.png",
    hasPin: false,
    galleryImages: ["/project-image/project-medai.png", "/project-image/project-medai-2.png", "/project-image/project-medai-3.png"],
  },
  {
    slug: "kavach",
    title: "Kavach – Emergency SOS App",
    subtitle: "Voice-triggered alerts from a locked phone",
    imageTitle: "Kavach SOS app",
    src: "/project-image/kavach1.jpg",
    lightModeSrc: "/project-image/kavach1.jpg",
    video: "",
    description: "Android SOS app that listens for a spoken keyword and sends your location to emergency contacts — screen locked, app closed.",
    longDescription:
      "In an emergency, unlocking a phone and opening an app is time you may not have. Kavach keeps a lightweight speech recognizer running as a background service, listening for a keyword you choose. On a match it silently sends GPS coordinates by SMS to preset contacts, showing nothing on screen. Recognition runs on-device and alerts go out over SMS, so neither step needs a data connection.",
    features: [
      "Background keyword detection while the phone stays locked",
      "Stealth mode with no visible UI change when an alert fires",
      "GPS coordinates delivered over SMS, so no data connection is required",
      "On-device processing for low latency and offline operation",
      "User-configurable trigger word",
    ],
    impact: "80% keyword recognition in noisy real-world conditions",
    status: "Completed",
    role: "Android Developer",
    tech: ["android", { label: "Java" }, { label: "Speech Recognition" }, { label: "SMS & GPS" }],
    github: "https://github.com/prabhjot0109/Kavach",
    live: "",
    backgroundImage: "/image copy 5.png",
    hasPin: false,
    galleryImages: ["/project-image/kavach1.jpg", "/project-image/kavach2.jpg", "/project-image/kavach3.jpg"],
  },
  {
    slug: "swara",
    title: "Swara – Vocal Analysis",
    subtitle: "Measured pitch accuracy across sessions",
    imageTitle: "Swara vocal analyzer",
    src: "/project-image/project-swara.png",
    lightModeSrc: "/project-image/project-swara.png",
    video: "",
    description: "Vocal practice tool that measures pitch accuracy with FFT analysis and tracks how it changes across sessions.",
    longDescription:
      "Singers rarely get objective feedback between lessons. Swara records a take, runs FFT-based pitch detection over the waveform, and plots detected pitch against the intended note. Every session is written to MySQL, so a month of practice becomes a comparable curve rather than a vague impression.",
    features: [
      "FFT pitch detection with a frequency-over-time plot for each take",
      "Session history in MySQL for long-term comparison",
      "Side-by-side comparison of repeated takes of the same piece",
      "Generated reports showing accuracy and consistency trends",
    ],
    achievements: "1st Runner-up, Codespire",
    impact: "Makes vocal progress measurable instead of subjective",
    status: "Completed",
    role: "Software Engineer",
    tech: ["python", { label: "NumPy" }, { label: "Matplotlib" }, { label: "Pandas" }, { label: "MySQL" }],
    github: "https://github.com/prabhjot0109/Swara",
    live: "",
    backgroundImage: "/image copy 3.png",
    hasPin: false,
    galleryImages: ["/project-image/project-swara.png", "/project-image/project-swara-2.png", "/project-image/project-swara-3.webp"],
  },
  {
    slug: "rewear",
    title: "ReWear – Sustainable Marketplace",
    subtitle: "Second-hand clothing resale",
    imageTitle: "ReWear marketplace",
    src: "/project-image/project-rewear.jpg",
    lightModeSrc: "/project-image/project-rewear.jpg",
    video: "",
    description: "Second-hand clothing marketplace with a guided listing flow, category filters and seller reputation scores.",
    longDescription:
      "ReWear is a resale marketplace built around making listing painless: a step-by-step flow with image upload gets an item posted in about a minute, which is usually the point where sellers give up. Buyers filter by category and attributes, and a reputation score built from buyer ratings surfaces who is reliable.",
    features: [
      "Step-by-step listing flow with image upload",
      "Category and attribute filtering across all listings",
      "Seller reputation assembled from buyer ratings",
      "Responsive layout from mobile through desktop",
    ],
    impact: "Lowers the listing friction that keeps wearable clothes out of resale",
    status: "Live",
    role: "Frontend Developer",
    tech: ["react", "vite", "ts", "css3"],
    github: "https://github.com/prabhjot0109/ReWear",
    live: "https://rewear-codecult.vercel.app/",
    backgroundImage: "/image copy 4.png",
    hasPin: false,
    galleryImages: ["/project-image/project-rewear.jpg", "/project-image/project-rewear-2.jpg", "/project-image/project-rewear-3.jpg"],
  },
  {
    slug: "arcade-pixel-palace",
    title: "Arcade Pixel Palace",
    subtitle: "Retro arcade catalog with collectibles",
    imageTitle: "Arcade Pixel Palace",
    src: "/project-image/arcade1.png",
    lightModeSrc: "/project-image/arcade1.png",
    video: "",
    description: "Retro arcade catalog with collectible items, per-item lore and achievement tracking in a pixel-era interface.",
    longDescription:
      "A browsable catalog of classic arcade games wrapped in a deliberately retro interface. Each collectible carries its own piece of lore, and an achievement layer tracks what has been unlocked while exploring. It is built on Radix UI primitives, so the pixel styling never costs keyboard or screen-reader access.",
    features: [
      "Game catalog with details, ratings and screenshots",
      "Collectibles that each carry their own lore entry",
      "Achievement tracking with progress visualisation",
      "Radix UI primitives keeping the retro theme accessible",
    ],
    impact: "Retro styling without giving up keyboard and screen-reader support",
    status: "Live",
    role: "Full Stack Developer",
    tech: ["react", "ts", "tailwind", "radixui", "vite"],
    github: "https://github.com/prabhjot0109/arcade-pixel-palace",
    live: "https://pixelarcade.vercel.app/",
    backgroundImage: "/image copy.png",
    hasPin: false,
    galleryImages: ["/project-image/arcade1.png", "/project-image/arcade2.png", "/project-image/arcade3.png"],
  },
];
