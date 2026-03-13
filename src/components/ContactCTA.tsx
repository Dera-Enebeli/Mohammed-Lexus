'use client';

import { motion } from 'framer-motion';
import { Icons } from './Icons';

const { WhatsApp, Instagram, Phone } = Icons;

export default function ContactCTA() {
  return (
    <section id="contact" style={{ width: '100%', padding: '100px 24px', background: 'radial-gradient(ellipse at 50% 50%, #1a0505 0%, #0a0a0a 70%)' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p style={{ fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#cc0000', marginBottom: '12px' }}>— Get In Touch</p>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(36px, 8vw, 64px)', lineHeight: 1.1, marginBottom: '20px', color: '#ffffff' }}>
            READY TO <span style={{ color: '#cc0000' }}>TRANSFORM</span> YOUR RIDE?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px', marginBottom: '40px' }}>
            Get a free consultation and quote. We respond within 24 hours.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '350px', margin: '0 auto' }}>
            <a href="https://wa.me/2348123456789" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', padding: '18px', background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)', color: '#fff', fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '8px' }}>
              <span style={{ width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><WhatsApp /></span>
              WhatsApp Us
            </a>
            <a href="https://instagram.com" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', padding: '18px', background: 'linear-gradient(to right, #833AB4, #FD1D1D, #F77737)', color: '#fff', fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '8px' }}>
              <span style={{ width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Instagram /></span>
              Instagram DM
            </a>
            <a href="tel:+2348123456789" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', padding: '18px', background: 'transparent', border: '2px solid #cc0000', color: '#cc0000', fontFamily: "'Bebas Neue', sans-serif", fontSize: '16px', letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '8px' }}>
              <span style={{ width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone /></span>
              +234 812 345 6789
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
