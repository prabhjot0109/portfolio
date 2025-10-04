import React from "react";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/shadcn-io/meteors";
import Starfield from "@/components/Starfield";
import ShootingStars from "@/components/ShootingStars";
import { useTheme } from "@/components/ThemeProvider";

const Hero = () => {
  const [animated, setAnimated] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement | null>(null);
  const enableAnimation = React.useCallback(() => setAnimated(true), []);
  const { actualTheme } = useTheme();

  React.useEffect(() => {
    if (animated) return;
    if (!sectionRef.current) return;
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.1) {
            setAnimated(true);
          } else {
            setAnimated(false);
          }
        }
      },
      { threshold: [0.1, 0.4, 0.6] }
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated, enableAnimation]);

  React.useEffect(() => {
    if (animated) return;
    const events: (keyof DocumentEventMap)[] = [
      "pointermove",
      "click",
      "keydown",
      "touchstart",
      "scroll",
    ];
    const handler = () => {
      enableAnimation();
      events.forEach((e) => window.removeEventListener(e, handler as any));
    };
    events.forEach((e) =>
      window.addEventListener(e, handler as any, { passive: true })
    );
    return () =>
      events.forEach((e) => window.removeEventListener(e, handler as any));
  }, [animated, enableAnimation]);

  const sparkles = React.useMemo(
    () =>
      Array.from({ length: 15 }).map((_, index) => ({
        id: `sparkle-${index}`,
        size: 1.6 + Math.random() * 2.4,
        opacity: 0.28 + Math.random() * 0.5,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 4,
        duration: 3.5 + Math.random() * 3,
        blur: 0.3 + Math.random() * 1.2,
        glow: 2 + Math.random() * 5,
      })),
    []
  );

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      onMouseEnter={enableAnimation}
      onFocus={enableAnimation}
    >
      {/* Background based on theme */}
      {actualTheme === "dark" ? (
        <>
          {/* Starfield background */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <Starfield density={0.06} speed={0.4} active={animated} />
          </div>
          {/* Shooting stars - realistic effect matching starfield speed */}
          {animated && (
            <div className="absolute inset-0 pointer-events-none z-0">
              <ShootingStars active={animated} speed={0.4} />
            </div>
          )}
          {/* Meteors / shooting stars - only after activation */}
          {animated && (
            <div className="absolute inset-0 pointer-events-none z-0">
              <Meteors
                number={40}
                angle={45}
                className="opacity-90 bg-white meteor-twinkle"
              />
            </div>
          )}

          {/* Aurora overlay and sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(20,40,80,0.5),transparent_70%)] opacity-85 mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e1533]/45 to-[#050712]/90" />
            <div className="absolute inset-0 mix-blend-screen">
              {sparkles.map((sparkle) => (
                <div
                  key={sparkle.id}
                  className="absolute"
                  style={{
                    left: `${sparkle.left}%`,
                    top: `${sparkle.top}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div
                    className="rounded-full animate-sparkle bg-white/90 mix-blend-screen"
                    style={{
                      width: `${sparkle.size}px`,
                      height: `${sparkle.size}px`,
                      animationDelay: `${sparkle.delay}s`,
                      animationDuration: `${sparkle.duration}s`,
                      opacity: sparkle.opacity,
                      filter: `blur(${sparkle.blur}px)`,
                      boxShadow: `0 0 ${sparkle.glow}px rgba(180, 210, 255, 0.85)`,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* Light theme: Subtle noon day sky gradient */
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-white" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-sky-200/10" />
        </div>
      )}

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
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed px-4 font-nunito"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Building the future with AI-powered solutions and innovative
            technology
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-portfolio-accent hover:bg-portfolio-accent/10 hover:scale-110 w-12 h-12 transition-all duration-200 border border-border rounded-full hover:border-portfolio-accent hover:shadow-lg hover:shadow-portfolio-accent/20"
              onClick={() =>
                window.open("https://github.com/prabhjot0109", "_blank")
              }
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground hover:text-portfolio-accent hover:bg-portfolio-accent/10 hover:scale-110 w-12 h-12 transition-all duration-200 border border-border rounded-full hover:border-portfolio-accent hover:shadow-lg hover:shadow-portfolio-accent/20"
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
              className="text-foreground hover:text-portfolio-accent hover:bg-portfolio-accent/10 hover:scale-110 w-12 h-12 transition-all duration-200 border border-border rounded-full hover:border-portfolio-accent hover:shadow-lg hover:shadow-portfolio-accent/20"
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
              className="bg-gradient-to-r from-portfolio-accent to-portfolio-glow text-white hover:shadow-xl hover:shadow-portfolio-accent/30 hover:scale-105 transition-all duration-300 border-0 rounded-full px-8 py-3 font-semibold text-sm w-full sm:w-auto h-12 min-w-[200px]"
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
              className="text-foreground hover:text-portfolio-accent hover:bg-portfolio-accent/10 hover:scale-105 transition-all duration-300 border-2 border-border hover:border-portfolio-accent rounded-full px-8 py-3 font-semibold text-sm w-full sm:w-auto h-12 min-w-[200px] hover:shadow-lg hover:shadow-portfolio-accent/20"
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
              className="h-5 w-5 text-muted-foreground/60 mx-auto cursor-pointer hover:text-portfolio-accent transition-colors duration-200"
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

export default React.memo(Hero);
