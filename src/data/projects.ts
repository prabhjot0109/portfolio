import { LucideIcon } from 'lucide-react';
import harvestImage from '@/assets/project-harvest.jpg';
import islImage from '@/assets/project-isl.jpg';
import parasImage from '@/assets/project-paras.jpg';
import solarImage from '@/assets/project-solar.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  tags: string[];
  image: string;
  achievements: string;
  impact: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'harvest-ai',
    title: "🌾 Harvest.ai - Smart Farming Solution",
    description: "AI-powered crop monitoring and precision agriculture platform that revolutionizes farming practices through computer vision and IoT integration.",
    longDescription: "Harvest.ai is a comprehensive smart farming solution that leverages artificial intelligence and IoT sensors to optimize agricultural practices. The platform provides real-time crop monitoring, disease detection, and precision farming recommendations to maximize yield while minimizing resource consumption.",
    features: [
      "Real-time crop health monitoring using computer vision",
      "Disease detection and early warning system",
      "Precision irrigation recommendations",
      "Weather-based farming insights",
      "Yield prediction and optimization",
      "IoT sensor integration for soil analysis",
      "Mobile app for farmers with offline capabilities",
      "Multi-language support for regional farmers"
    ],
    tags: ["Python", "TensorFlow", "Computer Vision", "IoT", "React Native", "MongoDB", "AWS"],
    image: harvestImage,
    achievements: "🏆 Smart India Hackathon 2024 Winner - Agriculture Track",
    impact: "Deployed across 50+ farms, improving crop yield by 23% and reducing water usage by 35%",
    demoUrl: "https://harvest-ai-demo.com",
    githubUrl: "https://github.com/prabhjotassi/harvest-ai"
  },
  {
    id: 'medai-diagnosis',
    title: "🏥 Med.ai - AI Medical Diagnosis",
    description: "Advanced medical diagnosis system using deep learning for accurate disease detection and treatment recommendations.",
    longDescription: "Med.ai is a cutting-edge medical diagnosis platform that utilizes deep learning algorithms to analyze medical images and patient data for accurate disease detection. The system provides healthcare professionals with AI-powered insights and treatment recommendations.",
    features: [
      "Medical image analysis for X-rays, MRIs, and CT scans",
      "Multi-disease detection capability",
      "Treatment recommendation engine",
      "Patient history integration",
      "Real-time consultation support",
      "HIPAA-compliant data handling",
      "Doctor dashboard with analytics",
      "Integration with hospital management systems"
    ],
    tags: ["Python", "PyTorch", "Medical Imaging", "Deep Learning", "Flask", "PostgreSQL", "Docker"],
    image: islImage,
    achievements: "🥇 IEEE Tech4Good Grant Recipient - Healthcare Innovation",
    impact: "Achieved 94.7% accuracy in disease detection, serving 1000+ patients across 5 hospitals",
    demoUrl: "https://medai-diagnosis.com",
    githubUrl: "https://github.com/prabhjotassi/medai"
  },
  {
    id: 'paras-security',
    title: "🔒 Paras - Cybersecurity Platform",
    description: "Comprehensive cybersecurity solution with threat detection, vulnerability assessment, and automated incident response.",
    longDescription: "Paras is an enterprise-grade cybersecurity platform that provides comprehensive protection through advanced threat detection, real-time monitoring, and automated incident response. The platform uses machine learning to identify and mitigate security threats before they cause damage.",
    features: [
      "Real-time threat detection and monitoring",
      "Vulnerability assessment and penetration testing",
      "Automated incident response system",
      "Network traffic analysis",
      "Compliance reporting and audit trails",
      "Multi-factor authentication integration",
      "Security dashboard with analytics",
      "API security and rate limiting"
    ],
    tags: ["Python", "Elasticsearch", "Kafka", "React", "Node.js", "Docker", "Kubernetes", "AWS"],
    image: parasImage,
    achievements: "🛡️ Best Cybersecurity Innovation - TechSecure 2024",
    impact: "Protected 100+ organizations from 10,000+ security threats with 99.8% detection accuracy",
    demoUrl: "https://paras-security.com",
    githubUrl: "https://github.com/prabhjotassi/paras-security"
  },
  {
    id: 'solar-optimizer',
    title: "☀️ Solar Energy Optimizer",
    description: "Smart solar panel management system with predictive analytics and automated optimization for maximum energy efficiency.",
    longDescription: "Solar Energy Optimizer is an intelligent solar panel management system that maximizes energy production through predictive analytics, weather forecasting, and automated panel positioning. The platform helps solar installations achieve optimal performance and ROI.",
    features: [
      "Predictive energy production analytics",
      "Weather-based optimization algorithms",
      "Automated panel positioning system",
      "Real-time performance monitoring",
      "Maintenance scheduling and alerts",
      "Grid integration and load balancing",
      "Mobile app for system monitoring",
      "ROI calculation and reporting"
    ],
    tags: ["Python", "Machine Learning", "IoT", "React", "Time Series", "PostgreSQL", "Grafana"],
    image: solarImage,
    achievements: "🔋 GreenTech Innovation Award 2024 - Renewable Energy",
    impact: "Increased solar energy efficiency by 28% across 200+ installations, saving $2M+ annually",
    demoUrl: "https://solar-optimizer.com",
    githubUrl: "https://github.com/prabhjotassi/solar-optimizer"
  }
];