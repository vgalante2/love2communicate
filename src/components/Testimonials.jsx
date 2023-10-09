import React, { useRef } from "react";
import Slider from "react-slick";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StarIcon from '@mui/icons-material/Star';

const Testimonials = () => {
  



    const slider = useRef(null);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      
    };

    return (
      <div  className="testimonial-section">
        <div className="review-header-box">
        <h2 id="testimonials" className="review-header"> Hear What Our Parents Have to Say </h2>
        </div>
      <div className="review-wrapper">
        <button className="prev-btn" onClick={() => slider?.current?.slickPrev()}> <ArrowBackIosIcon className="btn-1" /> </button>
        <div className="slider-container"> 
        <Slider className="review-slider" ref={slider} {...settings}>
          <div className="review review-1" >
            <h4> <StarIcon className="stars-icon" / > <StarIcon className="stars-icon" /> <StarIcon className="stars-icon" /> <StarIcon className="stars-icon" /> <StarIcon className="stars-icon" /> </h4>
            <h3>Nancy</h3>
            <p>"From our very first session, the transformation in my child's speech and feeding skills was nothing short of remarkable. The therapist's gentle approach, paired with innovative techniques, made learning engaging and enjoyable."</p>
          </div>
          <div className="review review-2">
          <h4> <StarIcon className="stars-icon" / > <StarIcon className="stars-icon" /> <StarIcon className="stars-icon" /> <StarIcon className="stars-icon" /> <StarIcon className="stars-icon" /> </h4>
            <h3>Bethany</h3>
            <p>"Finding the right support for my child has always been a journey filled with challenges. But from our first session with Galina, I knew we had found someone special. Not only did they provide top-notch speech therapy, but they also gave us guidance on feeding techniques that completely transformed our mealtimes."</p>
          </div>
          <div className="review review-3">
          <h4> <StarIcon className="stars-icon" / > <StarIcon className="stars-icon" /> <StarIcon className="stars-icon" /> <StarIcon className="stars-icon" /> <StarIcon className="stars-icon" /> </h4>
            <h3>Joan</h3>
            <p>"As a mother, there's nothing more heart-wrenching than watching your child grapple with communication and feeding issues. We tried various therapists, but it wasn’t until we partnered with Gala that we truly began to see a remarkable difference. Their holistic approach, combining speech, feeding, and MYO therapy, is something im grateful for!."</p>
          </div>
          <div className="review review-4">
          <h4> <StarIcon className="stars-icon" / > <StarIcon className="stars-icon" /> <StarIcon className="stars-icon" /> <StarIcon className="stars-icon" /> <StarIcon className="stars-icon" /> </h4>
            <h3>Tracy</h3>
            <p>"Before we met Galina, our days were filled with frustration and no progression – the world of words seemed so distant for my child, and every mealtime felt like a battle. From our first session, however, I sensed hope. The individualized care and expertise in speech, feeding, and MYO therapy that Galina offered were unparalleled. Today, hearing my child express their thoughts and share stories, and watching them enjoy meals with a newfound enthusiasm, fills my heart with gratitude."</p>
          </div>
        </Slider>
        </div>
        <br/>
        <button className="next-btn" onClick={() => slider?.current?.slickNext()}> <ArrowForwardIosIcon className="btn-2" /> </button>
        </div>

      </div>
    );
  
}

export default Testimonials;