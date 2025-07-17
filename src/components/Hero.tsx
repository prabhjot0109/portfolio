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
      {/* Enhanced Shooting Stars & Cosmic Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Static Background Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={`bg-star-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          >
            <div className={`${Math.random() > 0.5 ? 'w-0.5 h-0.5' : 'w-1 h-1'} bg-white rounded-full shadow-sm`} />
          </motion.div>
        ))}

        {/* Shooting Stars */}
        {[...Array(12)].map((_, i) => {
          const startX = Math.random() * 120 + 80; // Start from right side
          const startY = Math.random() * 60 + 10; // Top portion
          const endX = Math.random() * 40 - 20; // End towards left
          const endY = Math.random() * 40 + 60; // End towards bottom
          const duration = Math.random() * 4 + 6; // 6-10 seconds
          const delay = Math.random() * 15; // Random delay up to 15 seconds
          
          return (
            <motion.div
              key={`star-${i}`}
              className="absolute pointer-events-none"
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
              }}
              initial={{
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0,
              }}
              animate={{
                opacity: [0, 0, 1, 1, 1, 0],
                scale: [0, 0, 1, 1.3, 1, 0],
                x: [`0%`, `0%`, `${(endX - startX) * 2}vw`, `${(endX - startX) * 4}vw`],
                y: [`0%`, `0%`, `${(endY - startY) * 2}vh`, `${(endY - startY) * 4}vh`],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: [0.23, 1, 0.32, 1], // Custom easing for realistic motion
                times: [0, 0.1, 0.3, 0.7, 0.9, 1]
              }}
            >
              <div className="relative">
                {/* Star core with enhanced glow */}
                <motion.div 
                  className="w-2 h-2 bg-white rounded-full shadow-lg"
                  animate={{
                    boxShadow: [
                      "0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.4)",
                      "0 0 16px rgba(255,255,255,1), 0 0 24px rgba(255,255,255,0.6)",
                      "0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.4)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Enhanced dynamic tail */}
                <motion.div
                  className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-white via-white/80 to-transparent origin-left transform -translate-y-1/2"
                  style={{ 
                    width: '80px',
                    transform: 'translateY(-50%) rotate(25deg)'
                  }}
                  animate={{
                    scaleX: [0, 0, 1, 1.4, 0.8, 0],
                    opacity: [0, 0, 0.9, 1, 0.7, 0],
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    delay: delay,
                    ease: [0.23, 1, 0.32, 1],
                    times: [0, 0.1, 0.3, 0.5, 0.8, 1]
                  }}
                />
                {/* Secondary sparkle trail */}
                <motion.div
                  className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-transparent origin-left transform -translate-y-1/2"
                  style={{ 
                    width: '60px',
                    transform: 'translateY(-50%) rotate(20deg)'
                  }}
                  animate={{
                    scaleX: [0, 0, 0.8, 1.2, 0.6, 0],
                    opacity: [0, 0, 0.6, 0.8, 0.4, 0],
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    delay: delay + 0.2,
                    ease: [0.23, 1, 0.32, 1],
                    times: [0, 0.1, 0.3, 0.5, 0.8, 1]
                  }}
                />
              </div>
            </motion.div>
          );
        })}

        {/* Constellation Patterns */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`constellation-${i}`}
            className="absolute pointer-events-none"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
          >
            {/* Create small star clusters */}
            {[...Array(4)].map((_, j) => (
              <motion.div
                key={`cluster-star-${j}`}
                className="absolute w-0.5 h-0.5 bg-white/60 rounded-full"
                style={{
                  left: `${Math.random() * 40 - 20}px`,
                  top: `${Math.random() * 40 - 20}px`,
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        ))}

        {/* Enhanced Floating Particles */}
        {[...Array(35)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className={`absolute rounded-full ${
              Math.random() > 0.7 ? 'w-1.5 h-1.5 bg-blue-300/20' : 
              Math.random() > 0.5 ? 'w-1 h-1 bg-white/30' : 
              'w-0.5 h-0.5 bg-purple-300/25'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30],
              x: [-15, 15],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: Math.random() * 8 + 10,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Enhanced Gradient Orbs */}
        <motion.div
          className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.5, 0.2],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-60 h-60 bg-gradient-to-r from-cyan-500/6 to-blue-500/6 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Enhanced grid pattern with multiple layers */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--foreground)) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px'
        }} />
        
        {/* Additional subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.008]" style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, hsl(var(--accent)) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '25px 25px'
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
            <span className="text-muted-foreground text-lg sm:text-xl md:text-2xl font-normal block mb-2">Hello, I'm</span>
            <span className="text-accent">Prabhjot Singh Assi</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-foreground mt-2">
              Software Developer & AI Engineer
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6 max-w-3xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate about creating innovative technology solutions that bridge the gap between 
            artificial intelligence and real-world applications.
          </motion.p>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-muted-foreground/90 mb-4 sm:mb-6 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Computer Science & Engineering student specializing in AI/ML, with expertise in 
            full-stack development, mobile applications, and cutting-edge AI technologies.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 text-xs sm:text-sm px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-card border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 px-3 sm:px-4 py-2 rounded-lg font-medium">
              SIH 2024 Winner
            </div>
            <div className="bg-card border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-2 rounded-lg font-medium">
              IEEE Tech4Good Grant
            </div>
            <div className="bg-card border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 px-3 sm:px-4 py-2 rounded-lg font-medium">
              Multiple Hackathon Winner
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