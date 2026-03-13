'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Icons } from './Icons';

const tunings = [
  { id: 1, name: 'Stage 1', hp: '+15-20 HP', price: '₦150,000', rpm: 4500 },
  { id: 2, name: 'Stage 2', hp: '+25-35 HP', price: '₦250,000', rpm: 5500 },
  { id: 3, name: 'Stage 3', hp: '+40-60 HP', price: '₦400,000', rpm: 7000 },
  { id: 4, name: 'Piggyback', hp: '+20-30 HP', price: '₦200,000', rpm: 5000 },
];

const Gauge = ({ rpm, maxRpm = 8000, color }: { rpm: number; maxRpm?: number; color: string }) => {
  const angle = (rpm / maxRpm) * 180 - 90;
  return (
    <svg viewBox="0 0 200 120" style={{ width: '100%', maxWidth: '200px' }}>
      <defs>
        <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      <path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" strokeLinecap="round" />
      <motion.path
        d="M 20 100 A 80 80 0 0 1 180 100"
        fill="none"
        stroke="url(#gaugeGrad)"
        strokeWidth="12"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: rpm / maxRpm }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        const tickAngle = (i / 8) * 180 - 90;
        const rad = (tickAngle * Math.PI) / 180;
        const x1 = 100 + 65 * Math.cos(rad);
        const y1 = 100 + 65 * Math.sin(rad);
        const x2 = 100 + 75 * Math.cos(rad);
        const y2 = 100 + 75 * Math.sin(rad);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i >= 6 ? '#ff6600' : 'rgba(255,255,255,0.5)'} strokeWidth="2" />
        );
      })}
      <motion.g
        initial={{ rotate: -90 }}
        animate={{ rotate: angle }}
        style={{ transformOrigin: '100px 100px' }}
      >
        <line x1="100" y1="100" x2="100" y2="40" stroke={color} strokeWidth="3" strokeLinecap="round" />
        <circle cx="100" cy="100" r="8" fill={color} />
      </motion.g>
      <text x="100" y="90" fill="#fff" fontSize="10" textAnchor="middle" fontFamily="Arial">{rpm}</text>
      <text x="100" y="115" fill="rgba(255,255,255,0.4)" fontSize="8" textAnchor="middle">RPM</text>
    </svg>
  );
};

export default function EngineTuning() {
  const [activeTune, setActiveTune] = useState(tunings[0]);

  return (
    <section id="tuning" style={{ width: '100%', padding: '100px 24px', backgroundColor: '#0a0a0a' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '50px' }}
        >
          <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#ff6600', marginBottom: '12px' }}>— Performance</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px, 8vw, 72px)', lineHeight: 1, color: '#ffffff' }}>
            ENGINE <span style={{ color: '#ff6600' }}>TUNING</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {tunings.map((tune) => (
            <button
              key={tune.id}
              onClick={() => setActiveTune(tune)}
              style={{ 
                padding: '20px 16px', 
                background: activeTune.id === tune.id ? 'rgba(255,102,0,0.15)' : 'rgba(255,255,255,0.03)',
                border: activeTune.id === tune.id ? '1px solid #ff6600' : '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '18px', color: activeTune.id === tune.id ? '#ff6600' : '#ccc' }}>{tune.name}</span>
              <span style={{ display: 'block', fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', color: '#ff6600', marginTop: '4px' }}>{tune.hp}</span>
            </button>
          ))}
        </div>

        <motion.div
          key={activeTune.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ padding: '40px', background: 'rgba(255,102,0,0.06)', border: '1px solid rgba(255,102,0,0.25)', borderRadius: '16px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '24px' }}>
            <div>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '32px', color: '#fff' }}>{activeTune.name} Tune</span>
              <p style={{ color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>Professional ECU remapping for maximum performance</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Gauge rpm={activeTune.rpm} color="#ff6600" />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '48px', color: '#ff6600' }}>{activeTune.price}</span>
            <a href="#contact" style={{ display: 'inline-block', padding: '16px 40px', textAlign: 'center', background: '#ff6600', color: '#fff', fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '6px' }}>
              Get This Tune →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
