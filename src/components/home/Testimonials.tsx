import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials-data";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Calculate how many slides to show based on viewport width
  const [slidesToShow, setSlidesToShow] = useState(3);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Calculate total number of pages
  const totalPages = Math.max(1, Math.ceil(testimonials.length / slidesToShow));
  const visibleTestimonials = slidesToShow * (activeIndex + 1) > testimonials.length 
    ? testimonials.slice(slidesToShow * activeIndex)
    : testimonials.slice(slidesToShow * activeIndex, slidesToShow * (activeIndex + 1));
  
  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, totalPages - 1));
  };

  return (
    <section className="section-padding bg-white py-20">
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from the organizations we've helped transform their data strategy and capabilities."
          centered
        />
        
        <div className="mt-12 relative">
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-20 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-basil-600" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-20 bg-white rounded-full p-2 shadow-md hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={activeIndex === totalPages - 1}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-basil-600" />
          </button>
          
          {/* Testimonials Grid */}
          <div className="px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col h-full"
                >
                  <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 h-full shadow-[0_8px_30px_-15px_rgba(0,0,0,0.15)] relative flex flex-col group hover:shadow-[0_15px_35px_-15px_rgba(0,0,0,0.2)] transition-all duration-300">
                    <div className="absolute top-6 right-6 opacity-20">
                      <span className="text-8xl font-serif text-basil-100">"</span>
                    </div>
                    
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-basil-500 opacity-80" />
                    </div>
                    
                    <blockquote className="text-base md:text-lg font-inter text-gray-700 mb-6 relative flex-grow">
                      {testimonial.content}
                    </blockquote>
                    
                    <div className="mt-auto">
                      <div className="h-px w-16 bg-gray-200 mb-4"></div>
                      <div className="text-base font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  idx === activeIndex 
                    ? "bg-basil-500 w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`View testimonial page ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
