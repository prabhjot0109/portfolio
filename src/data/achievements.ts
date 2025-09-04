import { LucideIcon, Trophy, Award, Target, Users, Code, Lightbulb } from 'lucide-react';

export interface Achievement {
  icon: LucideIcon;
  title: string;
  organization?: string;
  year?: string;
  product?: string;
  description: string;
  impact: string;
}

export interface ImpactStat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export const majorAchievements: Achievement[] = [
  {
    icon: Trophy,
    title: "🥇 Intellify 3.0 Hackathon Winner",
    organization: "Marwadi University, Rajkot",
    year: "2025",
    product: "Best Software Solution",
    description: "National level hackathon winner recognized for creating the best software solution",
    impact: "National recognition for innovation excellence",
  },
  {
    icon: Trophy,
    title: "🏆 Smart India Hackathon 2024 Winner",
    organization: "Government of India",
    year: "2024",
    product: "Harvest.ai - Smart Farming Solution",
    description: "National-level hackathon victory with AI-powered agricultural innovation that transforms farming practices through precision agriculture and IoT integration",
    impact: "Deployed across 50+ farms, improving crop yield by 23%",
  },
  {
    icon: Award,
    title: "💰 IEEE Tech4Good Grant Recipient",
    organization: "IEEE Foundation",
    year: "2024",
    product: "Med.ai - Healthcare Innovation",
    description: "Awarded prestigious IEEE Tech4Good grant for developing AI-powered medical diagnosis system that democratizes healthcare access in underserved communities",
    impact: "Served 1000+ patients with 94.7% diagnostic accuracy",
  },
  {
    icon: Trophy,
    title: "🥉 HackIndia Regional Finalist",
    organization: "HackIndia",
    year: "2024",
    product: "EcoTrack - Environmental Monitoring",
    description: "Regional finalist for developing comprehensive environmental monitoring solution using IoT sensors and machine learning for pollution tracking",
    impact: "Implemented across 10+ cities for air quality monitoring",
  },
  {
    icon: Award,
    title: "🏅 OpenAI GPT-4 API Challenge Winner",
    organization: "OpenAI Developer Community",
    year: "2024",
    product: "AI-Powered Code Assistant",
    description: "Winner of OpenAI's GPT-4 API challenge for developing an intelligent code assistant that helps developers write better, more efficient code",
    impact: "Used by 500+ developers globally",
  },
];

export const impactStats: ImpactStat[] = [
  {
    label: "Hackathon Wins",
    value: "6",
    icon: Trophy,
  },
  {
    label: "Lives Impacted",
    value: "10,000+",
    icon: Users,
  },
  {
    label: "Projects Deployed",
    value: "25+",
    icon: Code,
  },
  {
    label: "Innovation Awards",
    value: "8",
    icon: Lightbulb,
  },
];