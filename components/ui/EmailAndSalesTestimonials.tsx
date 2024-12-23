// EmailAndSalesTestimonials.tsx
import React from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/data/testimonials";

const EmailAndSalesTestimonials = () => {
  return (
    <div className="py-10">
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
};

export default EmailAndSalesTestimonials;
