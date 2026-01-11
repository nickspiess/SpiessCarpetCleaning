import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Services() {
  const router = useRouter();
  const [activeService, setActiveService] = useState('carpet');

  const services = [
    {
      id: 'carpet',
      title: 'Carpet Cleaning',
      subtitle: 'Deep Steam Cleaning',
      icon: '🏠',
      price: 'Starting at $45/room',
      image: '/images/carpet.jpeg',
      description: 'State-of-the-art, chemical-free, truck-mounted steam cleaning designed to make your carpets as clean as possible. Our advanced cleaning process removes deep-seated dirt, allergens, and stains.',
      features: [
        'Deep steam extraction',
        'Chemical-free cleaning',
        'Fast drying (2-4 hours)',
        'Pet odor elimination',
        'Stain protection available',
        'Truck-mounted equipment'
      ],
      process: [
        'Pre-inspection and spot treatment',
        'Hot water extraction cleaning',
        'Neutralizing rinse',
        'Fast-dry process'
      ]
    },
    {
      id: 'upholstery',
      title: 'Upholstery Cleaning',
      subtitle: 'Furniture & Fabric Care',
      icon: '🛋️',
      price: 'Starting at $85/piece',
      image: '/images/upholstery.jpeg',
      description: 'Professional upholstery cleaning that removes allergens and protects your family\'s health. Our state-of-the-art cleaning tackles even the most ground-in dirt and grime, extending furniture life.',
      features: [
        'Allergen removal',
        'Deep fabric cleaning',
        'Color restoration',
        'Fabric protection',
        'Odor elimination',
        'Gentle care process'
      ],
      process: [
        'Fabric type assessment',
        'Pre-treatment application',
        'Gentle extraction cleaning',
        'Protective finishing'
      ]
    },
    {
      id: 'airduct',
      title: 'Air Duct Cleaning',
      subtitle: 'Improved Air Quality',
      icon: '💨',
      price: 'Starting at $199/system',
      image: '/images/vents.jpeg',
      description: 'Professional air duct cleaning with two service levels: advanced and maintenance cleanings. Our industrial equipment cleans vents, branches, and trunk lines for cleaner indoor air.',
      features: [
        'Industrial vacuum systems',
        'High-pressure air cleaning',
        'Complete system cleaning',
        'Improved air quality',
        'Energy efficiency boost',
        'Allergen reduction'
      ],
      process: [
        'System inspection',
        'Access point creation',
        'High-powered vacuuming',
        'Final system check'
      ]
    },
    {
      id: 'additional',
      title: 'Additional Services',
      subtitle: 'Specialized Solutions',
      icon: '⭐',
      price: 'Custom pricing',
      image: '/images/upholstery.jpeg',
      description: 'Comprehensive cleaning solutions for specialized needs. From area rugs to emergency water removal, we handle it all with professional expertise.',
      features: [
        'Area rug cleaning',
        'Pet stain & odor removal',
        'Water damage restoration',
        'Tile floor cleaning',
        'Move-in/out cleaning',
        'Emergency services'
      ],
      process: [
        'Damage assessment',
        'Custom treatment plan',
        'Specialized cleaning',
        'Quality inspection'
      ]
    }
  ];

  const currentService = services.find(s => s.id === activeService);

  return (
    <>
      <Head>
        <title>Professional Cleaning Services | Spiess Carpet Cleaning</title>
        <meta name="description" content="Expert carpet, upholstery, and air duct cleaning services in the Twin Cities. 40+ years of experience, state-of-the-art equipment, 100% satisfaction guaranteed." />
        <meta name="keywords" content="carpet cleaning, upholstery cleaning, air duct cleaning, Twin Cities, professional cleaning services" />
      </Head>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50/40 via-white to-accent-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-100/40 rounded-full blur-3xl transform translate-x-1/2"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary-100/40 rounded-full blur-3xl transform -translate-x-1/2"></div>
          </div>
          
          <div className="container-wide relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🧽 Professional Services
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                <span className="block">Complete Cleaning</span>
                <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                From deep carpet cleaning to comprehensive air duct services—we've got your home covered. 
                Four decades of expertise with state-of-the-art equipment.
              </p>
            </div>

            {/* Service Selector */}
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden mb-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-slate-200">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveService(service.id)}
                      className={`p-6 text-center transition-all duration-300 ${
                        activeService === service.id
                          ? (service.id === 'carpet' ? 'bg-secondary-50 text-secondary-600 border-b-2 border-secondary-500' : 
                             service.id === 'upholstery' ? 'bg-accent-50 text-accent-600 border-b-2 border-accent-500' :
                             service.id === 'airduct' ? 'bg-primary-50 text-primary-600 border-b-2 border-primary-500' :
                             'bg-secondary-50 text-secondary-600 border-b-2 border-secondary-500')
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <div className="text-3xl mb-2">{service.icon}</div>
                      <h3 className="font-bold text-sm lg:text-base">{service.title}</h3>
                      <p className="text-xs lg:text-sm opacity-75">{service.subtitle}</p>
                    </button>
                  ))}
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Service Image */}
                    <div className="order-2 lg:order-1">
                      <div className="rounded-2xl overflow-hidden shadow-xl">
                        <div className="aspect-video relative">
                          <Image
                            src={currentService.image}
                            alt={currentService.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="order-1 lg:order-2">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                          {currentService.title}
                        </h2>
                        <div className="text-right">
                          <div className="text-2xl font-black text-secondary-600">
                            {currentService.price}
                          </div>
                        </div>
                      </div>

                      <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        {currentService.description}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h4 className="text-lg font-bold text-slate-900 mb-4">What's Included:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {currentService.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <div className="w-5 h-5 bg-secondary-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-secondary-600 text-sm font-bold">✓</span>
                              </div>
                              <span className="text-slate-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => router.push('/quote')}
                          className="flex-1 py-3 px-6 bg-secondary-500 text-white font-bold rounded-lg hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          Get Free Quote
                        </button>
                        <button
                          onClick={() => router.push('/contact')}
                          className="flex-1 py-3 px-6 border-2 border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-all duration-300"
                        >
                          Schedule Service
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Process Section */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                  Our {currentService.title} Process
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {currentService.process.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center font-bold text-lg mb-4 ${
                        index % 3 === 0 ? 'bg-secondary-100 text-secondary-600' : 
                        index % 3 === 1 ? 'bg-accent-100 text-accent-600' : 
                        'bg-primary-100 text-primary-600'
                      }`}>
                        {index + 1}
                      </div>
                      <p className="text-slate-700 font-medium">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                🏆 Why Choose Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The Spiess Difference
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Four decades of innovation and expertise sets us apart from the competition
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: "⚡",
                  title: "Portable Equipment",
                  description: "More powerful than truck-mounted units, ensuring deeper cleaning and faster drying"
                },
                {
                  icon: "🌿",
                  title: "Chemical-Free Options",
                  description: "Safe for your family and pets while still delivering exceptional cleaning results"
                },
                {
                  icon: "💯",
                  title: "100% Satisfaction Guarantee",
                  description: "We stand behind our work with a complete satisfaction guarantee on every job"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-6 ${
                    index % 3 === 0 ? 'bg-secondary-100' : index % 3 === 1 ? 'bg-accent-100' : 'bg-primary-100'
                  }`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-secondary-500 via-accent-500 to-primary-500 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-400/20 rounded-full blur-xl transform -translate-x-12 translate-y-12"></div>
          
          <div className="container-wide relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
                📞 Ready to Book?
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 mt-4 [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)] text-white">
                Experience Professional Cleaning Today
              </h2>
              
              <p className="text-xl md:text-2xl opacity-95 mb-16 max-w-3xl mx-auto leading-relaxed [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)] text-white mt-12">
                Join thousands of satisfied customers who trust Spiess Carpet Cleaning. 
                Same-day service available.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <button
                  onClick={() => router.push('/quote')}
                  className="flex-1 bg-white text-secondary-600 font-bold py-4 px-8 rounded-xl hover:bg-accent-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Get Free Quote
                </button>
                <a href="tel:6514722736" className="flex-1">
                  <button className="w-full bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-secondary-600 transition-all duration-300">
                    Call (651) 472-2736
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}