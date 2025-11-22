import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Target, Star, TrendingUp, Zap } from "lucide-react";

const Achievements = () => {
  const majorAchievements = [
    {
      icon: Trophy,
      title: "Intellify 3.0 Hackathon Winner",
      organization: "Marwadi University, Rajkot",
      year: "2025",
      product: "Best Software Solution",
      description:
        "National level hackathon winner recognized for creating the best software solution.",
      impact: "National recognition for innovation excellence",
      color: "from-indigo-500 to-purple-500",
      shadow: "shadow-indigo-500/20",
    },
    {
      icon: Trophy,
      title: "Code for Bharat Season 2",
      organization: "Tech Masters India, Microsoft Office",
      year: "2025",
      product: "1st Runner-up",
      description:
        "Secured 1st runner-up among top teams across India in the National Project Building Challenge.",
      impact: "Recognized for innovation and execution",
      color: "from-orange-500 to-red-500",
      shadow: "shadow-orange-500/20",
    },
    {
      icon: Trophy,
      title: "SIH 2024 Winner",
      organization: "MoE's IC & AICTE",
      year: "2024",
      product: "AI Sign Language Translator",
      description:
        "Won against 10,000+ teams nationwide with Signify - An AI-powered ISL translator.",
      impact: "40+ ISL gestures, 90%+ accuracy",
      color: "from-yellow-400 to-orange-500",
      shadow: "shadow-yellow-500/20",
    },
    {
      icon: Target,
      title: "IEEE Tech4Good Grant",
      organization: "IEEE HTB",
      year: "2024",
      product: "Krishi Agriculture Platform",
      description:
        "$4000 grant for IoT-enabled smart agriculture platform empowering farmers.",
      impact: "10+ farmers impacted, 20% yield improvement",
      color: "from-green-400 to-emerald-600",
      shadow: "shadow-green-500/20",
    },
    {
      icon: Award,
      title: "HackWave Winner",
      organization: "CDGI, Indore",
      year: "2024",
      product: "PARAS Transport ML Model",
      description:
        "First place for urban transport optimization using machine learning.",
      impact: "Traffic congestion reduction solution",
      color: "from-blue-400 to-cyan-500",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: Star,
      title: "Prayatna 3rd Runner-up",
      organization: "AITR, Indore",
      year: "2024",
      product: "Med.AI Healthcare Platform",
      description:
        "AI-powered healthcare diagnostic assistant with computer vision.",
      impact: "15% diagnostic accuracy improvement",
      color: "from-purple-400 to-pink-500",
      shadow: "shadow-purple-500/20",
    },
    {
      icon: TrendingUp,
      title: "Codespire 2023 Runner-up",
      organization: "AITR, Indore",
      year: "2023",
      product: "Innovative Software Solution",
      description:
        "Early achievement demonstrating exceptional problem-solving skills.",
      impact: "Technical excellence recognition",
      color: "from-red-400 to-rose-600",
      shadow: "shadow-red-500/20",
    },
  ];

  const impactStats = [
    { icon: "🏆", number: "6", label: "Hackathon Wins" },
    { icon: "💰", number: "$4K", label: "Grant Received" },
    { icon: "📱", number: "8+", label: "Projects Built" },
    { icon: "🤖", number: "20+", label: "AI Models Trained" },
  ];

  return (
    <section
      id="achievements"
      className="py-24 relative overflow-hidden bg-background/50"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Major Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A journey marked by innovation, competition, and impactful solutions
            recognized on national platforms.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto mb-24">
          <div className="relative">
            {/* Central Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

            {majorAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex items-center gap-8 mb-16 md:mb-24 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className="flex-1 w-full md:w-auto">
                  <div
                    className={`group relative p-6 rounded-2xl border border-white/10 bg-card/20 backdrop-blur-xl hover:bg-card/40 transition-all duration-500 hover:border-white/20 ${achievement.shadow} shadow-xl hover:shadow-2xl hover:-translate-y-1`}
                  >
                    {/* Gradient Glow */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-white shadow-lg`}
                        >
                          <achievement.icon className="w-6 h-6" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-muted/50 text-xs font-medium text-muted-foreground border border-border/50">
                          {achievement.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h3>
                      <div className="text-sm font-medium text-primary/80 mb-3">
                        {achievement.organization}
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {achievement.description}
                      </p>

                      <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground pt-4 border-t border-border/50">
                        <Zap className="w-3 h-3 text-yellow-500" />
                        {achievement.impact}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Point (Desktop) */}
                <div className="hidden md:flex relative items-center justify-center w-12 flex-shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${achievement.color} shadow-[0_0_10px_rgba(0,0,0,0.2)] ring-4 ring-background z-10`}
                  />
                  <div
                    className={`absolute w-8 h-8 rounded-full bg-gradient-to-r ${achievement.color} opacity-20 animate-pulse`}
                  />
                </div>

                {/* Empty Space for Desktop Layout */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {impactStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-card/20 border border-white/10 backdrop-blur-md text-center hover:bg-card/40 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
