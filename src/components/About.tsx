import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Target,
  Zap,
  Brain,
  Sparkles,
  ArrowRight,
  Code2,
} from "lucide-react";
import LazyImage from "@/components/LazyImage";
import { TextScramble } from "@/components/ui/text-scramble";
import { SpotlightCard } from "@/components/ui/spotlight-card";

const profileImage = new URL("@/assets/profile-photo.jpg", import.meta.url)
  .href;

const About = () => {
  const achievements = [
    {
      icon: Award,
      label: "SIH 2024 Winner",
      sublabel: "National Hackathon",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      icon: Target,
      label: "IEEE Grant Recipient",
      sublabel: "Research Funding",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    {
      icon: Zap,
      label: "6+ Hackathon Wins",
      sublabel: "Innovation & Speed",
      color: "text-violet-500",
      bg: "bg-violet-500/10",
      border: "border-violet-500/20",
    },
    {
      icon: Brain,
      label: "AI Research Published",
      sublabel: "Contribution to Science",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
      aria-label="About Prabhjot Singh Assi"
    >
      {/* Dynamic Glow Effect - Neutral (Light) / Cosmos (Dark) */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[160%] h-[700px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-200/60 via-neutral-100/30 to-transparent dark:from-indigo-500/25 dark:via-blue-900/15 dark:to-transparent pointer-events-none blur-[100px] opacity-70" />

      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neutral-200/40 dark:bg-portfolio-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neutral-200/40 dark:bg-portfolio-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <Sparkles className="w-5 h-5 text-portfolio-accent" />
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Get to know me
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Image Column - Modernized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:sticky lg:top-32"
          >
            <div className="relative group">
              {/* Animated border gradient - Subtle in light mode */}
              <div className="absolute -inset-1 bg-gradient-to-br from-portfolio-accent/20 via-transparent to-portfolio-accent/20 rounded-3xl opacity-5 dark:opacity-20 blur-sm group-hover:opacity-10 dark:group-hover:opacity-40 transition-opacity duration-500" />

              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border/50 shadow-sm dark:shadow-md">
                <LazyImage
                  src={profileImage}
                  alt="Prabhjot Singh Assi"
                  className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                  priority={false}
                  objectFit="cover"
                />

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="glass-morphism rounded-xl p-4 backdrop-blur-xl border border-white/10 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                      </div>
                      <p className="text-sm font-medium text-foreground">
                        Open to opportunities
                      </p>
                    </div>
                    <p className="text-xs dark:text-white text-opacity-100">
                      AI/ML • Full Stack • SDE
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Main heading */}
            <motion.div
              variants={itemVariants}
              className="space-y-2 sm:space-y-4"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <TextScramble className="text-foreground">
                  CSE Student
                </TextScramble>
                <span className="block text-muted-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 sm:mt-2">
                  & Aspiring SDE / AI Engineer
                </span>
              </h2>
            </motion.div>

            {/* Bio paragraphs */}
            <motion.div
              variants={itemVariants}
              className="space-y-4 sm:space-y-6"
            >
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I am a{" "}
                <span className="text-foreground font-medium">
                  Computer Science Engineering
                </span>{" "}
                student dedicated to building intelligent systems that bridge
                the gap between complex{" "}
                <span className="text-foreground font-medium">AI research</span>{" "}
                and practical{" "}
                <span className="text-foreground font-medium">
                  Software Engineering
                </span>
                . With a strong foundation in{" "}
                <span className="text-foreground font-medium">
                  Full Stack Development
                </span>{" "}
                and{" "}
                <span className="text-foreground font-medium">
                  Machine Learning
                </span>
                , I create scalable applications that are both intuitive and
                impactful.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Currently seeking{" "}
                <span className="text-foreground font-medium">SDE</span> or{" "}
                <span className="text-foreground font-medium">AI Engineer</span>{" "}
                roles where I can apply my problem-solving skills—whether it's
                optimizing inference latency, designing robust architectures, or
                crafting seamless user experiences.
              </p>
            </motion.div>

            {/* Achievements Bento Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.04, y: -4 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                  >
                  <SpotlightCard
                    className={`group p-3 sm:p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm transition-all duration-300 hover:border-border/80 hover:shadow-lg`}
                    spotlightColor="rgba(255, 255, 255, 0.05)"
                  >
                    <div className="relative flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                      <div
                        className={`p-2 sm:p-3 rounded-lg ${item.bg} ${item.color} ring-1 ring-inset ${item.border} flex-shrink-0`}
                      >
                        <item.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground text-sm sm:text-base mb-0.5 sm:mb-1 leading-tight">
                          {item.label}
                        </p>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                          {item.sublabel}
                        </p>
                      </div>
                    </div>
                  </SpotlightCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5"
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 420, damping: 22 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="#contact"
                  className="no-hover cta-button cta-button-primary !text-foreground hover:!text-foreground group"
                >
                  <span>Connect</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
                </a>
              </motion.div>
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 420, damping: 22 }}
                className="w-full sm:w-auto"
              >
                <a
                  href="#projects"
                  className="no-hover cta-button cta-button-secondary !text-foreground hover:!text-foreground group"
                >
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200 shrink-0" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
