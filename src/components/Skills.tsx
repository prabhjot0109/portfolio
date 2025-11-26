import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Database, Brain, Wrench } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = React.useState("languages");

  const skillCategories = [
    {
      id: "languages",
      title: "Languages & Frameworks",
      icon: Code,
      color: "from-blue-500 to-cyan-500", // Kept for hover glow only
      shadow: "shadow-blue-500/20",
      skills: [
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          level: 95,
        },
        {
          name: "C++",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
          level: 90,
        },
        {
          name: "Django",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
          level: 85,
        },
        {
          name: "Flask",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
          level: 85,
        },
      ],
    },
    {
      id: "database",
      title: "Databases",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-green-500/20",
      skills: [
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
          level: 90,
        },
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
          level: 85,
        },
        {
          name: "SQLite",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
          level: 80,
        },
        {
          name: "Firebase",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
          level: 85,
        },
        {
          name: "Supabase",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
          level: 80,
        },
      ],
    },
    {
      id: "ai",
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-500/20",
      skills: [
        {
          name: "TensorFlow",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
          level: 85,
        },
        {
          name: "PyTorch",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
          level: 90,
        },
        {
          name: "Scikit-learn",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg",
          level: 90,
        },
        {
          name: "OpenCV",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg",
          level: 85,
        },
      ],
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      shadow: "shadow-orange-500/20",
      skills: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
          level: 95,
        },
        {
          name: "GitHub",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
          level: 95,
        },
        {
          name: "Anaconda",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg",
          level: 85,
        },
        {
          name: "VS Code",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
          level: 95,
        },
        {
          name: "Android Studio",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
          level: 80,
        },
        {
          name: "Figma",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
          level: 75,
        },
      ],
    },
  ];

  const filterCategories = [
    { id: "languages", label: "Languages" },
    { id: "database", label: "Databases" },
    { id: "ai", label: "AI/ML" },
    { id: "tools", label: "Tools" },
  ];

  const activeSkillCategory = skillCategories.find(
    (c) => c.id === activeCategory
  );

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
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit for building innovative solutions across
            multiple domains
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mb-16"
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:inline-flex p-1 rounded-xl bg-muted/50 backdrop-blur-sm border border-border/50">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? "bg-background text-foreground shadow-lg scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Skills Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeSkillCategory && (
              <motion.div
                key={activeSkillCategory.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                layout
              >
                <div
                  className={`group relative p-6 md:p-10 rounded-3xl border border-white/10 bg-card/20 backdrop-blur-xl transition-all duration-500 hover:border-white/20 shadow-xl hover:shadow-2xl ${
                    // Only apply colored shadow on hover
                    `hover:${activeSkillCategory.shadow}`
                  }`}
                >
                  {/* Gradient Glow - Only on Hover */}
                  <div
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${activeSkillCategory.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Header */}
                  <div className="relative z-10 flex items-center gap-6 mb-10 pb-8 border-b border-border/50">
                    <div className="w-16 h-16 rounded-2xl bg-foreground text-background flex items-center justify-center shadow-lg">
                      <activeSkillCategory.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        {activeSkillCategory.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {activeSkillCategory.skills.length} skills mastered
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="relative z-10 grid md:grid-cols-2 gap-x-12 gap-y-8">
                    {activeSkillCategory.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-3 group/skill">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-white/5 p-2 flex items-center justify-center border border-white/10 group-hover/skill:border-foreground/20 transition-colors">
                              <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="text-foreground font-semibold text-lg group-hover/skill:text-foreground/80 transition-colors duration-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-muted-foreground font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2.5 bg-muted/30 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-foreground"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: 0.2 + skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
