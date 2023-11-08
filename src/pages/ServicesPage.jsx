import React from 'react';
import speechTitle from '../assets/images/speech-title.png';
import feedTitle from '../assets/images/feeding-title.png';
import myoTitle from '../assets/images/myo-title.png';
import { Link } from 'react-router-dom';

function ServicesPage() {
    return (
      <section>
        <div className="services-container"> 
          <div className="content-container">
         
            <div className="speech-banner" style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${speechTitle})`,
              backgroundPosition: 'top center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
              <Link to="/services/speech" className="banner-link">Speech Therapy</Link>
            </div>
           
            <div className="feeding-banner" style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${feedTitle})`,
              backgroundPosition: 'bottom center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
              <Link to="/services/feeding" className="banner-link">Feeding Therapy</Link>
            </div>
            
            <div className="myo-banner" style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url(${myoTitle})`,
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>
              <Link to="/services/myo" className="banner-link">MYO Therapy</Link>
            </div>
            
          </div>
        </div> 
      </section>
    );
}

export default ServicesPage;

  