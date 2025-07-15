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
      {/* Simple floating orbs background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle floating elements */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-20 bg-gradient-to-br from-primary/30 to-portfolio-accent/30"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ 
              opacity: 0,
              scale: 0,
              x: 0,
              y: 0
            }}
            animate={{ 
              opacity: [0, 0.2, 0.1, 0.2],
              scale: [0, 1, 1.1, 1],
              x: [0, Math.random() * 30 - 15],
              y: [0, Math.random() * 30 - 15]
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="text-portfolio-accent">Prabhjot</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            AI & ML Enthusiast | Full-Stack Developer | Hackathon Winner
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto"
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
              <Button variant="ghost" size="icon" className="text-foreground hover:text-portfolio-accent">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-portfolio-accent">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-portfolio-accent">
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