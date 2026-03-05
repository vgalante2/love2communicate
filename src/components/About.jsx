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
           <h1>Mission Statement</h1>
            <p className="text">At Love2Communicate LLC, our mission is to provide holistic, individualized speech, feeding, and orofacial myofunctional therapy rooted in a whole-child approach. We recognize that communication, feeding, and oral function do not exist in isolation. They are deeply integrated and connected to a child’s physical, sensory, emotional, and developmental well-being.
We are committed to looking beyond symptoms to understand the underlying causes and patterns that influence growth and function. By treating the child as a whole, we support not only skill development, but long-term health, confidence, and quality of life.
Collaboration is at the heart of everything we do. Parents are valued as essential partners in every decision, and we work closely with pediatricians, dentists, orthodontists, bodyworkers, occupational therapists, and other professionals to ensure thoughtful, coordinated care. Through education, coaching, and open communication, we empower families to actively participate in their child’s progress.
Our goal is to build strong foundations that support healthy oral function, confident communication, and positive feeding experiences that extend far beyond the therapy room.
 </p>
            
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