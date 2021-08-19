import React, { Component } from "react";
import Slider from "react-slick";
import Testimonial from "../assets/01.jpg";

export default class TestimonialsSlider extends Component {
render() {
    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    adaptiveHeight: true,
    arrows: false
    };
    return (
    <div>
        <h2> What our clients say</h2>
        <Slider {...settings}>
          <div>
            <p>Lorem ipsum dolor sit amet,
               consectetur adipiscing elit.Donec fringilla, felis quis interdum facilisis,mauris ex pulvinar augue, nec tincidunt quam nulla sit amet augue.</p>
            <img src={Testimonial} alt=""/>
            <h3>John Doe</h3>
            <h4>SEO of Northy</h4> 
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla, felis quis interdum facilisis, mauris ex pulvinar augue, nec tincidunt quam nulla sit amet augue.</p>
            <img src={Testimonial} alt=""/>
            <h3>John Doe</h3>
            <h4>SEO of Northy</h4>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla, felis quis interdum facilisis, mauris ex pulvinar augue, nec tincidunt quam nulla sit amet augue.</p>
            <img src={Testimonial} alt=""/>
            <h3>John Doe</h3>
            <h4>SEO of Northy</h4>
          </div>
        </Slider>
    </div>
    );
}
}