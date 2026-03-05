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
    <section className="speech-section">
    <div  className="speech">
        
    </div>
    <div className="speech-hero" style={bannerPic} > 
    <div className="speech-header">
    <h1>Speech & Language Evaluations and Therapy</h1>
    
    </div>
    </div>
    <div className="speech-wrapper">
    <div className="speech-content">
        <h1>Evaluation</h1>
        <h3 className="sub">Speech Therapy is offered in person. We come to you. We also offer speech therapy virtually.</h3>
        <p>First, formal and informal testing is used to evaluate all speech and language concerns. The evaluation also includes a complete assessment of oral function and structures. This results in a diagnosis.
A report is then written with an individualized plan of care. Caregivers are involved in every step of this process. All goals and strategies are outlined and reviewed with the family. We can make recommendations and referrals to additional specialists and doctors as needed. Love2communciate believes that collaboration is key to success.
</p>
    </div>
    <div className="speech-content-two">
        <h1>Our Therapy</h1>
        <h3 className="sub-head">What we treat: </h3>
        
        <ul>
            <li>Speech  and language delays </li>
            <li>Pragmatic disorder</li>
            <li>Childhood Apraxia of Speech </li>
            <li>Articulation Disorder</li>
            <li>Phonological Disorder</li>
            <li>Receptive-Expressive Language Disorder</li>
            <li>Stuttering</li>
        </ul>
    </div>
    </div>
   
       
       
    </section>
  );
}

export default SpeechPage;