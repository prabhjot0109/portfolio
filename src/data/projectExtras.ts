/**
 * Per-project architecture, keyed by the project `id` used in Projects.tsx.
 * Each stage carries a `detail` ("how it works") revealed when the stage is
 * expanded, and the architecture has `outcomes` describing what it produces.
 */

export type StageKind =
  | "input"
  | "process"
  | "model"
  | "store"
  | "serve"
  | "output"
  | "interface";

export interface ArchNode {
  label: string;
  hint?: string;
}

export interface ArchStage {
  label: string;
  kind: StageKind;
  nodes: ArchNode[];
  /** How this stage works — shown when the stage is expanded. */
  detail: string;
}

export interface Architecture {
  tagline: string;
  stages: ArchStage[];
  /** What the system produces — folds the old "artifacts" into Architecture. */
  outcomes: string[];
}

export interface ProjectExtra {
  architecture: Architecture;
}

export const projectExtras: Record<number, ProjectExtra> = {
  // Signify — AI Sign Language Translator
  1: {
    architecture: {
      tagline:
        "A cross-platform app that turns a phone camera into a two-way sign-language interpreter.",
      stages: [
        {
          label: "Capture",
          kind: "input",
          detail:
            "The Flutter app streams frames from the device camera and samples them at a fixed rate, keeping latency low enough for real-time conversation.",
          nodes: [{ label: "Flutter App", hint: "camera + mic" }, { label: "Frame Sampler" }],
        },
        {
          label: "Vision",
          kind: "process",
          detail:
            "Each frame runs through MediaPipe's hand-tracking model, which extracts 21 3D landmarks per hand — a compact representation that stays robust across lighting and backgrounds.",
          nodes: [{ label: "MediaPipe", hint: "hand tracking" }, { label: "Landmark Extraction" }],
        },
        {
          label: "Inference",
          kind: "model",
          detail:
            "The landmark sequence feeds a trained gesture classifier that maps it to one of 40+ ISL signs; a reverse mapper converts typed text back into sign output.",
          nodes: [{ label: "Gesture Classifier", hint: "40+ ISL signs" }, { label: "Text ↔ Sign Mapper" }],
        },
        {
          label: "Services",
          kind: "serve",
          detail:
            "A FastAPI backend coordinates the heavier work — OCR for printed text and cloud sync — so the phone stays responsive.",
          nodes: [{ label: "FastAPI Backend" }, { label: "OCR Engine" }, { label: "Cloud Sync" }],
        },
        {
          label: "Output",
          kind: "output",
          detail:
            "Recognised signs are rendered as text and spoken via TTS, while typed text is played back as a sign animation — closing the two-way loop.",
          nodes: [{ label: "Text" }, { label: "Speech (TTS)" }, { label: "Sign Animation" }],
        },
      ],
      outcomes: [
        "Real-time ISL gesture → text + speech, and text → sign translation",
        "Recognises 40+ Indian Sign Language gestures at ~95% accuracy",
        "On-device hand tracking that works offline for core features",
        "OCR pipeline to read printed text into the translation flow",
      ],
    },
  },

  // Med.AI — Healthcare Intelligence
  2: {
    architecture: {
      tagline:
        "A diagnostic-support system pairing computer vision on X-rays with symptom reasoning.",
      stages: [
        {
          label: "Input",
          kind: "input",
          detail:
            "Clinicians upload a chest X-ray and optionally enter symptoms through the web interface.",
          nodes: [{ label: "X-Ray Upload" }, { label: "Symptom Form" }],
        },
        {
          label: "Vision",
          kind: "model",
          detail:
            "The image is normalised and passed through a PyTorch CNN trained to flag abnormalities, returning region-level signals rather than a single opaque label.",
          nodes: [{ label: "CNN (PyTorch)", hint: "abnormality detection" }, { label: "Image Preprocessing" }],
        },
        {
          label: "Reasoning",
          kind: "model",
          detail:
            "A scikit-learn classifier weighs the reported symptoms against a medical knowledge base to produce a preliminary, explainable assessment.",
          nodes: [{ label: "Symptom Classifier", hint: "scikit-learn" }, { label: "Medical Knowledge Base" }],
        },
        {
          label: "Output",
          kind: "output",
          detail:
            "Findings are assembled into a diagnostic-support report with a confidence score — a fast second opinion, never a final verdict.",
          nodes: [{ label: "Diagnostic Report" }, { label: "Confidence Score" }],
        },
      ],
      outcomes: [
        "Automated abnormality detection from chest X-ray uploads",
        "Symptom-based preliminary diagnosis with confidence scoring",
        "~15% improvement in diagnostic accuracy in evaluation",
        "Decision-support reports for clinicians, not a black box",
      ],
    },
  },

  // Vrinda — Smart Farming Assistant
  3: {
    architecture: {
      tagline:
        "An IoT-to-AI loop that turns raw field sensor data into farmer-ready advice.",
      stages: [
        {
          label: "Field",
          kind: "input",
          detail:
            "Arduino-connected soil-moisture and temperature/humidity sensors sample each plot on a fixed interval.",
          nodes: [{ label: "Arduino" }, { label: "Soil Moisture" }, { label: "Temp / Humidity" }],
        },
        {
          label: "Ingest",
          kind: "store",
          detail:
            "An IoT gateway pushes readings into Firebase in real time, giving the app a live view of every field.",
          nodes: [{ label: "IoT Gateway" }, { label: "Firebase", hint: "realtime store" }],
        },
        {
          label: "Intelligence",
          kind: "model",
          detail:
            "Gemini turns the raw signals (and an optional photo) into advice and pest IDs, while OpenWeather and a crop recommender add forecast-aware guidance.",
          nodes: [{ label: "Gemini AI", hint: "advisory + pest ID" }, { label: "OpenWeather API" }, { label: "Crop Recommender" }],
        },
        {
          label: "App",
          kind: "interface",
          detail:
            "A Flutter app surfaces everything in the farmer's own language, so the insight is actually usable in the field.",
          nodes: [{ label: "Flutter", hint: "vernacular UI" }],
        },
        {
          label: "Output",
          kind: "output",
          detail:
            "Farmers receive plain-language insights, threshold-based alerts, and crop recommendations.",
          nodes: [{ label: "Insights" }, { label: "Alerts" }, { label: "Recommendations" }],
        },
      ],
      outcomes: [
        "Live soil-moisture and nutrient monitoring from field sensors",
        "AI crop advisory and pest identification via Gemini",
        "Hyper-local weather forecasting through OpenWeather",
        "Vernacular mobile UI — piloted with 10+ farmers, ~20% yield lift",
      ],
    },
  },

  // Kavach — Emergency SOS
  4: {
    architecture: {
      tagline:
        "A low-latency safety app driven by offline, on-device voice triggers.",
      stages: [
        {
          label: "Trigger",
          kind: "input",
          detail:
            "A lightweight background service keeps listening for a chosen safety keyword, even when the screen is locked.",
          nodes: [{ label: "Voice Keyword", hint: "always-listening" }, { label: "Background Service" }],
        },
        {
          label: "Detect",
          kind: "model",
          detail:
            "An on-device speech model runs fully offline, with noise filtering so it stays reliable in chaotic, real-world conditions.",
          nodes: [{ label: "On-Device ASR", hint: "offline" }, { label: "Noise Filtering" }],
        },
        {
          label: "Respond",
          kind: "serve",
          detail:
            "On a match it grabs GPS coordinates and dispatches SMS alerts to pre-set contacts within seconds.",
          nodes: [{ label: "GPS Location" }, { label: "SMS / Alert Dispatch" }],
        },
        {
          label: "Output",
          kind: "output",
          detail:
            "Contacts receive an alert and a live location link, while a stealth mode keeps the whole thing discreet.",
          nodes: [{ label: "Contact Alerts" }, { label: "Live Location Link" }],
        },
      ],
      outcomes: [
        "Hands-free, voice-activated SOS that works even when the phone is locked",
        "On-device keyword spotting with ~80% accuracy in noisy conditions",
        "Stealth mode for discreet alerts during a threat",
        "Real-time location sharing with chosen emergency contacts",
      ],
    },
  },

  // Swara — Vocal Analysis Software
  5: {
    architecture: {
      tagline:
        "A signal-processing pipeline that scores and tracks vocal pitch accuracy.",
      stages: [
        {
          label: "Capture",
          kind: "input",
          detail: "A vocal take is recorded through the app for analysis.",
          nodes: [{ label: "Audio Recording" }],
        },
        {
          label: "DSP",
          kind: "process",
          detail:
            "NumPy-based signal processing extracts the fundamental pitch contour from the raw waveform.",
          nodes: [{ label: "Pitch Detection" }, { label: "Signal Processing", hint: "NumPy" }],
        },
        {
          label: "Analyze",
          kind: "model",
          detail:
            "Pitch is compared against the target to score accuracy and consistency, aggregated with Pandas.",
          nodes: [{ label: "Accuracy Metrics", hint: "Pandas" }, { label: "Consistency Scoring" }],
        },
        {
          label: "Store",
          kind: "store",
          detail:
            "Each session is written to MySQL so a singer's progress can be tracked over weeks.",
          nodes: [{ label: "MySQL", hint: "session history" }],
        },
        {
          label: "Report",
          kind: "output",
          detail: "Matplotlib renders the pitch and progress charts the singer reviews.",
          nodes: [{ label: "Matplotlib Charts" }],
        },
      ],
      outcomes: [
        "Precise pitch detection and visualisation from a vocal recording",
        "Session-based progress tracking over time",
        "Comparative analysis across recordings",
        "Long-term performance history with graphical reports",
      ],
    },
  },

  // ReWear — Sustainable Marketplace
  6: {
    architecture: {
      tagline:
        "A React SPA marketplace for listing, discovering, and swapping pre-loved fashion.",
      stages: [
        {
          label: "Client",
          kind: "interface",
          detail: "A React + Vite single-page app delivers the entire marketplace experience.",
          nodes: [{ label: "React + Vite", hint: "SPA" }],
        },
        {
          label: "Features",
          kind: "process",
          detail:
            "Listings, search/filter, and a ratings system are the core building blocks that make the market trustworthy.",
          nodes: [{ label: "Listings" }, { label: "Search / Filter" }, { label: "Ratings" }],
        },
        {
          label: "Flow",
          kind: "serve",
          detail:
            "A user lists an item, others browse and message, and the two arrange a swap — keeping clothing in circulation.",
          nodes: [{ label: "List Item" }, { label: "Browse" }, { label: "Message" }, { label: "Swap" }],
        },
      ],
      outcomes: [
        "Clothing-exchange marketplace promoting a circular economy",
        "Listing flow with search, filtering, and item detail pages",
        "User ratings and reputation to build trust",
        "Responsive React UI with secure messaging",
      ],
    },
  },

  // Arcade Pixel Palace — Retro Gaming Experience
  7: {
    architecture: {
      tagline:
        "A modern React app that recreates the arcade era with catalog, collectibles, and achievements.",
      stages: [
        {
          label: "Client",
          kind: "interface",
          detail: "A React + TypeScript app built with Vite renders the whole arcade.",
          nodes: [{ label: "React + TypeScript", hint: "Vite" }],
        },
        {
          label: "State",
          kind: "store",
          detail: "React Query manages catalog and progress data with caching for snappy navigation.",
          nodes: [{ label: "React Query" }],
        },
        {
          label: "Modules",
          kind: "process",
          detail:
            "Three modules — game catalog, lore-driven collectibles, and achievements — compose the experience.",
          nodes: [{ label: "Game Catalog" }, { label: "Collectibles", hint: "lore" }, { label: "Achievements" }],
        },
        {
          label: "UI",
          kind: "output",
          detail: "A retro-themed shadcn/ui layer ties it together, fully responsive across devices.",
          nodes: [{ label: "shadcn/ui", hint: "retro theme" }],
        },
      ],
      outcomes: [
        "A retro arcade catalog with detailed game information",
        "Interactive collectibles system with unique lore",
        "Achievement tracking and progress visualisation",
        "Fully responsive, retro-inspired UI on modern web tech",
      ],
    },
  },

  // Tab Flow — Power User Tab Switcher
  8: {
    architecture: {
      tagline:
        "A Manifest V3 extension that replaces the native tab cycle with a fast, isolated overlay.",
      stages: [
        {
          label: "Trigger",
          kind: "input",
          detail:
            "A Manifest V3 service worker listens for the keyboard shortcut and injects the overlay on demand.",
          nodes: [{ label: "Keyboard", hint: "Alt+Tab style" }, { label: "Service Worker", hint: "Manifest V3" }],
        },
        {
          label: "Overlay",
          kind: "interface",
          detail:
            "The UI lives in a Shadow DOM so page styles can't leak in, and virtual scrolling keeps it at 60fps even with many tabs open.",
          nodes: [{ label: "Shadow DOM", hint: "style isolation" }, { label: "Virtual Scroll", hint: "60fps" }],
        },
        {
          label: "Engine",
          kind: "process",
          detail: "Fuzzy search, tab-group handling, and history power instant, keyboard-first navigation.",
          nodes: [{ label: "Fuzzy Search" }, { label: "Tab Groups" }, { label: "History" }],
        },
        {
          label: "Chrome APIs",
          kind: "serve",
          detail:
            "It talks to the tabs, tabGroups, and sessions APIs to act on whatever you select.",
          nodes: [{ label: "tabs" }, { label: "tabGroups" }, { label: "sessions" }],
        },
      ],
      outcomes: [
        "A searchable tab-switching overlay opening in under 100ms",
        "Fuzzy search across open tabs with keyboard-first navigation",
        "Chrome Tab Groups support with collapsible headers",
        "Virtual scrolling for 50+ tabs at 60fps, isolated via Shadow DOM",
      ],
    },
  },

  // Sentient AI — RAG NPC Engine
  9: {
    architecture: {
      tagline:
        "A Retrieval-Augmented Generation engine that serves lore-accurate NPC dialogue over an API.",
      stages: [
        {
          label: "Ingest",
          kind: "input",
          detail:
            "Through a Next.js UI, developers upload game manuals and style PDFs that define an NPC's world and voice.",
          nodes: [{ label: "Next.js UI", hint: "upload PDFs" }, { label: "Manuals + Styles" }],
        },
        {
          label: "Index",
          kind: "process",
          detail:
            "Documents are chunked, embedded, and stored in a FAISS index built for fast similarity lookup.",
          nodes: [{ label: "Chunking" }, { label: "Embeddings" }, { label: "FAISS", hint: "vector store" }],
        },
        {
          label: "Retrieve",
          kind: "store",
          detail:
            "At query time the top-k most relevant chunks are pulled as grounding context for the model.",
          nodes: [{ label: "Semantic Search", hint: "top-k context" }],
        },
        {
          label: "Generate",
          kind: "model",
          detail:
            "LangChain composes the retrieved context with a persona prompt and an LLM (Gemini/OpenAI) to produce in-character dialogue.",
          nodes: [{ label: "LangChain" }, { label: "LLM", hint: "Gemini / OpenAI" }, { label: "Persona Prompt" }],
        },
        {
          label: "Serve",
          kind: "serve",
          detail: "A FastAPI REST endpoint streams the dialogue back to a live game instance.",
          nodes: [{ label: "FastAPI", hint: "RESTful API" }, { label: "Live Game Instance" }],
        },
      ],
      outcomes: [
        "Upload game manuals + style PDFs to give NPCs a persona and lore",
        "Context-aware dialogue served to live game instances via REST API",
        "Semantic retrieval over a FAISS vector store",
        "Personalised, lore-accurate NPC conversations on demand",
      ],
    },
  },

  // Recall — Smart Bookmark Manager
  10: {
    architecture: {
      tagline:
        "A realtime bookmark manager that enriches links with AI descriptions and syncs instantly.",
      stages: [
        {
          label: "Client",
          kind: "interface",
          detail:
            "A Next.js 14 App-Router UI renders bookmarks with optimistic updates, so every action feels instant.",
          nodes: [{ label: "Next.js 14", hint: "App Router" }, { label: "Optimistic UI" }],
        },
        {
          label: "Auth",
          kind: "serve",
          detail: "Google OAuth via Supabase handles sign-in without any password management.",
          nodes: [{ label: "Google OAuth", hint: "via Supabase" }],
        },
        {
          label: "Realtime",
          kind: "process",
          detail:
            "A custom useRealtime hook subscribes to Supabase Realtime, so a change in one tab appears everywhere at once.",
          nodes: [{ label: "useRealtime Hook" }, { label: "Supabase Realtime" }],
        },
        {
          label: "AI Enrich",
          kind: "model",
          detail:
            "A scraper grabs page content and Gemini writes a concise description for each saved link.",
          nodes: [{ label: "Web Scraper" }, { label: "Gemini", hint: "description gen" }],
        },
        {
          label: "Data",
          kind: "store",
          detail:
            "Everything persists in PostgreSQL with Row Level Security keeping each user's bookmarks private.",
          nodes: [{ label: "PostgreSQL", hint: "Row Level Security" }],
        },
      ],
      outcomes: [
        "Real-time bookmark sync across devices with no manual refresh",
        "AI-generated site descriptions via web scraping + Gemini",
        "Google OAuth sign-in with row-level-security privacy",
        "Optimistic UI updates through a custom useRealtime hook",
      ],
    },
  },

  // Quiz Generation Backend — Peblo Quiz Engine
  11: {
    architecture: {
      tagline:
        "A content-to-quiz pipeline with source traceability and adaptive difficulty.",
      stages: [
        {
          label: "Ingest",
          kind: "input",
          detail: "Educators upload a PDF (parsed with PyPDF) or paste plain text to start.",
          nodes: [{ label: "PDF Upload", hint: "PyPDF" }, { label: "Plain Text" }],
        },
        {
          label: "Process",
          kind: "process",
          detail:
            "Content is chunked, and every chunk is tracked so each generated question stays traceable to its source.",
          nodes: [{ label: "Chunking" }, { label: "Source References" }],
        },
        {
          label: "Generate",
          kind: "model",
          detail:
            "Gemini produces MCQ, true/false, fill-in-the-blank, and short-answer items from each chunk.",
          nodes: [{ label: "Google Gemini" }, { label: "MCQ / TF / FIB / Short" }],
        },
        {
          label: "Adapt",
          kind: "model",
          detail:
            "A sliding-window engine reads a student's recent answers and tunes difficulty up or down.",
          nodes: [{ label: "Difficulty Engine", hint: "sliding window" }],
        },
        {
          label: "Persist",
          kind: "store",
          detail:
            "Questions and attempts live in PostgreSQL via SQLAlchemy/Alembic, exposed through a FastAPI REST API.",
          nodes: [{ label: "PostgreSQL", hint: "SQLAlchemy + Alembic" }, { label: "FastAPI", hint: "REST API" }],
        },
      ],
      outcomes: [
        "Turns PDFs or plain text into structured, adaptive quizzes",
        "Generates MCQ, True/False, Fill-in-the-blank, and short answers",
        "Every question is traceable back to its source chunk",
        "Difficulty adapts to recent answer patterns via a sliding window",
      ],
    },
  },
};
