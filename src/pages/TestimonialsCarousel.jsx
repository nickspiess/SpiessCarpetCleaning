import React, { useState, useEffect } from 'react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Sarah M.",
      location: "Woodbury, MN",
      rating: 5,
      text: "Spiess Carpet Cleaning exceeded all expectations! My carpets look brand new. Professional, punctual, and incredibly thorough. Highly recommend!",
      service: "Carpet Cleaning"
    },
    {
      id: 2,
      name: "Michael T.",
      location: "St. Paul, MN",
      rating: 5,
      text: "Best air duct cleaning service in the Twin Cities! The team was knowledgeable and efficient. Our home feels so much fresher now.",
      service: "Air Duct Cleaning"
    },
    {
      id: 3,
      name: "Jennifer L.",
      location: "Eden Prairie, MN",
      rating: 5,
      text: "Outstanding upholstery cleaning! My couch looks amazing. They removed stains I thought were permanent. Worth every penny!",
      service: "Upholstery Cleaning"
    },
    {
      id: 4,
      name: "David R.",
      location: "Hudson, WI",
      rating: 5,
      text: "I've used many carpet cleaners over the years, but Spiess is by far the best. Professional service and incredible results every time.",
      service: "Carpet Cleaning"
    },
    {
      id: 5,
      name: "Emily K.",
      location: "Oakdale, MN",
      rating: 5,
      text: "The entire process was seamless from quote to completion. My carpets have never looked this good. Will definitely use again!",
      service: "Carpet Cleaning"
    },
    {
      id: 6,
      name: "Robert H.",
      location: "Lakeland, MN",
      rating: 5,
      text: "Exceptional service! They were able to remove pet stains and odors completely. Our home smells fresh and clean again.",
      service: "Pet Odor Removal"
    },
    {
      id: 7,
      name: "Amanda P.",
      location: "Minneapolis, MN",
      rating: 5,
      text: "Very impressed with the professionalism and quality. The team went above and beyond. Highly recommend Spiess Carpet Cleaning!",
      service: "Carpet Cleaning"
    },
    {
      id: 8,
      name: "James W.",
      location: "Eagan, MN",
      rating: 5,
      text: "Great experience! Fair pricing, excellent communication, and fantastic results. My carpets look brand new.",
      service: "Carpet Cleaning"
    },
    {
      id: 9,
      name: "Lisa D.",
      location: "Bloomington, MN",
      rating: 5,
      text: "The air duct cleaning made such a difference in our home's air quality. No more dust! Professional and thorough service.",
      service: "Air Duct Cleaning"
    },
    {
      id: 10,
      name: "Christopher B.",
      location: "Burnsville, MN",
      rating: 5,
      text: "They did an incredible job on our office carpets. Professional, efficient, and the results speak for themselves. Highly recommend!",
      service: "Commercial Cleaning"
    },
    {
      id: 11,
      name: "Nicole S.",
      location: "Apple Valley, MN",
      rating: 5,
      text: "Amazing service from start to finish. My carpets have never looked better. The team was courteous and professional.",
      service: "Carpet Cleaning"
    },
    {
      id: 12,
      name: "Kevin M.",
      location: "Cottage Grove, MN",
      rating: 5,
      text: "Best carpet cleaning service we've ever used! Prompt, professional, and the results exceeded our expectations.",
      service: "Carpet Cleaning"
    },
    {
      id: 13,
      name: "Rachel G.",
      location: "Stillwater, MN",
      rating: 5,
      text: "Fantastic upholstery cleaning! They brought our furniture back to life. Highly professional and reasonably priced.",
      service: "Upholstery Cleaning"
    },
    {
      id: 14,
      name: "Thomas J.",
      location: "Roseville, MN",
      rating: 5,
      text: "Very satisfied with the air duct cleaning. The team was knowledgeable and thorough. Great communication throughout.",
      service: "Air Duct Cleaning"
    },
    {
      id: 15,
      name: "Michelle C.",
      location: "Shoreview, MN",
      rating: 5,
      text: "Outstanding results! My carpets look incredible. Professional service and very reasonable pricing. Will use again!",
      service: "Carpet Cleaning"
    }
  ];

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
        setIsAnimating(false);
      }, 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
        setIsAnimating(false);
      }, 500);
    }
  };

  const handleDotClick = (index) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 500);
    }
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1 justify-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-accent-400 text-xl">★</span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary-100/40 rounded-full blur-3xl transform translate-x-1/2"></div>
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            ⭐ Customer Reviews
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="block">What Our Customers</span>
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Real testimonials from real customers who've experienced the Spiess difference
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="relative mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-primary-200 group hover:-translate-y-2"
                style={{
                  animation: isAnimating ? 'fadeIn 0.5s ease-in-out' : 'none',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Service Badge */}
                <div className="flex justify-center mb-4">
                  <span className="inline-flex items-center gap-1 bg-secondary-100 text-secondary-700 px-3 py-1 rounded-full text-xs font-bold">
                    {testimonial.service}
                  </span>
                </div>

                {/* Stars */}
                {renderStars(testimonial.rating)}

                {/* Quote */}
                <div className="relative mb-6">
                  <div className="text-6xl text-primary-100 leading-none mb-2">"</div>
                  <p className="text-slate-700 leading-relaxed text-base relative -mt-8 pl-8">
                    {testimonial.text}
                  </p>
                </div>

                {/* Author Info */}
                <div className="border-t border-slate-200 pt-4 mt-4">
                  <div className="text-center">
                    <div className="font-bold text-slate-900 mb-1">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600 flex items-center justify-center gap-1">
                      <span>📍</span>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-2xl text-slate-700 hover:text-primary-600 disabled:opacity-50 border border-slate-200 hover:scale-110 z-10"
            aria-label="Previous testimonials"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-2xl text-slate-700 hover:text-primary-600 disabled:opacity-50 border border-slate-200 hover:scale-110 z-10"
            aria-label="Next testimonials"
          >
            ›
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center items-center gap-3">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-3 bg-primary-500'
                  : 'w-3 h-3 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="text-4xl font-black text-primary-600 mb-2">10K+</div>
            <div className="text-slate-700 font-medium">Happy Customers</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="text-4xl font-black text-primary-600 mb-2">99%</div>
            <div className="text-slate-700 font-medium">Satisfaction Rate</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="text-4xl font-black text-primary-600 mb-2">5.0</div>
            <div className="text-slate-700 font-medium">Average Rating</div>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-200">
            <div className="text-4xl font-black text-primary-600 mb-2">40+</div>
            <div className="text-slate-700 font-medium">Years Experience</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsCarousel;
