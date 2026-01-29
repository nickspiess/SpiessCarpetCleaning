import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Contact() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setPageLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const paymentMethods = [
    { name: 'Visa' },
    { name: 'Mastercard' },
    { name: 'Discover' },
    { name: 'American Express' },
    { name: 'Cash' },
    { name: 'Check' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name required';
    if (!formData.email.trim()) newErrors.email = 'Email required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone required';
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Invalid phone format';
    if (!formData.message.trim()) newErrors.message = 'Message required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Here you would normally send to your API
      console.log('Form data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you! Your message has been sent. We\'ll contact you soon!');
      
      // Reset form
      setFormData({
        firstName: '', lastName: '', email: '', phone: '', message: ''
      });
      
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Spiess Carpet Cleaning - Twin Cities</title>
        <meta name="description" content="Contact Spiess Carpet Cleaning for professional carpet, upholstery, and air duct cleaning in the Twin Cities. Call (651) 472-2736 or schedule online." />
        <meta name="keywords" content="contact Spiess Carpet Cleaning, Twin Cities carpet cleaning, schedule service, phone number" />
      </Head>

      <div className="bg-gradient-to-b from-stone-50 via-slate-50/80 to-white min-h-screen">
        {/* Hero Section */}
        <section className="pb-12 md:pb-16 pt-8 md:pt-12 relative overflow-hidden">
          <div className="container-wide relative z-10">
            {/* Header */}
            <div className={`text-center mb-12 transition-all duration-1000 ease-out ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Contact Us
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Ready to transform your space? Contact us today for a free consultation.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto transition-all duration-1000 ease-out delay-200 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              {/* Phone Card */}
              <div className="relative bg-white rounded-2xl p-5 pt-6 border border-slate-200 text-center group overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: 'rgba(0,168,227,1)' }}></div>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(0,168,227,0.1)' }}>
                  <svg className="w-5 h-5" style={{ color: 'rgba(0,168,227,1)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">Call or Text</p>
                <a href="tel:6514722736" className="text-base font-bold text-slate-900 hover:opacity-70 transition-opacity">
                  (651) 472-2736
                </a>
              </div>

              {/* Email Card */}
              <div className="relative bg-white rounded-2xl p-5 pt-6 border border-slate-200 text-center group overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: 'rgba(198,25,73,1)' }}></div>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(198,25,73,0.1)' }}>
                  <svg className="w-5 h-5" style={{ color: 'rgba(198,25,73,1)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">Email</p>
                <a href="mailto:sales@spiesscarpet.com" className="text-base font-bold text-slate-900 hover:opacity-70 transition-opacity">
                  sales@spiesscarpet.com
                </a>
              </div>

              {/* Hours Card */}
              <div className="relative bg-white rounded-2xl p-5 pt-6 border border-slate-200 text-center group overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundColor: 'rgba(247,167,25,1)' }}></div>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: 'rgba(247,167,25,0.1)' }}>
                  <svg className="w-5 h-5" style={{ color: 'rgba(247,167,25,1)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-0.5">Hours</p>
                <p className="text-base font-bold text-slate-900">Mon–Fri 7a–5p</p>
                <p className="text-xs text-slate-500 mt-0.5">Sat by Appointment</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div className={`transition-all duration-1000 ease-out delay-300 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>
                  <p className="text-slate-600 mb-8">
                    Fill out the form below and we'll get back to you as soon as possible with a personalized quote.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                        <input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                            errors.firstName ? 'border-red-300 focus:border-red-500' : 'border-slate-300 focus:border-secondary-500'
                          } focus:outline-none focus:ring-2 focus:ring-secondary-500/20`}
                          placeholder="John"
                        />
                        {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                        <input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                            errors.lastName ? 'border-red-300 focus:border-red-500' : 'border-slate-300 focus:border-secondary-500'
                          } focus:outline-none focus:ring-2 focus:ring-secondary-500/20`}
                          placeholder="Smith"
                        />
                        {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                            errors.email ? 'border-red-300 focus:border-red-500' : 'border-slate-300 focus:border-secondary-500'
                          } focus:outline-none focus:ring-2 focus:ring-secondary-500/20`}
                          placeholder="john@example.com"
                        />
                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                            errors.phone ? 'border-red-300 focus:border-red-500' : 'border-slate-300 focus:border-secondary-500'
                          } focus:outline-none focus:ring-2 focus:ring-secondary-500/20`}
                          placeholder="(651) 472-2736"
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg border transition-colors resize-vertical ${
                          errors.message ? 'border-red-300 focus:border-red-500' : 'border-slate-300 focus:border-secondary-500'
                        } focus:outline-none focus:ring-2 focus:ring-secondary-500/20`}
                        placeholder="Tell us about your cleaning needs..."
                      />
                      {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-secondary-500 text-white font-bold py-4 px-8 rounded-xl hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>

              {/* Contact Info & Additional Details */}
              <div className={`space-y-8 transition-all duration-1000 ease-out delay-500 ${pageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Service Areas */}
                <div className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Service Areas</h3>
                  <p className="text-slate-700 mb-6">
                    We proudly serve the entire Twin Cities metro area and surrounding communities:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Minneapolis', 'St. Paul', 'Bloomington', 'Plymouth',
                      'Minnetonka', 'Edina', 'Burnsville', 'Eagan',
                      'Woodbury', 'Maple Grove', 'Lakeville', 'Roseville'
                    ].map((city) => (
                      <div key={city} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                        <span className="text-slate-700">{city}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 mt-8">
                    Don't see your city? Call us - we likely service your area!
                  </p>
                </div>

                {/* Payment Methods */}
                <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 md:mb-6">Payment Methods</h3>
                  <p className="text-slate-700 mb-4 md:mb-6 text-sm md:text-base">We accept all major forms of payment:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3">
                    {paymentMethods.map((method) => (
                      <div key={method.name} className="flex items-center justify-center gap-2 p-3 md:p-4 bg-white rounded-lg md:rounded-xl border border-slate-200">
                        <svg className="w-3 h-3 flex-shrink-0" style={{ color: 'rgba(0,168,227,1)' }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs md:text-sm font-medium text-slate-700">{method.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Service */}
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">Emergency Service Available</h3>
                  </div>
                  <p className="text-red-100 mb-8">
                    Water damage or urgent cleaning needs? We offer 24/7 emergency response for critical situations.
                  </p>
                  <a
                    href="tel:6514722736"
                    className="inline-block bg-white text-red-600 font-bold py-3 px-6 rounded-xl hover:bg-red-50 transition-all duration-300"
                  >
                    Call Emergency Line
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(0,168,227,0.5) 0%, transparent 70%)', transform: 'translate(-30%, -30%)' }}></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, rgba(198,25,73,0.5) 0%, transparent 70%)', transform: 'translate(30%, 30%)' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 rounded-full opacity-5" style={{ background: 'radial-gradient(circle, rgba(247,167,25,0.5) 0%, transparent 70%)', transform: 'translate(-50%, -50%)' }}></div>

          {/* Subtle line accents */}
          <div className="absolute top-8 left-8 w-24 h-px" style={{ backgroundColor: 'rgba(0,168,227,0.3)' }}></div>
          <div className="absolute top-8 left-8 w-px h-24" style={{ backgroundColor: 'rgba(0,168,227,0.3)' }}></div>
          <div className="absolute bottom-8 right-8 w-24 h-px" style={{ backgroundColor: 'rgba(198,25,73,0.3)' }}></div>
          <div className="absolute bottom-8 right-8 w-px h-24" style={{ backgroundColor: 'rgba(198,25,73,0.3)' }}></div>

          <div className="py-20 container-wide relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Small accent badge */}
              <div className="inline-flex items-center gap-3 mb-8">
                <span className="w-8 h-px" style={{ backgroundColor: 'rgba(0,168,227,1)' }}></span>
                <span className="text-sm font-medium tracking-wider uppercase text-slate-400">Get Started Today</span>
                <span className="w-8 h-px" style={{ backgroundColor: 'rgba(198,25,73,1)' }}></span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Let's Transform Your Space
              </h2>

              <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Experience the difference that 50+ years of expertise makes.
                Contact us today for your free consultation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto items-stretch">
                <a href="tel:6514722736" className="flex-1 flex">
                  <button className="w-full font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5" style={{ backgroundColor: 'rgba(198,25,73,1)', color: 'white' }}>
                    Call (651) 472-2736
                  </button>
                </a>
                <a href="/contact" className="flex-1 flex">
                  <button className="w-full bg-transparent border-2 border-white/30 text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-slate-900 hover:border-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                    Contact Us
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