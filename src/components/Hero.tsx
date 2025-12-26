import React from "react";
import { Github, Linkedin, Mail, Download, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Meteors } from "@/components/ui/shadcn-io/meteors";
import Starfield from "@/components/Starfield";
import ShootingStars from "@/components/ShootingStars";
import { useTheme } from "@/components/ThemeProvider";

interface HeroProps {
  onOpenCommandPalette?: () => void;
}

const Hero = ({ onOpenCommandPalette }: HeroProps) => {
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
    const handler: EventListener = () => {
      enableAnimation();
      events.forEach((e) => window.removeEventListener(e, handler));
    };
    events.forEach((e) =>
      window.addEventListener(e, handler, { passive: true })
    );
    return () => events.forEach((e) => window.removeEventListener(e, handler));
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
            <Starfield
              density={0.12}
              speed={0.25}
              active={animated}
              theme="dark"
            />
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
        /* Light Theme: Subtle noon day sky gradient with particles */
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-sky-100 to-white" />
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-sky-200/10" />
          <Starfield
            density={0.15}
            speed={0.1}
            active={animated}
            theme="light"
          />
        </div>
      )}

      <div className="container mx-auto px-6 text-center relative z-10 pt-20 flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-space font-bold text-foreground mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-muted-foreground text-lg sm:text-xl md:text-2xl font-nunito font-light block mb-4 tracking-widest uppercase">
              Hello, I'm
            </span>
            <span className="gradient-text animate-text-gradient font-space block mb-4 drop-shadow-sm pb-2 leading-relaxed">
              Prabhjot Singh
            </span>
            <span className="block text-xl sm:text-2xl md:text-3xl font-space font-medium text-muted-foreground/80 h-[1.5em]">
              CSE Student & Aspiring SDE / AI Engineer
            </span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed px-4 font-nunito font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            CSE student seeking{" "}
            <span className="text-foreground font-medium">SDE</span> or{" "}
            <span className="text-foreground font-medium">AI Engineer</span>{" "}
            roles, building the future with AI-powered solutions.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center space-x-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { icon: Github, link: "https://github.com/prabhjot0109" },
              {
                icon: Linkedin,
                link: "https://linkedin.com/in/prabhjotsinghassi",
              },
              { icon: Mail, link: "mailto:prabhjotassi16@gmail.com" },
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="text-foreground hover:text-portfolio-accent hover:bg-portfolio-accent/10 hover:scale-110 w-14 h-14 transition-all duration-300 border border-border/50 rounded-full hover:border-portfolio-accent hover:shadow-[0_0_20px_rgba(var(--portfolio-accent),0.3)]"
                onClick={() => window.open(social.link, "_blank")}
              >
                <social.icon className="h-6 w-6" />
              </Button>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-foreground hover:text-portfolio-accent hover:bg-portfolio-accent/5 border-2 border-foreground/20 hover:border-portfolio-accent rounded-full px-10 py-6 font-bold text-lg w-[260px] transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="bg-transparent text-foreground hover:text-portfolio-accent hover:bg-portfolio-accent/5 border-2 border-foreground/20 hover:border-portfolio-accent rounded-full px-10 py-6 font-bold text-lg w-[260px] transition-all duration-300"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default React.memo(Hero);
