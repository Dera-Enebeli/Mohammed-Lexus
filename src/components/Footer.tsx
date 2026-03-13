'use client';

import { Icons } from './Icons';

const { Wrap, Tuning, Upgrade, Tire, Drift, Location, Phone } = Icons;

export default function Footer() {
  return (
    <footer className="site-footer">
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginBottom: '40px' }}>
          <div>
            <a href="#" style={{ display: 'inline-block', marginBottom: '16px' }}>
              <img 
                src="/lexus-logo.png" 
                alt="MOHAMMED_LEXUS" 
                style={{ 
                  height: '52px', 
                  width: 'auto',
                  objectFit: 'contain'
                }} 
              />
            </a>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1.7 }}>
              Nigeria premier automotive customization shop. Car wraps, engine tuning, upgrades, tire lettering, and drift builds.
            </p>
          </div>
          
          <div>
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', color: '#ffffff', marginBottom: '16px', letterSpacing: '1px' }}>OUR SERVICES</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#services" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#cc0000' }}><Wrap /></span>Car Wraps</a></li>
              <li><a href="#tuning" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff6600' }}><Tuning /></span>Engine Tuning</a></li>
              <li><a href="#upgrades" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00bfff' }}><Upgrade /></span>Car Upgrades</a></li>
              <li><a href="#tire-letter" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffd700' }}><Tire /></span>Tire Letter</a></li>
              <li><a href="#drifters" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff0066' }}><Drift /></span>Drifters</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', color: '#ffffff', marginBottom: '16px', letterSpacing: '1px' }}>CONTACT</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Location /></span>Lagos, Nigeria</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><span style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Phone /></span>+234 812 345 6789</li>
              <li>info@mohammedlexus.ng</li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '20px', color: '#ffffff', marginBottom: '16px', letterSpacing: '1px' }}>HOURS</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.5)' }}>
              <li>Mon - Fri: 9AM - 7PM</li>
              <li>Saturday: 10AM - 5PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom" style={{ paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>
            © 2025 MOHAMMED_LEXUS. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px', fontSize: '12px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
