import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Gmail",
      value: "prabhjotassi16@gmail.com",
      link: "mailto:prabhjotassi16@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "prabhjot0109",
      link: "https://github.com/prabhjot0109",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "prabhjotassi",
      link: "https://linkedin.com/in/prabhjotsinghassi",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 px-4">
            🌐 Connect & Collaborate
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            💬 Ask me about AI, Winning SIH and hackathons, or impactful
            projects.
            <br />
            🤝 I'm looking to collaborate on AI/ML and Flutter projects.
            <br />
            📫 Ready to discuss innovative solutions? Let's connect!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-6 md:space-y-8"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                I'm always interested in discussing new projects, creative
                ideas, or opportunities to be part of your vision. Whether
                you're a fellow developer, a startup looking for technical
                expertise, or someone with an interesting project, let's
                connect!
              </p>
            </div>

            {/* Contact Icons (icon-only similar to skills grid) */}
            <div className="grid grid-cols-3 gap-2 md:gap-3 max-w-sm mx-auto mb-10">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.link.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  className="portfolio-card p-2 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group w-full aspect-square flex flex-col justify-center items-center"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <div className="w-6 h-6 mx-auto mb-1 group-hover:scale-110 transition-transform duration-200">
                    <item.icon className="w-full h-full" />
                  </div>
                  {/* Tooltip style label on hover (desktop) */}
                  <span className="pointer-events-none absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] font-medium text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap select-none">
                    {item.label}
                  </span>
                  {/* Accessible text for screen readers */}
                  <span className="sr-only">{`${item.label}: ${item.value}`}</span>
                </motion.a>
              ))}
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="portfolio-card p-6 md:p-8 bg-accent/10 border-l-4 border-accent max-w-2xl mx-auto"
            >
              <p className="text-foreground italic text-base md:text-lg text-center">
                "Build What Matters."
              </p>
              <p className="text-muted-foreground text-sm md:text-base mt-3 text-center">
                - My Development Philosophy
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
