import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <section className="footer-section">
    <div id="contact" className="contact-section">
    <div className="contact-us-box">
   <h1> Contact Us </h1>
    <p> We will get back to you asap!  </p>
    <div className="contact-box">
        <p className="contact-info"> <LocalPhoneIcon className="phone" /> 732-742-1884</p>
        <p className="contact-info" > <EmailIcon className="email" /> love2communicate18@gmail.com</p>
    </div>
    </div>
    </div>
    <p className="copyright" >&copy; 2023 Love2Communicate LLC</p>
    </section>
    
  )
}

export default Footer;