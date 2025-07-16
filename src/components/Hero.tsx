import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background/95 to-muted/20"
    >
      {/* Shooting Stars Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              x: [0, -200, -400],
              y: [0, 100, 200],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeOut",
            }}
          >
            {/* Star body */}
            <div className="relative">
              <div className="w-1 h-1 bg-accent rounded-full" />
              {/* Tail */}
              <motion.div
                className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-accent to-transparent origin-left"
                style={{ width: '30px' }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 8,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
        ))}

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi There! 👋<br />
            I'm <span className="text-accent">Prabhjot Singh Assi!</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            👨‍💻 Developer by work, 🎨 Designer by heart
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground/90 mb-4 sm:mb-6 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            A computer science & engineering student and passionate software developer from India, 
            focused on creating innovative tech solutions.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-xs sm:text-sm px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
              🏆 SIH'24 Winner
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
              💰 IEEE Tech4Good Grant
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full">
              🥈 HackWave Winner
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-2.5 text-sm sm:text-base w-full sm:w-auto border-0"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-foreground hover:text-accent hover:bg-accent/10 w-9 h-9 sm:w-10 sm:h-10"
                onClick={() => window.open('https://github.com/prabhjot0109', '_blank')}
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-foreground hover:text-accent hover:bg-accent/10 w-9 h-9 sm:w-10 sm:h-10"
                onClick={() => window.open('https://linkedin.com/in/prabhjotsinghassi', '_blank')}
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-foreground hover:text-accent hover:bg-accent/10 w-9 h-9 sm:w-10 sm:h-10"
                onClick={() => window.open('mailto:prabhjotassi16@gmail.com', '_blank')}
              >
                <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <ArrowDown 
              className="h-6 w-6 text-foreground mx-auto cursor-pointer hover:text-portfolio-accent transition-colors"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;