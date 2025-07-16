import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Wrench, Brain, Smartphone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ParallaxContainer from './ParallaxContainer';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "C++", level: 85 },
        { name: "Dart", level: 80 },
        { name: "Java", level: 75 }
      ]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "OpenCV", level: 85 },
        { name: "Computer Vision", level: 80 }
      ]
    },
    {
      icon: Database,
      title: "Web Development",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Django", level: 80 },
        { name: "Flask", level: 85 },
        { name: "HTML/CSS", level: 95 }
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development", 
      skills: [
        { name: "Flutter", level: 90 },
        { name: "Native Android", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "SQLite", level: 80 },
        { name: "API Integration", level: 85 }
      ]
    },
    {
      icon: Cpu,
      title: "Data & Analytics",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Data Analysis", level: 80 },
        { name: "Statistics", level: 75 },
        { name: "Data Visualization", level: 80 },
        { name: "ETL Processes", level: 70 }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Arduino", level: 80 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 65 }
      ]
    }
  ];

  const techStack = [
    { 
      name: "Python", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    { 
      name: "JavaScript", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    { 
      name: "React", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    { 
      name: "Node.js", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
    },
    { 
      name: "Flutter", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
    },
    { 
      name: "TensorFlow", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
    },
    { 
      name: "Django", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg"
    },
    { 
      name: "Firebase", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
    },
    { 
      name: "Git", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    { 
      name: "VS Code", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
    },
    { 
      name: "MySQL", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    },
    { 
      name: "Docker", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    },
    { 
      name: "AWS", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
    },
    { 
      name: "C++", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
    },
    { 
      name: "Android", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg"
    },
    { 
      name: "PyTorch", 
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Enhanced Background with Parallax */}
      <ParallaxContainer speed={0.2} className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes with orbital motion */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute w-2 h-2 bg-foreground/10 rounded-full"
            style={{
              left: `${20 + (i * 12)}%`,
              top: `${30 + (i % 3) * 25}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 15 + (i * 2),
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
        
        {/* Morphing blobs */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`blob-${i}`}
            className="absolute morph-blob bg-foreground/5"
            style={{
              width: `${80 + i * 40}px`,
              height: `${80 + i * 40}px`,
              left: `${15 + i * 30}%`,
              top: `${20 + i * 20}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </ParallaxContainer>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal direction="up" delay={0.2} className="text-center mb-12 sm:mb-16 px-4">
          <motion.div
            className="text-reveal"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-reveal-inner">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 animate-wave">
                Core Competencies
              </h2>
            </div>
          </motion.div>
          <ScrollReveal direction="up" delay={0.4}>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building innovative solutions across multiple domains
            </p>
          </ScrollReveal>
        </ScrollReveal>

        {/* Skills Matrix with 3D Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 px-4">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal
              key={categoryIndex}
              direction="diagonal"
              delay={categoryIndex * 0.15}
              className="perspective-card h-full"
            >
              <motion.div
                className="card-3d bg-card border border-border rounded-xl p-6 h-full shadow-sm hover:shadow-xl transition-all duration-500 magnetic-hover animate-pulse-glow"
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  transition: { duration: 0.3 }
                }}
              >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-foreground flex items-center justify-center mr-4">
                  <category.icon className="h-6 w-6 text-background" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium text-sm">{skill.name}</span>
                      <span className="text-muted-foreground text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden relative">
                      <motion.div
                        className="h-full bg-foreground rounded-full relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="absolute right-0 top-0 h-full w-1 bg-white/50 rounded-full"
                          animate={{ 
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Tech Stack with Creative Layout */}
        <ScrollReveal direction="up" delay={0.6} className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-reveal">
            <span className="text-reveal-inner">Technologies I Work With</span>
          </h3>
          <div className="relative">
            {/* Orbital animation container */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4 max-w-6xl mx-auto px-4">
              {techStack.map((tech, index) => (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={index * 0.05}
                  className="group"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.2,
                      y: -10,
                      rotateY: 15,
                      transition: { 
                        duration: 0.3,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="perspective-card bg-card border border-border rounded-xl p-3 sm:p-4 text-center hover:shadow-xl transition-all duration-500 cursor-pointer magnetic-hover animate-elastic-scale"
                    style={{
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                <div className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                    <p className="text-xs sm:text-sm font-medium text-foreground group-hover:text-foreground transition-colors duration-200">
                      {tech.name}
                    </p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;
