'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icons } from './Icons';

const categories = [
  { id: 'body', name: 'Body Kits', icon: <Icons.Upgrade /> },
  { id: 'exhaust', name: 'Exhaust', icon: <Icons.Exhaust /> },
  { id: 'intake', name: 'Air Intakes', icon: <Icons.Air /> },
  { id: 'suspension', name: 'Suspension', icon: <Icons.Suspension /> },
];

const items: Record<string, { name: string; price: string }[]> = {
  body: [
    { name: 'Front Lip', price: '₦45,000' },
    { name: 'Side Skirts', price: '₦65,000' },
    { name: 'Rear Diffuser', price: '₦55,000' },
    { name: 'Spoiler/Wing', price: '₦80,000' },
    { name: 'Full Body Kit', price: '₦350,000' },
  ],
  exhaust: [
    { name: 'Axle Back', price: '₦120,000' },
    { name: 'Cat Back', price: '₦180,000' },
    { name: 'Turbo Back', price: '₦280,000' },
    { name: 'Titanium', price: '₦450,000' },
  ],
  intake: [
    { name: 'Short Ram', price: '₦35,000' },
    { name: 'Cold Air', price: '₦55,000' },
    { name: 'Ram Air', price: '₦95,000' },
  ],
  suspension: [
    { name: 'Lowering Springs', price: '₦65,000' },
    { name: 'Coilovers', price: '₦180,000' },
    { name: 'Air Ride', price: '₦400,000' },
  ],
};

const PartPreview = ({ category, color }: { category: string; color: string }) => {
  const parts = {
    body: (
      <svg viewBox="0 0 200 100" fill="none" style={{ width: '100%', height: '100%' }}>
        <motion.path
          d="M20 70 L40 50 L160 50 L180 70 L180 80 L20 80 Z"
          fill={color}
          opacity={0.8}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.rect x="50" y="40" width="100" height="20" rx="5" fill={color} opacity={0.6} animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2, repeat: Infinity }} />
        <motion.path d="M160 50 L175 35 L185 35" stroke={color} strokeWidth="2" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.8, repeat: Infinity }} />
      </svg>
    ),
    exhaust: (
      <svg viewBox="0 0 200 100" fill="none" style={{ width: '100%', height: '100%' }}>
        <rect x="20" y="60" width="140" height="20" rx="3" fill="#333" />
        <motion.path d="M160 60 L160 50 L180 50 L180 70 L160 70" stroke={color} strokeWidth="4" fill="none" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.5, repeat: Infinity }} />
        <motion.g>
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx={175 + i * 8}
              cy="60"
              r="3"
              fill={color}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: [-10 - i * 5, -20 - i * 8] }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.g>
      </svg>
    ),
    intake: (
      <svg viewBox="0 0 200 100" fill="none" style={{ width: '100%', height: '100%' }}>
        <rect x="60" y="30" width="80" height="40" rx="5" fill="#222" stroke="#444" strokeWidth="2" />
        <motion.rect x="70" y="40" width="60" height="20" fill={color} animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <path d="M60 50 L30 50 L30 65 L50 65" stroke={color} strokeWidth="3" fill="none" />
        <motion.path d="M30 45 L20 45 L20 70 L30 70" stroke={color} strokeWidth="2" fill="none" animate={{ stroke: ['#00bfff', '#00d4ff', '#00bfff'] }} transition={{ duration: 1, repeat: Infinity }} />
      </svg>
    ),
    suspension: (
      <svg viewBox="0 0 200 100" fill="none" style={{ width: '100%', height: '100%' }}>
        <path d="M70 30 L70 70 M130 30 L130 70" stroke="#444" strokeWidth="6" />
        <motion.rect x="60" y="20" width="80" height="15" rx="3" fill={color} animate={{ y: [20, 25, 20] }} transition={{ duration: 1.5, repeat: Infinity }} />
        <circle cx="70" cy="75" r="12" fill="#222" stroke={color} strokeWidth="2" />
        <circle cx="70" cy="75" r="6" fill="#444" />
        <circle cx="130" cy="75" r="12" fill="#222" stroke={color} strokeWidth="2" />
        <circle cx="130" cy="75" r="6" fill="#444" />
        <motion.path d="M50 75 L150 75" stroke={color} strokeWidth="2" animate={{ y: [0, 3, 0] }} transition={{ duration: 0.5, repeat: Infinity }} />
      </svg>
    ),
  };
  return parts[category as keyof typeof parts] || null;
};

export default function CarUpgrades() {
  const [active, setActive] = useState('body');
  const [previewIndex, setPreviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviewIndex((prev) => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <section id="upgrades" style={{ width: '100%', padding: '100px 24px', backgroundColor: '#0a0a0a' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '50px' }}
        >
          <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#00bfff', marginBottom: '12px' }}>— Modification</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px, 8vw, 72px)', lineHeight: 1, color: '#ffffff' }}>
            CAR <span style={{ color: '#00bfff' }}>UPGRADES</span>
          </h2>
        </motion.div>

        <div style={{ display: 'flex', gap: '12px', marginBottom: '30px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px',
                padding: '14px 24px', 
                background: active === cat.id ? 'linear-gradient(135deg, #00bfff 0%, #0088cc 100%)' : 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '30px',
                cursor: 'pointer',
              }}
            >
              <span style={{ width: '20px', height: '20px', color: active === cat.id ? '#fff' : '#00bfff' }}>{cat.icon}</span>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '14px', color: '#fff' }}>{cat.name}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ padding: '32px', background: 'rgba(0,191,255,0.04)', border: '1px solid rgba(0,191,255,0.2)', borderRadius: '16px' }}
        >
          <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '200px', height: '140px', background: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${active}-${previewIndex}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <PartPreview category={active} color="#00bfff" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div style={{ flex: '1', minWidth: '200px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px' }}>
                {items[active]?.map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '16px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                    <span style={{ fontSize: '14px', color: '#ddd' }}>{item.name}</span>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', color: '#00bfff' }}>{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <a href="#contact" style={{ display: 'inline-block', padding: '14px 32px', background: '#00bfff', color: '#000', fontFamily: "'Bebas Neue', sans-serif", fontSize: '14px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '6px' }}>
            Get Quote →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
