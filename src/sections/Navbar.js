import React from 'react';
import { Link } from 'react-scroll';
import '../styles/main.css';

const navItems = [
  { label: 'Home', to: 'home' },
  { label: 'Experience', to: 'experience' },
  { label: 'Projects', to: 'projects' },
  { label: 'Skills', to: 'skills' },
  { label: 'Certificates', to: 'certificates' },
  { label: 'Contact', to: 'contact' },
];

function Navbar() {
  return (
    <nav className="navbar sticky-navbar" role="navigation" aria-label="Main Navigation">
      <div className="navbar-brand">
        {/* <span className="brand-name">Jasleen Kaur</span> */}
      </div>
      <ul>
        {navItems.map((item) => (
          <li key={item.to}>
            <Link
              activeClass="active"
              to={item.to}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              tabIndex={0}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
