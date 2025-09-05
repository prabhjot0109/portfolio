import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Target, Star, TrendingUp, Users } from 'lucide-react';

const Achievements = () => {
  const majorAchievements = [
    {
      icon: Trophy,
      title: "🥇 Intellify 3.0 Hackathon Winner",
      organization: "Marwadi University, Rajkot",
      year: "2025",
      product: "Best Software Solution",
      description: "National level hackathon winner recognized for creating the best software solution",
      impact: "National recognition for innovation excellence",
      color: "from-indigo-400 to-indigo-600"
    },
    {
      icon: Trophy,
      title: "🥈 Code for Bharat Season 2 - 1st Runner-up",
      organization: "Tech Masters India, Microsoft Office Noida",
      year: "2025",
      product: "National Problem Solving Challenge",
      description: "Secured 1st runner-up among top teams across India",
      impact: "Recognized for innovation and execution",
      color: "from-orange-400 to-orange-600"
    },
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
      title: "🥈 Codespire 2023 Runner-up",
      organization: "AITR, Indore",
      year: "2023",
      product: "Innovative Software Solution",
      description: "Early achievement demonstrating exceptional problem-solving skills",
      impact: "Technical excellence recognition",
      color: "from-red-400 to-red-600"
    }
  ];

  const impactStats = [
    { icon: "🏆", number: "6", label: "Hackathon Wins" },
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

        {/* Achievement Timeline Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Central Timeline Header */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-foreground to-foreground/70 flex items-center justify-center shadow-2xl border-4 border-background">
                <Trophy className="h-8 w-8 text-background" />
              </div>
              <motion.div 
                className="absolute -top-2 -left-2 w-24 h-24 rounded-full border-2 border-foreground/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Achievement Grid */}
          <div className="grid gap-8">
            {majorAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Line */}
                <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-foreground/30 via-foreground/20 to-transparent transform -translate-x-1/2 z-0" />
                
                {/* Achievement Row */}
                <div className="relative flex items-center gap-8 z-10">
                  {/* Left Content (odd index) or spacer (even index) */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'flex justify-end' : ''}`}>
                    {index % 2 === 1 && (
                      <motion.div
                        className="portfolio-card p-6 max-w-md group hover:scale-[1.02] transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />
                        
                        <div className="relative z-10">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                              <achievement.icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-foreground group-hover:text-portfolio-accent transition-colors duration-300 mb-1">
                                {achievement.title}
                              </h3>
                              <p className="text-foreground/80 font-medium text-sm">
                                {achievement.organization}
                              </p>
                            </div>
                          </div>
                          
                          <div className="bg-muted/50 px-3 py-1 rounded-full mb-3 inline-block">
                            <span className="text-xs font-medium text-foreground/70">
                              {achievement.product}
                            </span>
                          </div>
                          
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                            {achievement.description}
                          </p>
                          
                          <div className="flex items-center text-xs text-muted-foreground">
                            <div className="w-2 h-2 bg-foreground/40 rounded-full mr-2" />
                            {achievement.impact}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Central Date Node */}
                  <motion.div 
                    className="relative z-20 flex-shrink-0"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-lg relative z-10 border-4 border-background`}>
                      <span className="text-white font-bold text-xs">{achievement.year}</span>
                    </div>
                    <motion.div 
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${achievement.color} opacity-30`}
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </motion.div>

                  {/* Right Content (even index) or spacer (odd index) */}
                  <div className={`flex-1 ${index % 2 === 1 ? 'flex justify-start' : ''}`}>
                    {index % 2 === 0 && (
                      <motion.div
                        className="portfolio-card p-6 max-w-md group hover:scale-[1.02] transition-all duration-300"
                        whileHover={{ y: -5 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`} />
                        
                        <div className="relative z-10">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                              <achievement.icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-foreground group-hover:text-portfolio-accent transition-colors duration-300 mb-1">
                                {achievement.title}
                              </h3>
                              <p className="text-foreground/80 font-medium text-sm">
                                {achievement.organization}
                              </p>
                            </div>
                          </div>
                          
                          <div className="bg-muted/50 px-3 py-1 rounded-full mb-3 inline-block">
                            <span className="text-xs font-medium text-foreground/70">
                              {achievement.product}
                            </span>
                          </div>
                          
                          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                            {achievement.description}
                          </p>
                          
                          <div className="flex items-center text-xs text-muted-foreground">
                            <div className="w-2 h-2 bg-foreground/40 rounded-full mr-2" />
                            {achievement.impact}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
