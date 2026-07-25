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
    date: "Jul 2026",
    tags: ["IEEE Xplore", "Computer Vision", "Flutter", "Accessibility", "AI & ML"],
    link: "/research/signify",
    isExternal: false,
    slug: "signify",
    description:
      "A real-time accessibility platform bridging Deaf/Hard-of-Hearing (DHH) and hearing communities using AI-driven sign language recognition and 3D avatar animation synthesis.",
    readingTime: "8 min read",
    content: [
      {
        type: "heading",
        text: "Executive Summary",
      },
      {
        type: "paragraph",
        text: "Communication barriers between Deaf/Hard-of-Hearing (DHH) individuals and hearing communities often restrict access to education, healthcare, and public services. Signify addresses this challenge through a bidirectional accessibility platform: converting Indian Sign Language (ISL) gestures to spoken/written text in real-time (Sign-to-Voice), and translating spoken/written language back into animated 3D sign demonstrations (Voice-to-Sign).",
      },
      {
        type: "quote",
        text: "Empowering individuals with hearing and speech impairments through inclusive tools that foster independence in education, healthcare, and everyday interactions.",
      },
      {
        type: "heading",
        text: "IEEE Xplore Publication",
      },
      {
        type: "paragraph",
        text: "This peer-reviewed research is published on IEEE Xplore. The paper details the system architecture, computer vision pipeline, cross-modal translation mechanisms, and empirical performance evaluations.",
      },
      {
        type: "links",
        items: [
          {
            title: "IEEE Xplore Digital Library",
            href: "https://ieeexplore.ieee.org/document/11609020",
            description: "Access the peer-reviewed research paper (DOI: 10.1109/IEEEXPLORE.11609020).",
          },
          {
            title: "Signify GitHub Repository",
            href: "https://github.com/swastikbansal/Signify",
            description: "Explore source code, mobile client implementation, and backend ML microservices.",
          },
        ],
      },
      {
        type: "heading",
        text: "Platform Demonstration",
      },
      {
        type: "video",
        src: "https://github.com/user-attachments/assets/02f97a65-7394-4ef5-a9ef-95b118944777",
        caption: "Signify Overview — End-to-end bidirectional translation demo.",
      },
      {
        type: "heading",
        text: "User Flow Architecture",
      },
      {
        type: "paragraph",
        text: "The platform provides a streamlined user interface supporting real-time camera ingestion for sign recognition, audio input for voice transcription, dictionary lookup, and document scanning.",
      },
      {
        type: "image",
        src: "https://github.com/user-attachments/assets/1d931dd1-9942-444b-bc1e-9d512162002a",
        alt: "Signify User Flow",
        caption: "System navigation and feature interaction flow in dark mode.",
        width: 600,
        height: 500,
      },
      {
        type: "heading",
        text: "Core Modules & Technical Design",
      },
      {
        type: "heading",
        text: "1. Sign-to-Voice (S2V) Pipeline",
      },
      {
        type: "paragraph",
        text: "The S2V module captures live camera feeds, extracts structural keypoint coordinates, and performs real-time gesture classification.",
      },
      {
        type: "list",
        items: [
          "Camera Feed Processing — High-framerate JPEG stream encoding via Flutter mobile camera controller.",
          "Landmark Extraction — MediaPipe hand and body pose 3D coordinate vector extraction.",
          "Gesture Classification — Scikit-learn RandomForest classifiers evaluated against normalized coordinate vectors.",
          "Multilingual Synthesis — Speech-to-text generation synthesized across 8+ regional languages.",
        ],
      },
      {
        type: "video",
        src: "https://github.com/user-attachments/assets/efc191f6-4b3e-4f33-bd91-20a89f4dacce",
        caption: "ML Inference — MediaPipe landmark coordinate extraction and gesture classification in action.",
      },
      {
        type: "heading",
        text: "2. Voice-to-Sign (V2S) Pipeline",
      },
      {
        type: "paragraph",
        text: "The V2S module converts spoken audio or written text into fluid sign language demonstrations rendered using a 3D avatar.",
      },
      {
        type: "list",
        items: [
          "Speech Transcription — High-fidelity Speech-To-Text (STT) parsing.",
          "Token Mapping — Lemma parsing matched against PostgreSQL dictionary metadata on Supabase.",
          "3D Model Rendering — Retrieval of .glb animation keyframes rendered smoothly via model_viewer_plus.",
          "Pacing Controls — Dynamic playback speed adjustment for training and accessibility.",
        ],
      },
      {
        type: "video",
        src: "https://github.com/user-attachments/assets/009d8fb2-f18b-496c-840e-8320315a65c0",
        caption: "Application Walkthrough — Real-time mobile app interaction and 3D avatar synthesis.",
      },
      {
        type: "heading",
        text: "3. Smart Utilities",
      },
      {
        type: "list",
        items: [
          "ISL Dictionary — Interactive reference catalog for standardized Indian Sign Language.",
          "Google ML Kit OCR — Camera-based physical document scanner translating text directly into sign animations.",
        ],
      },
      {
        type: "heading",
        text: "Technology Stack",
      },
      {
        type: "list",
        items: [
          "Frontend — Flutter, Dart, Go Router, Provider, Model Viewer Plus 3D",
          "Backend & Cloud — Firebase Auth, Cloud Firestore, Supabase PostgreSQL & Storage",
          "ML & Vision — MediaPipe, Scikit-learn RandomForest, Google ML Kit OCR",
          "Audio & Speech — Speech-To-Text (STT), Flutter Text-To-Speech (TTS)",
          "Microservice Hosting — Python Flask API deployed on cloud endpoints",
        ],
      },
      {
        type: "heading",
        text: "Vocabulary & Model Coverage",
      },
      {
        type: "paragraph",
        text: "Signify supports a core vocabulary of 30+ standardized ISL signs spanning foundational communication categories:",
      },
      {
        type: "list",
        items: [
          "Basics — Sun, Help, Teacher, Support, Paper, Love, Water",
          "Actions — Accident, Yes, Eat, Go, Dance",
          "Descriptive — Thick, High, Poor, Important, Deaf, Winner, Deep, Loud, Flat, Slow, Sad",
          "Educational & Common — ISL, Friend, School, Pizza",
        ],
      },
      {
        type: "heading",
        text: "Research Authors & Contributors",
      },
      {
        type: "list",
        items: [
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
