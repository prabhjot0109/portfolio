import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/prabhjot0109', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/prabhjotsinghassi', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:prabhjotassi16@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">Prabhjot Singh</h3>
            <p className="text-sm text-muted-foreground">AI/ML Engineer | Full-Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-muted rounded-lg flex items-center justify-center hover:bg-portfolio-accent/20 hover:text-portfolio-accent transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Prabhjot Singh. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;