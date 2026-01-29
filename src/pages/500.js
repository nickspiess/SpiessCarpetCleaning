import Link from 'next/link';
import Head from 'next/head';

export default function Custom500() {
  return (
    <>
      <Head>
        <title>Server Error | Spiess Carpet Cleaning</title>
        <meta name="description" content="Something went wrong. Please try again or contact Spiess Carpet Cleaning." />
      </Head>

      <div className="min-h-[80vh] bg-gradient-to-b from-slate-50 via-stone-100/50 to-neutral-100 flex items-center justify-center px-4">
        <div className="text-center max-w-xl">
          {/* 500 Number */}
          <div className="mb-6">
            <span
              className="text-8xl md:text-9xl font-bold tracking-tight"
              style={{ color: 'rgba(247,167,25,1)' }}
            >
              500
            </span>
          </div>

          {/* Message */}
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Something Went Wrong
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            We're experiencing some technical difficulties. Our team has been notified and is working on it. Please try again in a moment.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              style={{ backgroundColor: 'rgba(0,168,227,1)' }}
            >
              Try Again
            </button>
            <Link href="/">
              <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all duration-300">
                Back to Home
              </button>
            </Link>
          </div>

          {/* Phone CTA */}
          <div className="mt-12 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
            <p className="text-slate-600 mb-4">
              Need immediate assistance? Give us a call:
            </p>
            <a
              href="tel:6514722736"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-md"
              style={{ backgroundColor: 'rgba(198,25,73,0.1)', color: 'rgba(198,25,73,1)' }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (651) 472-2736
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
