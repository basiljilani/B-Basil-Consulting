
import { useState } from "react";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="section-padding bg-basil-500 text-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Stay Updated with Industry Insights
          </h2>
          <p className="mt-4 text-basil-50">
            Subscribe to our newsletter to receive the latest news, trends, and insights in data analytics, machine learning, and business intelligence.
          </p>
          
          <form onSubmit={handleSubmit} className="mt-8 sm:flex sm:items-center sm:max-w-md sm:mx-auto">
            <div className="w-full">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 placeholder:text-white/60 text-white w-full h-12"
              />
            </div>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="mt-3 sm:mt-0 sm:ml-3 w-full sm:w-auto bg-white text-basil-500 hover:bg-white/90 focus:ring-white"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="mt-4 text-sm text-basil-50/80">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
