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
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient blob */}
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-30 bg-gradient-to-br from-portfolio-accent via-primary to-portfolio-accent blur-3xl"
          initial={{ x: "10%", y: "20%" }}
          animate={{ 
            x: ["10%", "60%", "10%"],
            y: ["20%", "70%", "20%"],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Secondary gradient blob */}
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-20 bg-gradient-to-br from-primary via-portfolio-accent to-secondary blur-2xl"
          initial={{ x: "70%", y: "60%" }}
          animate={{ 
            x: ["70%", "20%", "70%"],
            y: ["60%", "10%", "60%"],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Tertiary gradient blob */}
        <motion.div
          className="absolute w-72 h-72 rounded-full opacity-25 bg-gradient-to-br from-secondary via-portfolio-accent to-primary blur-xl"
          initial={{ x: "40%", y: "80%" }}
          animate={{ 
            x: ["40%", "80%", "40%"],
            y: ["80%", "30%", "80%"],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        
        {/* Additional small floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-10 bg-gradient-radial from-portfolio-accent to-transparent blur-sm"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: [null, (Math.random() * 100) + "%"],
              y: [null, (Math.random() * 100) + "%"],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 5
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