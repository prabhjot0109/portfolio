import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Target, Zap } from "lucide-react";
import LazyImage from "@/components/LazyImage";
const profileImage = new URL("@/assets/profile-photo.jpg", import.meta.url)
  .href;

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "SIH 2024 Winner",
      description: "Smart India Hackathon Winner - AI Sign Language Translator",
      details: "MoE's IC & AICTE | 2024",
    },
    {
      icon: Target,
      title: "IEEE Tech4Good Grant",
      description: "$4000 IEEE Tech4Good Grant Recipient for Krishi Platform",
      details: "IEEE HTB | 2024",
    },
    {
      icon: Zap,
      title: "HackWave Winner",
      description: "HackWave Hackathon Winner - Urban Transport ML Model",
      details: "CDGI, Indore | 2024",
    },
    {
      icon: BookOpen,
      title: "Prayatna Runner-up",
      description: "3rd Runner-up for Med.AI Healthcare Platform",
      details: "AITR, Indore | 2024",
    },
    {
      icon: Award,
      title: "Codespire Runner-up",
      description: "Runner-up for Innovative Software Solution",
      details: "AITR, Indore | 2023",
    },
    {
      icon: Target,
      title: "Research & Innovation",
      description: "AI in Healthcare Research & Patent Exploration",
      details: "In Progress | 2024",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating technology that makes a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-lg">
              <motion.div
                className="w-full h-[500px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-card border border-border"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--card)) 100%)",
                }}
              >
                <LazyImage
                  src={profileImage}
                  alt="Prabhjot Singh Assi - Software Developer & AI Engineer"
                  className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
                  priority={false}
                />
                {/* Professional overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <motion.h3
              className="text-3xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Building the Future with AI & ML
            </motion.h3>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Currently developing Med.ai, an AI-powered healthcare platform
              that leverages machine learning to provide intelligent medical
              insights and solutions.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              My expertise spans across artificial intelligence, machine
              learning, and full-stack development, with a focus on creating
              inclusive technology solutions that bridge communication gaps and
              enhance accessibility. I specialize in developing applications
              that make a meaningful impact on communities and individuals.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Open to collaboration on innovative AI/ML projects and mobile
              development initiatives. Feel free to reach out at{" "}
              <a
                href="mailto:prabhjotassi16@gmail.com"
                className="text-portfolio-accent hover:underline transition-all duration-200 hover:text-portfolio-glow hover:scale-105 inline-block"
              >
                prabhjotassi16@gmail.com
              </a>
              to discuss potential partnerships or opportunities.
            </motion.p>

            {/* Subtle Achievement Highlights */}
            <motion.div
              className="flex flex-wrap gap-2 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="bg-card border border-green-200 dark:border-green-800/50 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-lg text-sm font-medium">
                SIH 2024 Winner
              </div>
              <div className="bg-card border border-blue-200 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 px-3 py-1.5 rounded-lg text-sm font-medium">
                IEEE Tech4Good Grant
              </div>
              <div className="bg-card border border-purple-200 dark:border-purple-800/50 text-purple-700 dark:text-purple-300 px-3 py-1.5 rounded-lg text-sm font-medium">
                6+ Hackathon Wins
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
