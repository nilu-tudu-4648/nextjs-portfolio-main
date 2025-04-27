"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Owner, Bloom Boutique",
    image: "/images/testimonials/testimonial-1.jpg",
    content: "WebCraft Studios transformed our online presence completely. Our new website has increased our online sales by 40% in just two months. Their team was professional, responsive, and delivered exactly what we needed.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    position: "CEO, Local Eats Cafe",
    image: "/images/testimonials/testimonial-2.jpg",
    content: "Working with WebCraft was a game-changer for our restaurant. They created a beautiful website with online ordering capabilities that has significantly increased our takeout business. Highly recommended!",
    rating: 5
  },
  {
    name: "Jennifer Lee",
    position: "Founder, Wellness Center",
    image: "/images/testimonials/testimonial-3.jpg",
    content: "I'm extremely impressed with the website WebCraft Studios created for my wellness center. It perfectly captures our brand essence and has helped us attract new clients. The booking system they integrated works flawlessly.",
    rating: 5
  },
  {
    name: "David Wilson",
    position: "Director, Wilson Accounting",
    image: "/images/testimonials/testimonial-4.jpg",
    content: "As a small accounting firm, we needed a professional website that would build trust with potential clients. WebCraft delivered exactly that, plus they made the whole process easy and stress-free.",
    rating: 4
  },
  {
    name: "Amanda Parker",
    position: "Owner, Paws & Claws Pet Shop",
    image: "/images/testimonials/testimonial-5.jpg",
    content: "Our e-commerce website has been a huge success! WebCraft Studios created an intuitive, attractive online store that our customers love. Their ongoing support has been exceptional as well.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Client Testimonials</h2>
          <div className="w-16 h-1.5 bg-primary-500 mx-auto mb-6"></div>
          <p className="section-subtitle">
            Don&apos;t just take our word for it - hear what our clients have to say about working with us
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-dark-200/50 backdrop-blur-sm rounded-xl p-8 shadow-card"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="w-20 h-20 rounded-full bg-dark-100 flex-shrink-0 flex items-center justify-center">
                  {/* Placeholder for testimonial image */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-5 w-5 ${i < testimonials[activeIndex].rating ? "text-yellow-500" : "text-gray-400"}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-light-300 italic mb-5 text-xl md:text-2xl font-light">
                    &ldquo;{testimonials[activeIndex].content}&rdquo;
                  </blockquote>
                  <div>
                    <h4 className="text-white font-bold text-lg md:text-xl">{testimonials[activeIndex].name}</h4>
                    <p className="text-primary-400 text-base">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-dark-100 p-3 rounded-full text-white hover:bg-primary-500 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-dark-100 p-3 rounded-full text-white hover:bg-primary-500 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? "bg-primary-500" : "bg-dark-100 hover:bg-primary-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8 font-poppins">Ready to Join Our Success Stories?</h3>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            <span>Start Your Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
