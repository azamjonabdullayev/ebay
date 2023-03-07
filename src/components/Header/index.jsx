import React from 'react';
import './Header.scss';
import Slider from "react-slick";
import slider from '../../assets/slider.png'
import slider2 from '../../assets/slider2.png'
import reklama from "../assets/image.png"

function index() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1000,
    };
    return (
        <>
            <div className="container scroll__bar">
            <Slider {...settings}>
                <div>
                    <img className='slider__image' src={slider} alt="" />
                </div> 
                <div>
                    <img className='slider__image' src={slider2} alt="" />
                </div>
            </Slider>
            </div>
            <center>
                <img src={reklama} alt="image" />
            </center>
        </>
    )
}

export default index
