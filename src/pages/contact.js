import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Carpet Cleaning',
    'Upholstery Cleaning', 
    'Air Duct Cleaning',
    'Pet Odor Removal',
    'Emergency Water Removal',
    'Other/General Inquiry'
  ];

  const paymentMethods = [
    { name: 'Visa', icon: '💳' },
    { name: 'Mastercard', icon: '💳' },
    { name: 'Discover', icon: '💳' },
    { name: 'American Express', icon: '💳' },
    { name: 'Cash', icon: '💵' },
    { name: 'Check', icon: '✅' }
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
        firstName: '', lastName: '', email: '', phone: '', message: '', service: ''
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

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50/40 via-white to-accent-50/30 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-100/40 rounded-full blur-3xl transform translate-x-1/2"></div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary-100/40 rounded-full blur-3xl transform -translate-x-1/2"></div>
          </div>
          
          <div className="container-wide relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                📞 Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                <span className="block">Contact</span>
                <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
                  Spiess Carpet
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your space? Contact us today for a free consultation and quote. 
                Same-day service available throughout the Twin Cities.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-secondary-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  📞
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us Now</h3>
                <a 
                  href="tel:6514722736" 
                  className="text-2xl font-black text-secondary-600 hover:text-secondary-700 transition-colors"
                >
                  (651) 472-2736
                </a>
                <p className="text-slate-600 mt-6">Available 7 days a week</p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-accent-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  ✉️
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                <a 
                  href="mailto:sales@spiesscarpet.com" 
                  className="text-lg font-medium text-accent-600 hover:text-accent-700 transition-colors"
                >
                  sales@spiesscarpet.com
                </a>
                <p className="text-slate-600 mt-6">We respond within 24 hours</p>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 mx-auto bg-primary-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  🕒
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Business Hours</h3>
                <div className="text-slate-700 space-y-1">
                  <p className="font-medium">Mon-Fri: 7:00am - 5:00pm</p>
                  <p>Saturday: By Appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
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
                      <label className="block text-sm font-medium text-slate-700 mb-2">Service Needed</label>
                      <select
                        value={formData.service}
                        onChange={(e) => handleInputChange('service', e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/20 transition-colors"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
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
              <div className="space-y-8">
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
                        <span className="text-secondary-600">📍</span>
                        <span className="text-slate-700">{city}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 mt-8">
                    Don't see your city? Call us - we likely service your area!
                  </p>
                </div>

                {/* Payment Methods */}
                <div className="bg-slate-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Payment Methods</h3>
                  <p className="text-slate-700 mb-6">We accept all major forms of payment:</p>
                  <div className="grid grid-cols-3 gap-4">
                    {paymentMethods.map((method) => (
                      <div key={method.name} className="flex flex-col items-center p-4 bg-white rounded-xl border border-slate-200">
                        <span className="text-2xl mb-2">{method.icon}</span>
                        <span className="text-sm font-medium text-slate-700 text-center">{method.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Emergency Service */}
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-white">🚨 Emergency Service Available</h3>
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
        <section className="py-20 bg-gradient-to-br from-secondary-500 via-accent-500 to-primary-500 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-400/30 rounded-full blur-xl transform -translate-x-12 translate-y-12"></div>
          
          <div className="container-wide relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)]">
                Ready to Get Started?
              </h2>
              
              <p className="text-white [text-shadow:_0_1px_2px_rgba(0,0,0,0.4)] text-xl md:text-2xl opacity-95 mb-16 max-w-3xl mx-auto mt-20 leading-relaxed">
                Experience the difference that 40+ years of expertise makes. 
                Contact us today for your free consultation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <a href="tel:6514722736" className="flex-1">
                  <button className="w-full bg-white text-secondary-600 font-bold py-4 px-8 rounded-xl hover:bg-accent-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                    Call (651) 472-2736
                  </button>
                </a>
                <a href="/quote" className="flex-1">
                  <button className="w-full bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-secondary-600 transition-all duration-300">
                    Get Free Quote
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