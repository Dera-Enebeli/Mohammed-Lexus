'use client';

import { motion } from 'framer-motion';
import { Icons } from './Icons';

const driftServices = [
  { title: 'Handbrake', price: 'From ₦180,000', icon: <Icons.Handbrake /> },
  { title: 'LSD Diff', price: 'From ₦350,000', icon: <Icons.Gear /> },
  { title: 'Drift Arms', price: 'From ₦120,000', icon: <Icons.Wrench /> },
  { title: 'Clutch', price: 'From ₦200,000', icon: <Icons.Clutch /> },
  { title: 'Race Seats', price: 'From ₦150,000', icon: <Icons.Seat /> },
  { title: 'Full Build', price: 'From ₦1.5M', icon: <Icons.Build /> },
];

const DriftCarAnimation = () => (
  <svg viewBox="0 0 500 180" fill="none" style={{ width: '100%', maxWidth: '500px' }}>
    <defs>
      <linearGradient id="driftCarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#ff0066" />
        <stop offset="100%" stopColor="#cc0000" />
      </linearGradient>
      <linearGradient id="smokeGrad" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#666" stopOpacity="0.6"/>
        <stop offset="100%" stopColor="#666" stopOpacity="0"/>
      </linearGradient>
    </defs>
    
    <motion.g
      animate={{ 
        x: [0, 15, 0, -8, 0],
        rotate: [0, 3, 0, -3, 0]
      }}
      transition={{ 
        duration: 2.5, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <path d="M100 120 L70 105 L75 78 L120 60 L185 48 L290 52 L370 72 L410 98 L405 122 L370 130 L110 130 L100 120 Z" fill="url(#driftCarGrad)" />
      <path d="M170 52 L225 35 L300 38 L355 58 L370 82 L335 88 L195 88 Z" fill="#1a1a2e" opacity="0.8"/>
      <rect x="65" y="130" width="70" height="7" fill="rgba(0,0,0,0.5)" />
      <rect x="360" y="130" width="55" height="7" fill="rgba(0,0,0,0.5)" />
      <polygon points="55,95 82,88 85,108 58,112" fill="#fff" opacity="0.9"/>
      <rect x="395" y="95" width="10" height="25" fill="#ff0000"/>
      <circle cx="155" cy="130" r="32" fill="#0a0a0a"/>
      <circle cx="155" cy="130" r="25" fill="#1a1a1a"/>
      <circle cx="155" cy="130" r="16" fill="#ff0066" opacity="0.4"/>
      <circle cx="335" cy="130" r="32" fill="#0a0a0a"/>
      <circle cx="335" cy="130" r="25" fill="#1a1a1a"/>
      <circle cx="335" cy="130" r="16" fill="#ff0066" opacity="0.4"/>
    </motion.g>
    
    <motion.g
      animate={{ opacity: [0.6, 0.2, 0.6], scale: [1, 1.4, 1] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <ellipse cx="60" cy="145" rx="35" ry="12" fill="url(#smokeGrad)" />
    </motion.g>
    <motion.g
      animate={{ opacity: [0.4, 0.1, 0.4], scale: [1, 1.3, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
    >
      <ellipse cx="90" cy="142" rx="25" ry="10" fill="url(#smokeGrad)" />
    </motion.g>
    
    <motion.text
      animate={{ opacity: [0.8, 1, 0.8] }}
      transition={{ duration: 1, repeat: Infinity }}
      x="250" y="165" fill="#ff0066" fontSize="16" fontFamily="Arial Black" fontWeight="bold" textAnchor="middle" opacity="0.9"
    >
      DRIFT MODE ACTIVATED
    </motion.text>
    
    <motion.g
      animate={{ 
        rotate: [0, 360],
        opacity: [0.3, 0.8, 0.3]
      }}
      transition={{ 
        duration: 4, 
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <circle cx="440" cy="40" r="20" fill="none" stroke="#ff0066" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5"/>
    </motion.g>
  </svg>
);

export default function Drifters() {
  return (
    <section id="drifters" style={{ width: '100%', padding: '100px 24px', backgroundColor: '#0a0a0a' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '50px' }}
        >
          <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#ff0066', marginBottom: '12px' }}>— For Professionals</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px, 8vw, 72px)', lineHeight: 1, color: '#ffffff' }}>
            <span style={{ color: '#ff0066' }}>DRIFT</span> ZONE
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '50px', textAlign: 'center' }}
        >
          <DriftCarAnimation />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {driftServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.03, y: -3 }}
              style={{ 
                padding: '24px', 
                border: '1px solid rgba(255,0,102,0.3)', 
                background: 'rgba(255,0,102,0.05)',
                textAlign: 'center',
                borderRadius: '12px'
              }}
            >
              <div style={{ width: '36px', height: '36px', margin: '0 auto 10px', color: '#ff0066' }}>{service.icon}</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', color: '#ffffff' }}>{service.title}</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', color: '#ff0066', marginTop: '6px' }}>{service.price}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', padding: '40px', background: 'linear-gradient(135deg, rgba(255,0,102,0.1) 0%, rgba(204,0,0,0.05) 100%)', borderRadius: '16px', border: '1px solid rgba(255,0,102,0.3)' }}
        >
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>Need a complete drift build?</p>
          <a href="#contact" style={{ display: 'inline-block', padding: '16px 40px', background: '#ff0066', color: '#ffffff', fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '8px' }}>
            Start Your Build →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
