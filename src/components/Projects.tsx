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
      title: "Indian Sign Language Translator",
      description: "AI-powered solution for converting text to sign language and vice versa, making communication more accessible.",
      image: islImage,
      tags: ["Python", "TensorFlow", "Computer Vision", "NLP", "Flask"],
      longDescription: "Developed a comprehensive solution with separate Text-to-Sign and Sign-to-Text pages. Utilizes deep learning models for accurate gesture recognition and translation. Won Smart India Hackathon 2024 for its innovative approach to accessibility.",
      features: [
        "Real-time gesture recognition",
        "Text-to-sign animation generation",
        "Multi-language support",
        "Mobile-responsive interface"
      ],
      achievements: "🏆 Smart India Hackathon 2024 Winner",
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed"
    },
    {
      id: 2,
      title: "Harvesting Hope",
      description: "Smart agriculture app analyzing soil conditions and providing actionable insights for farmers.",
      image: harvestImage,
      tags: ["Flutter", "IoT", "Machine Learning", "Firebase", "Dart"],
      longDescription: "A comprehensive soil analysis application that helps farmers make data-driven decisions. Integrates with IoT sensors to collect real-time soil data and provides personalized recommendations.",
      features: [
        "Real-time soil monitoring",
        "Crop recommendation system",
        "Weather integration",
        "Farmer community platform"
      ],
      achievements: "🌱 Impact: 500+ farmers reached",
      demoUrl: "#",
      githubUrl: "#",
      status: "In Development"
    },
    {
      id: 3,
      title: "Solar Tracker Control System",
      description: "PID-controlled solar tracking system for optimizing energy capture efficiency.",
      image: solarImage,
      tags: ["MATLAB", "Simulink", "Control Systems", "IoT", "C++"],
      longDescription: "Designed and simulated a sophisticated solar tracking system using PID control algorithms. The system automatically adjusts solar panel orientation to maximize energy capture throughout the day.",
      features: [
        "Dual-axis solar tracking",
        "PID controller optimization",
        "Weather-adaptive positioning",
        "Energy efficiency monitoring"
      ],
      achievements: "⚡ 35% efficiency improvement",
      demoUrl: "#",
      githubUrl: "#",
      status: "Prototype"
    },
    {
      id: 4,
      title: "PARAS - Urban Transport Solution",
      description: "Smart transportation app optimizing urban mobility and reducing congestion.",
      image: parasImage,
      tags: ["React", "Node.js", "MongoDB", "Google Maps API", "Socket.io"],
      longDescription: "A comprehensive urban transport optimization solution that provides real-time route planning, traffic management, and public transport integration. Runner-up at Hackwave 2024.",
      features: [
        "Real-time route optimization",
        "Multi-modal transport integration",
        "Traffic prediction algorithms",
        "Carbon footprint tracking"
      ],
      achievements: "🥈 Hackwave 2024 Runner-up",
      demoUrl: "#",
      githubUrl: "#",
      status: "Completed"
    },
    {
      id: 5,
      title: "Samvidhan Saga",
      description: "Interactive educational game teaching Indian constitutional principles and laws.",
      image: islImage,
      tags: ["Unity", "C#", "Game Development", "Educational Tech"],
      longDescription: "An engaging game-based learning platform that makes understanding the Indian Constitution fun and interactive. Features quiz modes, story-driven scenarios, and progress tracking.",
      features: [
        "Interactive constitution lessons",
        "Gamified learning experience",
        "Progress tracking",
        "Multiplayer quiz modes"
      ],
      achievements: "🎓 10k+ students engaged",
      demoUrl: "#",
      githubUrl: "#",
      status: "Live"
    },
    {
      id: 6,
      title: "Sahayak - Career Guidance",
      description: "AI-powered career guidance platform providing personalized recommendations and resources.",
      image: harvestImage,
      tags: ["Python", "Django", "Machine Learning", "React", "PostgreSQL"],
      longDescription: "A comprehensive career guidance platform that uses AI to analyze user skills, interests, and market trends to provide personalized career recommendations and learning paths.",
      features: [
        "Personality assessment",
        "Skill gap analysis",
        "Industry trend insights",
        "Personalized learning paths"
      ],
      achievements: "💼 1000+ career paths mapped",
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
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
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
                        
                        <div className="bg-portfolio-accent/10 p-4 rounded-lg">
                          <p className="font-semibold text-portfolio-accent">{project.achievements}</p>
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