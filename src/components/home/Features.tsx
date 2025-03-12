import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { features } from "@/data/features";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <section id="features" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <SectionHeading
          title="Our Areas of Expertise"
          subtitle="Leverage our specialized knowledge and experience to solve your most complex data challenges."
          centered
        />
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 
                        transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
            >
              {/* Colored top bar */}
              <div className="h-1.5 w-full bg-basil-500"></div>
              
              <div className="p-8">
                {/* Icon with gradient background */}
                <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-r from-basil-500 to-basil-600 text-white">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                
                {/* Learn more link */}
                <Link 
                  to={`/solutions/${feature.slug}`} 
                  className="inline-flex items-center text-basil-600 font-medium hover:text-basil-700 transition-colors group-hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Features;
