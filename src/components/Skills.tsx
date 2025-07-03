import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cpu, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "Dart", level: 75 }
      ]
    },
    {
      icon: Database,
      title: "Frameworks & Libraries",
      skills: [
        { name: "React", level: 85 },
        { name: "Flutter", level: 80 },
        { name: "Django", level: 75 },
        { name: "TensorFlow", level: 70 },
        { name: "Node.js", level: 75 }
      ]
    },
    {
      icon: Cpu,
      title: "AI & ML Concepts",
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Computer Vision", level: 80 },
        { name: "Signal Processing", level: 75 },
        { name: "Deep Learning", level: 70 },
        { name: "Natural Language Processing", level: 65 }
      ]
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Android Studio", level: 80 },
        { name: "Simulink", level: 70 },
        { name: "Blender", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="portfolio-card p-6"
            >
              <div className="flex items-center mb-6">
                <category.icon className="h-8 w-8 text-portfolio-accent mr-3" />
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-portfolio-accent to-portfolio-glow rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8">Technologies I Work With</h3>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6 max-w-4xl mx-auto">
            {['Python', 'React', 'Flutter', 'TensorFlow', 'Django', 'Node.js', 'Git', 'VS Code'].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="portfolio-card p-4 text-center hover:scale-110 transition-transform duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-2 bg-portfolio-accent/20 rounded-lg flex items-center justify-center">
                  <span className="text-portfolio-accent font-bold text-lg">
                    {tech.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-foreground">{tech}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;