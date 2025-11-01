 import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import navPic from '../assets/images/nav-pic-blue.png';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const Navbar = () => {
  const navRef = useRef(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle('responsive_nav');
  };

  return (
    <div className="navbar">
      <div className="logo-section">
        <Link to="/" className="logo-link" onClick={showNavbar}>
          <img src="./logo.png" alt="logo" className="logo" />
        </Link>
      </div>

      <div className="menu">
        <nav ref={navRef} aria-label="Primary">
          {/* Use Link only (no <a> inside) */}
          <Link to="/" className="home-btn" onClick={showNavbar}>Home</Link>
          <Link to="/services" className="nav-link" onClick={showNavbar}>Services</Link>
          <Link to="/about/aboutus" className="nav-link" onClick={showNavbar}>About</Link>
          <Link to="/testimonials" className="nav-link" onClick={showNavbar}>Testimonials</Link>
          <Link to="/contact" className="nav-link" onClick={showNavbar}>Contact us</Link>

          <img src={navPic} alt="decorative" />

          <button className="nav-btn nav-close-btn" onClick={showNavbar} aria-label="Close menu">
            <CancelIcon />
          </button>
        </nav>

        <button onClick={showNavbar} className="hamburger-menu" aria-label="Open menu">
          <MenuIcon />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
