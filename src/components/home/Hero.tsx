
import { ArrowRight } from "lucide-react";
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
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 transform">
          <svg width="404" height="784" fill="none" viewBox="0 0 404 784" className="opacity-30">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="6" cy="6" r="2" fill="#FF7A14" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#pattern-circles)" />
          </svg>
        </div>
        <div className="absolute left-0 bottom-0 -translate-x-1/4 translate-y-1/4 transform">
          <svg width="404" height="784" fill="none" viewBox="0 0 404 784" className="opacity-30">
            <defs>
              <pattern id="pattern-circles-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="6" cy="6" r="2" fill="#FF7A14" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#pattern-circles-2)" />
          </svg>
        </div>
        <motion.div
          className="absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-basil-500/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-medium bg-basil-50 text-basil-700 rounded-full border border-basil-100">
              Data-Driven Decisions
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
              Turning <span className="inline-block relative">
                Data
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-basil-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span> into 
              <br className="hidden sm:block" /> Business{" "}
              <span className="inline-block relative">
                Advantage
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-basil-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
            </h1>
            
            <motion.p
              className="mt-6 text-lg text-gray-600 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Leverage your data's full potential with our expert consulting services. 
              We turn information into insights that drive growth and innovation.
            </motion.p>
            
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button asChild size="lg" className="rounded-md px-8 group">
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-md border-basil-200"
                onClick={scrollToFeatures}
              >
                Explore Our Solutions
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right image column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-basil-500/20 to-basil-600/30 mix-blend-multiply z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
              />
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                alt="Data visualization"
                className="w-full h-full object-cover"
              />
            </div>
            
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-basil-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">98% Success Rate</div>
                  <div className="text-xs text-gray-500">Based on client outcomes</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -top-6 -right-6 bg-white rounded-lg shadow-lg p-4 max-w-xs"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-basil-500 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                    <path fillRule="evenodd" d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06a.75.75 0 11-1.061 1.061L5.05 4.11a.75.75 0 010-1.06zM15.95 3.05a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 10zM14.75 9.25a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z" />
                    <path fillRule="evenodd" d="M7.5 10a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm2.5-4a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">270+ Projects</div>
                  <div className="text-xs text-gray-500">Successfully completed</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
