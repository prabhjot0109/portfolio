import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

import islImage from '@/assets/project-isl.jpg';
import harvestImage from '@/assets/project-harvest.jpg';
import solarImage from '@/assets/project-solar.jpg';
import parasImage from '@/assets/project-paras.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Signify - AI Sign Language Translator",
      description: "SIH 2024 Winner | Revolutionary AI-driven Indian Sign Language translation system bridging communication gaps.",
      image: islImage,
      tags: ["Flutter", "Python", "MediaPipe", "Computer Vision", "ML"],
      longDescription: "Revolutionary AI-driven Indian Sign Language translation system that bridges communication gaps for the hearing-impaired community. Won Smart India Hackathon 2024 for Problem Statement 1716.",
      features: [
        "Real-time gesture recognition of 40+ ISL gestures",
        "Multi-modal output: Text and speech conversion", 
        "Cross-platform Flutter application",
        "MediaPipe integration for precise hand tracking",
        "National recognition as SIH 2024 winning solution"
      ],
      achievements: "Smart India Hackathon 2024 Winner | National Media Coverage",
      impact: "40+ ISL Gestures Recognition",
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Med.AI - Healthcare Intelligence System",
      description: "Prayatna 3rd Runner-up | AI-powered medical diagnostic assistant enhancing healthcare decision-making.",
      image: harvestImage,
      tags: ["PyTorch", "Scikit-learn", "Computer Vision", "Medical AI", "X-Ray Analysis"],
      longDescription: "AI-powered medical diagnostic assistant that enhances healthcare decision-making through advanced analytics. Secured 3rd Runner-up position at Prayatna Hackathon.",
      features: [
        "Intelligent symptom analysis with data-driven insights",
        "X-Ray image recognition with 15% accuracy improvement",
        "Medical expert assistance for diagnostic support",
        "Deep learning models for pattern recognition",
        "Scalable architecture for clinical deployment"
      ],
      achievements: "Prayatna Hackathon 3rd Runner-up | 15% Accuracy Improvement",
      impact: "+15% Accuracy Improvement",
      demoUrl: "#",
      githubUrl: "#",
      status: "Live"
    },
    {
      id: 3,
      title: "Krishi - Smart Agriculture Platform",
      description: "$4000 IEEE Tech4Good Grant | IoT-enabled agricultural intelligence system empowering farmers.",
      image: harvestImage,
      tags: ["Flutter", "Arduino", "IoT", "OpenWeather API", "Gemini AI"],
      longDescription: "IoT-enabled agricultural intelligence system empowering farmers with data-driven crop management. Awarded $4000 IEEE Tech4Good Grant for impactful technology.",
      features: [
        "Real-time soil analysis with IoT sensor integration",
        "Weather-based recommendations via OpenWeather API", 
        "AI-powered insights using Gemini API",
        "20% crop yield improvement in field trials",
        "10+ farmers impacted in Indore region"
      ],
      achievements: "$4000 IEEE Tech4Good Grant Recipient",
      impact: "10+ Farmers Impacted | 20% Yield Improvement",
      demoUrl: "#",
      githubUrl: "#",
      status: "Live"
    },
    {
      id: 4,
      title: "Kavach - Emergency SOS System",
      description: "Safety Innovation | Intelligent emergency response application with advanced speech recognition.",
      image: parasImage,
      tags: ["Java", "Android Native", "XML", "Speech Recognition", "Voice AI"],
      longDescription: "Intelligent emergency response application with advanced speech recognition capabilities for critical safety situations.",
      features: [
        "Voice-activated SOS with predefined trigger words",
        "Locked-screen functionality for emergency access",
        "80% accuracy in noisy environments", 
        "Non-suspicious activation for user safety",
        "Native Android implementation"
      ],
      achievements: "80% Accuracy in Noisy Environments",
      impact: "80% Accuracy in Noisy Env",
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "PARAS - Urban Transport Solution",
      description: "Hackwave Runner-up | Smart transportation app optimizing urban mobility and reducing congestion.",
      image: parasImage,
      tags: ["React", "Node.js", "MongoDB", "Google Maps API", "ML Model"],
      longDescription: "A comprehensive urban transport optimization solution that provides real-time route planning, traffic management, and public transport integration. Runner-up at Hackwave 2024.",
      features: [
        "Real-time route optimization algorithms",
        "Multi-modal transport integration",
        "Traffic prediction using machine learning",
        "Carbon footprint tracking",
        "48-hour intensive development"
      ],
      achievements: "Hackwave 2024 Runner-up | Prize: ₹50,000",
      impact: "Traffic Congestion Reduction",
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed"
    },
    {
      id: 6,
      title: "Solar Tracker Control System",
      description: "Engineering Innovation | PID-controlled solar tracking system for optimizing energy capture efficiency.",
      image: solarImage,
      tags: ["MATLAB", "Simulink", "Control Systems", "IoT", "C++"],
      longDescription: "Designed and simulated a sophisticated solar tracking system using PID control algorithms. The system automatically adjusts solar panel orientation to maximize energy capture throughout the day.",
      features: [
        "Dual-axis solar tracking mechanism",
        "PID controller optimization algorithms",
        "Weather-adaptive positioning system",
        "Energy efficiency monitoring dashboard",
        "MATLAB/Simulink simulation environment"
      ],
      achievements: "35% Energy Efficiency Improvement",
      impact: "35% Efficiency Improvement",
      demoUrl: "#",
      githubUrl: "#",
      status: "Prototype"
    },
    {
      id: 7,
      title: "Samvidhan Saga - Constitutional Game",
      description: "Educational Tech | Interactive game teaching Indian constitutional principles through gamification.",
      image: islImage,
      tags: ["Unity", "C#", "Game Development", "Educational Tech", "UI/UX"],
      longDescription: "An engaging game-based learning platform that makes understanding the Indian Constitution fun and interactive. Features quiz modes, story-driven scenarios, and progress tracking.",
      features: [
        "Interactive constitution lessons with animations",
        "Gamified learning experience with rewards",
        "Progress tracking and achievement system",
        "Multiplayer quiz modes for competition",
        "Story-driven constitutional scenarios"
      ],
      achievements: "10k+ Students Engaged",
      impact: "10k+ Students Engaged",
      demoUrl: "#",
      githubUrl: "#",
      status: "Live"
    },
    {
      id: 8,
      title: "Sahayak - AI Career Guidance",
      description: "Career Tech | AI-powered career guidance platform with personalized recommendations and learning paths.",
      image: harvestImage,
      tags: ["Python", "Django", "Machine Learning", "React", "PostgreSQL"],
      longDescription: "A comprehensive career guidance platform that uses AI to analyze user skills, interests, and market trends to provide personalized career recommendations and learning paths.",
      features: [
        "AI-powered personality assessment",
        "Comprehensive skill gap analysis",
        "Real-time industry trend insights",
        "Personalized learning path recommendations",
        "Career trajectory visualization"
      ],
      achievements: "1000+ Career Paths Mapped",
      impact: "1000+ Career Paths Mapped",
      demoUrl: "#",
      githubUrl: "#",
      status: "Beta"
    }
  ];

  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions that bridge technology and real-world impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group portfolio-card overflow-hidden hover:shadow-xl hover:shadow-portfolio-accent/10 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
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
                          className="backdrop-blur-sm bg-white/20 border-white/30 text-white hover:bg-white/30"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </motion.div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hidden">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
                        <DialogDescription className="text-lg">
                          {project.longDescription}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-6">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-3">Key Features</h3>
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
                          <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, idx) => (
                              <Badge key={idx} variant="secondary">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-portfolio-accent/10 p-4 rounded-lg mb-4">
                          <p className="font-semibold text-portfolio-accent">{project.achievements}</p>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg mb-4">
                          <p className="text-sm"><strong>Impact:</strong> {project.impact}</p>
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
                      project.status === 'Completed' ? 'bg-green-500' :
                      project.status === 'Live' ? 'bg-blue-500' :
                      project.status === 'Beta' ? 'bg-yellow-500' :
                      project.status === 'Prototype' ? 'bg-purple-500' :
                      'bg-orange-500'
                    } text-white`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>

              <div className="p-6">
                <motion.h3 
                  className="text-xl font-bold text-foreground mb-3 group-hover:text-portfolio-accent transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge variant="outline" className="text-xs hover:border-portfolio-accent hover:text-portfolio-accent transition-colors">
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
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button size="sm" variant="ghost" className="p-2 hover:bg-portfolio-accent/10 hover:text-portfolio-accent">
                        <Github className="h-4 w-4" />
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <Button size="sm" variant="ghost" className="p-2 hover:bg-portfolio-accent/10 hover:text-portfolio-accent">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                        <Button 
                          size="sm" 
                          variant="link" 
                          className="text-portfolio-accent hover:text-portfolio-accent/80"
                          onClick={() => setSelectedProject(project)}
                        >
                          Learn More →
                        </Button>
                      </motion.div>
                    </DialogTrigger>
                  </Dialog>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;