import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/main.css';

function Education() {
  return (
    <section id="education">
      <div className="section-header">
        <h2 style={{ letterSpacing: '0.03em', fontWeight: 700, fontSize: '1.5rem', color: '#00bcd4', marginBottom: '0.7em' }}>
          UNIVERSITY OF MUMBAI
        </h2>
      </div>
      <ul className="edu-courses" style={{ listStyle: 'none', padding: 0, color: '#e0e6ed', fontSize: '1.08rem', lineHeight: 1.7 }}>
        <li style={{ marginBottom: '0.3em' }}>
          <span style={{ fontWeight: 600 }}>Bachelor of Engineering - Information Technology</span>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '0.7em', marginBottom: '0.3em' }}>
          <FaMapMarkerAlt style={{ color: '#3a8dde' }} />
          <span>Mumbai, India</span>
        </li>
        <li style={{ display: 'flex', alignItems: 'center', gap: '0.7em' }}>
          <FaCalendarAlt style={{ color: '#3a8dde' }} />
          <span>2015 - 2019</span>
        </li>
      </ul>
    </section>
  );
}

export default Education;
