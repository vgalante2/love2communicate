import React, { useRef } from "react";
import Slider from "react-slick";
import stars from "../assets/images/stars.png";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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
        <h2 id="testimonials" className="review-header"> Hear What Our Parents Have to Say </h2>
        <button className="prev-btn" onClick={() => slider?.current?.slickPrev()}> <ArrowBackIosIcon /> </button>
        <Slider className="review-slider" ref={slider} {...settings}>
          <div className="review review-1">
            <img src={stars} alt="stars" />
            <h3>Name </h3>
            <p> "From our very first session, the transformation in my child's speech and feeding skills was nothing short of remarkable. The therapist's gentle approach, paired with innovative techniques, made learning engaging and enjoyable." </p>
          </div>
          <div className="review review-2">
          <img src={stars} alt="stars" />
            <h3>Name </h3>
            <p> ...Review</p>
          </div>
          <div className="review review-3">
          <img src={stars} alt="stars" />
            <h3>Name </h3>
            <p> ...Review</p>
          </div>
          <div className="review review-4">
          <img src={stars} alt="stars" />
            <h3>Name </h3>
            <p> ...Review</p>
          </div>
        </Slider>
        <br/>
        <button className="next-btn" onClick={() => slider?.current?.slickNext()}> <ArrowForwardIosIcon /> </button>
      </div>
    );
  
}

export default Testimonials;