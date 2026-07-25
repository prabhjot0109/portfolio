import { BlogBlock } from "@/data/blogsData";

export interface ResearchPaper {
  title: string;
  date: string;
  tags: string[];
  link: string;
  isExternal: boolean;
  slug: string;
  description: string;
  readingTime: string;
  content: BlogBlock[];
}

export const researchPapers: ResearchPaper[] = [
  {
    title: "Signify — Bridging Communication Through Technology",
    date: "IEEE 2025",
    tags: ["IEEE Xplore", "Computer Vision", "Flutter", "Accessibility", "AI & ML"],
    link: "/research/signify",
    isExternal: false,
    slug: "signify",
    description: "A revolutionary accessibility platform that bridges communication between the Deaf/Hard-of-Hearing community and the hearing world using real-time AI-powered sign language recognition.",
    readingTime: "10 min read",
    content: [
      { type: "heading", text: "About Signify" },
      { type: "paragraph", text: "Signify is a revolutionary accessibility platform designed to break down communication barriers between the Deaf/Hard-of-Hearing (DHH) community and the hearing world. By leveraging cutting-edge AI and computer vision, Signify provides a seamless, bidirectional bridge for real-time communication." },
      { type: "heading", text: "The Research Mission" },
      { type: "quote", text: "To empower individuals with hearing and speech impairments by providing inclusive tools that convert sign language into spoken/written word and vice-versa, fostering independence in education, healthcare, and daily interactions." },
      { type: "heading", text: "IEEE Xplore Publication" },
      { type: "paragraph", text: "This research has been published on IEEE Xplore, one of the world's largest technical professional organizations dedicated to advancing technology. The paper documents the complete system architecture, ML pipeline, and evaluation results of the Signify platform." },
      { type: "links", items: [
        { title: "View on IEEE Xplore", href: "https://ieeexplore.ieee.org/document/11609020", description: "Read the full peer-reviewed paper on IEEE Digital Library." }
      ] },
      { type: "heading", text: "Research Team & Contributors" },
      { type: "paragraph", text: "Signify was developed by a team of six researchers and engineers working across the full stack of mobile development, machine learning, and cloud infrastructure." },
      { type: "list", items: [
        "Swastik Bansal — Lead Developer & ML Engineer",
        "Vidit Sharma — Backend & Cloud Architecture",
        "Yatharth Patankar — Computer Vision Pipeline",
        "Prabhjot Singh Assi — Frontend & Integration",
        "Ujjwal Seth — 3D Animation & UX",
        "Zahara Rangwala — Research & Documentation"
      ] },
      { type: "heading", text: "Key Features — Sign-to-Voice (S2V)" },
      { type: "paragraph", text: "The Sign-to-Voice module processes live camera feeds to identify Indian Sign Language (ISL) gestures in real-time." },
      { type: "list", items: [
        "Real-time Recognition — Processes camera feed frames to identify ISL gestures live using the device camera.",
        "AI-Powered Inference — Uses MediaPipe hand/pose landmark coordinates and trained RandomForest classifiers for high-accuracy gesture detection.",
        "Multilingual Output — Converts recognized signs into text and speech synthesized across 8+ regional languages including Hindi, Tamil, Telugu, Bengali, and more."
      ] },
      { type: "heading", text: "Key Features — Voice-to-Sign (V2S)" },
      { type: "paragraph", text: "The Voice-to-Sign module translates spoken words into fluid 3D sign language demonstrations." },
      { type: "list", items: [
        "Speech Recognition — Captures spoken audio using high-fidelity Speech-to-Text (STT) parsing for accurate transcription.",
        "3D Animation Engine — Translates natural language words into fluid sign language demonstrations rendered via a 3D model viewer with .glb assets.",
        "Customizable Speed — Adjust playback speeds dynamically for assisted learning or real-time conversation pacing."
      ] },
      { type: "heading", text: "Key Features — Smart Utilities" },
      { type: "list", items: [
        "ISL Dictionary — Comprehensive searchable reference library for learning standardized Indian Sign Language.",
        "OCR Document Scanner — Extracts text from physical documents using Google ML Kit OCR and translates them into sign language animations instantly."
      ] },
      { type: "heading", text: "System Architecture & Data Pipeline" },
      { type: "paragraph", text: "Signify is engineered with a hybrid cloud architecture combining on-device ML/APIs with cloud-hosted backend systems to guarantee sub-second latency and real-time processing. The architecture consists of three primary layers: the Flutter mobile client, the Firebase/Supabase cloud backend, and the Python ML microservice." },
      { type: "heading", text: "S2V Pipeline — How It Works" },
      { type: "list", items: [
        "Step 1 — Capture & Encode: The Flutter camera controller captures live video frames and encodes them as JPEG byte streams.",
        "Step 2 — API Transmission: Frames are posted to the Python ML API (Flask microservice hosted on Hugging Face Spaces / local endpoint).",
        "Step 3 — Landmark Extraction: MediaPipe extracts 3D hand and body pose coordinate vectors (landmarks) from raw frame matrices.",
        "Step 4 — Gesture Classification: Scikit-learn RandomForest classifiers process coordinate vectors to evaluate and predict sign probabilities.",
        "Step 5 — Synthesis & Output: The predicted sign is returned to the client, mapped into sentence context, translated if necessary, and read aloud via Flutter TTS."
      ] },
      { type: "heading", text: "V2S Pipeline — How It Works" },
      { type: "list", items: [
        "Step 1 — Speech Recognition: Microphone audio is transcribed into text using high-precision Speech-to-Text (STT).",
        "Step 2 — Token Mapping: Sentences are split into structural tokens and mapped against Supabase PostgreSQL dictionary metadata.",
        "Step 3 — Model Retrieval: 3D animation mesh assets (.glb files) are fetched from Supabase Storage buckets.",
        "Step 4 — 3D Avatar Render: The model_viewer_plus component blends 3D keyframe clips with smooth crossfade interpolations."
      ] },
      { type: "heading", text: "Technology Stack" },
      { type: "list", items: [
        "Frontend — Flutter, Dart, Go Router, Provider, Model Viewer Plus 3D",
        "Backend & Storage — Firebase Auth, Cloud Firestore, Supabase PostgreSQL, Supabase Storage",
        "ML & Computer Vision — MediaPipe Landmark Detection, Scikit-learn RandomForest, Google ML Kit OCR",
        "Speech & Audio — Speech-To-Text (STT), Flutter Text-To-Speech (TTS)",
        "API & Infrastructure — Python Flask ML API, Hugging Face Spaces"
      ] },
      { type: "heading", text: "Supported ISL Vocabulary" },
      { type: "paragraph", text: "Signify currently supports a robust set of 30+ ISL signs across multiple categories." },
      { type: "list", items: [
        "Basics — Sun, Help, Teacher, Support, Paper, Love, Water",
        "Actions — Accident, Yes, Eat, Go, Dance",
        "Descriptive — Thick, High, Poor, Important, Deaf, Winner, Deep, Loud, Flat, Slow, Sad",
        "Educational — ISL, Friend, School, Pizza"
      ] },
      { type: "heading", text: "Getting Started — Installation" },
      { type: "paragraph", text: "Signify requires Flutter SDK (>= 3.9.0), Python 3.8+ for the ML microservice API, and Android Studio or Xcode for building on mobile devices." },
      { type: "list", items: [
        "Clone the repository: git clone https://github.com/swastikbansal/Signify.git",
        "Install Flutter dependencies: flutter pub get",
        "Configure Firebase credentials (google-services.json and GoogleService-Info.plist)",
        "Set up environment variables: cp .env.example .env and fill in API credentials",
        "Build and run: flutter run --dart-define-from-file=.env"
      ] },
      { type: "heading", text: "Future Roadmap" },
      { type: "list", items: [
        "Expansion to 100+ ISL standardized signs.",
        "On-device offline ML inference using TFLite / CoreML.",
        "Community-contributed sign definitions and crowd-sourced validation.",
        "Real-time video call overlay integration with sign language translation."
      ] },
      { type: "heading", text: "Citation" },
      { type: "paragraph", text: "If you use Signify or refer to our work, please cite our research paper published on IEEE Xplore." },
      { type: "quote", text: "S. Bansal, V. Sharma, Y. Patankar, P. S. Assi, U. Seth, and Z. Rangwala, \"Signify: Bridging Communication Through Technology,\" IEEE Xplore, 2025." },
      { type: "links", items: [
        { title: "IEEE Xplore Paper", href: "https://ieeexplore.ieee.org/document/11609020", description: "Access the full peer-reviewed publication on IEEE Digital Library." },
        { title: "GitHub Repository", href: "https://github.com/swastikbansal/Signify", description: "View the source code, documentation, and contribution guidelines." }
      ] }
    ]
  }
];

export function getResearchPaperBySlug(slug: string): ResearchPaper | undefined {
  return researchPapers.find((paper) => paper.slug === slug);
}
