import React from 'react'
import { Link } from 'react-router-dom';
import speech from '../assets/images/speech.png';
import feeding from '../assets/images/feeding.png';
import myo from '../assets/images/myo.png';


function Services() {
  
 
  
    return (
    <section id="services" className="service-section">
    <div className="service-container">
    <div className="services">
<Link to="/services/speech"> 
    <img src={speech} alt="speech" />
 </Link>
 <Link to="/services/feeding">
    <img src={feeding} alt="feeding" />
 </Link>
 <Link to="/services/myo">
    <img src={myo} alt="myo" />
</Link>
    </div>
    </div>

   
    </section>
  )
}

export default Services;