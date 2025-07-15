import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Target, Zap } from 'lucide-react';
import profileImage from '@/assets/profile-photo.jpg';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Smart India Hackathon 2024",
      description: "Winner - Developed innovative Indian Sign Language translator"
    },
    {
      icon: Zap,
      title: "Hackwave 2024",
      description: "Runner-up - Created urban transport optimization solution"
    },
    {
      icon: Target,
      title: "IEEE SIGHT Grant",
      description: "Recipient of prestigious engineering grant (Dec 2024)"
    },
    {
      icon: BookOpen,
      title: "Edunet Foundation",
      description: "Virtual Internship in AI/ML (Apr-May 2025)"
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

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 mx-auto rounded-2xl overflow-hidden portfolio-glow"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={profileImage}
                  alt="Prabhjot"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div 
                className="absolute -top-4 -right-4 w-24 h-24 bg-portfolio-accent rounded-full"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-portfolio-accent/60 rounded-full"
                animate={{ 
                  y: [0, 10, 0],
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
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
              I'm a third-year B.Tech student specializing in Computer Science & Engineering 
              with a focus on Artificial Intelligence and Machine Learning. My journey in tech 
              is driven by a passion for solving real-world problems through innovative solutions.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              From developing an Indian Sign Language translator to creating smart agricultural 
              solutions, I believe in technology's power to bridge gaps and create inclusive 
              experiences. My work spans machine learning, computer vision, full-stack development, 
              and signal processing.
            </motion.p>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              When I'm not coding, you'll find me participating in hackathons, exploring new 
              technologies, or working on projects that can make a meaningful impact in people's lives.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
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
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
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