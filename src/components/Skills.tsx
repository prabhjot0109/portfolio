import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Cpu, Wrench, Brain, Smartphone } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = React.useState(0);

  const skillCategories = [
    {
      id: "frontend",
      icon: Code,
      title: "Frontend",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 90 },
        { name: "Tailwind CSS", level: 80 },
        { name: "JavaScript", level: 70 },
        { name: "TypeScript", level: 60 },
      ],
    },
    {
      id: "backend",
      icon: Database,
      title: "Backend",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 90 },
        { name: "Django", level: 80 },
        { name: "Flask", level: 85 },
        { name: "REST APIs", level: 90 },
      ],
    },
    {
      id: "database",
      icon: Database,
      title: "Database",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 85 },
        { name: "Supabase", level: 80 },
        { name: "SQLite", level: 80 },
      ],
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Mobile",
      skills: [
        { name: "Flutter", level: 90 },
        { name: "Dart", level: 80 },
        { name: "Native Android", level: 80 },
        { name: "API Integration", level: 85 },
        { name: "Mobile UI/UX", level: 80 },
      ],
    },
    {
      id: "ai",
      icon: Brain,
      title: "AI/ML",
      skills: [
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "OpenCV", level: 85 },
        { name: "Mediapipe", level: 80 },
      ],
    },
    {
      id: "tools",
      icon: Wrench,
      title: "Tools",
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 90 },
        { name: "Arduino", level: 80 },
        { name: "Figma", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-portfolio-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-portfolio-glow/10 rounded-full blur-3xl" />
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
                Core Competencies
              </span>
            </h2>
          </motion.div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for building innovative solutions across
            multiple domains
          </p>
          
          {/* Decorative separator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-portfolio-accent to-transparent rounded-full" />
            <div className="h-1 w-1 bg-portfolio-accent rounded-full" />
            <div className="h-1 w-12 bg-gradient-to-r from-transparent via-portfolio-accent to-transparent rounded-full" />
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:w-80 flex-shrink-0"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center lg:text-left">
                CATEGORIES:
              </h3>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
                {skillCategories.map((category, index) => (
                   <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 flex items-center gap-3 text-left ${
                      activeCategory === index
                        ? "bg-gradient-to-r from-portfolio-accent to-portfolio-glow text-white border-portfolio-accent shadow-lg shadow-portfolio-accent/25"
                        : "bg-card/50 backdrop-blur-sm text-foreground border-border hover:border-portfolio-accent/50 hover:shadow-md"
                    }`}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <category.icon className="h-5 w-5" />
                    <span className="font-bold text-sm tracking-wider uppercase">
                      {category.title}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Skills Display */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="portfolio-card p-8 bg-card/80 backdrop-blur-sm text-foreground min-h-[500px] border-2 border-border/50 shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-10 pb-6 border-b-2 border-gradient-to-r from-transparent via-portfolio-accent/30 to-transparent">
                    {React.createElement(skillCategories[activeCategory].icon, {
                      className: "h-10 w-10 text-portfolio-accent",
                    })}
                    <h3 className="text-3xl font-bold tracking-wider uppercase">
                      <span className="bg-gradient-to-r from-foreground to-portfolio-accent bg-clip-text text-transparent">
                        {skillCategories[activeCategory].title} SKILLS
                      </span>
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {skillCategories[activeCategory].skills.map(
                      (skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="space-y-2"
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-foreground font-medium text-lg">
                              {skill.name}
                            </span>
                            <span className="text-muted-foreground font-bold text-lg">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="h-3 bg-muted/50 rounded-full overflow-hidden border border-border/30">
                            <motion.div
                              className="h-full bg-gradient-to-r from-portfolio-accent via-portfolio-glow to-portfolio-accent rounded-full relative shadow-lg shadow-portfolio-accent/30"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ 
                                duration: 1.5, 
                                delay: index * 0.1,
                                ease: "easeOut"
                              }}
                            >
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                                animate={{
                                  x: ['-100%', '200%'],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                            </motion.div>
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>

                  <div className="absolute top-6 right-6 opacity-5">
                    {React.createElement(skillCategories[activeCategory].icon, {
                      className: "h-20 w-20 text-muted-foreground/30",
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Separator with decorative line */}
        <div className="my-20 flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent max-w-md" />
          <div className="px-6">
            <div className="w-2 h-2 bg-portfolio-accent rounded-full animate-pulse" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent max-w-md" />
        </div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3 
            className="text-3xl font-bold mb-4"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-foreground via-portfolio-accent to-portfolio-glow bg-clip-text text-transparent">
              Technologies I Work With
            </span>
          </motion.h3>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            Leveraging cutting-edge tools and frameworks to build powerful solutions
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 max-w-6xl mx-auto place-items-center">
            {[
              {
                name: "Python",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
              },
              {
                name: "C++",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
              },
              {
                name: "MySQL",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
              },
              {
                name: "PostgreSQL",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
              },
              {
                name: "SQLite",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
              },
              {
                name: "Firebase",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
              },
              {
                name: "Supabase",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
              },
              {
                name: "TensorFlow",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
              },
              {
                name: "PyTorch",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
              },
              {
                name: "Scikit-learn",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
              },
              {
                name: "OpenCV",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
              },
              {
                name: "Django",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
              },
              {
                name: "Flask",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
              },
              {
                name: "Git",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
              },
              {
                name: "Anaconda",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg",
              },
              {
                name: "VS Code",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
              },
              {
                name: "Android Studio",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
              },
              {
                name: "Figma",
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
              },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.15,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="portfolio-card p-4 text-center hover:shadow-xl hover:shadow-portfolio-accent/20 transition-all duration-300 cursor-pointer group w-full aspect-square flex flex-col justify-center items-center border-2 border-border/50 hover:border-portfolio-accent/50 bg-card/80 backdrop-blur-sm"
              >
                <div className="w-14 h-14 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200 relative">
                  <div className="absolute inset-0 bg-portfolio-accent/0 group-hover:bg-portfolio-accent/10 rounded-lg transition-colors duration-300" />
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
                <p className="text-sm font-semibold text-foreground group-hover:text-portfolio-accent transition-colors duration-200">
                  {tech.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
