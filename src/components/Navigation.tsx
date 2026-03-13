'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="3" x2="21" y1="6" y2="6" />
    <line x1="3" x2="21" y1="12" y2="12" />
    <line x1="3" x2="21" y1="18" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" x2="6" y1="6" y2="18" />
    <line x1="6" x2="18" y1="6" y2="18" />
  </svg>
);

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#tuning', label: 'Engine Tuning' },
  { href: '#upgrades', label: 'Upgrades' },
  { href: '#tire-letter', label: 'Tire Letter' },
  { href: '#drifters', label: 'Drifters' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          zIndex: 100, 
          padding: isScrolled ? '10px 0' : '16px 0',
          background: isScrolled ? 'rgba(10,10,10,0.98)' : 'rgba(10,10,10,0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: isScrolled ? '1px solid rgba(204,0,0,0.4)' : '1px solid rgba(204,0,0,0.2)'
        }}
      >
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img 
              src="/lexus-logo.png" 
              alt="MOHAMMED_LEXUS" 
              style={{ 
                height: isScrolled ? '42px' : '52px', 
                width: 'auto',
                objectFit: 'contain',
                transition: 'height 0.3s ease'
              }} 
            />
          </a>

          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ 
                  fontFamily: "'Barlow Condensed', sans-serif", 
                  fontSize: '13px', 
                  letterSpacing: '2px', 
                  textTransform: 'uppercase', 
                  color: 'rgba(255,255,255,0.8)', 
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              style={{ 
                padding: '12px 28px', 
                background: 'linear-gradient(135deg, #cc0000 0%, #8b0000 100%)',
                color: '#ffffff', 
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '14px', 
                letterSpacing: '2px', 
                textTransform: 'uppercase', 
                textDecoration: 'none',
                borderRadius: '6px',
              }}
            >
              Get Quote
            </a>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ 
              display: 'none', 
              background: 'none', 
              border: 'none', 
              color: 'white', 
              cursor: 'pointer', 
              padding: '8px'
            }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0,0,0,0.7)',
                zIndex: 90,
              }}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              style={{
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                width: 'min(340px, 85vw)',
                background: '#0a0a0a',
                zIndex: 99,
                padding: '80px 24px 30px',
                display: 'flex',
                flexDirection: 'column',
                borderLeft: '1px solid rgba(204,0,0,0.3)',
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{ 
                      fontFamily: "'Bebas Neue', sans-serif", 
                      fontSize: '24px', 
                      color: '#ffffff', 
                      textDecoration: 'none',
                      padding: '16px 12px',
                      borderBottom: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}
                  >
                    <span style={{ color: '#cc0000', fontSize: '20px' }}>●</span>
                    {link.label}
                  </motion.a>
                ))}
              </div>
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ 
                  padding: '18px', 
                  background: 'linear-gradient(135deg, #cc0000 0%, #8b0000 100%)',
                  color: '#ffffff', 
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '18px', 
                  textTransform: 'uppercase', 
                  textDecoration: 'none',
                  textAlign: 'center',
                  borderRadius: '8px',
                }}
              >
                Get Free Quote
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
