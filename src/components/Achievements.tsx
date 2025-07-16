import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Target, Star, TrendingUp, Users } from 'lucide-react';

const Achievements = () => {
  const majorAchievements = [
    {
      icon: Trophy,
      title: "🥇 SIH 2024 Winner",
      organization: "MoE's IC & AICTE",
      year: "2024",
      product: "AI Sign Language Translator",
      description: "Won against 10,000+ teams nationwide with Signify - AI-powered ISL translator",
      impact: "40+ ISL gestures, 90%+ accuracy",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      icon: Target,
      title: "💰 IEEE Tech4Good Grant",
      organization: "IEEE HTB",
      year: "2024", 
      product: "Krishi Agriculture Platform",
      description: "$4000 grant for IoT-enabled smart agriculture platform empowering farmers",
      impact: "10+ farmers impacted, 20% yield improvement",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Award,
      title: "🏆 HackWave Winner",
      organization: "CDGI, Indore",
      year: "2024",
      product: "PARAS Transport ML Model",
      description: "First place for urban transport optimization using machine learning",
      impact: "Traffic congestion reduction solution",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Star,
      title: "🥉 Prayatna 3rd Runner-up",
      organization: "AITR, Indore",
      year: "2024",
      product: "Med.AI Healthcare Platform",
      description: "AI-powered healthcare diagnostic assistant with computer vision",
      impact: "15% diagnostic accuracy improvement",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "🥈 Codespire Runner-up",
      organization: "AITR, Indore",
      year: "2023",
      product: "Innovative Software Solution",
      description: "Early achievement demonstrating exceptional problem-solving skills",
      impact: "Technical excellence recognition",
      color: "from-red-400 to-red-600"
    }
  ];

  const impactStats = [
    { icon: "🏆", number: "5", label: "Hackathon Wins" },
    { icon: "💰", number: "$4K", label: "Grant Received" },
    { icon: "🎯", number: "10K+", label: "People Impacted" },
    { icon: "📱", number: "8+", label: "Projects Built" },
    { icon: "🤖", number: "40+", label: "AI Models Trained" },
    { icon: "🌱", number: "20%", label: "Efficiency Gains" }
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            🏆 Major Achievements & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building innovative solutions that create real-world impact and earn recognition
          </p>
        </motion.div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {majorAchievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="portfolio-card p-6 relative overflow-hidden group cursor-pointer"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <motion.div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 relative z-10`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <achievement.icon className="h-7 w-7 text-white" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-portfolio-accent transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <span className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                    {achievement.year}
                  </span>
                </div>
                
                <p className="text-portfolio-accent font-semibold text-sm mb-2">
                  {achievement.organization}
                </p>
                
                <div className="bg-portfolio-accent/10 px-3 py-1 rounded-lg mb-3 inline-block">
                  <span className="text-xs font-medium text-portfolio-accent">
                    {achievement.product}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  {achievement.description}
                </p>
                
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-portfolio-accent rounded-full mr-2" />
                  <span className="text-xs text-muted-foreground font-medium">
                    {achievement.impact}
                  </span>
                </div>
              </div>

              {/* Hover Effect */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-portfolio-accent/5 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          ))}
        </div>

        {/* Impact Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">📊 Impact by Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="portfolio-card p-4 text-center group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-portfolio-accent mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-portfolio-accent/10 to-portfolio-glow/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-foreground mb-4">
              🚀 Ready to Create Impact Together?
            </h4>
            <p className="text-muted-foreground mb-6">
              Let's collaborate on innovative projects that make a difference. 
              From AI solutions to sustainable technology, I'm always excited to tackle new challenges.
            </p>
            <motion.button
              className="portfolio-button px-6 py-3 text-portfolio-dark font-semibold rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect →
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
