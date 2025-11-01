
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
        <p className="item-2">Galina Kislin, M.A., CCC-SLP, CMT</p>
            <p className="item-1"> Speech-Language Pathologist | Feeding Specialist | Certified Myofunctional Therapist</p>
            
            <p className="item-3">Galina Kislin is the founder and owner of Love2Communicate LLC. She is a licensed speech-language pathologist and certified myofunctional therapist with over 25 years 
       of experience helping young children and their families navigate the challenges associated with communication and feeding difficulties.
       
    
       <br/>
       <br/>
       Galina specializes in working with toddlers and preschoolers with speech and language disorders and developmental differences such as autism (ASD), ADHD, sensory processing
        challenges (SPD), and oppositional defiant disorder (ODD). She also supports children with sensory motor feeding difficulties, anxious eating, childhood apraxia of speech, and lip or tongue ties.       
      
      <br/>
      <br/>
       Throughout her career, Galina has worked in many settings—including early intervention, private practice, hospitals, daycare centers, preschools, and elementary schools across New York and New Jersey.       
       
       <br/>
       <br/>
       She has advanced training in a variety of approaches, including Beckman Oral Motor Protocol, SOFFI (Supporting Oral Feeding in Fragile Infants), SOS Approach to Feeding, Kaufman 
       Approach to Apraxia, DTTC (Dynamic Temporal and Tactile Cueing), and Oral Motor Placement Therapy. She has also completed specialized coursework in orofacial myofunctional disorders, airway development, habit elimination, speech sound disorders, and Gestalt Language Processing.      
       
      <br/>
      <br/>
       Galina is passionate about helping each child reach their full potential while supporting families every step of the way. She believes in a whole-child, family-centered approach—focusing not just on
        therapy goals, but on empowering parents, fostering confidence, and creating positive experiences that last a lifetime. </p>
        </div>
    </div>
   </div> 
   </section>
  )
}

export default AboutPage;