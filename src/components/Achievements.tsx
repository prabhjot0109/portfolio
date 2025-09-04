import React from 'react';
import { motion } from 'framer-motion';
import { majorAchievements, impactStats } from '@/data/achievements';
import { useReducedMotion } from '@/hooks/useReducedMotion';

const Achievements = () => {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = prefersReducedMotion 
    ? {} 
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true }
      };

  return (
    <section id="achievements" className="py-20 bg-muted/30" aria-labelledby="achievements-heading">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          {...motionProps}
          className="text-center mb-16"
        >
          <h2 id="achievements-heading" className="text-4xl md:text-5xl font-bold text-foreground mb-4">
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
            {...(prefersReducedMotion ? {} : {
              initial: { scale: 0, rotate: -180 },
              whileInView: { scale: 1, rotate: 0 },
              transition: { duration: 0.8, type: "spring", bounce: 0.4 },
              viewport: { once: true }
            })}
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-foreground to-foreground/70 flex items-center justify-center shadow-2xl border-4 border-background">
                {React.createElement(majorAchievements[0].icon, { className: "h-8 w-8 text-background" })}
              </div>
              {!prefersReducedMotion && (
                <motion.div 
                  className="absolute -top-2 -left-2 w-24 h-24 rounded-full border-2 border-foreground/20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
              )}
            </div>
          </motion.div>

          {/* Achievement Grid */}
          <div className="grid gap-8">
            {majorAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="relative"
                {...(prefersReducedMotion ? {} : {
                  initial: { opacity: 0, y: 50 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: index * 0.1 },
                  viewport: { once: true }
                })}
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
                        {...(prefersReducedMotion ? {} : { whileHover: { y: -5 } })}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br from-foreground/5 to-foreground/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />
                        
                        <div className="relative z-10">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-foreground to-foreground/70 flex items-center justify-center flex-shrink-0`}>
                              <achievement.icon className="h-6 w-6 text-background" />
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
                          
                          {achievement.product && (
                            <div className="bg-muted/50 px-3 py-1 rounded-full mb-3 inline-block">
                              <span className="text-xs font-medium text-foreground/70">
                                {achievement.product}
                              </span>
                            </div>
                          )}
                          
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
                    {...(prefersReducedMotion ? {} : {
                      whileHover: { scale: 1.1 },
                      transition: { duration: 0.2 }
                    })}
                  >
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-foreground to-foreground/70 flex items-center justify-center shadow-lg relative z-10 border-4 border-background`}>
                      <span className="text-background font-bold text-xs">{achievement.year}</span>
                    </div>
                    {!prefersReducedMotion && (
                      <motion.div 
                        className={`absolute inset-0 rounded-full bg-gradient-to-br from-foreground/30 to-foreground/10 opacity-30`}
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      />
                    )}
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
          {...(prefersReducedMotion ? {} : {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.4 },
            viewport: { once: true }
          })}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">📊 Impact by Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                {...(prefersReducedMotion ? {} : {
                  initial: { opacity: 0, scale: 0.8 },
                  whileInView: { opacity: 1, scale: 1 },
                  transition: { duration: 0.5, delay: index * 0.1 },
                  viewport: { once: true },
                  whileHover: { scale: 1.05, y: -5 }
                })}
                className="portfolio-card p-4 text-center group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  <stat.icon className="h-6 w-6 mx-auto" />
                </div>
                <div className="text-2xl font-bold text-portfolio-accent mb-1">
                  {stat.value}
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
