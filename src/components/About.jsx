import React from 'react';
import { Link } from 'react-router-dom';
import aboutPic from "../assets/images/myo-pic.jpeg"
import avatar from '../assets/images/avatar.png';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function About() {
  
  const bannerPic = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.0)), url(${aboutPic})`
  }
  
  return (
    <section  className="aboutus-section" style={bannerPic}>
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