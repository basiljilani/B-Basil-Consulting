import { Users, Award, TrendingUp, Clock, Lightbulb, Globe, BarChart2, Shield, Cpu, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ventures = [
  {
    name: "Foodlytics",
    icon: <BarChart2 className="h-6 w-6 text-orange-500" />,
    description: "An advanced data analytics platform designed to revolutionize the food marketplace with deep insights and operational intelligence.",
    color: "bg-orange-50",
    borderColor: "border-orange-100",
    textColor: "text-orange-700"
  },
  {
    name: "HiFoodo",
    icon: <Globe className="h-6 w-6 text-emerald-500" />,
    description: "A free, zero-commission food marketplace that empowers restaurants and consumers by eliminating unnecessary middlemen.",
    color: "bg-emerald-50",
    borderColor: "border-emerald-100",
    textColor: "text-emerald-700"
  },
  {
    name: "BCAI",
    icon: <Cpu className="h-6 w-6 text-blue-500" />,
    description: "AI-driven solutions that enhance decision-making, automate workflows, and optimize business performance.",
    color: "bg-blue-50",
    borderColor: "border-blue-100",
    textColor: "text-blue-700"
  },
  {
    name: "Fintech Pulse Network",
    icon: <TrendingUp className="h-6 w-6 text-purple-500" />,
    description: "A hub for fintech insights, trends, and discussions, designed to educate and connect industry leaders.",
    color: "bg-purple-50",
    borderColor: "border-purple-100",
    textColor: "text-purple-700"
  },
  {
    name: "Pulse AI",
    icon: <Rocket className="h-6 w-6 text-amber-500" />,
    description: "AI-powered financial advisory technology that provides intelligent recommendations and analysis for professionals and businesses.",
    color: "bg-amber-50",
    borderColor: "border-amber-100",
    textColor: "text-amber-700"
  }
];

const values = [
  {
    title: "Innovation",
    description: "We constantly push boundaries to develop cutting-edge solutions that address complex challenges.",
    icon: <Lightbulb className="h-6 w-6 text-orange-500" />
  },
  {
    title: "Excellence",
    description: "We uphold the highest standards in every aspect of our work, from code quality to client communication.",
    icon: <Award className="h-6 w-6 text-orange-500" />
  },
  {
    title: "Integrity",
    description: "We maintain unwavering ethical standards and honest communication in all our business practices.",
    icon: <Shield className="h-6 w-6 text-orange-500" />
  }
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-20">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Basil Consulting</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're redefining the future by integrating cutting-edge technology, data-driven insights, and visionary strategies.
              </p>
            </div>
          </Container>
        </section>
        
        {/* Vision Section */}
        <section className="py-20 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-orange-100 rounded-full opacity-50"></div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-100 rounded-full opacity-50"></div>
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src="/images/vision.jpg" 
                      alt="Basil Consulting Vision" 
                      className="w-full h-auto object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
                      }}
                    />
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <SectionHeading
                  title="Our Vision"
                  titleClassName="text-gradient"
                />
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    At Basil Consulting, we are redefining the future by integrating cutting-edge technology, data-driven insights, and visionary strategies.
                  </p>
                  <p>
                    Our mission is to empower businesses, entrepreneurs, and professionals with the tools they need to thrive in an ever-evolving digital landscape.
                  </p>
                  <p>
                    We believe in a future where technology serves humanity, where data empowers rather than overwhelms, and where innovation drives sustainable growth.
                  </p>
                  <p className="italic border-l-4 border-orange-500 pl-4 text-gray-700">
                    We don't simply create platforms—we cultivate thriving ecosystems where businesses, technologies, and people interconnect and flourish together.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Who We Are Section */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  title="Who We Are"
                  titleClassName="text-gradient"
                />
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    Basil Consulting is not just a company—it's a movement toward innovation, efficiency, and sustainable growth.
                  </p>
                  <p>
                    We specialize in AI-driven solutions, financial intelligence, and advanced data analytics, bridging the gap between complex technology and real-world business applications.
                  </p>
                  <p>
                    Our team of experts brings together diverse backgrounds in technology, finance, data science, and business strategy to create holistic solutions that address the full spectrum of modern business challenges.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center bg-orange-50 p-6 rounded-lg">
                    <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-white mb-4">
                      <Users className="h-7 w-7 text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">50+</div>
                    <div className="font-medium text-orange-700 mb-2">Data Experts</div>
                    <p className="text-sm text-gray-600">Specialists across data engineering, analytics, ML, and security</p>
                  </div>
                  
                  <div className="text-center bg-orange-50 p-6 rounded-lg">
                    <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-white mb-4">
                      <Award className="h-7 w-7 text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">200+</div>
                    <div className="font-medium text-orange-700 mb-2">Projects</div>
                    <p className="text-sm text-gray-600">Successful implementations across industries globally</p>
                  </div>
                  
                  <div className="text-center bg-orange-50 p-6 rounded-lg">
                    <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-white mb-4">
                      <TrendingUp className="h-7 w-7 text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">95%</div>
                    <div className="font-medium text-orange-700 mb-2">Client Retention</div>
                    <p className="text-sm text-gray-600">Long-term partnerships built on trust and results</p>
                  </div>
                  
                  <div className="text-center bg-orange-50 p-6 rounded-lg">
                    <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-white mb-4">
                      <Clock className="h-7 w-7 text-orange-500" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900">15+</div>
                    <div className="font-medium text-orange-700 mb-2">Years Experience</div>
                    <p className="text-sm text-gray-600">Deep expertise in evolving data technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Our Core Ventures */}
        <section className="py-20 bg-white">
          <Container>
            <SectionHeading
              title="Our Core Ventures"
              subtitle="Innovative solutions that drive transformation across industries"
              centered
            />
            
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ventures.map((venture, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl p-6 border ${venture.borderColor} ${venture.color} transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      {venture.icon}
                    </div>
                    <h3 className={`text-xl font-semibold ${venture.textColor}`}>{venture.name}</h3>
                  </div>
                  <p className="text-gray-600">{venture.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <Container>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  title="Why Basil Consulting?"
                  titleClassName="text-gradient"
                />
                <div className="space-y-6 text-gray-600">
                  <p className="text-lg">
                    We don't just build businesses—we build ecosystems. Our approach is rooted in sustainability, innovation, and long-term impact.
                  </p>
                  <p>
                    With a relentless drive for excellence, we craft solutions that are not only powerful but also accessible, ensuring that everyone, from startups to industry giants, can benefit from our expertise.
                  </p>
                  <p className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <span className="font-semibold">Our Ecosystem Philosophy:</span> Where others see isolated platforms, we envision interconnected ecosystems. We cultivate environments where technology, data, and human expertise converge to create sustainable value networks that adapt, evolve, and thrive in harmony with changing market dynamics.
                  </p>
                  
                  <div className="space-y-4 mt-8">
                    {values.map((value, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="p-2 bg-orange-50 rounded-lg mt-1">
                          {value.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                          <p className="text-gray-600">{value.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-10">
                  <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 shadow-lg">
                    <Link to="/contact">
                      Get in Touch
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange-100 rounded-full opacity-50"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-100 rounded-full opacity-50"></div>
                <div className="relative bg-white rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/team.jpg" 
                    alt="Basil Consulting Team" 
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";
                    }}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join us as we shape the future—one ecosystem at a time.</h2>
              <p className="text-lg text-orange-100 mb-8">
                Partner with Basil Consulting and transform your business with data-driven insights and innovative solutions that cultivate growth beyond isolated platforms.
              </p>
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
                <Link to="/contact">
                  Start Your Journey
                </Link>
              </Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
