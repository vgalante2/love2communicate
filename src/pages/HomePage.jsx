import React from 'react'
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";


function HomePage() {
  return (
    <>
<Hero /> 
<Services />
<About />
<Testimonials />
<Footer/>
    </>
  )
}

export default HomePage;
