import React from 'react';
import ImageSlider from "./ImageSlider";
import Image from 'next/image';
import NextDoor from '../../public/images/NextDoor.jpg';

const ThirdLanding = () => {
  const images = [    
      require("../../public/images/angie_2013.jpeg").default,    
      require("../../public/images/angie_2014.jpeg").default,    
      require("../../public/images/angie_2015.jpeg").default,    
      require("../../public/images/angie_2017.jpeg").default,
  ];

  const achievements = [
    { number: "40+", label: "Years of Excellence" },
    { number: "10,000+", label: "Happy Customers" },
    { number: "99%", label: "Satisfaction Rate" },
    { number: "24/7", label: "Emergency Service" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50/40 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-100/40 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl transform translate-x-1/2"></div>
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            🏆 Industry Recognition & Awards
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
            <span className="block">The Most Awarded</span>
            <span className="bg-gradient-to-r from-accent-500 to-primary-500 bg-clip-text text-transparent">
              Carpet Cleaner
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-slate-600 font-medium">
              in the Midwest
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Four decades of unwavering commitment to excellence has earned us recognition 
            from industry leaders and thousands of satisfied customers.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group-hover:border-primary-200 group-hover:-translate-y-1">
                <div className="text-4xl md:text-5xl font-black text-primary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {achievement.number}
                </div>
                <div className="text-slate-700 font-medium">
                  {achievement.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Angie's List Awards */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 group">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                🥇 Multi-Year Winner
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Angie's List Super Service Award
              </h3>
              <p className="text-slate-600 text-lg">
                Recognized for outstanding service quality and customer satisfaction
              </p>
            </div>
            
            <div className="h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 p-6 shadow-inner group-hover:scale-105 transition-transform duration-500">
              <ImageSlider images={images} />
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center bg-primary-50 rounded-xl p-4">
                <div className="text-3xl font-black text-primary-600">5+</div>
                <div className="text-sm font-medium text-slate-700">Years Winner</div>
              </div>
              <div className="text-center bg-primary-50 rounded-xl p-4">
                <div className="text-3xl font-black text-primary-600">A+</div>
                <div className="text-sm font-medium text-slate-700">Rating</div>
              </div>
            </div>
          </div>

          {/* NextDoor Award */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200 hover:shadow-2xl transition-all duration-500 group">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                🌟 Community Choice
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                NextDoor™ Neighborhood Fave
              </h3>
              <p className="text-slate-600 text-lg">
                Trusted and recommended by neighbors across the Twin Cities
              </p>
            </div>
            
            <div className="h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6 shadow-inner group-hover:scale-105 transition-transform duration-500">
              <div className="relative">
                <Image
                  src={NextDoor}
                  alt="NextDoor Neighborhood Fave Award"
                  width={220}
                  height={220}
                  className="object-contain drop-shadow-lg"
                />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">⭐</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center bg-secondary-50 rounded-xl p-4">
                <div className="text-3xl font-black text-secondary-600">100%</div>
                <div className="text-sm font-medium text-slate-700">Recommend</div>
              </div>
              <div className="text-center bg-secondary-50 rounded-xl p-4">
                <div className="text-3xl font-black text-secondary-600">Top</div>
                <div className="text-sm font-medium text-slate-700">Rated</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Recognitions */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Additional Industry Recognition
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our commitment to excellence extends beyond awards to certifications and memberships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🛡️",
                title: "Better Business Bureau",
                subtitle: "A+ Accredited Business",
                description: "Maintaining the highest standards of business ethics and customer service"
              },
              {
                icon: "✅",
                title: "Certified Technicians",
                subtitle: "IICRC Certified",
                description: "All our technicians are trained and certified by industry standards"
              },
              {
                icon: "🏠",
                title: "Fully Licensed & Insured",
                subtitle: "Complete Protection",
                description: "Your home and investment are protected with comprehensive coverage"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-accent-100 to-accent-200 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <div className="text-accent-600 font-medium mb-3">
                  {item.subtitle}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
              Experience Award-Winning Service
            </h3>
            <p className="text-xl opacity-95 mb-12 mt-8 max-w-2xl mx-auto text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
              Join thousands of satisfied customers who trust Spiess Carpet Cleaning 
              for exceptional results and professional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/quote" className="inline-block">
                <button className="bg-white text-primary-600 font-bold py-4 px-8 rounded-xl hover:bg-accent-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Get Your Free Quote Today
                </button>
              </a>
              <a href="tel:6514722736" className="inline-block">
                <button className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300 border border-gray-300 shadow-md">
                  Call (651) 472-2736
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdLanding;