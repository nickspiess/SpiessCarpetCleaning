import React, { useState, useEffect } from 'react';

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: "Tazvitya Makayi",
            rating: 5,
            text: "Jeff is a great guy. The moment I met him I could tell he was the man for the job. He did a fantastic job with our carpet at the church. The carpet really needed some TLC treatment and he provided just that. Well done, Jeff, looking forward to working with you again.",
            service: "Carpet Cleaning"
        },
        {
            id: 2,
            name: "Carol Grabowski",
            rating: 5,
            text: "This is my third Spiess Carpet Cleaning experience. Jeff is wonderful! He is experienced, confident and professional. His work is seamless - he arrives on time, sets up, effectively and efficiently goes to work, and packs up, leaving you with only clean carpets and upholstery. I cannot recommend highly enough.",
            service: "Carpet & Upholstery"
        },
        {
            id: 3,
            name: "Erin Haider",
            rating: 5,
            text: "I have used Jeff multiple times and wouldn't recommend any other carpet cleaning service. He is reliable, efficient, and has great customer service. He is personable and responsive. Thank you Jeff!",
            service: "Carpet Cleaning"
        },
        {
            id: 4,
            name: "Debra Olding",
            rating: 5,
            text: "Jeff did a fantastic job cleaning the carpet in my home. It looks like new! He was responsive, prompt, hard working and professional. Highly recommend!",
            service: "Carpet Cleaning"
        },
        {
            id: 5,
            name: "Austin McCullough",
            rating: 5,
            text: "Jeff did an awesome job on a post flood carpet restoration and clean up in our basement. He worked thoroughly and took his time on the carpets in the rest of our multistory house, even the stairs. Great work and look forward to working with you again!",
            service: "Carpet Cleaning"
        },
        {
            id: 6,
            name: "Perry Rhew",
            rating: 5,
            text: "I cannot say enough good things about Jeff and his company. He worked as quickly as possible to accommodate our schedule, provided updates throughout the process, arrived on time, cleaned the carpets beautifully, and provided tips on drying times and what to expect. We will definitely call him again if the need arises.",
            service: "Carpet Cleaning"
        },
        {
            id: 7,
            name: "Kady Kochendorfer",
            rating: 5,
            text: "I called Jeff when I needed the carpet cleaned in a new listing I had. He had exceptional customer service, very responsive, and did a fantastic job. Carpets look as good as new. I will definitely be using him in the future!",
            service: "Carpet Cleaning"
        },
        {
            id: 8,
            name: "Tyler Nelson",
            rating: 5,
            text: "Absolutely fantastic. I've used Jeff Spiess for three jobs, all excellent work. He cleans carpet well and will even go the extra mile to take care of problem spots. Made my light colored carpet look brand new!",
            service: "Carpet Cleaning"
        },
        {
            id: 9,
            name: "DeAnn Hammer",
            rating: 5,
            text: "I have been utilizing Jeff and the Spiess team for over 20 years. His service is amazing. The stains created at my house can be difficult and Jeff has professionally managed them as best possible. My carpets feel and smell great. Keep small businesses in America going. Hire the Spiess team for great carpet care and extremely reasonable prices.",
            service: "Carpet Cleaning"
        },
        {
            id: 10,
            name: "Clint Jamison",
            rating: 5,
            text: "We have used Jeff and his team for over 6 years a couple times a year to help with kids and pet stains. He even came back for spot treatment when a stain came back and took care of it for good. He also does air duct cleaning. Thanks Jeff!",
            service: "Pet Stain & Odor Removal"
        },
        {
            id: 11,
            name: "Gary Heaser",
            rating: 5,
            text: "Jeff was over just before Christmas. We have 2 dogs and often foster so there were plenty of clean opportunities. He cleaned the livingroom, office, bedroom, hallway, and stairs. Arrived on time, started working right away, gave updates as he went. Looked and smelled great afterwards. Thanks Jeff.",
            service: "Pet Stain & Odor Removal"
        },
        {
            id: 12,
            name: "Julia McMann",
            rating: 5,
            text: "Jeff is honest, trustworthy and priced fairly. I would recommend!",
            service: "Carpet Cleaning"
        },
        {
            id: 13,
            name: "Susan Arndt",
            rating: 5,
            text: "Great service. Done right!",
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
            }, 400);
        }
    };

    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
                setIsAnimating(false);
            }, 400);
        }
    };

    const handleDotClick = (index) => {
        if (!isAnimating && index !== currentIndex) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex(index);
                setIsAnimating(false);
            }, 400);
        }
    };

    const getCurrentTestimonials = () => {
        const start = currentIndex * testimonialsPerPage;
        return testimonials.slice(start, start + testimonialsPerPage);
    };

    return (
        <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
                    What Our Customers Are Saying
                </h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Real testimonials from real customers who've experienced the Spiess difference
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="relative mb-10">
                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-opacity duration-400 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                    {getCurrentTestimonials().map((testimonial, index) => {
                        const colors = [
                            'rgba(0,168,227,1)',
                            'rgba(198,25,73,1)',
                            'rgba(247,167,25,1)'
                        ];
                        const borderColor = colors[index % 3];

                        return (
                        <div
                            key={testimonial.id}
                            className="relative bg-white rounded-2xl p-6 pt-8 border border-slate-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group overflow-hidden"
                        >
                            {/* Top Border Accent */}
                            <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: borderColor }}></div>

                            {/* Service Badge */}
                            <div className="flex justify-between items-start mb-4">
                                <span className="inline-flex items-center bg-secondary-50 text-secondary-700 px-2.5 py-1 rounded-full text-xs font-medium">
                                    {testimonial.service}
                                </span>
                                <div className="flex gap-0.5">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            {/* Quote */}
                            <p className="text-slate-600 text-sm leading-relaxed mb-5">
                                "{testimonial.text}"
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 font-semibold text-sm">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="font-semibold text-slate-900 text-sm">
                                    {testimonial.name}
                                </div>
                            </div>
                        </div>
                    );
                    })}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    disabled={isAnimating}
                    className="absolute left-2 lg:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 border border-slate-200 z-20"
                    aria-label="Previous testimonials"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    disabled={isAnimating}
                    className="absolute right-2 lg:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center disabled:opacity-50 border border-slate-200 z-20"
                    aria-label="Next testimonials"
                >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center items-center gap-2">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`transition-all duration-300 rounded-full ${
                            index === currentIndex
                                ? 'w-6 h-2 bg-secondary-500'
                                : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    );
};

export default TestimonialsCarousel;
