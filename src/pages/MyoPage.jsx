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
    <div  className="myo">
        <h1> MYO Therapy </h1>
    </div>
    <div style={bannerPic} className="myo-hero" > 
    <div className="myo-header">
    <h1>Orofacial Myology</h1>
    <p> With leading specialists</p>
    </div>
    </div>
    <div className="myo-wrapper">
    <div className="myo-content">
        <h1>Orofacial Myofunctional Therapy</h1>
        <p>We work with your child and take a whole team approach
collaborating closely with professionals that may be an integral part
of your or your child’s case (e.g., ENT’s, dentists, orthodontists, etc). Working closely with other professionals helps us provide you and your child with the best treatment plan and outcomes.
We travel to YOU to provide services. Options for teletherapy are available as well, Please contact us to inquire:  <span className="span-email">love2communicate18@gmail.com</span> </p>
    </div>
    <div className="myo-content-two">
        <h1>Evaluation and treatment process:</h1>
        <p>First, the family completes the required intakes. Next, an initial evaluation will take
place. We look at the “whole child” when determining the best treatment plan. If
treatment is warranted we will use a combination of exercises in treatment and help to
improve skills in the following areas:</p>
        <ul>
            <li>Speech/Articulation </li>
            <li> Tongue and facial rest postures </li>
            <li>Chewing & Swallowing </li>
            <li> Nasal breathing </li>
            <li> Habit elimination </li>
        </ul>
        <p> We also help prepare your child for pre-op and post-op frenectomy procedures</p>
    </div>
    </div>
    
   
       
       
    </section>
  );
}

export default MyoPage;