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
    
    <div className="feeding-hero" style={bannerPic} > 
    <div className="feeding-header">
    <h1>Feeding Therapy That Works</h1>
    
    </div>
    </div>
    <div className="feeding-wrapper">

  <div className="feeding-content">
    <h1 > Feeding Therapy</h1>

    <h3 className="sub">Therapy is offered in person. We come to you, we can also offer therapy virtually.</h3>

      <p className="para">
       Eating is a vital part of a person' s life. It is both life sustaining and social. It is also a learned skill that many of our clients at Love2communicate struggle with.  We treat many clients with sensory motor feeding challenges using a variety of approaches and modalities. Sensory sensitivities may cause the child to gag or vomit and refuse foods resulting in a restrictive diet. Tethered Oral Tissue, also known as tongue tie and lip tie can affect feeding skills. We determine the underlying cause of your child’s feeding difficulties with a comprehensive feeding evaluation. This involves completing a full oral exam as well as observations of the child and how they interact with preferred and nonpreferred foods. Oral motor feeding skills such as chewing and swallowing are assessed as well. Upon completion of testing, a diagnosis is formulated and a report is written. Plan of care is then discussed with the family. 
      </p>

      
   
  </div>


  <div className="feeding-content-two">
    <h1 className="title">Some of the programs and modalities we utilize include:</h1>


      <ul>
        <li><span className="span-bold">Oral Motor Therapy</span> – Techniques aimed at improving strength, coordination, and function of oral structures.</li>
        <li><span className="span-bold">Myofunctional Therapy </span>– Targeting orofacial muscle patterns to support speech, feeding, and breathing.</li>
        <li><span className="span-bold">Talk Tools</span> – A sensory-motor approach that incorporates specialized tools to support oral motor development.</li>
        <li><span className="span-bold">Oral Placement Therapy (OPT)</span> – Uses tactile and proprioceptive input to improve speech clarity and oral function.</li>
        <li><span className="span-bold">SOS Approach to Feeding</span> – A developmental-based feeding therapy that addresses sensory, motor, and behavioral components of feeding challenges.</li>
      </ul>
    

  </div>

</div>
   
       
       
    </section>
  );
}

export default FeedingPage;