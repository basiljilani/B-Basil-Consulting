
import { ArrowRight, TrendingUp, Brain, BarChart3 } from "lucide-react";
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

  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.6,
      }
    })
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 min-h-[calc(100vh-4rem)]">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 -translate-y-1/4 translate-x-1/4 transform opacity-10">
          <svg width="304" height="484" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="6" cy="6" r="2" fill="#FF7A14" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#pattern-circles)" />
          </svg>
        </div>
        <div className="absolute left-0 bottom-0 -translate-x-1/4 translate-y-1/4 transform opacity-10">
          <svg width="304" height="484" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="pattern-circles-2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="6" cy="6" r="2" fill="#FF7A14" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#pattern-circles-2)" />
          </svg>
        </div>
        <motion.div
          className="absolute right-1/4 top-1/3 h-36 w-36 rounded-full bg-basil-500/10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.15, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <Container className="relative z-10 h-full flex items-center py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left max-w-xl"
          >            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900">
              Turning <span className="inline-block relative">
                Data
                <motion.div
                  className="absolute -z-10 bottom-0 left-0 h-1.5 bg-basil-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                />
              </span> into 
              <br className="hidden sm:block" /> Business{" "}
              <span className="inline-block relative">
                Advantage
                <motion.div
                  className="absolute -z-10 bottom-0 left-0 h-1.5 bg-basil-500"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>
            </h1>
            
            <motion.p
              className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Leverage your data's full potential with our expert consulting services. 
              We turn information into insights that drive growth.
            </motion.p>
            
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Button asChild size="lg" className="rounded-md px-6 group">
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
          
          {/* Right stats column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-2">
              {/* AI Market Growth - McKinsey */}
              <motion.div
                custom={0}
                variants={statsVariants}
                initial="hidden"
                animate="visible"
                className="glass-card rounded-lg p-2 shadow-md border border-basil-100 bg-white/90"
              >
                <div className="flex items-center mb-1">
                  <div className="rounded-full bg-basil-50 w-6 h-6 flex items-center justify-center mr-2">
                    <Brain className="h-3 w-3 text-basil-500" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xs">AI Impact</h3>
                </div>
                
                <div className="mt-1">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "87%" }}
                    transition={{ delay: 1, duration: 1 }}
                    className="h-1 bg-basil-500 rounded-full"
                  />
                </div>
                
                <div className="mt-1 flex justify-between items-baseline">
                  <span className="text-base font-bold text-gray-900">$13T</span>
                  <span className="text-xs text-basil-600 flex items-center">
                    <TrendingUp className="h-2.5 w-2.5 mr-1" />
                    By 2030
                  </span>
                </div>
                
                <p className="mt-1 text-xs text-gray-600">
                  Projected global economic value added by AI
                </p>
              </motion.div>
              
              {/* Global Fintech - Goldman Sachs */}
              <motion.div
                custom={1}
                variants={statsVariants}
                initial="hidden"
                animate="visible"
                className="glass-card rounded-lg p-2 shadow-md border border-basil-100 bg-white/90"
              >
                <div className="flex items-center mb-1">
                  <div className="rounded-full bg-basil-50 w-6 h-6 flex items-center justify-center mr-2">
                    <BarChart3 className="h-3 w-3 text-basil-500" />
                  </div>
                  <h3 className="font-semibold text-gray-800 text-xs">Fintech Growth</h3>
                </div>
                
                <div className="mt-1">
                  <div className="flex gap-0.5 h-8">
                    {[35, 42, 48, 55, 62, 68, 75].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                        className="flex-1 bg-basil-500 rounded-t-sm"
                      />
                    ))}
                  </div>
                </div>
                
                <div className="mt-1 flex justify-between items-baseline">
                  <span className="text-base font-bold text-gray-900">$1.8T</span>
                  <span className="text-xs text-basil-600 flex items-center">
                    <TrendingUp className="h-2.5 w-2.5 mr-1" />
                    Revenue by 2025
                  </span>
                </div>
                
                <p className="mt-1 text-xs text-gray-600">
                  Global fintech industry projected revenue
                </p>
              </motion.div>
              
              {/* Digital Transformation ROI - Deloitte */}
              <motion.div
                custom={2}
                variants={statsVariants}
                initial="hidden"
                animate="visible"
                className="glass-card rounded-lg p-2 shadow-md border border-basil-100 bg-white/90 col-span-2"
              >
                <div className="flex items-center mb-1">
                  <div className="rounded-full bg-basil-50 w-6 h-6 flex items-center justify-center mr-2">
                    <TrendingUp className="h-3 w-3 text-basil-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-xs">Digital Transformation ROI</h3>
                    <p className="text-xs text-gray-600">Digitally mature companies outperform</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-2 mt-1">
                  {[3.0, 4.1, 5.8].map((value, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.5 + i * 0.2, duration: 0.5 }}
                      className="p-1 rounded-md text-center bg-gray-50"
                    >
                      <div className="text-sm font-bold text-basil-600">{value}x</div>
                      <div className="text-xs text-gray-500">
                        {i === 0 ? 'Revenue' : i === 1 ? 'Profit' : 'Growth'} 
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="absolute -bottom-1 -right-1 text-xs bg-basil-600 text-white py-0.5 px-1 rounded"
            >
              Sources: McKinsey, Goldman Sachs 2024
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
