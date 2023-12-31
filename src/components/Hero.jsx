import React from 'react';
import speechBanner from "../assets/images/speech-banner2.png";
import miniSpeech from "../assets/images/mini-bubble.png";
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';

function Hero() {
    
    
      return (
        <div className="container-style" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${speechBanner})` }}>
          <div className="content-section">
          <img src={miniSpeech} alt="mini-speech" className="mini-bubble" />
          <h1>Speech, Feeding, <br/> & Orofacial Myology Services </h1>
          <p className="subheading">Unlocking Voices, Unleashing Potential: <RecordVoiceOverIcon  className="my-icon" /> <br/> Guiding Your Child from Struggling to Flourishing in Communication and Feeding</p>
          </div>
        </div>
      );
}

export default Hero;