'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Icons } from './Icons';

const wrapColors = [
  { name: 'Racing Red', hex: '#cc0000', glow: '#ff0000' },
  { name: 'Deep Red', hex: '#8b0000', glow: '#aa0000' },
  { name: 'Stealth Black', hex: '#1a1a1a', glow: '#333333' },
  { name: 'Arctic White', hex: '#e8e8e8', glow: '#ffffff' },
  { name: 'Sky Blue', hex: '#00bfff', glow: '#00d4ff' },
  { name: 'Gold', hex: '#ffd700', glow: '#ffdd00' },
  { name: 'Neon Green', hex: '#39ff14', glow: '#50ff30' },
  { name: 'Purple', hex: '#9900cc', glow: '#bb00ff' },
];

const services = [
  { id: 'services', icon: <Icons.Wrap />, title: 'CAR WRAPS' },
  { id: 'tuning', icon: <Icons.Tuning />, title: 'ENGINE TUNING' },
  { id: 'upgrades', icon: <Icons.Upgrade />, title: 'CAR UPGRADES' },
  { id: 'drifters', icon: <Icons.Drift />, title: 'DRIFTERS' },
];

const CarSVG = ({ color }: { color: string }) => (
  <svg viewBox="0 0 800 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: '850px' }}>
    <defs>
      <linearGradient id="heroCarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={color} />
        <stop offset="50%" stopColor={color} stopOpacity="0.9"/>
        <stop offset="100%" stopColor={color} stopOpacity="0.7"/>
      </linearGradient>
      <linearGradient id="windowGradHero" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1a1a2e"/>
        <stop offset="100%" stopColor="#0a0a15"/>
      </linearGradient>
    </defs>
    
    <ellipse cx="400" cy="260" rx="320" ry="20" fill="rgba(0,0,0,0.3)" />
    
    <path d="M80 200 L50 170 L60 120 L120 90 L200 65 L320 55 L500 58 L650 80 L750 120 L770 160 L750 195 L700 210 L580 215 L200 215 L100 210 Z" fill="url(#heroCarGrad)" />
    
    <path d="M260 95 L360 65 L480 68 L560 90 L600 120 L540 128 L300 128 Z" fill="url(#windowGradHero)" />
    
    <polygon points="50,160 90,148 95,175 55,180" fill="#ffffff" opacity="0.9" />
    <rect x="755" y="160" width="15" height="40" fill="#ff0000"/>
    
    <circle cx="220" cy="215" r="45" fill="#0a0a0a"/>
    <circle cx="220" cy="215" r="35" fill="#1a1a1a"/>
    <circle cx="220" cy="215" r="25" fill="#2a2a2a"/>
    <circle cx="220" cy="215" r="12" fill="#ffffff" opacity="0.3"/>
    
    <circle cx="600" cy="215" r="45" fill="#0a0a0a"/>
    <circle cx="600" cy="215" r="35" fill="#1a1a1a"/>
    <circle cx="600" cy="215" r="25" fill="#2a2a2a"/>
    <circle cx="600" cy="215" r="12" fill="#ffffff" opacity="0.3"/>
  </svg>
);

export default function Hero() {
  const [selectedColor, setSelectedColor] = useState(wrapColors[0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} style={{ width: '100%', minHeight: '100vh', paddingTop: '100px', position: 'relative', overflow: 'hidden', background: 'radial-gradient(ellipse 80% 60% at 50% 40%, #1a0505 0%, #0a0a0a 70%)' }}>
      <motion.div 
        style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(48px, 10vw, 96px)', lineHeight: 0.9, color: '#ffffff', marginBottom: '8px' }}>
            WE <span style={{ color: '#cc0000' }}>WRAP</span> CARS
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', maxWidth: '450px', margin: '0 auto' }}>
            Premium vinyl wraps in 200+ colors. Transform your ride with stunning colors.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '750px' }}>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <CarSVG color={selectedColor.hex} />
            </motion.div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '16px' }}>
            Choose Your Color
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
            {wrapColors.map((color) => (
              <motion.button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  width: '46px', 
                  height: '52px',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  background: `linear-gradient(135deg, ${color.hex} 0%, ${color.glow} 100%)`,
                  border: selectedColor.name === color.name ? '2px solid #fff' : 'none',
                  cursor: 'pointer',
                  boxShadow: selectedColor.name === color.name ? `0 0 25px ${color.glow}, 0 0 50px ${color.glow}40` : 'none',
                  transition: 'all 0.2s',
                  position: 'relative'
                }}
                title={color.name}
              >
                {selectedColor.name === color.name && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '20px', height: '20px' }}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </motion.button>
            ))}
          </div>
          <motion.p 
            key={selectedColor.name}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ marginTop: '16px', fontSize: '18px', color: selectedColor.hex, fontWeight: 600, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '2px' }}
          >
            {selectedColor.name.toUpperCase()}
          </motion.p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '40px', maxWidth: '600px', margin: '0 auto' }}>
          {services.map((service) => (
            <a
              key={service.id}
              href={`#${service.id}`}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px', 
                padding: '12px 20px', 
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '30px',
                textDecoration: 'none',
                minWidth: '140px',
                justifyContent: 'center'
              }}
            >
              <span style={{ width: '20px', height: '20px', color: '#cc0000' }}>{service.icon}</span>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '13px', letterSpacing: '1px', color: '#ffffff' }}>{service.title}</span>
            </a>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '24px' }}>
          <a href="#contact" style={{ padding: '16px 40px', background: 'linear-gradient(135deg, #cc0000 0%, #8b0000 100%)', color: '#ffffff', fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '6px', boxShadow: '0 4px 20px rgba(204,0,0,0.3)' }}>
            Get Free Quote →
          </a>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginTop: '50px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.08)', maxWidth: '600px', margin: '50px auto 0', flexWrap: 'wrap' }}>
          {[
            { num: '500+', label: 'Cars Wrapped' },
            { num: '7YR', label: 'Warranty' },
            { num: '48H', label: 'Fast Turnaround' },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '42px', color: '#cc0000' }}>{stat.num}</div>
              <div style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
