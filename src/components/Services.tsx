'use client';

import { motion } from 'framer-motion';
import { Icons } from './Icons';

const services = [
  { id: 'wraps', icon: <Icons.Wrap />, title: 'CAR WRAPS', subtitle: 'Premium Vinyl', price: 'From ₦220k', color: '#cc0000' },
  { id: 'tuning', icon: <Icons.Tuning />, title: 'ENGINE TUNING', subtitle: 'ECU Remap', price: 'From ₦150k', color: '#ff6600' },
  { id: 'upgrades', icon: <Icons.Upgrade />, title: 'CAR UPGRADES', subtitle: 'Modifications', price: 'From ₦200k', color: '#00bfff' },
  { id: 'tire', icon: <Icons.Tire />, title: 'TIRE LETTER', subtitle: 'Custom', price: 'From ₦25k', color: '#ffd700' },
  { id: 'drift', icon: <Icons.Drift />, title: 'DRIFTERS', subtitle: 'Drift Parts', price: 'From ₦180k', color: '#ff0066' },
];

export default function Services() {
  return (
    <section id="services" style={{ width: '100%', padding: '100px 24px', backgroundColor: '#0a0a0a' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#cc0000', marginBottom: '12px' }}>— What We Do</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px, 8vw, 72px)', lineHeight: 1, color: '#ffffff' }}>
            OUR <span style={{ color: '#cc0000' }}>SERVICES</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          {services.map((service, index) => (
            <motion.a
              key={service.id}
              href={`#${service.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              style={{ 
                padding: '32px 24px', 
                border: `1px solid ${service.color}40`,
                background: `${service.color}08`,
                textAlign: 'center',
                borderRadius: '12px',
                textDecoration: 'none',
              }}
            >
              <div style={{ width: '48px', height: '48px', margin: '0 auto 16px', color: service.color }}>
                {service.icon}
              </div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '22px', color: '#ffffff', letterSpacing: '1px' }}>{service.title}</div>
              <div style={{ fontSize: '10px', letterSpacing: '2px', color: service.color, textTransform: 'uppercase', marginBottom: '12px' }}>{service.subtitle}</div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px', color: service.color }}>{service.price}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
