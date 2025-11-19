import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Briefcase,
  GraduationCap,
  ChevronRight,
} from "lucide-react";

const Experience = () => {
  const [filter, setFilter] = useState("all");

  const timelineEvents = [
    {
      id: 7,
      type: "experience",
      category: "internship",
      icon: Briefcase,
      title: "AI/ML Intern",
      organization: "Edunet Foundation",
      location: "Remote",
      date: "Nov 2024 - Dec 2024",
      description:
        "Completed intensive virtual internship focusing on practical applications of AI and ML in real-world scenarios. Worked on AI Transformative Learning project using CNN and MobileNetV2 architecture.",
      skills: ["Python", "TensorFlow", "CNN", "Streamlit", "MobileNetV2"],
      highlights: [
        "Deployed production-ready ML model on Streamlit Cloud",
        "Implemented CNN with MobileNetV2 for image classification",
        "Transfer learning on ImageNet dataset",
        "Real-time inference and model optimization",
        "Received certification of excellence",
      ],
      status: "completed",
      color: "blue",
    },
    {
      id: 1,
      type: "education",
      category: "degree",
      icon: GraduationCap,
      title: "B.Tech in Computer Science & Engineering",
      organization: "Acropolis Institute of Technology and Research",
      location: "Indore, India",
      date: "2022 - 2026",
      description:
        "Pursuing B.Tech. in Computer Science & Engineering with specialization in Artificial Intelligence and Machine Learning. Currently in 4th year with focus on advanced AI algorithms, machine learning models, and real-world applications.",
      skills: [
        "Machine Learning",
        "Data Structures",
        "Algorithms",
        "Computer Vision",
        "NLP",
      ],
      highlights: [
        "Current CGPA: 7.22/10",
        "Core subjects: Machine Learning, Computer Vision, Natural Language Processing",
        "Active leadership role in IEEE SIGHT student chapter",
        "Research focus: AI applications in Healthcare & Accessibility",
        "Published research paper on CSLR based sign language recognition",
      ],
      status: "current",
      color: "purple",
    },
    {
      id: 8,
      type: "education",
      category: "school",
      icon: GraduationCap,
      title: "Higher Secondary Education (PCM + CS)",
      organization: "Chameli Devi Public School",
      location: "Indore, India",
      date: "2021 - 2022",
      description:
        "Completed higher secondary education with PCM (Physics, Chemistry, Mathematics) and Computer Science stream. Developed strong foundation in analytical thinking, problem-solving, and programming fundamentals.",
      skills: ["Physics", "Mathematics", "Python", "Chemistry"],
      highlights: [
        "Percentage: 73.0%",
        "Science stream with Computer Science specialization",
        "Active participation in science exhibitions",
        "Foundation in Python programming",
      ],
      status: "completed",
      color: "emerald",
    },
  ];

  const filteredEvents = timelineEvents.filter(
    (event) => filter === "all" || event.type === filter
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="experience"
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl -z-10" />
      <div className="absolute top-0 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 md:mb-6">
            Experience & Education
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 px-2">
            My academic journey and professional milestones that have shaped my
            career path.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:inline-flex p-1 rounded-xl bg-muted/50 backdrop-blur-sm border border-border/50">
            {["all", "experience", "education"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-sm font-medium transition-all duration-300 capitalize ${
                  filter === tab
                    ? "bg-background text-foreground shadow-lg scale-105"
                    : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto space-y-6 md:space-y-8"
        >
          <AnimatePresence mode="wait">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    event.color === "blue"
                      ? "from-blue-500/10 to-cyan-500/10"
                      : event.color === "purple"
                      ? "from-purple-500/10 to-pink-500/10"
                      : "from-emerald-500/10 to-teal-500/10"
                  } rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-5 md:p-8 hover:border-border transition-colors duration-300">
                  <div className="flex flex-col md:flex-row gap-5 md:gap-8">
                    {/* Icon Column - Row on mobile, Col on desktop */}
                    <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg ${
                            event.color === "blue"
                              ? "bg-blue-500/10 text-blue-500"
                              : event.color === "purple"
                              ? "bg-purple-500/10 text-purple-500"
                              : "bg-emerald-500/10 text-emerald-500"
                          }`}
                        >
                          <event.icon className="w-6 h-6 md:w-8 md:h-8" />
                        </div>
                        <div className="hidden md:flex h-full w-px bg-border/50 mx-auto mt-4" />
                      </div>

                      {/* Mobile Title Layout */}
                      <div className="md:hidden flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-xl font-bold text-foreground">
                            {event.title}
                          </h3>
                          {event.status === "current" && (
                            <span className="px-2 py-0.5 text-[10px] font-medium bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20 animate-pulse whitespace-nowrap">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="text-sm font-medium text-foreground/80 mt-1">
                          {event.organization}
                        </p>
                      </div>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1">
                      {/* Desktop Title Layout */}
                      <div className="hidden md:flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-foreground">
                              {event.title}
                            </h3>
                            {event.status === "current" && (
                              <span className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-500 rounded-full border border-blue-500/20 animate-pulse">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-lg font-medium text-foreground/80">
                            {event.organization}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-lg">
                            <Calendar className="w-4 h-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {event.location}
                          </div>
                        </div>
                      </div>

                      {/* Mobile Date/Location */}
                      <div className="md:hidden flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                        <div className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-md">
                          <Calendar className="w-3.5 h-3.5" />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1.5 bg-muted/50 px-2.5 py-1 rounded-md">
                          <MapPin className="w-3.5 h-3.5" />
                          {event.location}
                        </div>
                      </div>

                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-5 md:mb-6">
                        {event.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-2 mb-5 md:mb-6">
                        {event.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-[10px] md:text-xs font-medium bg-background/50 border border-border/50 rounded-full text-foreground/70 hover:text-foreground hover:border-foreground/30 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="bg-background/30 rounded-xl p-4 md:p-5 border border-border/30">
                        <h4 className="text-xs md:text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                          <ChevronRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-portfolio-accent" />
                          Key Highlights
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {event.highlights.map((highlight, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground"
                            >
                              <span
                                className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                                  event.color === "blue"
                                    ? "bg-blue-500"
                                    : event.color === "purple"
                                    ? "bg-purple-500"
                                    : "bg-emerald-500"
                                }`}
                              />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
