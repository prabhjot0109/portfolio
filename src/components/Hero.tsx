import React, { lazy, Suspense } from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ShootingStars = lazy(() => import("./ShootingStars"));

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Night Sky Background */}
      <Suspense fallback={null}>
        <ShootingStars density={150} />
      </Suspense>

      {/* Additional CSS-based twinkling stars - Theme aware */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => {
          const size = 1 + Math.random() * 2;
          const opacity = 0.3 + Math.random() * 0.7;
          return (
            <div
              key={i}
              className="absolute rounded-full animate-twinkle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
                backgroundColor: `hsl(var(--foreground) / ${opacity})`,
                boxShadow: `0 0 ${
                  2 + Math.random() * 4
                }px hsl(var(--foreground) / ${opacity * 0.5})`,
              }}
            />
          );
        })}
        {Array.from({ length: 30 }).map((_, i) => {
          const size = 0.5 + Math.random() * 1.5;
          const opacity = 0.2 + Math.random() * 0.6;
          return (
            <div
              key={`sparkle-${i}`}
              className="absolute rounded-full animate-sparkle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
                backgroundColor: `hsl(var(--foreground) / ${opacity})`,
                boxShadow: `0 0 ${
                  1 + Math.random() * 3
                }px hsl(var(--foreground) / ${opacity * 0.4})`,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-space font-bold text-foreground mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-muted-foreground text-base sm:text-lg md:text-xl font-nunito font-normal block mb-3">
              Hello, I'm
            </span>
            <span className="text-accent font-space block mb-2">
              Prabhjot Singh Assi
            </span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-space font-medium text-muted-foreground">
              Software Developer & AI Engineer
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground/80 mb-8 max-w-xl mx-auto leading-relaxed px-4 font-nunito"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building the future with AI-powered solutions and innovative
            technology
          </motion.p>

          {/* Social Links - More visible and positioned higher */}
          <motion.div
            className="flex items-center justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-accent hover:bg-accent/20 hover:scale-110 w-12 h-12 transition-all duration-200 border border-muted-foreground/20 rounded-full"
              onClick={() =>
                window.open("https://github.com/prabhjot0109", "_blank")
              }
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-accent hover:bg-accent/20 hover:scale-110 w-12 h-12 transition-all duration-200 border border-muted-foreground/20 rounded-full"
              onClick={() =>
                window.open(
                  "https://linkedin.com/in/prabhjotsinghassi",
                  "_blank"
                )
              }
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-accent hover:bg-accent/20 hover:scale-110 w-12 h-12 transition-all duration-200 border border-muted-foreground/20 rounded-full"
              onClick={() =>
                window.open("mailto:prabhjotassi16@gmail.com", "_blank")
              }
            >
              <Mail className="h-6 w-6" />
            </Button>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 text-sm w-full sm:w-auto border-0 shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              aria-label="View my work and projects"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="font-semibold px-8 py-3 text-sm w-full sm:w-auto border-2 border-muted-foreground/20 hover:border-accent hover:text-accent transition-all duration-200"
              onClick={() => window.open("/resume.pdf", "_blank")}
              aria-label="Download resume as PDF"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <ArrowDown
              className="h-5 w-5 text-muted-foreground/60 mx-auto cursor-pointer hover:text-accent transition-colors duration-200"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
