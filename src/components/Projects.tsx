import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import AutoCarousel from "@/components/AutoCarousel";
import LazyImage from "@/components/LazyImage";

// Import images
import islImage from "@/assets/project-isl.jpg";
import islImage2 from "@/assets/project-isl-2.jpg";
import islImage3 from "@/assets/project-isl-3.jpg";
import medaiImage from "@/assets/project-medai.jpg";
import medaiImage2 from "@/assets/project-medai-2.jpg";
import medaiImage3 from "@/assets/project-medai-3.jpg";
import vrindaImage from "@/assets/project-vrinda.jpg";
import vrindaImage2 from "@/assets/project-vrinda-2.jpg";
import vrindaImage3 from "@/assets/project-vrinda-3.jpg";
import kavachImage from "@/assets/project-kavach.jpg";
import kavachImage2 from "@/assets/project-kavach-2.jpg";
import kavachImage3 from "@/assets/project-kavach-3.jpg";
import swaraImage from "@/assets/project-swara.jpg";
import swaraImage2 from "@/assets/project-swara-2.jpg";
import swaraImage3 from "@/assets/project-swara-3.jpg";
import rewearImage from "@/assets/project-rewear.jpg";
import rewearImage2 from "@/assets/project-rewear-2.jpg";
import rewearImage3 from "@/assets/project-rewear-3.jpg";

const Projects = () => {
  const [showAll, setShowAll] = React.useState(false);
  const firstHiddenProjectRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (showAll && firstHiddenProjectRef.current) {
      setTimeout(() => {
        firstHiddenProjectRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }, 100);
    }
  }, [showAll]);

  const projects = [
    {
      id: 1,
      title: "Signify - AI Sign Language Translator",
      description:
        "AI-powered app enabling ISL-to-text and text-to-ISL communication for the hard-of-hearing community. Duration: Ongoing | Role: App & Backend Developer.",
      image: islImage,
      images: [islImage, islImage2, islImage3],
      tags: ["Flutter", "Python", "MediaPipe", "Computer Vision", "ML"],
      longDescription:
        "AI-powered Indian Sign Language translator that bridges communication gaps for the hard-of-hearing community. Converts ISL to text/speech and vice versa. Recognized at SIH 2024.",
      features: [
        "Real-time gesture recognition of 40+ ISL gestures",
        "Multi-modal output: Text and speech conversion",
        "Cross-platform Flutter application",
        "MediaPipe integration for precise hand tracking",
        "National recognition as SIH 2024 winning solution",
      ],
      achievements:
        "Smart India Hackathon 2024 Winner | National Media Coverage",
      impact: "40+ ISL Gestures Recognition",
      demoUrl: "#",
      githubUrl: "#",
      status: "Ongoing",
    },
    {
      id: 2,
      title: "Med.AI - Healthcare Intelligence System",
      description:
        "Prayatna 3rd Runner-up | AI-powered medical diagnostic assistant enhancing healthcare decision-making.",
      image: medaiImage,
      images: [medaiImage, medaiImage2, medaiImage3],
      tags: [
        "PyTorch",
        "Scikit-learn",
        "Computer Vision",
        "Medical AI",
        "X-Ray Analysis",
      ],
      longDescription:
        "AI-powered medical diagnostic assistant that enhances healthcare decision-making through advanced analytics. Secured 3rd Runner-up position at Prayatna Hackathon.",
      features: [
        "Intelligent symptom analysis with data-driven insights",
        "X-Ray image recognition with 15% accuracy improvement",
        "Medical expert assistance for diagnostic support",
        "Deep learning models for pattern recognition",
        "Scalable architecture for clinical deployment",
      ],
      achievements:
        "Prayatna Hackathon 3rd Runner-up | 15% Accuracy Improvement",
      impact: "+15% Accuracy Improvement",
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
    {
      id: 3,
      title: "Vrinda - Smart Farming Assistant",
      description:
        "AI + IoT farming assistant providing soil analysis and pest detection to improve crop production.",
      image: vrindaImage,
      images: [vrindaImage, vrindaImage2, vrindaImage3],
      tags: ["Flutter", "Arduino", "IoT", "OpenWeather API", "Gemini AI"],
      longDescription:
        "AI app integrated with IoT sensors to deliver real-time soil health insights and pest detection for farmers. Leading development and field pilots as Lead Developer.",
      features: [
        "Real-time soil analysis with IoT sensor integration",
        "Weather-based recommendations via OpenWeather API",
        "AI-powered insights using Gemini API",
        "20% crop yield improvement in field trials",
        "10+ farmers impacted in Indore region",
      ],
      achievements:
        "Field pilot underway | Community impact through precision farming",
      impact: "Real-time soil analysis & early pest detection",
      demoUrl: "#",
      githubUrl: "#",
      status: "Ongoing",
    },
    {
      id: 4,
      title: "Kavach - Emergency SOS System",
      description:
        "Safety Innovation | Intelligent emergency response application with advanced speech recognition.",
      image: kavachImage,
      images: [kavachImage, kavachImage2, kavachImage3],
      tags: ["Java", "Android Native", "XML", "Speech Recognition", "Voice AI"],
      longDescription:
        "Intelligent emergency response application with advanced speech recognition capabilities for critical safety situations.",
      features: [
        "Voice-activated SOS with predefined trigger words",
        "Locked-screen functionality for emergency access",
        "80% accuracy in noisy environments",
        "Non-suspicious activation for user safety",
        "Native Android implementation",
      ],
      achievements: "80% Accuracy in Noisy Environments",
      impact: "80% Accuracy in Noisy Env",
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
    {
      id: 5,
      title: "Swara",
      description:
        "Codespire 1st Runner-up | Python-based software to help singers compare their voice sessions and improve their singing.",
      image: swaraImage,
      images: [swaraImage, swaraImage2, swaraImage3],
      tags: ["Python", "NumPy", "Matplotlib", "Pandas", "MySQL"],
      longDescription:
        "A Python-based voice analysis software that helps singers track and improve their vocal performance by comparing voice sessions. Won 1st Runner-up at Codespire competition.",
      features: [
        "Voice session recording and comparison",
        "Pitch accuracy analysis and visualization",
        "Performance tracking over time",
        "Data-driven insights for vocal improvement",
        "MySQL database for session management",
      ],
      achievements: "Codespire 1st Runner-up | Voice Analysis Innovation",
      impact: "Vocal Performance Tracking",
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
    {
      id: 6,
      title: "ReWear",
      description:
        "Sustainable Shopping | E-commerce webapp helping people buy and sell used products for a sustainable future.",
      image: rewearImage,
      images: [rewearImage, rewearImage2, rewearImage3],
      tags: ["React", "Vite", "HTML", "CSS", "JavaScript"],
      longDescription:
        "An e-commerce platform designed to promote sustainability by enabling users to buy and sell pre-owned products. Built with modern web technologies for a seamless shopping experience.",
      features: [
        "User-friendly product listing and browsing",
        "Secure transaction management",
        "Product condition ratings and reviews",
        "Search and filter functionality",
        "Responsive design for all devices",
      ],
      achievements: "Promoting Circular Economy | Sustainable Commerce",
      impact: "Reducing Waste Through Reuse",
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed",
    },
  ];

  const [selectedProject, setSelectedProject] = React.useState<
    (typeof projects)[0] | null
  >(null);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-32 right-10 w-80 h-80 bg-portfolio-glow/20 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-10 w-96 h-96 bg-portfolio-accent/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground via-portfolio-accent to-portfolio-glow bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
          </motion.div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Innovative solutions that bridge technology and real-world impact
          </p>
          
          {/* Decorative separator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-portfolio-accent to-transparent rounded-full" />
            <div className="h-1 w-1 bg-portfolio-accent rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-portfolio-accent to-transparent rounded-full" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              ref={index === 3 ? firstHiddenProjectRef : null}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group portfolio-card overflow-hidden hover:shadow-xl hover:shadow-border/50 transition-all duration-500 border-2 border-border/50"
            >
              <div className="relative overflow-hidden h-48">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                  priority={index < 3}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => setSelectedProject(project)}
                          className="backdrop-blur-sm bg-portfolio-accent/20 border-portfolio-accent/30 text-foreground hover:bg-portfolio-accent/30"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hidden">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-lg">
                          {project.longDescription}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        <AutoCarousel
                          images={project.images}
                          alt={project.title}
                        />

                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Key Features
                          </h3>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                              <Badge key={idx} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="bg-portfolio-accent/10 p-4 rounded-lg mb-4">
                          <p className="font-semibold text-portfolio-accent">
                            {project.achievements}
                          </p>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mb-4">
                          <p className="text-sm">
                            <strong>Impact:</strong> {project.impact}
                          </p>
                        </div>

                        <div className="flex space-x-4">
                          <Button className="portfolio-button">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                          <Button variant="outline">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </motion.div>

                <div className="absolute top-4 right-4">
                  <Badge
                    className={`${
                      project.status === "Completed"
                        ? "bg-green-500"
                        : project.status === "Live"
                        ? "bg-blue-500"
                        : project.status === "Beta"
                        ? "bg-yellow-500"
                        : project.status === "Prototype"
                        ? "bg-purple-500"
                        : "bg-orange-500"
                    } text-white`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <motion.h3
                  className="text-xl font-bold text-foreground mb-3 group-hover:bg-gradient-to-r group-hover:from-portfolio-accent group-hover:to-portfolio-glow group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge
                        variant="outline"
                        className="text-xs hover:border-portfolio-accent hover:text-portfolio-accent hover:bg-portfolio-accent/10 transition-colors"
                      >
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                  {project.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.tags.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-2 hover:bg-portfolio-accent/10 hover:text-portfolio-accent hover:scale-110 transition-all duration-200"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button
                          size="sm"
                          variant="link"
                          className="text-portfolio-accent hover:text-portfolio-glow font-semibold"
                          onClick={() => setSelectedProject(project)}
                        >
                          Learn More →
                        </Button>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hidden">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">
                          {project.title}
                        </DialogTitle>
                        <DialogDescription className="text-lg">
                          {project.longDescription}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        <AutoCarousel
                          images={project.images}
                          alt={project.title}
                        />

                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Key Features
                          </h3>
                          <ul className="grid md:grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center">
                                <span className="w-2 h-2 bg-portfolio-accent rounded-full mr-3" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                              <Badge key={idx} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="bg-portfolio-accent/5 border border-portfolio-accent/30 p-5 rounded-xl mb-4 shadow-sm">
                          <p className="font-semibold text-portfolio-accent text-base">
                            🏆 {project.achievements}
                          </p>
                        </div>

                        <div className="bg-gradient-to-br from-portfolio-glow/10 to-portfolio-accent/10 border border-portfolio-accent/20 p-4 rounded-xl mb-6">
                          <p className="text-sm font-medium">
                            <strong className="text-portfolio-accent">Impact:</strong> {project.impact}
                          </p>
                        </div>

                        <div className="flex space-x-4">
                          <Button className="bg-gradient-to-r from-portfolio-accent to-portfolio-glow text-accent-foreground hover:shadow-lg hover:shadow-portfolio-accent/40 hover:scale-105 transition-all duration-300 border-0">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Button>
                          <Button variant="outline" className="border-2 hover:border-portfolio-accent hover:text-portfolio-accent hover:bg-portfolio-accent/10 transition-all duration-300">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {projects.length > 3 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => setShowAll(!showAll)}
              size="lg"
              className="group bg-gradient-to-r from-portfolio-accent to-portfolio-glow text-accent-foreground hover:shadow-xl hover:shadow-portfolio-accent/30 hover:scale-105 transition-all duration-300 border-0"
            >
              {showAll ? (
                <>
                  Show Less{" "}
                  <ChevronUp className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  Show All Projects{" "}
                  <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
