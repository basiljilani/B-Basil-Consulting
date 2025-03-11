
import { useState } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials-data";

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from the organizations we've helped transform their data strategy and capabilities."
          centered
        />
        
        <div className="mt-12 relative">
          <div className="max-w-3xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className={cn(
                  "transition-all duration-500 absolute top-0 left-0 right-0",
                  idx === active ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
                style={{ position: idx === active ? "relative" : "absolute" }}
              >
                <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 relative">
                  <Quote className="absolute h-10 w-10 text-basil-100 top-6 left-6 -z-10" />
                  <blockquote className="text-lg md:text-xl text-balance text-gray-700 italic z-10 relative">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="mt-6 flex items-center">
                    <div>
                      <div className="text-base font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  idx === active 
                    ? "bg-basil-500 w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
