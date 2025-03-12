import { BarChart2, Database, Lock, LineChart, Code, PieChart, Server, Shield } from "lucide-react";
import React from "react";

export const features = [
  {
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics techniques and visualization tools.",
    icon: <BarChart2 className="h-6 w-6" />,
    slug: "analytics-insights"
  },
  {
    title: "Data Infrastructure",
    description: "Build robust, scalable data platforms that serve as the foundation for your data-driven initiatives.",
    icon: <Database className="h-6 w-6" />,
    slug: "data-infrastructure"
  },
  {
    title: "Security & Compliance",
    description: "Protect your data assets and ensure regulatory compliance with comprehensive security solutions.",
    icon: <Shield className="h-6 w-6" />,
    slug: "security-compliance"
  },
  {
    title: "Custom Solutions",
    description: "Tailored data solutions designed to address your unique business challenges and opportunities.",
    icon: <Code className="h-6 w-6" />,
    slug: "custom-solutions"
  }
]; 