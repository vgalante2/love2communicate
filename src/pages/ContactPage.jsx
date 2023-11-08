import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function ContactPage() {
  return (
    <section className="contactpage-section">
    <div id="contact" className="contactpage-container">
    <div className="contact-page-box">
   <h1> Contact Us </h1>
   <p className="insurance" >Love2Communicate is an out of network provider. Please contact your insurance company before starting services to learn how much your particular plan will reimburse you. We will provide you with an itemized bill that includes all necessary information.</p>
    <p> We will get back to you asap!  </p>
    <div className="contactpage-box">
        <p className="contact-page-number"> <LocalPhoneIcon className="phone-icon" /> 732-742-1884</p>
        <p className="contact-page-email" > <EmailIcon className="email-icon" /> love2communicate18@gmail.com</p>
    </div>
    </div>
    </div>
    </section>
    
  )
}

export default ContactPage;