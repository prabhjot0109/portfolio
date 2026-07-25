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
        text: "Communication barriers between Deaf/Hard-of-Hearing (DHH) individuals and hearing communities restrict access to education, healthcare, and public services. Signify addresses this through a bidirectional platform: converting ISL gestures to spoken/written text in real-time (Sign-to-Voice), and translating spoken language into animated 3D sign demonstrations (Voice-to-Sign).",
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
        text: "Published on IEEE Xplore. The paper details system architecture, computer vision pipeline, cross-modal translation, and empirical performance evaluations.",
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
        text: "The platform supports real-time camera ingestion for sign recognition, audio input for voice transcription, dictionary lookup, and document scanning.",
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
        text: "The S2V module captures live camera feeds, extracts keypoint coordinates, and classifies gestures in real-time.",
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
        text: "The V2S module converts spoken audio or written text into sign language demonstrations rendered via a 3D avatar.",
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
        text: "Signify supports 30+ standardized ISL signs across foundational categories:",
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
        ],
      },
      {
        type: "heading",
        text: "Citation",
      },
      {
        type: "paragraph",
        text: "If you reference this work, please cite our IEEE Xplore publication.",
      },
      {
        type: "quote",
        text: "S. Bansal, V. Sharma, Y. Patankar, P. S. Assi, U. Seth, and Z. Rangwala, \"Signify: Bridging Communication Through Technology,\" IEEE Xplore, 2025.",
      },
    ],
  },
];

export function getResearchPaperBySlug(slug: string): ResearchPaper | undefined {
  return researchPapers.find((paper) => paper.slug === slug);
}
