import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  ChevronDown,
  ChevronUp,
  Trophy,
  Target,
  Zap,
  Globe,
  Code2,
  Calendar,
  Layers,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import AutoCarousel from "@/components/AutoCarousel";
import LazyImage from "@/components/LazyImage";

// Import images
import islImage from "@/assets/isl1.jpg";
import islImage2 from "@/assets/isl2.png";
import islImage3 from "@/assets/isl3.png";
import islImage4 from "@/assets/isl4.png";
import islImage5 from "@/assets/isl5.png";
import islImage6 from "@/assets/isl6.png";
import islImage7 from "@/assets/isl7.png";
import medaiImage from "@/assets/project-medai.png";
import medaiImage2 from "@/assets/project-medai-2.png";
import medaiImage3 from "@/assets/project-medai-3.png";
import vrindaImage from "@/assets/vrinda1.png";
import vrindaImage2 from "@/assets/vrinda2.png";
import vrindaImage3 from "@/assets/vrinda3.png";
import kavachImage from "@/assets/kavach1.jpg";
import kavachImage2 from "@/assets/kavach2.jpg";
import kavachImage3 from "@/assets/kavach3.jpg";
import swaraImage from "@/assets/project-swara.png";
import swaraImage2 from "@/assets/project-swara-2.png";
import swaraImage3 from "@/assets/project-swara-3.png";
import rewearImage from "@/assets/project-rewear.jpg";
import rewearImage2 from "@/assets/project-rewear-2.jpg";
import rewearImage3 from "@/assets/project-rewear-3.jpg";
import arcade1 from "@/assets/arcade1.png";
import arcade2 from "@/assets/arcade2.png";
import arcade3 from "@/assets/arcade3.png";
import tabflow1 from "@/assets/tabflow1.png";
import tabflow2 from "@/assets/tabflow2.png";
import tabflow3 from "@/assets/tabflow3.png";
import sentient1 from "@/assets/sentient1.png";

// Category definitions
const categories = [
  { id: "all", label: "All Projects" },
  { id: "ai", label: "AI/ML" },
  { id: "mobile", label: "Mobile" },
  { id: "web", label: "Web" },
  { id: "iot", label: "IoT" },
  { id: "software", label: "Software" },
] as const;

type CategoryId = (typeof categories)[number]["id"];

// Project Data
const projects = [
  {
    id: 1,
    title: "Signify",
    subtitle: "AI Sign Language Translator",
    description:
      "Bridging communication gaps with AI-powered ISL-to-text and text-to-ISL conversion.",
    image: islImage,
    images: [islImage, islImage2, islImage3, islImage4, islImage5, islImage6, islImage7],
    tags: ["Flutter", "Python", "MediaPipe", "Computer Vision", "ML"],
    category: ["ai", "mobile"] as CategoryId[],
    longDescription:
      "An award-winning AI solution designed to empower the hard-of-hearing community. Signify translates Indian Sign Language (ISL) gestures into text and speech in real-time, and vice versa, facilitating seamless two-way communication.",
    features: [
      "Real-time recognition of 40+ ISL gestures",
      "Bi-directional translation (ISL <-> Text/Speech)",
      "Cross-platform mobile application (Flutter)",
      "High-precision hand tracking via MediaPipe",
      "Offline capability for core features",
    ],
    achievements:
      "Winner - Smart India Hackathon 2024 | Featured in National Media",
    impact: "Recognizes 40+ Gestures with 95% Accuracy",
    demoUrl: "#",
    githubUrl: "https://github.com/prabhjot0109/signify_sih",
    status: "Ongoing",
    role: "App & Backend Developer",
  },
  {
    id: 3,
    title: "Vrinda",
    subtitle: "Smart Farming Assistant",
    description:
      "Revolutionizing agriculture with IoT sensors and AI-based crop management insights.",
    image: vrindaImage,
    images: [vrindaImage, vrindaImage2, vrindaImage3],
    tags: ["Flutter", "Arduino", "IoT", "OpenWeather API", "Gemini AI"],
    category: ["ai", "mobile", "iot"] as CategoryId[],
    longDescription:
      "Vrinda combines IoT hardware with advanced AI to provide farmers with actionable insights on soil health, weather patterns, and pest control, directly impacting crop yield and sustainability.",
    features: [
      "Real-time soil moisture and nutrient monitoring",
      "Hyper-local weather forecasting",
      "AI-driven pest identification and remedies",
      "Crop recommendation engine",
      "Vernacular language support for farmers",
    ],
    achievements: "Successful Field Pilots | 20% Yield Improvement",
    impact: "Empowered 10+ Farmers in Indore Region",
    demoUrl: "#",
    githubUrl: "https://github.com/prabhjot0109/vrinda/tree/main",
    status: "Ongoing",
    role: "Lead Developer",
  },
  {
    id: 8,
    title: "Tab Flow",
    subtitle: "Power User Tab Switcher",
    description:
      "A high-performance Chrome extension replacing the default tab cycle with a beautiful, searchable overlay.",
    image: tabflow1,
    images: [tabflow1, tabflow2, tabflow3],
    tags: [
      "TypeScript",
      "Vite",
      "Bun",
      "Chrome Extension",
      "Manifest V3",
      "Shadow DOM",
    ],
    category: ["software"] as CategoryId[],
    longDescription:
      "Tab Flow is a professional browser extension for power users that replaces the default browser tab cycle with a stunning Material Design 3 overlay. It enables instant tab visualization, fuzzy search, Chrome Tab Groups support, and keyboard-first navigation with sub-100ms opening times.",
    features: [
      "Instant access with <100ms opening time",
      "Fuzzy search for rapid tab finding",
      "Chrome Tab Groups with collapsible headers",
      "Virtual scrolling for 50+ tabs at 60fps",
      "Shadow DOM isolation for consistent styling",
    ],
    achievements: "Built with Modern Manifest V3 Standards",
    impact: "Enhanced Productivity for Power Users",
    demoUrl: "#",
    githubUrl: "https://github.com/prabhjot0109/TabFlow",
    status: "Completed",
    role: "Full Stack Developer",
  },
  {
    id: 9,
    title: "Sentient AI",
    subtitle: "RAG-based AI NPC Engine",
    description:
      "A RAG-based AI NPC engine that processes game manuals and custom styles to deliver personalized dialogues via RESTful API.",
    image: sentient1,
    images: [sentient1],
    tags: [
      "FastAPI",
      "LangChain",
      "FAISS",
      "Next.js",
      "Python",
      "TypeScript",
      "RESTful API",
    ],
    category: ["ai", "web"] as CategoryId[],
    longDescription:
      "Sentient is a sophisticated RAG (Retrieval-Augmented Generation) based AI NPC system. Through the web frontend, developers can upload game manuals, custom instructions, and dialogue style PDFs. This data is processed by the RAG engine and made accessible via a RESTful API. The system connects to live game instances, allowing NPCs to deliver personalized, conversational dialogues that remain contextually accurate to the game's lore and character personas.",
    features: [
      "Dynamic upload of game manuals and custom style PDFs",
      "Context-aware dialogue generation via RESTful API",
      "Real-time integration with live game instances",
      "Semantic search and retrieval with FAISS vector store",
      "Personalized NPC personas with RAG-driven intelligence",
    ],
    achievements: "Advanced RAG-based NPC Interaction",
    impact: "Revolutionizing In-game NPC Conversationality",
    demoUrl: "#",
    githubUrl: "https://github.com/prabhjot0109/sentient",
    status: "Completed",
    role: "Full Stack Developer",
  },
  {
    id: 2,
    title: "Med.AI",
    subtitle: "Healthcare Intelligence System",
    description:
      "Enhancing diagnostic accuracy with AI-driven medical image analysis and decision support.",
    image: medaiImage,
    images: [medaiImage, medaiImage2, medaiImage3],
    tags: [
      "PyTorch",
      "Scikit-learn",
      "Computer Vision",
      "Medical AI",
      "X-Ray Analysis",
    ],
    category: ["ai", "web"] as CategoryId[],
    longDescription:
      "Med.AI serves as an intelligent assistant for medical professionals, leveraging deep learning to analyze X-rays and symptoms. It aims to reduce diagnostic errors and improve patient outcomes through data-driven insights.",
    features: [
      "Automated X-Ray abnormality detection",
      "Symptom-based preliminary diagnosis",
      "Secure patient data management",
      "Integration with medical knowledge bases",
      "Scalable cloud-native architecture",
    ],
    achievements: "3rd Runner-up - Prayatna Hackathon | 15% Accuracy Boost",
    impact: "Improved Diagnostic Accuracy by 15%",
    demoUrl: "https://medaiweb.vercel.app/",
    githubUrl: "https://github.com/prabhjot0109/medai-webapp",
    status: "Completed",
    role: "AI Researcher & Developer",
  },
  {
    id: 4,
    title: "Kavach",
    subtitle: "Emergency SOS System",
    description:
      "A voice-activated safety app designed for rapid emergency response in critical situations.",
    image: kavachImage,
    images: [kavachImage, kavachImage2, kavachImage3],
    tags: ["Java", "Android Native", "XML", "Speech Recognition", "Voice AI"],
    category: ["ai", "mobile"] as CategoryId[],
    longDescription:
      "Kavach provides a lifeline in emergencies through stealthy, voice-activated SOS triggers. It ensures help is just a spoken command away, even when the phone is locked or out of reach.",
    features: [
      "Hands-free voice activation (keyword trigger)",
      "Works efficiently in noisy environments",
      "Stealth mode for discreet alerts",
      "Real-time location sharing with emergency contacts",
      "Low latency offline speech processing",
    ],
    achievements: "80% Recognition Accuracy in Noise",
    impact: "Enhanced Personal Safety Mechanism",
    demoUrl: "#",
    githubUrl: "https://github.com/prabhjot0109/Kavach",
    status: "Completed",
    role: "Android Developer",
  },
  {
    id: 5,
    title: "Swara",
    subtitle: "Vocal Analysis Tool",
    description:
      "Helping singers perfect their craft through data-driven pitch analysis and session tracking.",
    image: swaraImage,
    images: [swaraImage, swaraImage2, swaraImage3],
    tags: ["Python", "NumPy", "Matplotlib", "Pandas", "MySQL"],
    category: ["software"] as CategoryId[],
    longDescription:
      "Swara is a comprehensive tool for vocalists to record, analyze, and track their singing performance. It uses signal processing to visualize pitch accuracy and consistency over time.",
    features: [
      "Precise pitch detection and visualization",
      "Session-based progress tracking",
      "Comparative analysis of recordings",
      "Database for long-term performance history",
      "User-friendly graphical reports",
    ],
    achievements: "1st Runner-up - Codespire Competition",
    impact: "Data-Driven Vocal Improvement",
    demoUrl: "#",
    githubUrl: "https://github.com/prabhjot0109/Swara",
    status: "Completed",
    role: "Software Engineer",
  },
  {
    id: 6,
    title: "ReWear",
    subtitle: "Sustainable Marketplace",
    description:
      "Promoting a circular economy with a modern platform for buying and selling pre-loved fashion.",
    image: rewearImage,
    images: [rewearImage, rewearImage2, rewearImage3],
    tags: ["React", "Vite", "HTML", "CSS", "JavaScript"],
    category: ["web"] as CategoryId[],
    longDescription:
      "ReWear addresses fashion waste by making it easy and attractive to trade second-hand clothing. It features a clean, responsive design and secure user interactions to build trust in the resale market.",
    features: [
      "Intuitive product listing flow",
      "Advanced search and filtering",
      "User ratings and reputation system",
      "Responsive modern UI/UX",
      "Secure messaging integration",
    ],
    achievements: "Promoting Sustainable Commerce",
    impact: "Facilitating Waste Reduction",
    demoUrl: "https://rewear-codecult.vercel.app/",
    githubUrl: "https://github.com/prabhjot0109/ReWear",
    status: "Completed",
    role: "Frontend Developer",
  },
  {
    id: 7,
    title: "Arcade Pixel Palace",
    subtitle: "Retro Gaming Experience",
    description:
      "A nostalgic web application celebrating the golden era of arcade gaming with interactive collectibles and achievements.",
    image: arcade1,
    images: [arcade1, arcade2, arcade3],
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Vite",
      "React Query",
    ],
    category: ["web"] as CategoryId[],
    longDescription:
      "Arcade Pixel Palace is an immersive journey through the golden era of arcade gaming. The application features a comprehensive game catalog, an interactive collectibles system with unique lore, achievement tracking, and a retro-inspired UI built with modern web technologies.",
    features: [
      "Comprehensive retro game catalog with detailed information",
      "Interactive collectibles system with unique lore",
      "Achievement tracking and progress visualization",
      "Retro-inspired UI with modern functionality",
      "Fully responsive design for all devices",
    ],
    achievements: "Modern Tribute to Classic Gaming",
    impact: "Preserving Arcade Gaming Heritage",
    demoUrl: "https://pixelarcade.vercel.app/",
    githubUrl: "https://github.com/prabhjot0109/arcade-pixel-palace",
    status: "Completed",
    role: "Full Stack Developer",
  },
];

const ProjectDialogContent = ({
  project,
}: {
  project: (typeof projects)[0];
}) => (
  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl scrollbar-hidden rounded-3xl">
    {/* Custom Close Button */}
    <DialogClose className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md border border-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50">
      <X className="w-5 h-5" />
      <span className="sr-only">Close</span>
    </DialogClose>

    <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-t-3xl">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
      <AutoCarousel images={project.images} alt={project.title} />
      <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-2">
            <Badge
              variant="secondary"
              className="bg-primary/20 text-primary hover:bg-primary/30 backdrop-blur-md border-primary/20"
            >
              {project.status}
            </Badge>
            <Badge
              variant="outline"
              className="bg-background/50 backdrop-blur-md"
            >
              {project.role}
            </Badge>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
            {project.title}
          </h2>
          <p className="text-lg text-white/80 font-medium">
            {project.subtitle}
          </p>
        </motion.div>
      </div>
    </div>

    <div className="p-6 md:p-8 space-y-8 rounded-b-3xl">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Layers className="w-5 h-5 text-primary" />
              Overview
            </h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {project.longDescription}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              Key Features
            </h3>
            <ul className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-muted-foreground bg-muted/30 p-3 rounded-lg border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-muted/30 p-5 rounded-xl border border-border/50">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="bg-background hover:bg-background/80 border border-border/50"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="bg-primary/5 p-5 rounded-xl border border-primary/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              Achievements
            </h3>
            <p className="text-sm font-medium text-foreground">
              {project.achievements}
            </p>
          </div>

          <div className="bg-green-500/5 p-5 rounded-xl border border-green-500/10">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-green-600 dark:text-green-400 mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              Impact
            </h3>
            <p className="text-sm font-medium text-foreground">
              {project.impact}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-3 pt-4 border-t border-border/50">
        <Button
          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
          size="lg"
          asChild
        >
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center cursor-pointer"
          >
            <Globe className="h-4 w-4 mr-2" />
            Live Demo
          </a>
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-2 hover:bg-muted hover:text-foreground"
          size="lg"
          asChild
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center cursor-pointer"
          >
            <Github className="h-4 w-4 mr-2" />
            Code
          </a>
        </Button>
      </div>
    </div>
  </DialogContent>
);

const ProjectCard = React.forwardRef<
  HTMLDivElement,
  { project: (typeof projects)[0]; index: number }
>(({ project, index }, ref) => {
  return (
    <Dialog>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
        layout
        className="h-full"
      >
        <motion.div
          className="group relative h-full bg-card/20 dark:bg-card/20 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 flex flex-col"
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative aspect-video overflow-hidden border-b border-border/10 group-hover:border-primary/20 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

            <LazyImage
              src={project.image}
              alt={project.title}
              className="w-full h-full transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
              priority={index < 3}
              objectFit="contain"
              showBlurBackground={true}
            />

            <div className="absolute top-4 right-4 z-20">
              <Badge
                className={`
                  ${
                    project.status === "Completed"
                      ? "bg-green-500/90"
                      : project.status === "Ongoing"
                      ? "bg-blue-500/90"
                      : "bg-orange-500/90"
                  } 
                  text-white border-none shadow-lg backdrop-blur-md
                `}
              >
                {project.status}
              </Badge>
            </div>

            <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <DialogTrigger asChild>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </DialogTrigger>
            </div>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-primary/80 mb-3">
                {project.subtitle}
              </p>
              <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-auto space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <motion.span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border/50 group-hover:border-primary/20 transition-colors cursor-default"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "hsl(var(--primary) / 0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {tag}
                  </motion.span>
                ))}
                {project.tags.length > 3 && (
                  <motion.span
                    className="text-xs px-2.5 py-1 rounded-full bg-muted/50 text-muted-foreground border border-border/50"
                    whileHover={{ scale: 1.1 }}
                  >
                    +{project.tags.length - 3}
                  </motion.span>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground hover:bg-primary/10 p-0 h-auto px-2 py-1"
                    asChild
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="w-4 h-4 mr-1.5" />
                      Code
                    </a>
                  </Button>
                </motion.div>
                <DialogTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="link"
                      size="sm"
                      className="text-primary p-0 h-auto group/btn"
                    >
                      Learn More
                      <ChevronDown className="w-4 h-4 ml-1 -rotate-90 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </DialogTrigger>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <ProjectDialogContent project={project} />
    </Dialog>
  );
});

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = React.useState(false);
  const [activeCategory, setActiveCategory] = React.useState<CategoryId>("all");
  const firstHiddenProjectRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (showAll && firstHiddenProjectRef.current) {
      setTimeout(() => {
        firstHiddenProjectRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [showAll]);

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) =>
      project.category.includes(activeCategory)
    );
  }, [activeCategory]);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            A collection of innovative solutions bridging technology and
            real-world impact.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 px-2"
        >
          <div className="w-full overflow-x-auto scrollbar-hidden md:overflow-visible pb-2 -mb-2">
            <div className="flex justify-start md:justify-center min-w-max md:min-w-0">
              <div className="inline-flex p-1 rounded-xl bg-muted/50 backdrop-blur-sm border border-border/50 gap-0.5 md:gap-1">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setShowAll(false);
                    }}
                    className={`px-2.5 sm:px-3 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg text-[11px] sm:text-xs md:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                      activeCategory === category.id
                        ? "bg-background text-foreground shadow-lg"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                ref={index === 3 ? firstHiddenProjectRef : null}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                onClick={() => setShowAll(!showAll)}
                size="lg"
                variant="outline"
                className="group min-w-[200px] border-2 hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {showAll ? (
                  <>
                    Show Less{" "}
                    <ChevronUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                  </>
                ) : (
                  <>
                    View All{" "}
                    {activeCategory === "all"
                      ? "Projects"
                      : categories.find((c) => c.id === activeCategory)
                          ?.label}{" "}
                    ({filteredProjects.length - 3} more)
                    <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                  </>
                )}
              </Button>
            </motion.div>
          </motion.div>
        )}

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
