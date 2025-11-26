import React from "react";
import { motion } from "framer-motion";
import { Award, Target, Zap, Brain, Sparkles, ArrowRight } from "lucide-react";
import LazyImage from "@/components/LazyImage";

const profileImage = new URL("@/assets/profile-photo.jpg", import.meta.url)
  .href;

const About = () => {
  const achievements = [
    {
      icon: Award,
      label: "SIH 2024",
      sublabel: "Winner",
      color: "from-emerald-500 to-teal-500",
      glow: "group-hover:shadow-emerald-500/25",
    },
    {
      icon: Target,
      label: "IEEE Grant",
      sublabel: "Recipient",
      color: "from-blue-500 to-cyan-500",
      glow: "group-hover:shadow-blue-500/25",
    },
    {
      icon: Zap,
      label: "6+ Hackathons",
      sublabel: "Won",
      color: "from-violet-500 to-purple-500",
      glow: "group-hover:shadow-violet-500/25",
    },
    {
      icon: Brain,
      label: "AI Research",
      sublabel: "Published",
      color: "from-amber-500 to-orange-500",
      glow: "group-hover:shadow-amber-500/25",
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
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="py-32 relative overflow-hidden"
      aria-label="About Prabhjot Singh Assi"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-portfolio-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-portfolio-accent/5 rounded-full blur-3xl" />
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
            <div className="relative">
              {/* Animated border gradient */}
              <div className="absolute -inset-1 bg-gradient-to-br from-portfolio-accent via-transparent to-portfolio-accent rounded-3xl opacity-20 blur-sm" />
              
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-card border border-border/50">
                <LazyImage
                  src={profileImage}
                  alt="Prabhjot Singh Assi"
                  className="w-full h-full object-cover"
                  priority={false}
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="glass-morphism rounded-xl p-4 backdrop-blur-xl">
                    <p className="text-sm font-medium text-foreground">
                      Open to opportunities
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      AI/ML • Full Stack • Research
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
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Software Engineer
                <span className="block text-muted-foreground">&amp; AI Enthusiast</span>
              </h2>
            </motion.div>

            {/* Bio paragraphs */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Prabhjot — a developer obsessed with the intersection of{" "}
                <span className="text-foreground font-medium">
                  Artificial Intelligence
                </span>{" "}
                and real-world impact. I don't just build models; I architect
                intelligent systems that solve problems people actually have.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My philosophy? Start from{" "}
                <span className="text-foreground font-medium">
                  first principles
                </span>
                , question everything, and ship fast. Whether it's optimizing
                neural networks or designing scalable architectures, I bring the
                same rigor and curiosity to every challenge.
              </p>
            </motion.div>

            {/* Achievements Bento Grid */}
            <motion.div variants={itemVariants}>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02, y: -2 }}
                    transition={{ duration: 0.2 }}
                    className={`group relative p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm cursor-default overflow-hidden transition-shadow duration-300 hover:shadow-xl ${item.glow}`}
                  >
                    {/* Gradient accent on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />
                    
                    <div className="relative flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-br ${item.color} bg-opacity-10`}
                      >
                        <item.icon className="w-5 h-5 text-foreground" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">
                          {item.label}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.sublabel}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-portfolio-accent transition-colors group"
              >
                Let's build something together
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
