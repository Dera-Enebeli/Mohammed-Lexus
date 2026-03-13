'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icons } from './Icons';

const tireColors = [
  { name: 'Red', hex: '#cc0000' },
  { name: 'Gold', hex: '#ffd700' },
  { name: 'Green', hex: '#39ff14' },
  { name: 'Blue', hex: '#00bfff' },
  { name: 'Pink', hex: '#ff0066' },
  { name: 'Orange', hex: '#ff6600' },
];

const tireSizes = [
  { size: '13"', price: '₦20,000' },
  { size: '14"', price: '₦22,000' },
  { size: '15"', price: '₦25,000' },
  { size: '16"', price: '₦28,000' },
  { size: '17"', price: '₦32,000' },
  { size: '18"+', price: '₦35,000' },
];

const TireDesign1 = ({ color }: { color: string }) => (
  <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
    <circle cx="60" cy="60" r="55" fill="#1a1a1a" stroke="#333" strokeWidth="4"/>
    <circle cx="60" cy="60" r="42" fill="#0a0a0a" stroke="#222" strokeWidth="2"/>
    <circle cx="60" cy="60" r="30" fill="#1a1a1a" stroke={color} strokeWidth="2"/>
    <circle cx="60" cy="60" r="15" fill="#0a0a0a" stroke="#333" strokeWidth="2"/>
    <circle cx="60" cy="60" r="8" fill="#666"/>
    <text x="60" y="64" fill={color} fontSize="8" fontFamily="Arial Black" fontWeight="bold" textAnchor="middle">APEX</text>
  </svg>
);

const TireDesign2 = ({ color }: { color: string }) => (
  <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
    <circle cx="60" cy="60" r="55" fill="#1a1a1a" stroke="#333" strokeWidth="4"/>
    <circle cx="60" cy="60" r="42" fill="#0a0a0a"/>
    <circle cx="60" cy="60" r="35" fill="none" stroke={color} strokeWidth="1" strokeDasharray="4 2"/>
    <circle cx="60" cy="60" r="28" fill="none" stroke={color} strokeWidth="2"/>
    <circle cx="60" cy="60" r="15" fill="#1a1a1a" stroke={color} strokeWidth="1"/>
    <circle cx="60" cy="60" r="8" fill="#666"/>
    <text x="60" y="64" fill={color} fontSize="7" fontFamily="Arial Black" textAnchor="middle">ML</text>
  </svg>
);

const TireDesign3 = ({ color }: { color: string }) => (
  <svg viewBox="0 0 120 120" fill="none" style={{ width: '100%', height: '100%' }}>
    <circle cx="60" cy="60" r="55" fill="#1a1a1a" stroke="#333" strokeWidth="4"/>
    <circle cx="60" cy="60" r="45" fill="#0a0a0a" stroke={color} strokeWidth="3"/>
    <circle cx="60" cy="60" r="38" fill="none" stroke={color} strokeWidth="1" opacity="0.5"/>
    <circle cx="60" cy="60" r="30" fill="#1a1a1a"/>
    <circle cx="60" cy="60" r="20" fill={color} opacity="0.2"/>
    <circle cx="60" cy="60" r="15" fill="#0a0a0a" stroke={color} strokeWidth="2"/>
    <circle cx="60" cy="60" r="8" fill="#666"/>
    <circle cx="48" cy="52" r="3" fill={color}/>
    <circle cx="72" cy="52" r="3" fill={color}/>
    <circle cx="60" cy="70" r="4" fill={color}/>
  </svg>
);

export default function TireLetter() {
  const [selectedColor, setSelectedColor] = useState(tireColors[0]);
  const [tireSize, setTireSize] = useState(tireSizes[2]);
  const [activeDesign, setActiveDesign] = useState(0);

  const designs = [
    <TireDesign1 key="d1" color={selectedColor.hex} />,
    <TireDesign2 key="d2" color={selectedColor.hex} />,
    <TireDesign3 key="d3" color={selectedColor.hex} />,
  ];

  return (
    <section id="tire-letter" style={{ width: '100%', padding: '100px 24px', backgroundColor: '#0a0a0a' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '50px' }}
        >
          <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#ffd700', marginBottom: '12px' }}>— Customization</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px, 8vw, 72px)', lineHeight: 1, color: '#ffffff' }}>
            TIRE <span style={{ color: '#ffd700' }}>LETTERING</span>
          </h2>
        </motion.div>

        <div className="tire-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '32px' }}>
              {designs.map((design, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveDesign(i)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ 
                    width: '100px', 
                    height: '100px', 
                    borderRadius: '50%', 
                    background: activeDesign === i ? 'rgba(255,215,0,0.2)' : 'rgba(255,255,255,0.05)',
                    border: activeDesign === i ? '3px solid #ffd700' : '3px solid rgba(255,255,255,0.1)',
                    cursor: 'pointer',
                    padding: '12px',
                    transition: 'all 0.3s'
                  }}
                >
                  {design}
                </motion.button>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
              {tireColors.map((color) => (
                <motion.button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  style={{ 
                    width: '46px', 
                    height: '52px',
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    background: `linear-gradient(135deg, ${color.hex} 0%, ${color.hex}cc 100%)`,
                    border: selectedColor.name === color.name ? '2px solid #fff' : 'none',
                    cursor: 'pointer',
                    boxShadow: selectedColor.name === color.name ? `0 0 20px ${color.hex}` : 'none',
                    transition: 'all 0.2s'
                  }}
                  title={color.name}
                />
              ))}
            </div>
            <p style={{ textAlign: 'center', marginTop: '16px', fontSize: '16px', color: selectedColor.hex, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '1px' }}>● {selectedColor.name.toUpperCase()} ●</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div style={{ marginBottom: '24px' }}>
              <p style={{ fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>Tire Size</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tireSizes.map((size) => (
                  <button
                    key={size.size}
                    onClick={() => setTireSize(size)}
                    style={{ 
                      padding: '12px 20px', 
                      border: tireSize.size === size.size ? '1px solid #ffd700' : '1px solid rgba(255,255,255,0.08)', 
                      background: tireSize.size === size.size ? 'rgba(255,215,0,0.1)' : 'rgba(255,255,255,0.04)',
                      color: tireSize.size === size.size ? '#ffd700' : 'rgba(255,255,255,0.6)',
                      fontSize: '14px',
                      cursor: 'pointer',
                      borderRadius: '6px'
                    }}
                  >
                    {size.size}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              key={activeDesign}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              style={{ padding: '32px', background: 'rgba(255,215,0,0.05)', borderRadius: '16px', marginBottom: '20px', border: '1px solid rgba(255,215,0,0.2)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Per Tire</span>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '32px', color: '#ffd700' }}>{tireSize.price}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>Set of 4</span>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '48px', color: '#ffffff' }}>{String(Number(tireSize.price.replace(/[^\d]/g, '')) * 4).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
              </div>
            </motion.div>

            <a href="#contact" style={{ display: 'block', width: '100%', padding: '18px', textAlign: 'center', background: '#ffd700', color: '#0a0a0a', fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '8px' }}>
              Book Now →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
