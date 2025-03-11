
import { useState } from "react";
import { MapPin, Phone, Mail, Send, Copy, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import EmailTemplate from "@/components/EmailTemplate";

const contactOptions = [
  {
    icon: <MapPin className="h-6 w-6 text-basil-500" />,
    title: "Visit Us",
    description: "123 Business Avenue, Suite 500, San Francisco, CA 94107",
  },
  {
    icon: <Phone className="h-6 w-6 text-basil-500" />,
    title: "Call Us",
    description: "+1 (234) 567-890",
    action: "tel:+1234567890"
  },
  {
    icon: <Mail className="h-6 w-6 text-basil-500" />,
    title: "Email Us",
    description: "info@basilconsulting.net",
    action: "mailto:info@basilconsulting.net"
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  });
  
  const [showEmailTemplate, setShowEmailTemplate] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowEmailTemplate(true);
  };

  const handleCloseTemplate = () => {
    setShowEmailTemplate(false);
  };

  const handleComposeEmail = () => {
    const subject = encodeURIComponent(`Business Inquiry: ${formData.subject}`);
    
    // Create a structured email body
    const body = encodeURIComponent(
      `Dear Basil Consulting Team,\n\n` +
      `Introduction:\n` +
      `My name is ${formData.name} and I'm reaching out regarding ${formData.subject}.\n\n` +
      
      `Company Details:\n` +
      `• Company/Organization Name: ${formData.company || "N/A"}\n` +
      `• Email: ${formData.email}\n\n` +
      
      `Project Specifics:\n` +
      `${formData.message}\n\n` +
      
      `I look forward to your response.\n\n` +
      `Best regards,\n` +
      `${formData.name}`
    );
    
    window.location.href = `mailto:info@basilconsulting.net?subject=${subject}&body=${body}`;
    
    // Reset form after sending
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    });
    
    setShowEmailTemplate(false);
    toast.success("Email client opened with your message!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-gray-50 py-16">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground">
                Have questions or ready to start your data journey? Get in touch with our team.
              </p>
            </div>
          </Container>
        </section>
        
        {/* Contact Options */}
        <section className="py-16">
          <Container>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactOptions.map((option, index) => (
                <div key={index} className="text-center p-6 border border-gray-100 rounded-xl hover:shadow-md transition-all">
                  <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-basil-50 mb-4">
                    {option.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                  {option.action ? (
                    <a 
                      href={option.action} 
                      className="text-gray-600 hover:text-basil-500 transition-colors"
                    >
                      {option.description}
                    </a>
                  ) : (
                    <p className="text-gray-600">{option.description}</p>
                  )}
                </div>
              ))}
            </div>
            
            {/* Contact Form */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or question..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto rounded-full"
                  >
                    Preview Email
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </Container>
        </section>
      </main>
      
      {/* Email Template Modal */}
      {showEmailTemplate && (
        <EmailTemplate 
          formData={formData}
          onClose={handleCloseTemplate}
          onComposeEmail={handleComposeEmail}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Contact;
