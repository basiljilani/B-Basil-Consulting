import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

interface ComingSoonProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  estimatedDate?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ 
  title, 
  description, 
  icon,
  estimatedDate = "Q3 2024" 
}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-20 md:py-32">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex justify-center"
              >
                <div className="h-20 w-20 rounded-full bg-basil-100 flex items-center justify-center text-basil-600">
                  {icon}
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                {title}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-gray-600 mb-8"
              >
                {description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-12 inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-700"
              >
                <Calendar className="h-5 w-5 mr-2 text-basil-500" />
                <span>Estimated launch: {estimatedDate}</span>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild size="lg" className="rounded-full">
                  <Link to="/contact">
                    Get Notified When Live
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full">
                  <Link to="/">
                    Back to Home
                  </Link>
                </Button>
              </motion.div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ComingSoon; 