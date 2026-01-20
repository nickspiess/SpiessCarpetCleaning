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
    { href: '/about', label: 'About', icon: '👥' },
    { href: '/services', label: 'Services', icon: '🧽' },
    { href: '/contact', label: 'Contact', icon: '📞' },
    { href: '/testimonials', label: 'Reviews', icon: '⭐' },
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
        <div className="container-wide">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center z-10">
              <div className="relative w-48 h-14">
                <Image
                  src={logo}
                  alt="Spiess Carpet Cleaning"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

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
                      color: isActive ? 'rgba(0,168,227,1)' : undefined
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) e.currentTarget.style.color = 'rgba(0,168,227,1)';
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) e.currentTarget.style.color = '';
                    }}
                    onMouseDown={(e) => {
                      e.currentTarget.style.color = 'rgba(0,140,195,1)';
                    }}
                    onMouseUp={(e) => {
                      e.currentTarget.style.color = isActive ? 'rgba(0,168,227,1)' : '';
                    }}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 transform origin-left transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      style={{ backgroundColor: 'rgba(0,168,227,1)' }}
                    />
                  </Link>
                );
              })}
              
              <div className="flex items-center gap-6 ml-6 pl-6 border-l border-slate-300">
                <a
                  href="tel:6514722736"
                  className="text-accent-600 hover:text-accent-700 font-bold text-lg transition-colors duration-200 flex items-center gap-2"
                >
                  📞 (651) 472-2736
                </a>
                
                <button
                  onClick={() => router.push('/quote')}
                  className="px-6 py-2.5 bg-secondary-50 hover:bg-secondary-100 text-secondary-600 font-semibold rounded-lg border border-secondary-200 hover:border-secondary-300 transition-all duration-200"
                >
                  Get Free Quote
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden relative w-12 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors duration-200 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-slate-800 transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`} />
                <span className={`block h-0.5 w-full bg-slate-800 transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`} />
                <span className={`block h-0.5 w-full bg-slate-800 transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`} />
              </div>
            </button>
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
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-white shadow-2xl transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <div className="relative w-40 h-12">
              <Image
                src={logo}
                alt="Spiess Carpet Cleaning"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={handleLinkClick}
              className="w-10 h-10 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors duration-200 flex items-center justify-center"
            >
              <span className="text-slate-600 text-xl">×</span>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="flex-1 p-6 space-y-2">
            {navLinks.map((link, index) => {
              const isActive = router.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex items-center gap-4 py-4 px-4 rounded-xl font-semibold text-lg transition-all duration-300 ${
                    isActive
                      ? 'border-l-4'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    backgroundColor: isActive ? 'rgba(0,168,227,0.1)' : undefined,
                    color: isActive ? 'rgba(0,168,227,1)' : undefined,
                    borderColor: isActive ? 'rgba(0,168,227,1)' : undefined
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = 'rgba(0,168,227,1)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = '';
                  }}
                  onMouseDown={(e) => {
                    e.currentTarget.style.color = 'rgba(0,140,195,1)';
                    e.currentTarget.style.backgroundColor = 'rgba(0,168,227,0.15)';
                  }}
                  onMouseUp={(e) => {
                    e.currentTarget.style.color = isActive ? 'rgba(0,168,227,1)' : '';
                    e.currentTarget.style.backgroundColor = isActive ? 'rgba(0,168,227,0.1)' : '';
                  }}
                >
                  <span className="text-2xl">{link.icon}</span>
                  {link.label}
                </Link>
              );
            })}
          </div>
          
          {/* Mobile Contact Actions */}
          <div className="p-6 border-t border-slate-200 space-y-4">
            <a
              href="tel:6514722736"
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-accent-50 text-accent-700 font-bold text-lg hover:bg-accent-100 transition-colors duration-200"
              onClick={handleLinkClick}
            >
              📞 Call (651) 472-2736
            </a>
            
            <button
              onClick={() => {
                router.push('/quote');
                handleLinkClick();
              }}
              className="w-full py-4 px-6 bg-secondary-50 hover:bg-secondary-100 text-secondary-600 font-semibold text-lg rounded-xl border border-secondary-200 hover:border-secondary-300 transition-all duration-200"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />
    </>
  );
};

export default Navbar;