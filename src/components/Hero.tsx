import React, { lazy, Suspense } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const ShootingStars = lazy(() => import('./ShootingStars'));

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Shooting Stars & Cosmic Background */}
      <Suspense fallback={null}>
        <ShootingStars density={70} />
      </Suspense>

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
            <div className="flex flex-col sm:flex-row gap-3 items-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-2.5 text-sm sm:text-base w-full sm:w-auto border-0"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="View my work and projects"
              >
                View My Work
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="font-semibold px-6 sm:px-8 py-2.5 text-sm sm:text-base w-full sm:w-auto"
                onClick={() => window.open('/resume.pdf', '_blank')}
                aria-label="Download resume as PDF"
              >
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </Button>
            </div>
            
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