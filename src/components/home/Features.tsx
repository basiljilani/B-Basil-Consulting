
import { BarChart, Shield, Code, LineChart } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { motion } from "framer-motion";

const features = [
  {
    icon: <BarChart className="h-8 w-8 text-basil-500" />,
    title: "Data Infrastructure",
    description: "Build robust, scalable data architectures that serve as the foundation for your organization's data strategy.",
  },
  {
    icon: <Shield className="h-8 w-8 text-basil-500" />,
    title: "Security & Compliance",
    description: "Implement comprehensive data security measures and ensure compliance with industry regulations and standards.",
  },
  {
    icon: <Code className="h-8 w-8 text-basil-500" />,
    title: "Custom Solutions",
    description: "Develop tailored data solutions that address your specific business challenges and unlock new opportunities.",
  },
  {
    icon: <LineChart className="h-8 w-8 text-basil-500" />,
    title: "Analytics & Insights",
    description: "Transform raw data into actionable insights with advanced analytics and intuitive visualization tools.",
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="harmony-section section-padding bg-gray-50">
      <Container>
        <SectionHeading
          title="Our Areas of Expertise"
          subtitle="Leverage our specialized knowledge and experience to solve your most complex data challenges."
          centered
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="harmony-card card-light rounded-xl hover-lift hover-glow"
            >
              <div className="icon-container-gradient text-white mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-basil-500 to-transparent w-1/3 opacity-70"></div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Features;
