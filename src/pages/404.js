import Link from 'next/link';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Spiess Carpet Cleaning</title>
        <meta name="description" content="The page you're looking for doesn't exist. Return to Spiess Carpet Cleaning homepage." />
      </Head>

      <div className="min-h-[80vh] bg-gradient-to-b from-slate-50 via-stone-100/50 to-neutral-100 flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          {/* 404 Number */}
          <div className="mb-6">
            <span
              className="text-8xl md:text-9xl font-bold tracking-tight"
              style={{ color: 'rgba(198,25,73,1)' }}
            >
              404
            </span>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have been cleaned away.
            Let's get you back on track.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <button
                className="px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                style={{ backgroundColor: 'rgba(198,25,73,1)' }}
              >
                Back to Home
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 mb-4">Or try one of these pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: '/services', label: 'Services' },
                { href: '/about', label: 'About Us' },
                { href: '/testimonials', label: 'Reviews' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
                  style={{ color: 'rgba(0,168,227,1)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Phone CTA */}
          <div className="mt-8 p-4 bg-white rounded-xl border border-slate-200 inline-flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(0,168,227,0.1)' }}>
              <svg className="w-5 h-5" style={{ color: 'rgba(0,168,227,1)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="text-xs text-slate-500">Need help? Call us</p>
              <a href="tel:6514722736" className="font-bold text-slate-900 hover:opacity-70 transition-opacity">
                (651) 472-2736
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
