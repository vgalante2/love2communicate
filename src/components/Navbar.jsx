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
    <header className="navbar">
      {/* TOP: LOGO */}
      <div className="navbar-top">
        <Link to="/" className="logo-link" onClick={() => navRef.current?.classList.remove('responsive_nav')}>
          <img src="./logo.png" alt="logo" className="logo" />
        </Link>
      </div>

      {/* BOTTOM: MENU */}
      <div className="navbar-bottom">
        <nav ref={navRef} className="nav-menu" aria-label="Primary">
          <Link to="/" className="nav-link" onClick={showNavbar}>Home</Link>
          <Link to="/services" className="nav-link" onClick={showNavbar}>Services</Link>
          <Link to="/about/aboutus" className="nav-link" onClick={showNavbar}>About</Link>
          <Link to="/testimonials" className="nav-link" onClick={showNavbar}>Testimonials</Link>
          <Link to="/contact" className="nav-link" onClick={showNavbar}>Contact us</Link>

          <img src={navPic} alt="decorative" className="nav-decor" />

          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}
            aria-label="Close menu"
          >
            <CancelIcon />
          </button>
        </nav>

        {/* HAMBURGER */}
        <button
          onClick={showNavbar}
          className="hamburger-menu"
          aria-label="Open menu"
        >
          <MenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Navbar;