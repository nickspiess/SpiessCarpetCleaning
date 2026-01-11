import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

export default function About() {
  const router = useRouter();

  const milestones = [
    { year: "1972", event: "Jeff Spiess begins working in the carpet cleaning industry with his father" },
    { year: "1990", event: "Jeff establishes Spiess Carpet Cleaning as an independent business" },
    { year: "2000s", event: "Expansion throughout the Twin Cities metro area" },
    { year: "2010+", event: "Over 30,000 homes cleaned with 99% customer satisfaction" },
    { year: "Today", event: "Leading carpet cleaning service in Minnesota" }
  ];

  const values = [
    {
      icon: "🤝",
      title: "Service Excellence",
      description: "Every job is completed with meticulous attention to detail and professional standards"
    },
    {
      icon: "💯",
      title: "Honesty & Integrity",
      description: "Transparent pricing, honest assessments, and ethical business practices in every interaction"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family Values",
      description: "A local, family-owned business that treats every customer like part of the family"
    },
    {
      icon: "🏆",
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee backed by decades of experience and expertise"
    }
  ];

  const stats = [
    { number: "40+", label: "Years of Experience", description: "Serving the Twin Cities since 1983" },
    { number: "30K+", label: "Homes Cleaned", description: "Trusted by thousands of families" },
    { number: "99%", label: "Customer Satisfaction", description: "A+ rating on Angie's List" },
    { number: "24/7", label: "Emergency Service", description: "Available when you need us most" }
  ];

  return (
    <>
      <Head>
        <title>About Us | Spiess Carpet Cleaning - Twin Cities' Most Trusted</title>
        <meta name="description" content="Learn about Spiess Carpet Cleaning, a family-owned business serving the Twin Cities since 1983. 40+ years of experience, 30,000+ satisfied customers." />
        <meta name="keywords" content="about Spiess Carpet Cleaning, family business, Twin Cities carpet cleaner, Jeff Spiess, history" />
        <meta property="og:title" content="About Us | Spiess Carpet Cleaning" />
        <meta property="og:description" content="Four decades of carpet cleaning excellence in the Twin Cities. Family-owned, locally trusted." />
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
                👨‍👩‍👧‍👦 Family-Owned Since 1983
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                <span className="block">The Twin Cities'</span>
                <span className="bg-gradient-to-r from-secondary-500 to-accent-500 bg-clip-text text-transparent">
                  Most Trusted
                </span>
                <span className="block text-3xl md:text-4xl lg:text-5xl text-slate-600 font-medium">
                  Carpet Cleaner
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Four decades of unwavering commitment to excellence, innovation, and family values. 
                Discover the story behind Minnesota's most awarded carpet cleaning service.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group-hover:border-secondary-200 group-hover:-translate-y-1">
                    <div className="text-4xl md:text-5xl font-black text-secondary-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-lg font-bold text-slate-900 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-slate-600">
                      {stat.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Video Section */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Mission Statement */}
              <div>
                <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  🎯 Our Mission
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Service, Honesty & Integrity
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Since 1972, our passion has been providing the greatest experience for our customers, 
                  along with the highest quality of work that remains unmatched in the industry.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  We are a family-based, local company that has revolutionized the industry with an 
                  innovative approach that keeps our thousands of customers pleased and always coming back.
                </p>
                
                {/* Values Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.slice(0, 2).map((value, index) => (
                    <div key={index} className={`flex items-start gap-3 p-4 rounded-xl ${
                      index === 0 ? 'bg-secondary-50/50' : 'bg-accent-50/50'
                    }`}>
                      <div className="text-2xl">{value.icon}</div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-1">{value.title}</h4>
                        <p className="text-sm text-slate-600">{value.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Founder Video */}
              <div>
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-slate-200">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                      👨‍💼 From Our Founder
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                      A Personal Message from Jeff Spiess
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
            </div>
          </div>
        </section>

        {/* History Timeline */}
        <section className="py-20 bg-gradient-to-br from-blue-50/30 to-accent-50/20">
          <div className="container-wide">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                📅 Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The History of Spiess Carpet Cleaning
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From humble beginnings to becoming the Twin Cities' most trusted carpet cleaning service
              </p>
            </div>

            {/* Timeline */}
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline line - Hidden on mobile, shown on desktop */}
                <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-secondary-300 transform -translate-x-px"></div>
                
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative mb-16 last:mb-0">
                    {/* Desktop Layout */}
                    <div className="hidden md:flex items-center">
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 w-6 h-6 bg-secondary-500 rounded-full transform -translate-x-3 z-10 border-4 border-white shadow-lg"></div>
                      
                      {/* Content positioned left or right */}
                      <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-12' : 'ml-auto pl-12'}`}>
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                          <div className="text-3xl font-black text-secondary-600 mb-4">{milestone.year}</div>
                          <p className="text-slate-700 leading-relaxed text-lg">{milestone.event}</p>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden flex items-start gap-6">
                      {/* Timeline dot */}
                      <div className="flex-shrink-0 w-6 h-6 bg-secondary-500 rounded-full mt-2 border-4 border-white shadow-lg"></div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                          <div className="text-2xl font-black text-secondary-600 mb-3">{milestone.year}</div>
                          <p className="text-slate-700 leading-relaxed">{milestone.event}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white">
          <div className="container-wide">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                💎 Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                The principles that guide every interaction and define our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 group-hover:border-secondary-200 group-hover:-translate-y-2">
                    <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
                      index % 3 === 0 ? 'bg-secondary-100' : index % 3 === 1 ? 'bg-accent-100' : 'bg-primary-100'
                    }`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Jeff's Story */}
        <section className="py-20 bg-gradient-to-br from-secondary-500 via-accent-500 to-primary-500 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-400/30 rounded-full blur-xl transform -translate-x-12 translate-y-12"></div>
          
          <div className="container-wide relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6">
                👑 Leadership
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 mt-4 text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                Jeff Spiess: A Legacy of Excellence
              </h2>
              
              <div className="text-xl md:text-2xl leading-relaxed space-y-6">
                <p className="text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  Owner Jeff Spiess started in the industry in 1972, working alongside his father. 
                  After exploring other ventures, Jeff founded Spiess Carpet Cleaning in 1990.
                </p>
                <p className="text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  With over 30,000 homes cleaned and a 99% 'A' rating on Angie's List, 
                  Jeff has built a reputation on honesty, integrity, and unmatched quality.
                </p>
                <p className="text-white [text-shadow:_0_2px_4px_rgba(0,0,0,0.5)]">
                  Jeff ensures our team is always professional, courteous, and respectful. 
                  At Spiess Carpet Cleaning, success starts from the first moment we make contact.
                </p>
              </div>
              
              <button
                onClick={() => router.push("/contact")}
                className="bg-white text-secondary-600 font-bold py-4 px-8 rounded-xl hover:bg-accent-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 mt-16 mb-0"
              >
                Schedule Your Cleaning Today
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}