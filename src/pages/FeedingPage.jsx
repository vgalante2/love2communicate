import React, { useEffect } from 'react';
import feedingBanner from "../assets/images/feeding.jpeg";


function FeedingPage() {


 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const bannerPic = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${feedingBanner})`
  }

  return (
    <section className="feeding-section">
    <div  className="feeding">
        <h1> Feeding Therapy </h1>
    </div>
    <div className="feeding-hero" style={bannerPic} > 
    <div className="feeding-header">
    <h1>Feeding Therapy That Works</h1>
    <p> With leading specialists</p>
    </div>
    </div>
    <div className="feeding-wrapper">
    <div className="feeding-content">
        <h1>In-Home Feeding Therapy</h1>
        <p>All services are provided in your child’s home or school/daycare
center. We work closely with all caregivers and will gladly
collaborate with other professionals.</p>
    </div>
   
    <div className="feeding-content-two">
        <h1>Our Approach</h1>
        <p>Feeding therapy takes place in your home or child’s school. We work with a variety of feeding, swallowing, sensory and oral-motor needs.

Initially a feeding and oral-motor evaluation will take place. We look at the whole child when determining the best treatment plan for your child. If treatment is warranted, we customize a plan that is unique to your childs needs. We may use any combinations of the following approaches in treating your child and helping them enjoy new foods:</p>
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

export default FeedingPage;