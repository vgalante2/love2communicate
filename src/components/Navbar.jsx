import React, {useRef } from 'react'
import { Link } from 'react-router-dom';
import navPic from '../assets/images/nav-pic-blue.png';
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';

const Navbar = () => {
 const navRef = useRef();


 const showNavbar = () => {
  navRef.current.classList.toggle('responsive_nav');
 }


 



    return (
    <div className='navbar'>
    <div className="logo-section"> 
    <Link to="/">
     <img src="./logo.png" alt="logo" className="logo" />
    </Link>
    </div>
    <div className="menu">
   
    <nav ref={navRef}  >
    <a onClick={showNavbar} className="home-btn" href="/">Home</a>
  <a onClick={showNavbar} href="#services">Services</a>
  <a onClick={showNavbar} href="#about">About</a>
  <a onClick={showNavbar} href="#testimonials">Testimonials</a>
  <a onClick={showNavbar} href="#contact">Contact us</a>
  <img src={navPic} alt="nav-pic" />
  <button className="nav-btn nav-close-btn" onClick={showNavbar}>
    <CancelIcon /> 
  </button>
</nav>
 <button onClick={showNavbar} className="hamburger-menu" >
       <MenuIcon />
    </button>
    </div>
    </div>
  )
}

export default Navbar