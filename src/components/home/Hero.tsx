
import { ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresElement = document.getElementById('features');
    if (featuresElement) {
      featuresElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-basil-50/70 to-transparent opacity-70"></div>
        <motion.div 
          className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-basil-500/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-[5%] w-72 h-72 rounded-full bg-basil-300/15 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            delay: 1,
            ease: "easeInOut" 
          }}
        />
      </div>
      
      <Container className="relative">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full text-basil-700 bg-basil-50 border border-basil-100">
                Data Solutions for Today's Challenges
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Transforming <span className="text-gradient relative">
                Data
                <motion.div 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-basil-500 to-basil-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.1, duration: 0.8 }}
                />
              </span> into <br className="hidden sm:inline" />
              Strategic <span className="text-gradient relative">
                Assets
                <motion.div 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-basil-500 to-basil-400"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Basil Consulting helps organizations build robust data infrastructures,
              implement advanced analytics, and create custom solutions tailored to your business needs.
            </motion.p>
            
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Button asChild size="lg" className="rounded-full group relative overflow-hidden">
                <Link to="/contact">
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <motion.div 
                    className="absolute inset-0 bg-basil-600 -z-0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full hover:bg-basil-50 hover:text-basil-700 border-basil-200">
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-16 flex flex-col items-center justify-start cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            onClick={scrollToFeatures}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <ChevronDown className="h-8 w-8 text-basil-500" />
            </motion.div>
            <span className="text-xs text-muted-foreground mt-1">Scroll</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
