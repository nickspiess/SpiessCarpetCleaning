import React from 'react';
import Link from 'next/link';
import TestimonialsCarousel from './TestimonialsCarousel';

const FourthLanding = () => {

  const features = [
    { text: "Fully Bonded & Insured" },
    { text: "100% Money-Back Guarantee" },
    { text: "Chemical-Free Solutions" },
    { text: "Best Equipment in Industry" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary-100/30 rounded-full blur-3xl transform translate-x-1/2"></div>
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-3 py-2 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            💡 Why Choose Us
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 mb-4 md:mb-6 px-4">
            <span className="block">Experience the</span>
            <span className="bg-gradient-to-r from-secondary-500 to-primary-500 bg-clip-text text-transparent">
              Spiess Difference
            </span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed px-4">
            Four decades of innovation, dedication, and results. Discover why families 
            across the Twin Cities trust us with their most valuable spaces.
          </p>
        </div>

        {/* Special Offer Video */}
        <div className="mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  🎯 Limited Time Special
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Don't Miss Our Summer Special
                </h3>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Save 30% on all professional cleaning services. Watch our special offer video below.
                </p>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="aspect-video relative bg-black">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/1B5azM4oWEw?si=eXkoC66ttwTFNISz" 
                    title="Spiess Carpet Cleaning 30% Off Special" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  />
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a href="/quote" className="inline-block">
                  <button className="bg-accent-500 text-white font-bold py-4 px-8 rounded-xl hover:bg-accent-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mt-8 mb-2">
                    Claim Your 30% Discount Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Video */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-slate-200">
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                  👨‍💼 From Our Founder
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                  A Personal Message
                </h3>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <div className="aspect-video relative bg-black">
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/RRZq3E61kFY" 
                    title="About Spiess Carpet Cleaning" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🏆 Twin Cities' #1 Choice
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              <span className="block">Four Decades of</span>
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Excellence
              </span>
            </h3>
            
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Since 1983, we've been the Twin Cities' most trusted carpet cleaning service. 
              Our commitment to innovation, quality, and customer satisfaction has made us 
              the preferred choice for thousands of homeowners.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-white/70 rounded-xl p-4 shadow-sm border border-slate-200">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="font-medium text-slate-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="flex-1">
                <button className="w-full py-4 px-8 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Schedule Your Service Today
                </button>
              </Link>
              <a href="tel:6514722736" className="flex-1">
                <button className="w-full py-4 px-8 border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-50 transition-all duration-300">
                  Call Now
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Custom Testimonials Carousel */}
        <TestimonialsCarousel />

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-400/20 rounded-full blur-xl transform -translate-x-12 translate-y-12"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
                🚀 Ready to Get Started?
              </div>
              
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-4  text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                Experience the Spiess Difference Today
              </h3>
              
              <p className="text-xl md:text-2xl opacity-95 mb-12 max-w-3xl mx-auto leading-relaxed text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                Join thousands of satisfied customers who trust us with their most valuable spaces. 
                Your satisfaction is guaranteed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-12">
                <Link href="/quote" className="flex-1">
                  <button className="w-full bg-white text-primary-600 font-bold py-4 px-8 rounded-xl hover:bg-accent-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    Get Your Free Quote
                  </button>
                </Link>
                <a href="tel:6514722736" className="flex-1">
                  <button className="w-full bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300">
                    Call (651) 472-2736
                  </button>
                </a>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm opacity-90">
                <div className="flex items-center gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>100% Money-Back Guarantee</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/40"></div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-400">✓</span>
                  <span className="mb-12">Same-Day Service Available</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/40"></div>
                <div className="flex items-center gap-2">
                  <span className="text-accent-400">✓</span>
                  <span>Fully Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FourthLanding;