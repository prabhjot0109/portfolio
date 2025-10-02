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
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Vue.js", level: 70 },
        { name: "JavaScript", level: 90 },
      ],
    },
    {
      id: "backend",
      icon: Database,
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 95 },
        { name: "Django", level: 80 },
        { name: "Flask", level: 85 },
        { name: "Express.js", level: 80 },
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
        { name: "MongoDB", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "SQLite", level: 80 },
        { name: "Redis", level: 70 },
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
        { name: "React Native", level: 75 },
        { name: "API Integration", level: 85 },
        { name: "Mobile UI/UX", level: 80 },
      ],
    },
    {
      id: "tools",
      icon: Wrench,
      title: "Tools",
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Docker", level: 65 },
        { name: "AWS", level: 70 },
        { name: "Arduino", level: 80 },
        { name: "Figma", level: 75 },
      ],
    },
    {
      id: "ai",
      icon: Brain,
      title: "AI/ML",
      skills: [
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "OpenCV", level: 85 },
        { name: "Computer Vision", level: 80 },
        { name: "NLP", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Core Competencies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions across
            multiple domains
          </p>
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
              <div className="grid grid-cols-2 gap-3">
                {skillCategories.map((category, index) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(index)}
                    className={`w-full p-4 rounded-lg border-2 transition-all duration-300 flex items-center gap-3 text-left ${
                      activeCategory === index
                        ? "bg-foreground text-background border-foreground"
                        : "bg-transparent text-foreground border-border hover:border-foreground/50"
                    }`}
                    whileHover={{ scale: 1.02 }}
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
                  className="portfolio-card p-8 bg-card text-foreground min-h-[500px] border border-border"
                >
                  <div className="flex items-center gap-4 mb-8">
                    {React.createElement(skillCategories[activeCategory].icon, {
                      className: "h-8 w-8 text-foreground",
                    })}
                    <h3 className="text-3xl font-bold tracking-wider uppercase text-foreground">
                      {skillCategories[activeCategory].title} SKILLS
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
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-foreground rounded-full relative"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: index * 0.1 }}
                            >
                              <motion.div
                                className="absolute right-0 top-0 h-full w-1 bg-foreground/70 rounded-full"
                                animate={{
                                  opacity: [0.5, 1, 0.5],
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

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Technologies I Work With
          </h3>
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
                name: "Scikit",
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
                className="portfolio-card p-3 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group w-full aspect-square flex flex-col justify-center items-center"
              >
                <div className="w-12 h-12 mx-auto mb-2 group-hover:scale-110 transition-transform duration-200">
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
                <p className="text-sm font-medium text-foreground group-hover:text-foreground transition-colors duration-200">
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
