import React from 'react';
import avatar from '../assets/images/avatar.png';

function AboutPage() {
  return (
   <section>
   <div  className="about-container"> 
    <div id="about" className="image-area">
        <img src={avatar} alt="avatar"  />
        <div className="text-container">
            <p className="title"> Speech language pathologist M.A., CCC-SLP</p>
            <h1>Licensed and Certified</h1>
            <p className="about-us">Founder and owner with 23 years of experience as pediatric speech pathologist and a feeding  specialist. Worked in various settings, including early intervention, private practice, hospitals, daycare centers, preschools and elementary schools.
 <br/> Passionate and dedicated to sharing her knowledge, empowering parents and other therapists through collaboration and education. Her philosophy is a whole child approach  from the initial evaluation until discharge.  A comprehensive speech and or feeding evaluation, collaboration with all providers and parents is a recipe for success in therapy.</p>
        </div>
    </div>
   </div> 
   </section>
  )
}

export default AboutPage;