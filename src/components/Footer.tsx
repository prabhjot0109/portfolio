import React from "react";
import { Heart, Github, Linkedin, Mail, ArrowUp, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/prabhjot0109", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/prabhjotsinghassi",
      label: "LinkedIn",
    },
    // { icon: Twitter, href: "#", label: "X (Twitter)" }, // Uncomment if needed
    { icon: Mail, href: "mailto:prabhjotassi16@gmail.com", label: "Email" },
  ];

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
    },
  ];

  return (
    <footer className="relative bg-background py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Dynamic Glow Effect - Sun (Light) / Cosmos (Dark) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[140%] h-[500px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200/30 via-orange-100/10 to-transparent dark:from-indigo-500/20 dark:via-purple-900/10 dark:to-transparent pointer-events-none blur-[80px] opacity-60" />

      {/* Starry effect for dark mode */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-12 sm:mb-16 md:mb-20">
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-5 space-y-5 sm:space-y-6 md:space-y-7">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <span className="text-2xl sm:text-3xl font-space font-bold tracking-tighter">
                Prabhjot<span className="text-portfolio-accent">.</span>
              </span>
            </motion.div>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-base sm:text-lg">
              Crafting digital experiences that merge art with functionality.
              Let's build the future software together.
            </p>

            <div className="flex items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -4, scale: 1.1 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full border-2 border-border/60 text-foreground hover:text-portfolio-accent hover:border-portfolio-accent hover:bg-portfolio-accent/10 dark:hover:bg-portfolio-accent/20 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-2 lg:col-span-7 grid grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Navigation */}
            <div className="space-y-5 sm:space-y-6">
              <h4 className="font-space font-bold text-xs sm:text-sm uppercase tracking-wider text-foreground">
                Navigation
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {footerLinks[0].links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-portfolio-accent transition-colors duration-200 text-sm sm:text-base flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-portfolio-accent/0 group-hover:bg-portfolio-accent transition-all duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Section */}
            <div className="space-y-5 sm:space-y-6">
              <h4 className="font-space font-bold text-xs sm:text-sm uppercase tracking-wider text-foreground">
                Open for Roles
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  "App Development",
                  "AI Development",
                  "AI Integration",
                  "UI/UX Design",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="text-muted-foreground text-sm sm:text-base"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-7 md:pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} Prabhjot Singh. All rights reserved.
          </p>

          <div className="flex items-center gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
              Made with{" "}
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 fill-red-500 animate-pulse" />{" "}
            </p>
            <button
              onClick={scrollToTop}
              className="p-2.5 sm:p-3 rounded-full border-2 border-border/60 text-foreground hover:text-portfolio-accent hover:border-portfolio-accent hover:bg-portfolio-accent/10 dark:hover:bg-portfolio-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-portfolio-accent/20"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
