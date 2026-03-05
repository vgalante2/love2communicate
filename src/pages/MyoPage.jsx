import React, { useEffect } from 'react';
import myoPic from "../assets/images/myo-two.png";


function MyoPage() {


 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

const bannerPic =  {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(${myoPic})`,
        
}

  return (
    <section className="myo-section">
    
    <div style={bannerPic} className="myo-hero" > 
    <div className="myo-header">
    <h1>Orofacial Myology</h1>
    
    </div>
    </div>
    <div className="myo-wrapper">
    <div className="myo-content">
        <h1>Orofacial Myofunctional Therapy</h1>
        <h3 className="sub">Therapy is offered in person. We come to you, we can also offer therapy virtually.</h3>
        <p>Orofacial Myofunctional Therapy (OMT) is a specialized, evidence-based therapy that focuses on the assessment and treatment of disorders involving the muscles of the face, mouth, and tongue and their impact on breathing, chewing, swallowing, speech, and facial development. OMT focuses on neuromuscular re-education designed to establish proper tongue resting posture, nasal breathing, lip seal, and mature swallowing patterns in order to support optimal oral function, dental development, airway health, and speech clarity. An evaluation includes an observation of your child eating and drinking as well as their posture. It also includes a detailed interview with the caregiver discussing concerns. The evaluation also includes a complete assessment of oral function and structures. This results in a diagnosis.
A report is then written with an individualized plan of care. Caregivers are involved in every step of this process. All goals and strategies are outlined and reviewed with the family. We can make recommendations and referrals to additional specialists and doctors as needed. Love2communciate believes that collaboration is key to success.
</p>
    </div>
    <div className="myo-content-two">
        <h1 className="title">We treat Orofacial Myofunctional Disorders (OMD) associated with:</h1>
        <ul>
            <li> <span className="bullet">Abnormal Oral RestPosture</span></li>
            <li> <span className="bullet">Tethered Oral Tissues:</span> (tongue ties, lip ties) </li>
            <li> <span className="bullet">Atypical Swallow Pattern</span> (tongue thrust) </li>
            <li> <span className="bullet">Selective Eating or Nutritional concerns</span></li>
            <li> <span className="bullet">Noxious Oral Habits:</span> (thumb sucking, pacifier use, nail biting) </li>
            <li> <span className="bullet">Articulation Issues </span></li>
            <li> <span className="bullet">Dental Issues:</span> Malocclusion, Gum Disease, Halitosis </li>
            <li> <span className="bullet">Orthodontic Issues:</span> High and/or Narrow Palate, Orthodontic Relapse </li>
        </ul>
        
    </div>
    </div>
    
   
       
       
    </section>
  );
}

export default MyoPage;