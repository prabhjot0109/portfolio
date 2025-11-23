import React from "react";
import { motion } from "framer-motion";
import { Award, Target, Zap, Brain } from "lucide-react";
import LazyImage from "@/components/LazyImage";

const profileImage = new URL("@/assets/profile-photo.jpg", import.meta.url)
  .href;

const About = () => {
  const achievements = [
    {
      icon: Award,
      label: "SIH 2024 Winner",
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900/20",
      border: "border-green-200 dark:border-green-800/50",
    },
    {
      icon: Target,
      label: "IEEE Grant Recipient",
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/20",
      border: "border-blue-200 dark:border-blue-800/50",
    },
    {
      icon: Zap,
      label: "6+ Hackathon Wins",
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-purple-100 dark:bg-purple-900/20",
      border: "border-purple-200 dark:border-purple-800/50",
    },
    {
      icon: Brain,
      label: "AI Research",
      color: "text-amber-600 dark:text-amber-400",
      bg: "bg-amber-100 dark:bg-amber-900/20",
      border: "border-amber-200 dark:border-amber-800/50",
    },
  ];

  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden"
      aria-label="About Prabhjot Singh Assi"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            About Me
          </h2>
          <div className="h-1 w-20 bg-portfolio-accent mx-auto rounded-full opacity-80" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative w-full max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-card/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-portfolio-accent/20 opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10" />
              <LazyImage
                src={profileImage}
                alt="Prabhjot Singh Assi"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8 order-1 lg:order-2 text-left"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Software Engineer & AI Enthusiast
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm Prabhjot, a developer with a deep focus on{" "}
                <span className="text-foreground font-medium">
                  Artificial Intelligence
                </span>{" "}
                and{" "}
                <span className="text-foreground font-medium">
                  Machine Learning
                </span>
                . I bridge the gap between complex research and practical
                application, building intelligent systems that solve real-world
                problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines{" "}
                <span className="text-foreground font-medium">
                  first-principles thinking
                </span>{" "}
                with modern computational design. Whether it's
                optimizing deep learning models or architecting scalable
                software, I am driven by a passion for innovation and
                reliability.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently open to collaborations and opportunities where I can
                contribute to impactful AI/ML projects.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className={`p-3 rounded-xl border ${item.border} ${item.bg} backdrop-blur-md flex flex-col items-center justify-center text-center gap-2 hover:scale-105 transition-transform duration-300 cursor-default shadow-lg hover:shadow-xl`}
                >
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                  <span className={`text-sm font-semibold ${item.color}`}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
