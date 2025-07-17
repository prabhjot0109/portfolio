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

        {/* Achievement Mindmap */}
        <div className="relative max-w-7xl mx-auto mb-16">
          {/* Central Timeline */}
          <motion.div 
            className="absolute left-1/2 top-0 w-1 bg-gradient-to-b from-portfolio-accent via-portfolio-accent/50 to-transparent transform -translate-x-1/2"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            style={{ height: "calc(100% - 100px)" }}
          />
          
          {/* Central Node */}
          <motion.div 
            className="absolute left-1/2 top-16 w-24 h-24 transform -translate-x-1/2 z-20"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-portfolio-accent to-portfolio-accent/70 flex items-center justify-center shadow-2xl border-4 border-background">
              <Trophy className="h-10 w-10 text-white" />
            </div>
            <motion.div 
              className="absolute -top-2 -left-2 w-28 h-28 rounded-full border-2 border-portfolio-accent/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Achievement Nodes */}
          {majorAchievements.map((achievement, index) => {
            const isLeft = index % 2 === 0;
            const topPosition = 200 + (index * 180);
            
            return (
              <motion.div
                key={index}
                className={`absolute ${isLeft ? 'left-4' : 'right-4'} flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center gap-6 z-10`}
                style={{ top: `${topPosition}px` }}
                initial={{ 
                  opacity: 0, 
                  x: isLeft ? -100 : 100,
                  scale: 0.8 
                }}
                whileInView={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1 
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  bounce: 0.3
                }}
                viewport={{ once: true }}
              >
                {/* Connection Line */}
                <motion.div 
                  className={`w-16 h-0.5 bg-gradient-to-r ${isLeft ? 'from-portfolio-accent/60 to-transparent' : 'from-transparent to-portfolio-accent/60'}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                  viewport={{ once: true }}
                />
                
                {/* Date Node */}
                <motion.div 
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg relative z-10`}>
                    <span className="text-white font-bold text-sm">{achievement.year}</span>
                  </div>
                  <motion.div 
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${achievement.color} opacity-30`}
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>

                {/* Achievement Card */}
                <motion.div
                  className={`portfolio-card p-6 relative overflow-hidden group cursor-pointer max-w-sm ${isLeft ? 'text-left' : 'text-right'}`}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Background Effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 bg-portfolio-accent/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 ${isLeft ? 'mr-auto' : 'ml-auto'} relative z-10`}
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <achievement.icon className="h-6 w-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-portfolio-accent transition-colors duration-300 mb-2">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-portfolio-accent font-semibold text-sm mb-2">
                      {achievement.organization}
                    </p>
                    
                    <div className={`bg-portfolio-accent/10 px-3 py-1 rounded-lg mb-3 inline-block`}>
                      <span className="text-xs font-medium text-portfolio-accent">
                        {achievement.product}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                      {achievement.description}
                    </p>
                    
                    <div className={`flex items-center ${isLeft ? 'justify-start' : 'justify-end'}`}>
                      <div className="w-2 h-2 bg-portfolio-accent rounded-full mr-2" />
                      <span className="text-xs text-muted-foreground font-medium">
                        {achievement.impact}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
          
          {/* Timeline End Decoration */}
          <motion.div 
            className="absolute left-1/2 transform -translate-x-1/2 z-10"
            style={{ top: `${200 + (majorAchievements.length * 180)}px` }}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: majorAchievements.length * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-portfolio-accent to-portfolio-accent/70 shadow-lg" />
          </motion.div>
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

      </div>
    </section>
  );
};

export default Achievements;
