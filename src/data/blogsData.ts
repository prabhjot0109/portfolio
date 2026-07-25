export interface Blog {
  title: string;
  date: string;
  claps?: number;
  tags: string[];
  link: string;
  isExternal: boolean;
  slug?: string;
  description?: string;
  readingTime?: string;
  content?: BlogBlock[];
}

export type BlogBlock =
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "quote";
      text: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption: string;
      width: number;
      height: number;
    }
  | {
      type: "video";
      src: string;
      caption?: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "links";
      items: {
        title: string;
        href: string;
        description: string;
      }[];
    };

export const blogsData: Blog[] = [
  {
    title: "Building Sentient: Context-Aware RAG Engine for Game NPCs",
    date: "Jul 2026",
    tags: ["AI", "RAG", "FastAPI", "FAISS", "LangChain", "Python"],
    link: "/blogs/sentient",
    isExternal: false,
    slug: "sentient",
    readingTime: "7 min read",
    description:
      "How I built a retrieval-augmented generation engine to convert game manuals, lore docs, and character sheets into low-latency, context-grounded NPC dialogue.",
    content: [
      {
        type: "paragraph",
        text: "Most game dialogue systems fall into two extremes. Either you write rigid decision trees that feel predictable after ten minutes, or you plug in an unconstrained LLM prompt that breaks immersion and invents facts about your game world.",
      },
      {
        type: "paragraph",
        text: "When building Sentient, I set out to solve this middle ground. The goal was to build a system where developers upload game manuals, lore documents, and character style guides, and receive a low-latency REST API that serves context-grounded NPC dialogues directly inside live game instances.",
      },
      {
        type: "heading",
        text: "The problem with static NPC dialogue trees",
      },
      {
        type: "paragraph",
        text: "Traditional game design requires hand-writing every dialogue branch. As game worlds grow, dialogue trees quickly become unmaintainable. Conversely, raw LLMs tend to hallucinate backstory or speak in out-of-character modern internet phrasing.",
      },
      {
        type: "quote",
        text: "Game dialogue needs strict boundaries: grounded knowledge from the lore, distinct character tone, and latency low enough to keep player interaction fluid.",
      },
      {
        type: "paragraph",
        text: "Retrieval-Augmented Generation (RAG) fits this requirement, but standard document RAG implementations are optimized for search recall, not real-time gaming latencies.",
      },
      {
        type: "heading",
        text: "Architecting the low-latency RAG pipeline",
      },
      {
        type: "paragraph",
        text: "Sentient uses a decoupled architecture splitting document ingestion from online dialogue querying. Developers upload PDFs and markdown files containing world lore through a Next.js dashboard.",
      },
      {
        type: "paragraph",
        text: "On the backend, FastAPI handles document processing. Text chunks are extracted, split semantically, and converted into dense vector embeddings using LangChain. These vectors are indexed into local FAISS vector stores.",
      },
      {
        type: "list",
        items: [
          "Document Ingestion: Parses lore PDFs, rulebooks, and character sheets.",
          "Semantic Chunking: Breaks text into overlapping 500-token blocks to preserve context across boundaries.",
          "Namespace Isolation: Allocates dedicated FAISS vector indices per character persona.",
          "REST Endpoint: Exposes async dialogue generation endpoints consumed by game clients.",
        ],
      },
      {
        type: "heading",
        text: "Optimizing retrieval speed and context relevance",
      },
      {
        type: "paragraph",
        text: "A major bottleneck in naive RAG setups is searching across a monolithic vector store containing an entire game world's lore. Querying a single index for every character interaction adds unnecessary latency.",
      },
      {
        type: "paragraph",
        text: "Sentient isolates each NPC's knowledge domain into dedicated FAISS index namespaces. When a player talks to a blacksmith, retrieval runs strictly against the blacksmith's lore index and general town knowledge, bypassing unrelated main quest lore.",
      },
      {
        type: "paragraph",
        text: "This targeted vector lookup reduced search retrieval times to under 120ms per query.",
      },
      {
        type: "heading",
        text: "Separating lore retrieval from persona formatting",
      },
      {
        type: "paragraph",
        text: "Retrieving relevant context is only half the task. An ancient scholar and a rogue merchant referencing the same historical war should phrase their answers completely differently.",
      },
      {
        type: "paragraph",
        text: "Sentient separates knowledge retrieval from voice synthesis. The retrieved text snippets from FAISS enter a dynamic prompt pipeline containing character persona parameters, including tone, speech habits, forbidden topics, and output length constraints.",
      },
      {
        type: "paragraph",
        text: "FastAPI streams the LLM response asynchronously back to the game client over HTTP, enabling smooth, uninterrupted conversation loops.",
      },
      {
        type: "heading",
        text: "Engineering lessons and trade-offs",
      },
      {
        type: "paragraph",
        text: "During development, fixed-character chunking created split sentences across critical lore definitions. Switching to semantic paragraph splitting with a 50-token overlap resolved fragmented lookups.",
      },
      {
        type: "paragraph",
        text: "For vector storage, FAISS provided high in-memory query throughput. To handle dynamic document updates without blocking search operations, updates are staged in Redis and flushed to the main index during scheduled maintenance intervals.",
      },
      {
        type: "links",
        items: [
          {
            title: "Sentient GitHub Repository",
            href: "https://github.com/prabhjot0109/sentient",
            description: "Explore the source code, RAG pipeline, and FastAPI backend implementation.",
          },
        ],
      },
    ],
  },
  {
    title: "Building Signify: Real-Time ISL Recognition and Avatar Synthesis",
    date: "Jul 2026",
    tags: ["Computer Vision", "Flutter", "MediaPipe", "Python", "FastAPI"],
    link: "/blogs/signify",
    isExternal: false,
    slug: "signify",
    readingTime: "8 min read",
    description:
      "Inside the computer vision pipeline and bidirectional architecture behind Signify, translating Indian Sign Language to text and rendering 3D avatar sign animations.",
    content: [
      {
        type: "paragraph",
        text: "Indian Sign Language (ISL) is used by millions of Deaf and Hard-of-Hearing individuals across India, yet accessibility tools for real-time communication remain limited. Most existing applications rely on static image dictionaries or expensive hardware sensors.",
      },
      {
        type: "paragraph",
        text: "I built Signify alongside my team during Smart India Hackathon 2024 to create a bidirectional accessibility platform. The goal was twofold: convert live camera ISL gestures into text and speech for hearing users (Sign-to-Voice), and convert spoken or written words into animated 3D sign demonstrations (Voice-to-Sign).",
      },
      {
        type: "heading",
        text: "The mobile vision challenge: frame rate vs computation",
      },
      {
        type: "paragraph",
        text: "Running full deep learning models directly on raw mobile camera video streams poses significant performance issues. High-resolution RGB frame processing quickly overheats devices, drains batteries, and drops inference speeds below acceptable real-time rates.",
      },
      {
        type: "quote",
        text: "To make sign recognition practical on mobile, you cannot process full pixels for every frame. You must reduce the input space to structural keypoints.",
      },
      {
        type: "heading",
        text: "Sign-to-Voice: Landmark extraction and classification",
      },
      {
        type: "paragraph",
        text: "Signify solves the mobile performance bottleneck by offloading visual tracking to MediaPipe. The camera controller captures live video frames, and MediaPipe extracts 21 3D hand landmarks alongside upper-body pose joints locally on the client.",
      },
      {
        type: "paragraph",
        text: "Instead of passing raw image arrays over the network, Signify packages these normalized 3D coordinate vectors into lightweight JSON payloads. A Python FastAPI backend receives the coordinate vectors and evaluates them using a trained Scikit-learn RandomForest classifier.",
      },
      {
        type: "list",
        items: [
          "Camera Capture: Low-overhead JPEG frame streaming via Flutter mobile camera controller.",
          "Local Landmark Extraction: MediaPipe extracts 21 hand keypoints and body pose joints per frame.",
          "Vector Normalization: Coordinates are offset relative to wrist position to neutralize camera distance.",
          "ML Inference: RandomForest classifier assigns gesture labels at 30 frames per second with 95% accuracy across 40+ signs.",
        ],
      },
      {
        type: "heading",
        text: "Voice-to-Sign: Bidirectional 3D avatar rendering",
      },
      {
        type: "paragraph",
        text: "Translating spoken language back into sign language is not a simple word-by-word substitution. ISL possesses distinct grammatical rules, word orders, and sentence structures compared to spoken English or Hindi.",
      },
      {
        type: "paragraph",
        text: "When a hearing user speaks into the app, speech-to-text engines transcribe the audio. Signify processes the raw text, performs lemmatization to extract core root concepts, and queries PostgreSQL dictionary metadata hosted on Supabase.",
      },
      {
        type: "paragraph",
        text: "The Flutter mobile client fetches matching .glb keyframe animation files and renders them smoothly using Model Viewer Plus 3D. Users can adjust playback pacing to learn complex gesture transitions at their own speed.",
      },
      {
        type: "heading",
        text: "Field testing insights and edge cases",
      },
      {
        type: "paragraph",
        text: "Initial testing revealed that varied lighting and background motion produced jitter in hand landmark coordinates. Normalizing all point distances relative to the user's wrist anchor eliminated false classifications caused by natural hand positioning.",
      },
      {
        type: "paragraph",
        text: "Network dependency was another critical consideration. For core gesture recognition in low-connectivity areas, optimized offline models were embedded directly into the Flutter app bundle.",
      },
      {
        type: "links",
        items: [
          {
            title: "Signify GitHub Repository",
            href: "https://github.com/prabhjot0109/signify_sih",
            description: "Explore the Flutter mobile application code, machine learning pipelines, and backend APIs.",
          },
        ],
      },
    ],
  },
];

export const blogPosts = blogsData.filter(
  (blog): blog is Blog & { slug: string; content: BlogBlock[] } =>
    typeof blog.slug === "string" && Array.isArray(blog.content),
);

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((blog) => blog.slug === slug);
}
