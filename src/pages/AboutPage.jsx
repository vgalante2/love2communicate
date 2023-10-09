import React from 'react';
import avatar from '../assets/images/avatar.png';
import speechPicBG from '../assets/images/speech-pic.jpeg';

function AboutPage() {

  const bgPic = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 1)), url(${speechPicBG})`
}


  return (
   <section>
   <div  className="about-container" style={bgPic}> 
    <div id="about" className="image-area">
        <img src={avatar} alt="avatar"  />
        <div className="text-container">
            <p className="item-1"> Speech language pathologist M.A., CCC-SLP</p>
            <h1 className="item-2">Galina Kislin</h1>
            <p className="item-3"> CEO and Founder with 23 years of experience as pediatric speech pathologist and a feeding  specialist. Worked in various settings, including early intervention, private practice, hospitals, daycare centers, preschools and elementary schools.
 <br/> Passionate and dedicated to sharing her knowledge, empowering parents and other therapists through collaboration and education. Her philosophy is a whole child approach  from the initial evaluation until discharge.  A comprehensive speech and or feeding evaluation, collaboration with all providers and parents is a recipe for success in therapy.</p>
        </div>
    </div>
   </div> 
   </section>
  )
}

export default AboutPage;