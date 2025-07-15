import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      {/* Theme-aware overlay */}
      <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
      {/* Radial lines starburst background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Central radial lines */}
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(80)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent dark:via-portfolio-accent/30"
              style={{
                height: '150vh',
                transformOrigin: 'center center',
                transform: `rotate(${(i * 360) / 80}deg)`,
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.01,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Scattered geometric elements */}
        {[...Array(25)].map((_, i) => {
          const shapes = ['square', 'circle', 'triangle'];
          const shape = shapes[i % 3];
          const size = Math.random() * 8 + 4;
          
          return (
            <motion.div
              key={i}
              className={`absolute opacity-60 ${
                shape === 'circle' 
                  ? 'rounded-full bg-portfolio-accent/40 dark:bg-portfolio-accent/60' 
                  : shape === 'triangle'
                  ? 'bg-primary/40 dark:bg-primary/60'
                  : 'bg-secondary/40 dark:bg-secondary/60'
              }`}
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                clipPath: shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined,
              }}
              initial={{ 
                opacity: 0, 
                scale: 0,
                rotate: 0 
              }}
              animate={{ 
                opacity: [0, 0.6, 0.3, 0.6],
                scale: [0, 1, 1.2, 1],
                rotate: 360,
                x: [0, Math.random() * 20 - 10],
                y: [0, Math.random() * 20 - 10]
              }}
              transition={{
                duration: Math.random() * 8 + 12,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
            />
          );
        })}

        {/* Central glow effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <div className="w-32 h-32 rounded-full bg-portfolio-accent/20 dark:bg-portfolio-accent/30 blur-3xl" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="text-portfolio-accent">Prabhjot</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI & ML Enthusiast | Full-Stack Developer | Hackathon Winner
          </motion.p>

          <motion.p
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building innovative solutions that bridge technology and human needs. 
            Currently pursuing B.Tech in AI & ML, passionate about creating meaningful impact.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              size="lg"
              className="portfolio-button text-portfolio-dark font-semibold px-8 py-3 text-lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-portfolio-accent">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-portfolio-accent">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-portfolio-accent">
                <Mail className="h-6 w-6" />
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
              className="h-6 w-6 text-white mx-auto cursor-pointer hover:text-portfolio-accent transition-colors"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;