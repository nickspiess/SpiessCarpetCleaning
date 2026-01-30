import React, { useState, useEffect, useCallback } from 'react';

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [slideDirection, setSlideDirection] = useState('next');
    const [isVisible, setIsVisible] = useState(true);

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
    const transitionDuration = 500;

    const animateTransition = useCallback((newIndex, direction) => {
        if (isAnimating) return;

        setIsAnimating(true);
        setSlideDirection(direction);
        setIsVisible(false);

        setTimeout(() => {
            setCurrentIndex(newIndex);
            setTimeout(() => {
                setIsVisible(true);
                setTimeout(() => {
                    setIsAnimating(false);
                }, transitionDuration);
            }, 50);
        }, transitionDuration);
    }, [isAnimating]);

    const handleNext = useCallback(() => {
        const newIndex = (currentIndex + 1) % totalPages;
        animateTransition(newIndex, 'next');
    }, [currentIndex, totalPages, animateTransition]);

    const handlePrev = useCallback(() => {
        const newIndex = (currentIndex - 1 + totalPages) % totalPages;
        animateTransition(newIndex, 'prev');
    }, [currentIndex, totalPages, animateTransition]);

    const handleDotClick = (index) => {
        if (index === currentIndex) return;
        const direction = index > currentIndex ? 'next' : 'prev';
        animateTransition(index, direction);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                handleNext();
            }
        }, 7000);

        return () => clearInterval(interval);
    }, [handleNext, isAnimating]);

    const getCurrentTestimonials = () => {
        const start = currentIndex * testimonialsPerPage;
        return testimonials.slice(start, start + testimonialsPerPage);
    };

    const getSlideStyles = () => {
        const translateX = slideDirection === 'next' ? '-30px' : '30px';
        const exitTranslateX = slideDirection === 'next' ? '30px' : '-30px';

        return {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : `translateX(${isVisible ? translateX : exitTranslateX})`,
            transition: `opacity ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${transitionDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        };
    };

    return (
        <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
                    What Our Customers Are Saying
                </h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    Real testimonials from real customers who've experienced the Spiess Carpet Cleaning difference
                </p>
            </div>

            {/* Testimonials Grid with Navigation */}
            <div className="relative mb-10">
                {/* Navigation Buttons - Outside overflow container */}
                <button
                    onClick={handlePrev}
                    disabled={isAnimating}
                    className="absolute left-0 lg:-left-14 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 ease-out flex items-center justify-center disabled:opacity-40 disabled:hover:scale-100 border border-slate-200 z-20 group"
                    aria-label="Previous testimonials"
                    style={{ marginLeft: '-6px' }}
                >
                    <span style={{ fontSize: '20px', fontWeight: '600', color: '#334155', lineHeight: 1 }}>‹</span>
                </button>
                <button
                    onClick={handleNext}
                    disabled={isAnimating}
                    className="absolute right-0 lg:-right-14 top-1/2 -translate-y-1/2 w-11 h-11 bg-white rounded-full shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 ease-out flex items-center justify-center disabled:opacity-40 disabled:hover:scale-100 border border-slate-200 z-20 group"
                    aria-label="Next testimonials"
                    style={{ marginRight: '-6px' }}
                >
                    <span style={{ fontSize: '20px', fontWeight: '600', color: '#334155', lineHeight: 1 }}>›</span>
                </button>

                {/* Grid container */}
                <div className="px-8 lg:px-0 overflow-hidden">
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    style={getSlideStyles()}
                >
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
                </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center items-center gap-2.5">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        disabled={isAnimating}
                        className={`rounded-full transition-all duration-500 ease-out disabled:cursor-not-allowed ${
                            index === currentIndex
                                ? 'w-8 h-2.5 bg-secondary-500 shadow-sm'
                                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400 hover:scale-125'
                        }`}
                        aria-label={`Go to page ${index + 1}`}
                    />
                ))}
            </div>

        </div>
    );
};

export default TestimonialsCarousel;
