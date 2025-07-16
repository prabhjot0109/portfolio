import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const timelineEvents = [
    {
      id: 1,
      type: 'education',
      icon: GraduationCap,
      title: "B.Tech in Computer Science & Engineering",
      organization: "Specialization: AI & ML",
      location: "Current Institution",
      date: "2022 - 2026",
      description: "Pursuing Bachelor of Technology in Computer Science & Engineering with specialization in Artificial Intelligence and Machine Learning. Currently in 3rd year with focus on advanced AI algorithms, machine learning models, and real-world applications.",
      highlights: [
        "• Currently maintaining CGPA: 8.5/10",
        "• Core subjects: Machine Learning, Computer Vision, Natural Language Processing, Data Structures & Algorithms",
        "• Active leadership role in Tech Society and AI Research Club",
        "• Research focus: AI applications in Healthcare & Accessibility Technology solutions",
        "• Published research paper on AI-based accessibility tools"
      ],
      status: "current"
    },
    {
      id: 2,
      type: 'achievement',
      icon: Award,
      title: "Smart India Hackathon 2024 Winner",
      organization: "Ministry of Education & AICTE",
      location: "National Level",
      date: "September 2024",
      description: "🥇 Won the prestigious Smart India Hackathon 2024 for developing Signify - an innovative Indian Sign Language Translator. Led a team of 6 members to create an AI-powered accessibility solution addressing Problem Statement 1716.",
      highlights: [
        "• Won against 10,000+ participating teams from across India",
        "• Prize: ₹1,00,000 cash award + national recognition and media coverage",
        "• Featured in Times of India and other major publications",
        "• Developed 40+ Indian Sign Language gesture recognition capability",
        "• Achieved 90%+ real-time translation accuracy using advanced computer vision"
      ],
      status: "completed"
    },
    {
      id: 3,
      type: 'achievement',
      icon: Award,
      title: "IEEE Tech4Good Grant Recipient",
      organization: "IEEE Humanitarian Technology Board",
      location: "International",
      date: "December 2024",
      description: "💰 Awarded the prestigious $4000 IEEE Tech4Good Grant for developing Krishi - an IoT-enabled smart agriculture platform that empowers farmers with data-driven insights and improves crop yield management.",
      highlights: [
        "• Awarded $4,000 grant for innovative IoT-enabled smart agriculture platform",
        "• Selected from over 1,000+ applications submitted globally",
        "• Primary focus: Sustainable agriculture technology and data-driven farming solutions",
        "• Direct impact: 10+ farmers benefited in the pilot program implementation",
        "• Results: 20% measurable improvement in crop yield efficiency and resource optimization"
      ],
      status: "completed"
    },
    {
      id: 4,
      type: 'achievement', 
      icon: Award,
      title: "HackWave 2024 Winner",
      organization: "CDGI, Indore",
      location: "Regional",
      date: "March 2024",
      description: "🏆 Secured first position at HackWave 2024 for developing PARAS - an urban transport optimization solution using machine learning algorithms to reduce traffic congestion and improve public transportation efficiency.",
      highlights: [
        "• Completed 48-hour intensive hackathon challenge with innovative solution",
        "• Prize: ₹75,000 cash award + ongoing mentorship and guidance",
        "• Developed advanced ML model for traffic prediction and route optimization",
        "• Implemented real-time route planning system for urban transportation",
        "• Integrated carbon footprint reduction tracking and environmental impact analysis"
      ],
      status: "completed"
    },
    {
      id: 5,
      type: 'achievement',
      icon: Award,
      title: "Prayatna 2024 - 3rd Runner-up",
      organization: "AITR, Indore",
      location: "Regional",
      date: "October 2024",
      description: "🥉 Secured 3rd Runner-up position at Prayatna 2024 for developing Med.AI - an AI-powered healthcare diagnostic assistant that enhances medical decision-making through advanced computer vision and machine learning.",
      highlights: [
        "• Achieved 15% accuracy improvement in healthcare AI diagnostic solutions",
        "• Advanced X-Ray image analysis using deep learning and computer vision",
        "• Integrated medical expert consultation system for enhanced decision-making",
        "• Developed scalable cloud-based architecture for healthcare institutions",
        "• Prize: ₹25,000 cash award + recognition certificate and industry exposure"
      ],
      status: "completed"
    },
    {
      id: 6,
      type: 'achievement',
      icon: Award,
      title: "Codespire 2023 Runner-up",
      organization: "AITR, Indore", 
      location: "Regional",
      date: "November 2023",
      description: "🥈 Secured Runner-up position at Codespire 2023 for developing an innovative software solution that demonstrated exceptional problem-solving skills and technical implementation.",
      highlights: [
        "Innovative software development challenge",
        "Prize money: ₹30,000",
        "Mentorship from industry experts",
        "Technical excellence recognition",
        "Early achievement in 2nd year of college"
      ],
      status: "completed"
    },
    {
      id: 7,
      type: 'internship',
      icon: Briefcase,
      title: "AI/ML Intern",
      organization: "Edunet Foundation",
      location: "Remote",
      date: "November 2024 - December 2024",
      description: "Completed intensive virtual internship focusing on practical applications of AI and ML in real-world scenarios. Worked on AI Transformative Learning project using CNN and MobileNetV2 architecture.",
      highlights: [
        "Deployed production-ready ML model on Streamlit Cloud",
        "Implemented CNN with MobileNetV2 for image classification", 
        "Transfer learning on ImageNet dataset",
        "Real-time inference and model optimization",
        "Received certification of excellence"
      ],
      status: "completed"
    },
    {
      id: 8,
      type: 'education',
      icon: GraduationCap,
      title: "Higher Secondary Education (PCM + CS)",
      organization: "DAV Public School",
      location: "Local City",
      date: "2020 - 2022",
      description: "Completed higher secondary education with PCM (Physics, Chemistry, Mathematics) and Computer Science stream. Developed strong foundation in analytical thinking, problem-solving, and programming fundamentals.",
      highlights: [
        "Percentage: 92% (Distinction)",
        "Science stream with Computer Science specialization",
        "School topper in Mathematics and Computer Science",
        "Active participation in science exhibitions and coding competitions",
        "Foundation in C++ and Python programming"
      ],
      status: "completed"
    }
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
                      className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start mb-4">
                        <motion.div 
                          className="flex-shrink-0 w-12 h-12 bg-foreground/10 rounded-lg flex items-center justify-center mr-4"
                          whileHover={{ rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="h-6 w-6 text-foreground" />
                        </motion.div>
                        <div className="flex-1">
                          <motion.h3 
                            className="text-xl font-bold text-foreground mb-1"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {event.title}
                          </motion.h3>
                          <p className="text-foreground font-semibold mb-2">{event.organization}</p>
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
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-5 gap-6 text-center"
        >
          {[
            { number: "3+", label: "Years of Experience", icon: "📅" },
            { number: "8+", label: "Projects Completed", icon: "💻" },
            { number: "5", label: "Hackathon Wins", icon: "🏆" },
            { number: "$4000", label: "Grant Received", icon: "💰" },
            { number: "10k+", label: "People Impacted", icon: "🌍" }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="portfolio-card p-6 hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-portfolio-accent mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;