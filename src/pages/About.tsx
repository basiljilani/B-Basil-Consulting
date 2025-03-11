
import { Users, Award, TrendingUp, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

const stats = [
  { 
    icon: <Users className="h-8 w-8 text-basil-500" />,
    value: "50+",
    label: "Data Experts",
    description: "Specialists across data engineering, analytics, ML, and security"
  },
  { 
    icon: <Award className="h-8 w-8 text-basil-500" />,
    value: "200+",
    label: "Projects Completed",
    description: "Successful implementations across industries globally"
  },
  { 
    icon: <TrendingUp className="h-8 w-8 text-basil-500" />,
    value: "95%",
    label: "Client Retention",
    description: "Long-term partnerships built on trust and results"
  },
  { 
    icon: <Clock className="h-8 w-8 text-basil-500" />,
    value: "15+",
    label: "Years Experience",
    description: "Deep expertise in evolving data technologies"
  }
];

const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "Founder & CEO",
    bio: "Former Head of Data Science at TechGiant with over 20 years of experience in data analytics and machine learning. PhD in Computer Science from Stanford."
  },
  {
    name: "Michael Rodriguez",
    role: "Chief Technology Officer",
    bio: "Architected cloud data solutions for Fortune 500 companies. Previously led engineering teams at leading tech companies focusing on scalable data platforms."
  },
  {
    name: "Jennifer Liu",
    role: "VP of Data Science",
    bio: "Expert in predictive modeling and AI implementation with experience across financial services, healthcare, and retail industries."
  },
  {
    name: "David Park",
    role: "Head of Security & Compliance",
    bio: "Former security consultant for government agencies with deep knowledge of data protection regulations including GDPR, HIPAA, and CCPA."
  }
];

const values = [
  {
    title: "Innovation",
    description: "We push boundaries to develop cutting-edge solutions that address the most complex data challenges."
  },
  {
    title: "Excellence",
    description: "We uphold the highest standards in every aspect of our work, from code quality to client communication."
  },
  {
    title: "Integrity",
    description: "We maintain unwavering ethical standards and honest communication in all our business practices."
  },
  {
    title: "Collaboration",
    description: "We work as true partners with our clients, integrating seamlessly with their teams to achieve shared goals."
  }
];

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-gray-50 py-20">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Basil Consulting</h1>
              <p className="text-xl text-muted-foreground">
                We help organizations transform their data into strategic assets that drive growth and innovation.
              </p>
            </div>
          </Container>
        </section>
        
        {/* Our Story */}
        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading
                  title="Our Story"
                  titleClassName="text-gradient"
                />
                <div className="space-y-4">
                  <p>
                    Founded in 2008, Basil Consulting began with a mission to help businesses leverage their data more effectively. What started as a small team of data specialists has grown into a global consultancy trusted by Fortune 500 companies and innovative startups alike.
                  </p>
                  <p>
                    Our journey has been defined by a commitment to excellence, staying at the forefront of data technologies, and delivering measurable results for our clients. We've evolved alongside the data landscape, continuously expanding our expertise to address emerging challenges and opportunities.
                  </p>
                  <p>
                    Today, we're proud to be recognized as leaders in data strategy, infrastructure, analytics, and AI implementation. Our multidisciplinary team brings together specialized knowledge and practical experience to transform how organizations operate through better use of their data.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                      <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-basil-50 mb-4">
                        {stat.icon}
                      </div>
                      <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                      <div className="font-medium text-basil-500 mb-2">{stat.label}</div>
                      <p className="text-sm text-gray-500">{stat.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>
        
        {/* Our Team */}
        <section className="py-20 bg-gray-50">
          <Container>
            <SectionHeading
              title="Leadership Team"
              subtitle="Meet the experts guiding our strategy and operations."
              centered
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="w-20 h-20 rounded-full bg-basil-100 mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-center">{member.name}</h3>
                  <p className="text-basil-500 text-center mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
        
        {/* Our Values */}
        <section className="py-20">
          <Container>
            <SectionHeading
              title="Our Values"
              subtitle="The principles that guide our decisions and shape our culture."
              centered
            />
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {values.map((value, index) => (
                <div key={index} className="border border-gray-100 rounded-xl p-6 hover:border-basil-200 transition-colors">
                  <div className="rounded-full bg-basil-50 w-12 h-12 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-basil-500">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
