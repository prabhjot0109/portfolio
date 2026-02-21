import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Layers, Database, Brain, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const Skills = () => {
  const [activeCategory, setActiveCategory] = React.useState("languages");

  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: Code,
      color: "from-blue-500 to-cyan-500", // Kept for hover glow only
      shadow: "shadow-blue-500/20",
      accent: "blue",
      skills: [
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          level: 95,
        },
        {
          name: "C++",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
          level: 80,
        },
        {
          name: "HTML",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
          level: 95,
        },
        {
          name: "CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
          level: 90,
        },
        // {
        //   name: "JavaScript",
        //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
        //   level: 95,
        // },
        // {
        //   name: "TypeScript",
        //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
        //   level: 90,
        // },
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks & Libraries",
      icon: Layers,
      color: "from-indigo-500 to-purple-500",
      shadow: "shadow-indigo-500/20",
      accent: "indigo",
      skills: [
        // {
        //   name: "React",
        //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
        //   level: 90,
        // },
        // {
        //   name: "Django",
        //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg",
        //   level: 85,
        // },
        {
          name: "Flask",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
          level: 85,
        },
        {
          name: "FastAPI",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
          level: 85,
        },
        {
          name: "Streamlit",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/streamlit/streamlit-original.svg",
          level: 85,
        },

        {
          name: "NumPy",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
          level: 90,
        },
        {
          name: "Pandas",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
          level: 85,
        },
        {
          name: "Matplotlib",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg",
          level: 80,
        },
      ],
    },
    {
      id: "database",
      title: "Databases",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-green-500/20",
      accent: "green",
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
        {
          name: "ChromaDB",
          logo: "https://avatars.githubusercontent.com/u/109211307?s=200&v=4",
          level: 80,
        },
      ],
    },
    {
      id: "ai",
      title: "Gen AI",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      shadow: "shadow-purple-500/20",
      accent: "purple",
      skills: [
        // {
        //   name: "PyTorch",
        //   logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg",
        //   level: 80,
        // },
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
        {
          name: "LangChain",
          logo: "https://avatars.githubusercontent.com/u/126733545?s=200&v=4",
          level: 85,
        },
        {
          name: "MediaPipe",
          logo: "https://developers.google.com/static/mediapipe/images/mediapipe_icon.svg",
          level: 80,
        },
      ],
    },
    {
      id: "tools",
      title: "Tools & Platforms",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      shadow: "shadow-orange-500/20",
      accent: "orange",
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
          name: "Arduino",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg",
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
    { id: "frameworks", label: "Frameworks" },
    { id: "database", label: "Databases" },
    { id: "ai", label: "Gen AI" },
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
          className="mb-10 md:mb-16 px-4"
        >
          <div className="flex justify-center">
            <div className="flex items-center justify-start md:justify-center gap-2 p-1.5 rounded-full bg-muted/50 backdrop-blur-md border border-border/50 shadow-inner overflow-x-auto scrollbar-hidden max-w-full">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 sm:px-6 py-2 md:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${activeCategory === category.id
                      ? "bg-background text-foreground shadow-md ring-1 ring-border/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
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
                  className={`group relative p-4 sm:p-6 md:p-10 rounded-2xl md:rounded-3xl border border-border/50 dark:border-white/10 bg-card/80 dark:bg-card/20 backdrop-blur-xl transition-all duration-500 hover:border-border dark:hover:border-white/20 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] ${
                    // Only apply colored shadow on hover
                    `hover:${activeSkillCategory.shadow}`
                    }`}
                >
                  {/* Gradient Glow - Only on Hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br ${activeSkillCategory.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Header */}
                  <div className="relative z-10 flex items-center gap-4 md:gap-6 mb-6 md:mb-10 pb-4 md:pb-8 border-b border-border/50">
                    <div
                      className={cn(
                        "w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300",
                        activeSkillCategory.accent === "blue" &&
                        "bg-blue-500/10",
                        activeSkillCategory.accent === "indigo" &&
                        "bg-indigo-500/10",
                        activeSkillCategory.accent === "green" &&
                        "bg-green-500/10",
                        activeSkillCategory.accent === "purple" &&
                        "bg-purple-500/10",
                        activeSkillCategory.accent === "orange" &&
                        "bg-orange-500/10"
                      )}
                    >
                      <activeSkillCategory.icon
                        className={cn(
                          "w-6 h-6 md:w-8 md:h-8",
                          activeSkillCategory.accent === "blue" &&
                          "text-blue-500",
                          activeSkillCategory.accent === "indigo" &&
                          "text-indigo-500",
                          activeSkillCategory.accent === "green" &&
                          "text-green-500",
                          activeSkillCategory.accent === "purple" &&
                          "text-purple-500",
                          activeSkillCategory.accent === "orange" &&
                          "text-orange-500"
                        )}
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 md:mb-2 truncate">
                        {activeSkillCategory.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {activeSkillCategory.skills.length} skills mastered
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-5 md:gap-y-8">
                    {activeSkillCategory.skills.map((skill, skillIndex) => (
                      <div
                        key={skill.name}
                        className="space-y-2 md:space-y-3 group/skill"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-muted/80 dark:bg-white/5 p-1.5 md:p-2 flex items-center justify-center border border-border/60 dark:border-white/10 group-hover/skill:border-border dark:group-hover/skill:border-foreground/20 group-hover/skill:scale-110 group-hover/skill:shadow-md transition-all duration-200 flex-shrink-0">
                              <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            <span className="text-foreground font-semibold text-base md:text-lg group-hover/skill:text-foreground/80 transition-colors duration-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-muted-foreground font-medium text-sm md:text-base">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 md:h-2.5 bg-muted/30 rounded-full overflow-hidden group-hover/skill:bg-muted/50 transition-colors duration-200">
                          <motion.div
                            className="h-full bg-foreground group-hover/skill:opacity-80 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{
                              duration: 1,
                              delay: 0.4 + skillIndex * 0.1,
                              ease: "easeOut",
                            }}
                            style={{
                              boxShadow: `0 0 8px rgba(150,150,150,0.35)`,
                            }}
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
