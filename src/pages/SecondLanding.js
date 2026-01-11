import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CarpetLogo from '../../public/images/final_carpet.png';
import AirVent from '../../public/images/final_vent.png';
import Couch from '../../public/images/couch.png';

const SecondLanding = () => {
    const services = [
        {
            icon: CarpetLogo,
            title: 'Carpet Cleaning',
            description: 'Transform your carpets with our advanced steam cleaning technology. We don\'t just clean—we restore your carpets to like-new condition.',
            features: ['Deep Steam Extraction', 'Fast Drying', 'Pet Odor Removal', 'Stain Protection'],
            price: 'Starting at $89',
            popular: true
        },
        {
            icon: AirVent,
            title: 'Air Duct Cleaning',
            description: 'Breathe easier with our comprehensive air system cleaning. Improve your home\'s air quality and energy efficiency.',
            features: ['Improved Air Quality', 'Energy Efficiency', 'Allergen Reduction', 'Fire Prevention'],
            price: 'Starting at $199',
            popular: false
        },
        {
            icon: Couch,
            title: 'Upholstery Cleaning',
            description: 'Revitalize your furniture with gentle yet effective cleaning methods that protect and restore your investment.',
            features: ['Fabric Protection', 'Color Restoration', 'Deep Sanitization', 'Gentle Care'],
            price: 'Starting at $129',
            popular: false
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-blue-50/40 via-white to-accent-50/30 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-100/40 rounded-full blur-3xl transform translate-x-1/2"></div>
                <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary-100/40 rounded-full blur-3xl transform -translate-x-1/2"></div>
            </div>
            
            <div className="container-wide relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        ⭐ Most Trusted Services in Twin Cities
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                        <span className="block">Professional Cleaning</span>
                        <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                            Solutions
                        </span>
                    </h2>
                    <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                        Four decades of expertise in transforming homes across the Twin Cities. 
                        From deep carpet cleaning to comprehensive air duct services—we've got you covered.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div key={index} className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-primary-200 group hover:-translate-y-2 ${service.popular ? 'ring-2 ring-primary-500 ring-offset-2' : ''}`}>
                            {/* Popular Badge */}
                            {service.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <div className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Icon with Background */}
                            <div className="relative mb-8">
                                <div className="w-28 h-28 mx-auto mb-4 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Image 
                                        src={service.icon} 
                                        width={70} 
                                        height={70} 
                                        alt={service.title}
                                        className="object-contain"
                                    />
                                </div>
                                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">✓</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="text-center mb-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                                    {service.title}
                                </h3>
                                <div className="text-lg font-bold text-primary-600 mb-4">
                                    {service.price}
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                            </div>

                            {/* Features */}
                            <div className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-primary-600 text-sm font-bold">✓</span>
                                        </div>
                                        <span className="font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="space-y-3">
                                <Link href="/quote" className="block">
                                    <button className="w-full py-4 px-6 bg-primary-500 text-white font-bold rounded-xl hover:bg-primary-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                        Get Free Quote
                                    </button>
                                </Link>
                                <Link href="/services" className="block">
                                    <button className="w-full py-3 px-6 border-2 border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-all duration-300">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Our Simple 3-Step Process
                        </h3>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            From initial contact to final walkthrough, we make professional cleaning effortless
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Free Consultation",
                                description: "Contact us for a no-obligation assessment and personalized quote",
                                icon: "📞"
                            },
                            {
                                step: "02", 
                                title: "Professional Service",
                                description: "Our certified technicians arrive on time with state-of-the-art equipment",
                                icon: "🧽"
                            },
                            {
                                step: "03",
                                title: "Quality Guarantee",
                                description: "100% satisfaction guaranteed or we'll return to make it right",
                                icon: "✨"
                            }
                        ].map((process, index) => (
                            <div key={index} className="text-center group">
                                <div className="relative mb-6">
                                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {process.icon}
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-400 rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">{process.step}</span>
                                    </div>
                                </div>
                                <h4 className="text-xl font-bold text-slate-900 mb-3">
                                    {process.title}
                                </h4>
                                <p className="text-slate-600">
                                    {process.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SecondLanding;