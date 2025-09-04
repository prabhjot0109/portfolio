import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { projects } from '@/data/projects';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const motionProps = prefersReducedMotion 
    ? {} 
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true }
      };

  return (
    <section id="projects" className="py-20 bg-muted/30" aria-labelledby="projects-heading">
      <div className="container mx-auto px-6">
        <motion.div
          {...motionProps}
          className="text-center mb-16"
        >
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
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
              {...(prefersReducedMotion ? {} : {
                initial: { opacity: 0, y: 50 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: index * 0.1 },
                viewport: { once: true },
                whileHover: { y: -10, transition: { duration: 0.3 } }
              })}
              className="group portfolio-card overflow-hidden hover:shadow-xl hover:shadow-portfolio-accent/10 transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="w-full h-48 object-cover"
                  {...(prefersReducedMotion ? {} : {
                    whileHover: { scale: 1.1 },
                    transition: { duration: 0.6 }
                  })}
                  loading="lazy"
                  decoding="async"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-4"
                  {...(prefersReducedMotion ? {} : {
                    initial: { opacity: 0 },
                    whileHover: { opacity: 1 }
                  })}
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <motion.div
                        {...(prefersReducedMotion ? {} : {
                          initial: { y: 20, opacity: 0 },
                          whileHover: { y: 0, opacity: 1 },
                          transition: { delay: 0.1 }
                        })}
                      >
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => setSelectedProject(project)}
                          className="backdrop-blur-sm bg-white/20 border-white/30 text-white hover:bg-white/30"
                          aria-label={`View details for ${project.title}`}
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
                          loading="lazy"
                          decoding="async"
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
                          loading="lazy"
                          decoding="async"
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