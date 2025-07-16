import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Target, Zap } from 'lucide-react';
import profileImage from '@/assets/profile-photo.jpg';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "SIH 2024 Winner",
      description: "Smart India Hackathon Winner - AI Sign Language Translator",
      details: "MoE's IC & AICTE | 2024"
    },
    {
      icon: Target,
      title: "IEEE Tech4Good Grant",
      description: "$4000 IEEE Tech4Good Grant Recipient for Krishi Platform",
      details: "IEEE HTB | 2024"
    },
    {
      icon: Zap,
      title: "HackWave Winner",
      description: "HackWave Hackathon Winner - Urban Transport ML Model",
      details: "CDGI, Indore | 2024"
    },
    {
      icon: BookOpen,
      title: "Prayatna Runner-up",
      description: "3rd Runner-up for Med.AI Healthcare Platform",
      details: "AITR, Indore | 2024"
    },
    {
      icon: Award,
      title: "Codespire Runner-up",
      description: "Runner-up for Innovative Software Solution",
      details: "AITR, Indore | 2023"
    },
    {
      icon: Target,
      title: "Research & Innovation",
      description: "AI in Healthcare Research & Patent Exploration",
      details: "In Progress | 2024"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating technology that makes a difference
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-lg">
              <motion.div 
                className="w-full h-[500px] mx-auto rounded-3xl overflow-hidden shadow-2xl bg-card border border-border"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'linear-gradient(135deg, hsl(var(--muted)) 0%, hsl(var(--card)) 100%)'
                }}
              >
                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Prabhjot Singh Assi - Software Developer & AI Engineer"
                    className="w-full h-full object-cover object-center filter brightness-105 contrast-105"
                  />
                  {/* Professional overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <motion.h3 
              className="text-3xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Building the Future with AI & ML
            </motion.h3>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              🔭 I'm currently working on Med.ai, an AI-powered healthcare webapp.
              <br />🌱 I'm currently learning Advanced Machine Learning and Deep Learning.
              <br />👯 I'm looking to collaborate on AI/ML and Flutter projects.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <strong>Achievements:</strong> SIH'24 Winner, HackWave Hackathon Winner, and IEEE Tech4Good Grant Recipient.
              From developing an Indian Sign Language translator to creating smart agricultural solutions, 
              I believe in technology's power to bridge gaps and create inclusive experiences.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              💬 Ask me about AI, Winning SIH and hackathons, or impactful projects.
              📫 How to reach me: <a href="mailto:prabhjotassi16@gmail.com" className="text-portfolio-accent hover:underline">prabhjotassi16@gmail.com</a>
              <br />⚡ Fun fact: What did the spider do on the computer? Made a website! 🕷️💻
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }}
                  className="portfolio-card p-4 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <achievement.icon className="h-8 w-8 text-portfolio-accent mb-3" />
                  </motion.div>
                  <h4 className="font-semibold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                  <p className="text-xs text-muted-foreground/70">{achievement.details}</p>
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