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
            <p className="item-3"> Galina Kislin is the founder and owner of Love2communicate LLC.
She is a licensed and certified speech-language pathologist with
over 23 years of experience as pediatric speech language
pathologist and a feeding specialist. Extensive experience in
working with toddlers and preschoolers with ASD, ADHD, SPD,
ODD, children with sensory-motor based feeding disorders,
anxious eaters, childhood apraxia of speech and TOT’s. She has
worked in early intervention, private practice, hospitals, daycare
centers, preschools and elementary schools in NY and NJ.
She is trained in the following therapeutic approaches:


 <br/> 
 <br/>
 Beckman Oral Motor Assessment and Intervention, Supporting Oral
Feeding in Fragile Infants (SOFFI), SOS Approach to Feeding
Therapy. Specialized course work in Orofacial Myofunctional
Disorders, Effects of Nutrition on the brain, Kaufman Approach to
Apraxia, Moving Across Syllables and Oral Motor Placement
Therapy.
Passionate and dedicated to sharing her knowledge, empowering
parents and other therapists through collaboration and education.
Her philosophy is a whole child approach from the initial evaluation
until discharge. A comprehensive speech and or feeding evaluation,
collaboration with all providers and parents is a recipe for success in
therapy.</p>
        </div>
    </div>
   </div> 
   </section>
  )
}

export default AboutPage;