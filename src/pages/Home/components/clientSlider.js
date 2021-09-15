import React, { Component } from "react";
import Slider from "react-slick";
import Client1 from "../assets/client1.png";
import Client2 from "../assets/client2.png";
import Client3 from "../assets/client3.png";
export default class ClientSlider extends Component {
render() {
    const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    cssEase: "linear",
    adaptiveHeight: true,
    arrows: false
    };
    return (
    <div>
        <Slider {...settings}>
        <div>
            <img src={Client1} alt=""/>
        </div>
        <div>
            <img src={Client2} alt=""/>
        </div>
        <div>
            <img src={Client3} alt=""/>
        </div>
        </Slider>
    </div>
    );
}
}