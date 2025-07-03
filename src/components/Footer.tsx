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
    { icon: Github, href: 'https://github.com/prabhjot', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/prabhjot', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:prabhjot@example.com', label: 'Email' }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Bio */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Prabhjot</h3>
            <p className="text-muted-foreground">
              AI & ML enthusiast building innovative solutions that bridge 
              technology and human needs. Always learning, always creating.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-portfolio-accent/20 hover:text-portfolio-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-portfolio-accent transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 prabhjot@example.com</p>
              <p>📱 +91 98765 43210</p>
              <p>📍 Punjab, India</p>
            </div>
            <div className="portfolio-card p-4">
              <p className="text-sm text-muted-foreground">
                Open to opportunities and collaborations!
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Prabhjot. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm flex items-center">
              Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;