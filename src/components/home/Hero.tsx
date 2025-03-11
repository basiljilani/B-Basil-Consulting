
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-radial from-basil-50/70 to-transparent opacity-70"></div>
        
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full text-basil-700 bg-basil-50 border border-basil-100 animate-fade-in">
            Data Solutions for Today's Challenges
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
            Transforming <span className="text-gradient">Data</span> into <br className="hidden sm:inline" />
            Strategic <span className="text-gradient">Assets</span>
          </h1>
          
          <p className="mt-6 text-xl text-muted-foreground animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            Basil Consulting helps organizations build robust data infrastructures,
            implement advanced analytics, and create custom solutions tailored to your business needs.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
