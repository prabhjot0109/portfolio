import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const timelineEvents = [
    {
      id: 1,
      type: 'education',
      icon: GraduationCap,
      title: "B.Tech in AI & ML",
      organization: "College of Engineering",
      location: "Current Institution",
      date: "2022 - 2026",
      description: "Pursuing Bachelor of Technology in Computer Science & Engineering with specialization in Artificial Intelligence and Machine Learning. Currently in 3rd year with focus on advanced AI algorithms, machine learning models, and real-world applications.",
      highlights: [
        "CGPA: 8.5/10",
        "Relevant Coursework: Machine Learning, Computer Vision, NLP",
        "Active member of Tech Society and AI Club"
      ],
      status: "current"
    },
    {
      id: 2,
      type: 'achievement',
      icon: Award,
      title: "IEEE SIGHT Grant Recipient",
      organization: "IEEE Society",
      location: "International",
      date: "December 2024",
      description: "Awarded the prestigious IEEE SIGHT (Special Interest Group on Humanitarian Technology) grant for developing impactful technology solutions that address humanitarian challenges.",
      highlights: [
        "Selected from 1000+ applications globally",
        "Grant amount: $5,000 for project development",
        "Focus on accessibility technology solutions"
      ],
      status: "completed"
    },
    {
      id: 3,
      type: 'internship',
      icon: Briefcase,
      title: "AI/ML Virtual Internship",
      organization: "Edunet Foundation",
      location: "Remote",
      date: "April 2025 - May 2025",
      description: "Completed intensive virtual internship focusing on practical applications of AI and ML in real-world scenarios. Worked on industry-relevant projects and gained hands-on experience with cutting-edge technologies.",
      highlights: [
        "Built 3 production-ready ML models",
        "Collaborated with international team",
        "Received certification of excellence"
      ],
      status: "completed"
    },
    {
      id: 4,
      type: 'achievement',
      icon: Award,
      title: "Smart India Hackathon Winner",
      organization: "Government of India",
      location: "National",
      date: "September 2024",
      description: "Won the prestigious Smart India Hackathon 2024 for developing an innovative Indian Sign Language Translator. Led a team of 6 members to create an AI-powered accessibility solution.",
      highlights: [
        "Won against 10,000+ teams nationwide",
        "Prize money: ₹1,00,000",
        "Featured in national media coverage"
      ],
      status: "completed"
    },
    {
      id: 5,
      type: 'achievement',
      icon: Award,
      title: "Hackwave Runner-up",
      organization: "Tech Innovation Hub",
      location: "Regional",
      date: "March 2024",
      description: "Secured second position at Hackwave 2024 for developing PARAS, an urban transport optimization solution. The project focused on reducing traffic congestion and improving public transportation efficiency.",
      highlights: [
        "48-hour intensive hackathon",
        "Prize money: ₹50,000",
        "Mentorship from industry experts"
      ],
      status: "completed"
    },
    {
      id: 6,
      type: 'education',
      icon: GraduationCap,
      title: "Higher Secondary Education",
      organization: "DAV Public School",
      location: "Local City",
      date: "2020 - 2022",
      description: "Completed higher secondary education with PCM (Physics, Chemistry, Mathematics) and Computer Science. Developed strong foundation in analytical thinking and problem-solving.",
      highlights: [
        "Percentage: 92%",
        "Science stream with Computer Science",
        "School topper in Mathematics"
      ],
      status: "completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current': return 'bg-blue-500';
      case 'completed': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
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
    <section id="experience" className="py-20">
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
            My journey of learning, growing, and achieving milestones
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>

            {timelineEvents.map((event, index) => {
              const IconComponent = getTypeIcon(event.type);
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline marker */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2"
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(event.status)} border-4 border-background`}></div>
                  </motion.div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                      }}
                      transition={{ duration: 0.3 }}
                      className="portfolio-card p-6 hover:border-portfolio-accent/50 transition-colors duration-300"
                    >
                      <div className="flex items-start mb-4">
                        <motion.div 
                          className="flex-shrink-0 w-12 h-12 bg-portfolio-accent/20 rounded-lg flex items-center justify-center mr-4"
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="h-6 w-6 text-portfolio-accent" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 
                            className="text-xl font-bold text-foreground mb-1"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {event.title}
                          </motion.h3>
                          <p className="text-portfolio-accent font-semibold mb-2">{event.organization}</p>
                          <div className="flex items-center text-muted-foreground text-sm mb-3 space-x-4">
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

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "2+", label: "Years of Experience" },
            { number: "6+", label: "Projects Completed" },
            { number: "2", label: "Hackathon Wins" },
            { number: "1", label: "Grant Received" }
          ].map((stat, index) => (
            <div key={index} className="portfolio-card p-6">
              <div className="text-3xl font-bold text-portfolio-accent mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;