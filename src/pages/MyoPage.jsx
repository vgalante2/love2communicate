import React, { useEffect } from 'react';
import myo from "../assets/images/myo-pic.jpeg";
import myoPic from "../assets/images/myo-two.png";
import myoPic2 from "../assets/images/myo-pic-2.jpeg";

function MyoPage() {


 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const bannerPic =  {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${myoPic})`,
    backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80vh',
        opacity: '1',
        
}

  return (
    <section className="myo-section">
    <div  className="myo">
        <h1> MYO Therapy </h1>
    </div>
    <div style={bannerPic} > 
    <div className="myo-content">
    <h1>Orofacial Myology</h1>
    <p> With leading specialists</p>
    </div>
    </div>
    <div className="myo-img-text-box">
    <div className="myo-text-content">
        <h1>Orofacial Myofunctional Therapy</h1>
        <p>We work with children through adults and take a whole team approach collaborating closely with professionals that may be an integral part of your or your child’s case (e.g., ENT’s, dentists, orthodontists, etc). We travel to YOU to provide services. Options to travel to a home-based office are available in some locations – please contact us to inquire.</p>
    </div>
    <img src={myo} alt="myo-2" className="myo-img" />
    </div>
    <div className="myo-img-text-box-two">
    <img src={myoPic2} alt="myo-2" className="myo-img-2" />
    <div className="myo-text-content-two">
        <h1>Our Approach</h1>
        <p>We work with children, teens and adults to help eliminate thumb/finger-sucking, pacifier use, nail biting and other oral habits. Through “myo” therapy we also work on facial and tongue exercises to promote (1) an accurate resting posture (where your jaw, teeth, tongue and lips are correctly placed); and (2) adequate chewing and swallowing through elimination of tongue thrust.</p>
        <ul>
            <li>Speech/Articulation </li>
            <li> Tongue and facial rest postures </li>
            <li>Chewing & Swallowing </li>
            <li> Nasal breathing </li>
            <li> Habit elimination </li>
        </ul>
    </div>
    
    </div>
   
       
       
    </section>
  );
}

export default MyoPage;