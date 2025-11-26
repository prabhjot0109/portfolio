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
      color: "from-blue-500 to-cyan-500",
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
      color: "from-purple-500 to-pink-500",
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
      icon: Cpu,
      title: "Database",
      color: "from-green-500 to-emerald-500",
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
      color: "from-orange-500 to-red-500",
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
      color: "from-indigo-500 to-purple-500",
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
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Git", level: 95 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 90 },
        { name: "Arduino", level: 80 },
        { name: "Figma", level: 75 },
      ],
    },
  ];

  const technologies = [
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
  ];

  return (
    <section
      id="skills"
      className="py-24 relative overflow-hidden bg-background/50"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for building innovative solutions across
            multiple domains
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className="max-w-6xl mx-auto mb-20">
          {/* Category Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {skillCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-2 border ${
                  activeCategory === index
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                    : "bg-card/30 border-white/10 text-muted-foreground hover:text-foreground hover:border-primary/50 backdrop-blur-md hover:bg-card/50 hover:shadow-md"
                }`}
              >
                <category.icon className="w-4 h-4" />
                <span>{category.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              <div className="p-8 md:p-10 rounded-2xl border border-white/10 bg-card/20 backdrop-blur-xl shadow-2xl shadow-black/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
                    {React.createElement(skillCategories[activeCategory].icon, {
                      className: "w-6 h-6",
                    })}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {skillCategories[activeCategory].title} Skills
                  </h3>
                </div>

                {/* Skills List */}
                <div className="grid gap-6">
                  {skillCategories[activeCategory].skills.map(
                    (skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="space-y-2 group/skill cursor-default"
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex justify-between items-center">
                          <motion.span 
                            className="text-foreground font-semibold text-base md:text-lg group-hover/skill:text-primary transition-colors duration-200"
                          >
                            {skill.name}
                          </motion.span>
                          <motion.span 
                            className="text-muted-foreground font-medium text-sm md:text-base group-hover/skill:text-primary transition-colors duration-200"
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="h-2.5 bg-muted/30 rounded-full overflow-hidden group-hover/skill:bg-muted/50 transition-colors duration-200">
                          <motion.div
                            className="h-full bg-primary shadow-lg group-hover/skill:shadow-primary/50"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1.2,
                              delay: index * 0.1,
                              ease: "easeOut",
                            }}
                          />
                        </div>
                      </motion.div>
                    )
                  )}
                </div>

                {/* Background Icon */}
                <div className="absolute top-6 right-6 opacity-[0.03] pointer-events-none">
                  {React.createElement(skillCategories[activeCategory].icon, {
                    className: "w-32 h-32",
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Technologies Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Technologies I Work With
          </h3>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Leveraging cutting-edge tools and frameworks to build powerful
            solutions
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="group p-4 rounded-xl border border-white/5 bg-card/20 backdrop-blur-md hover:bg-card/40 hover:border-primary/30 transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-square flex items-center justify-center mb-2">
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-lg transition-colors duration-300" />
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                    }}
                  />
                </div>
                <p className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-200 text-center truncate">
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
