import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/images/logo.png';
import { useRouter } from "next/router";
import { useEffect, useState } from 'react';

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
    { href: '/testimonials', label: 'Reviews' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50' 
          : 'bg-white shadow-sm'
      }`}>
        <div className="px-4 sm:px-6 lg:container-wide">
          <div className="flex items-center justify-between h-20 relative">
            {/* Spacer for mobile to balance hamburger */}
            <div className="w-10 lg:hidden"></div>

            {/* Logo - Centered on mobile, left on desktop */}
            <Link href="/" className="lg:static absolute left-1/2 -translate-x-1/2 lg:translate-x-0 flex items-center transition-transform duration-300 hover:scale-105">
              <div className="relative w-44 sm:w-48 h-12 sm:h-14">
                <Image
                  src={logo}
                  alt="Spiess Carpet Cleaning"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Mobile Hamburger - Right */}
            <button
              onClick={toggleMenu}
              className="lg:hidden flex items-center justify-center p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-8 h-8 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = router.pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="font-semibold text-lg transition-all duration-300 relative group"
                    style={{
                      color: isActive ? '#05a9e2' : '#334155'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#05a9e2';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = isActive ? '#05a9e2' : '#334155';
                    }}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      style={{ backgroundColor: '#05a9e2' }}
                    />
                  </Link>
                );
              })}
              
              <div className="flex items-center gap-6 ml-6 pl-6 border-l border-slate-300">
                <a
                  href="tel:6514722736"
                  className="font-bold text-lg transition-colors duration-200 flex items-center gap-2 text-slate-700 hover:text-slate-900"
                >
                  <svg className="w-4 h-4" style={{ color: '#05a9e2' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (651) 472-2736
                </a>

                <a
                  href="tel:6514722736"
                  className="px-6 py-2.5 text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                  style={{
                    backgroundColor: '#05a9e2',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0490c5';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#05a9e2';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                >
                  Schedule Today
                </a>
              </div>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm" 
          onClick={handleLinkClick} 
        />
      )}

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-5 border-b border-slate-100">
            <div className="relative w-36 h-10">
              <Image
                src={logo}
                alt="Spiess Carpet Cleaning"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={handleLinkClick}
              className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-200 flex items-center justify-center"
              aria-label="Close menu"
            >
              <span style={{ fontSize: '24px', fontWeight: '400', color: '#1e293b', lineHeight: 0, marginTop: '-2px' }}>×</span>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 py-4 px-3">
            {navLinks.map((link) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-3.5 px-4 rounded-lg font-semibold text-base transition-all duration-200 mb-1"
                  style={{
                    backgroundColor: isActive ? '#05a9e2' : 'transparent',
                    color: isActive ? '#ffffff' : '#334155',
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Contact Actions */}
          <div className="p-5 border-t border-slate-100 space-y-3 bg-slate-50">
            <a
              href="tel:6514722736"
              className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg bg-white border border-slate-200 text-slate-800 font-semibold text-base hover:border-slate-300 transition-all duration-200"
              onClick={handleLinkClick}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              (651) 472-2736
            </a>

            <a
              href="tel:6514722736"
              className="flex items-center justify-center py-3.5 px-5 text-white font-semibold text-base rounded-lg shadow-md transition-all duration-200"
              style={{ backgroundColor: '#05a9e2', textDecoration: 'none' }}
              onClick={handleLinkClick}
            >
              Schedule Today
            </a>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;