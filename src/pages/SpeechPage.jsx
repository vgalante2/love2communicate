import React, { useEffect } from 'react';
import speechBanner from "../assets/images/speech-banner.jpeg";


function SpeechPage() {


 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bannerPic = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${speechBanner})`
  }

  return (
    <section className="feeding-section">
    <div  className="speech">
        <h1> Speech Therapy </h1>
    </div>
    <div className="speech-hero" style={bannerPic} > 
    <div className="speech-header">
    <h1>Speech & Language Evaluations & Therapy</h1>
    <p> With leading specialists</p>
    </div>
    </div>
    <div className="speech-wrapper">
    <div className="speech-content">
        <h1>How Does it Work?</h1>
        <p>A comprehensive evaluation is required to begin services. An evaluation generally takes about 2 hours and assesses receptive & expressive language, speech, feeding and oral motor skills.  Following the assessment you will receive a written report detailing our findings, recommendations and treatment plan, if treatment is recommended.</p>
    </div>
    <div className="speech-content-two">
        <h1>Feeding Assessments and Therapy</h1>
        <p>Did you know Speech Pathologists (SLPs) are your go-to professionals for feeding
therapy? We have a team of SLPs that specialize in feeding. If you have a problem
feeder or picky eater, give us a call to learn how we can help them learn to accept new
foods.</p>
        <ul>
            <li>Feed The Peds </li>
            <li>Sequential Oral Sensory (S.O.S.) </li>
            <li>Food Chaining </li>
            <li>Talk Tools Sensori-motor approach to feeding </li>
            <li>Beckman Oral Motor </li>
        </ul>
    </div>
    </div>
   
       
       
    </section>
  );
}

export default SpeechPage;