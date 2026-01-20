import { useState } from 'react';
import Head from 'next/head';

const Quote = () => {
  const [activeTab, setActiveTab] = useState('carpet');
  const [formData, setFormData] = useState({
    // Carpet cleaning
    rooms: 0,
    hallways: 0,
    stairs: 0,
    
    // Upholstery cleaning
    chairs: 0,
    ottomans: 0,
    loveseats: 0,
    sofas: 0,
    sectionals: 0,
    
    // Customer info
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    
    // Options
    deodorize: false,
    protection: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const incrementValue = (field) => {
    setFormData(prev => ({ ...prev, [field]: prev[field] + 1 }));
  };

  const decrementValue = (field) => {
    setFormData(prev => ({ ...prev, [field]: Math.max(0, prev[field] - 1) }));
  };

  const calculatePrice = () => {
    let total = 0;
    
    // Carpet pricing
    total += formData.rooms * 45;
    total += formData.hallways * 25;
    total += formData.stairs * 3;
    
    // Upholstery pricing
    total += formData.chairs * 35;
    total += formData.ottomans * 40;
    total += formData.loveseats * 85;
    total += formData.sofas * 120;
    total += formData.sectionals * 180;
    
    // Add-ons
    if (formData.deodorize) total += 25;
    if (formData.protection) total += 50;
    
    return total;
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name required';
    if (!formData.email.trim()) newErrors.email = 'Email required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.phone.trim()) newErrors.phone = 'Phone required';
    if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = 'Invalid phone format';
    
    const hasItems = Object.keys(formData).some(key => 
      ['rooms', 'hallways', 'stairs', 'chairs', 'ottomans', 'loveseats', 'sofas', 'sectionals'].includes(key) && 
      formData[key] > 0
    );
    
    if (!hasItems) newErrors.items = 'Please select at least one service';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const price = calculatePrice();
      const quoteData = {
        ...formData,
        totalPrice: price,
        quoteNumber: `SC${Date.now()}`
      };
      
      // Here you would normally send to your API
      console.log('Quote data:', quoteData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert(`Thank you! Your quote is $${price}. We'll contact you soon!`);
      
      // Reset form
      setFormData({
        rooms: 0, hallways: 0, stairs: 0, chairs: 0, ottomans: 0,
        loveseats: 0, sofas: 0, sectionals: 0, firstName: '', lastName: '',
        email: '', phone: '', address: '', deodorize: false, protection: false
      });
      
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const ServiceCounter = ({ label, field, price }) => (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-secondary-300 transition-colors">
      <div>
        <h4 className="font-medium text-slate-900">{label}</h4>
        <p className="text-sm text-slate-600">${price} each</p>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => decrementValue(field)}
          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors"
        >
          −
        </button>
        <span className="w-8 text-center font-medium text-lg">{formData[field]}</span>
        <button
          type="button"
          onClick={() => incrementValue(field)}
          className="w-8 h-8 rounded-full bg-secondary-100 hover:bg-secondary-200 flex items-center justify-center text-secondary-600 transition-colors"
        >
          +
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Get Free Quote | Spiess Carpet Cleaning</title>
        <meta name="description" content="Get an instant quote for professional carpet and upholstery cleaning services in the Twin Cities." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-accent-50/20">
        <div className="container-narrow py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Get an instant estimate for professional cleaning services. No hidden fees, no surprises.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection Tabs */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
                <div className="flex border-b border-slate-200">
                  <button
                    type="button"
                    onClick={() => setActiveTab('carpet')}
                    className={`flex-1 py-4 px-6 font-medium transition-colors ${
                      activeTab === 'carpet'
                        ? 'bg-secondary-50 text-secondary-600 border-b-2 border-secondary-500'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    Carpet Cleaning
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('upholstery')}
                    className={`flex-1 py-4 px-6 font-medium transition-colors ${
                      activeTab === 'upholstery'
                        ? 'bg-accent-50 text-accent-600 border-b-2 border-accent-500'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    Upholstery Cleaning
                  </button>
                </div>

                <div className="p-6">
                  {activeTab === 'carpet' && (
                    <div className="space-y-4">
                      <ServiceCounter label="Rooms" field="rooms" price="45" />
                      <ServiceCounter label="Hallways" field="hallways" price="25" />
                      <ServiceCounter label="Stairs (per step)" field="stairs" price="3" />
                    </div>
                  )}

                  {activeTab === 'upholstery' && (
                    <div className="space-y-4">
                      <ServiceCounter label="Chairs" field="chairs" price="35" />
                      <ServiceCounter label="Ottomans" field="ottomans" price="40" />
                      <ServiceCounter label="Loveseats" field="loveseats" price="85" />
                      <ServiceCounter label="Sofas" field="sofas" price="120" />
                      <ServiceCounter label="Sectionals" field="sectionals" price="180" />
                    </div>
                  )}
                </div>
              </div>

              {/* Add-ons */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Add-On Services</h3>
                <div className="space-y-4">
                  <label className="flex items-center justify-between p-4 bg-accent-50/30 rounded-xl cursor-pointer hover:bg-accent-100/40 transition-colors">
                    <div>
                      <span className="font-medium text-slate-900">Deodorizer Treatment</span>
                      <p className="text-sm text-slate-600">Eliminates odors and freshens your space (+$25)</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={formData.deodorize}
                      onChange={(e) => handleInputChange('deodorize', e.target.checked)}
                      className="w-5 h-5 text-accent-600 rounded border-slate-300 focus:ring-accent-500"
                    />
                  </label>
                  
                  <label className="flex items-center justify-between p-4 bg-secondary-50/30 rounded-xl cursor-pointer hover:bg-secondary-100/40 transition-colors">
                    <div>
                      <span className="font-medium text-slate-900">Fabric Protection</span>
                      <p className="text-sm text-slate-600">Extends the life of your carpets and furniture (+$50)</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={formData.protection}
                      onChange={(e) => handleInputChange('protection', e.target.checked)}
                      className="w-5 h-5 text-secondary-600 rounded border-slate-300 focus:ring-secondary-500"
                    />
                  </label>
                </div>
              </div>

              {/* Customer Information */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 mb-2">Address (Optional)</label>
                    <input
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500/20 transition-colors"
                      placeholder="123 Main Street, Minneapolis, MN"
                    />
                  </div>
                </div>

                {errors.items && <p className="mt-4 text-sm text-red-600">{errors.items}</p>}
              </div>

              {/* Submit Section */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 text-white">Request Your Free Quote</h3>
                  <p className="text-white/80 mb-6">
                    Professional cleaning with 53 years of experience. 100% satisfaction guaranteed.
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-white text-slate-900 font-bold py-4 px-8 rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;