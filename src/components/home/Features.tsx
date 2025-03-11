
import { BarChart, Shield, Code, LineChart } from "lucide-react";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

const features = [
  {
    icon: <BarChart className="h-10 w-10 text-basil-500" />,
    title: "Data Infrastructure",
    description: "Build robust, scalable data architectures that serve as the foundation for your organization's data strategy.",
  },
  {
    icon: <Shield className="h-10 w-10 text-basil-500" />,
    title: "Security & Compliance",
    description: "Implement comprehensive data security measures and ensure compliance with industry regulations and standards.",
  },
  {
    icon: <Code className="h-10 w-10 text-basil-500" />,
    title: "Custom Solutions",
    description: "Develop tailored data solutions that address your specific business challenges and unlock new opportunities.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-basil-500" />,
    title: "Analytics & Insights",
    description: "Transform raw data into actionable insights with advanced analytics and intuitive visualization tools.",
  },
];

const Features = () => {
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <SectionHeading
          title="Our Areas of Expertise"
          subtitle="Leverage our specialized knowledge and experience to solve your most complex data challenges."
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="rounded-full bg-basil-50 w-16 h-16 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
