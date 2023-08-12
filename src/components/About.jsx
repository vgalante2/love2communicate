import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/images/avatar.png';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function About() {
  return (
    <section  className="aboutus-section">
   <div  className="about-us"> 
    <div id="about" className="image-section">
        <img src={avatar} className="avatar" alt="avatar"  />
        <div className="container">
            <p className="title"> Speech language pathologist M.A., CCC-SLP</p>
            <h1>Licensed and Certified</h1>
        </div>
    </div>
   </div>  
   <Link to="/about/aboutus" >
   <button className="btn-about"> Read more <KeyboardDoubleArrowRightIcon/> </button>
   </Link>
    </section>
  )
}

export default About;