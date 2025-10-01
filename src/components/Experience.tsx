import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const timelineEvents = [
    {
      id: 7,
      type: "internship",
      icon: Briefcase,
      title: "AI/ML Intern",
      organization: "Edunet Foundation",
      location: "Remote",
      date: "Nov 2024 - Dec 2024",
      description:
        "Completed intensive virtual internship focusing on practical applications of AI and ML in real-world scenarios. Worked on AI Transformative Learning project using CNN and MobileNetV2 architecture.",
      highlights: [
        "Deployed production-ready ML model on Streamlit Cloud",
        "Implemented CNN with MobileNetV2 for image classification",
        "Transfer learning on ImageNet dataset",
        "Real-time inference and model optimization",
        "Received certification of excellence",
      ],
      status: "completed",
    },
    {
      id: 1,
      type: "education",
      icon: GraduationCap,
      title: "B.Tech in Computer Science & Engineering",
      organization: "Specialization: AI & ML",
      location: "AITR, Indore, India",
      date: "2022 - 2026",
      description:
        "Pursuing B.Tech. in Computer Science & Engineering with specialization in Artificial Intelligence and Machine Learning. Currently in 4th year with focus on advanced AI algorithms, machine learning models, and real-world applications.",
      highlights: [
        "Current CGPA: 7.22/10",
        "Core subjects: Machine Learning, Computer Vision, Natural Language Processing, Data Structures & Algorithms",
        "Active leadership role in IEEE SIGHT student chapter",
        "Research focus: AI applications in Healthcare & Accessibility Technology solutions",
        "Published research paper on CSLR based sign language recognition",
      ],
      status: "current",
    },
    {
      id: 8,
      type: "education",
      icon: GraduationCap,
      title: "Higher Secondary Education (PCM + CS)",
      organization: "Chameli Devi Public School",
      location: "Indore, India",
      date: "2021 - 2022",
      description:
        "Completed higher secondary education with PCM (Physics, Chemistry, Mathematics) and Computer Science stream. Developed strong foundation in analytical thinking, problem-solving, and programming fundamentals.",
      highlights: [
        "Percentage: 73.0%",
        "Science stream with Computer Science specialization",
        "Active participation in science exhibitions and coding competitions",
        "Foundation in Python programming",
      ],
      status: "completed",
    },
  ];

  const getStatusColor = (status: string) => {
    return 'bg-foreground'; // Unified black/white theme
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'education': return GraduationCap;
      case 'internship': return Briefcase;
      case 'achievement': return Award;
      default: return Award;
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experience & Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey of learning and growing
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border/60 md:bg-border"></div>

            {timelineEvents.map((event, index) => {
              const IconComponent = getTypeIcon(event.type);
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-start mb-8 md:mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline marker */}
                  <motion.div 
                    className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-8 md:top-1/2 z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative">
                      <motion.div 
                        className="w-6 h-6 md:w-8 md:h-8 bg-accent rounded-lg flex items-center justify-center shadow-lg border-2 border-background"
                        whileHover={{ rotate: 45 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="h-3 w-3 md:h-4 md:w-4 text-accent-foreground" />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-accent/20 rounded-lg"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-card border border-border rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex items-start mb-3 md:mb-4">
                        <motion.div 
                          className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-foreground/10 rounded-lg flex items-center justify-center mr-3 md:mr-4"
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="h-5 w-5 md:h-6 md:w-6 text-foreground" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 
                            className="text-lg md:text-xl font-bold text-foreground mb-1"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {event.title}
                          </motion.h3>
                          <p className="text-sm md:text-base text-foreground font-semibold mb-2">{event.organization}</p>
                          <div className="flex flex-col sm:flex-row sm:items-center text-muted-foreground text-xs md:text-sm mb-3 sm:space-x-4 space-y-1 sm:space-y-0">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {event.date}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {event.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <motion.p 
                        className="text-muted-foreground mb-4 leading-relaxed"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {event.description}
                      </motion.p>

                      {event.highlights && (
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground text-sm mb-2">Key Highlights:</h4>
                          <ul className="space-y-1">
                            {event.highlights.map((highlight, idx) => (
                              <motion.li 
                                key={idx} 
                                className="flex items-start text-sm text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                              >
                                <span className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                                {highlight}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {event.status === 'current' && (
                        <motion.div 
                          className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium"
                          animate={{ 
                            boxShadow: [
                              "0 0 0 0 rgba(59, 130, 246, 0.4)",
                              "0 0 0 10px rgba(59, 130, 246, 0)",
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          Currently Active
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;