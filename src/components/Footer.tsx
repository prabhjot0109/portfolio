import React from 'react';
import { Heart, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/prabhjotassi', 
      label: 'GitHub Profile' 
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/prabhjotassi', 
      label: 'LinkedIn Profile' 
    },
    { 
      icon: Mail, 
      href: 'mailto:prabhjotassi@gmail.com', 
      label: 'Email Contact' 
    }
  ];

  return (
    <footer className="bg-muted/30 py-12" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">Prabhjot Singh Assi</h3>
            <p className="text-sm text-muted-foreground mb-4">
              AI/ML Developer & Software Engineer passionate about creating innovative solutions that make a positive impact.
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 rounded"
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>📧 prabhjotassi@gmail.com</p>
              <p>📍 Punjab, India</p>
              <p>🌟 Available for collaborations</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Prabhjot Singh Assi. Made with <Heart className="inline h-4 w-4 text-red-500" aria-label="love" /> using React & TypeScript
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-portfolio-accent focus:ring-offset-2 rounded p-1"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;