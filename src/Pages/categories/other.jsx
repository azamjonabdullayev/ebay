import React, {useState,useEffect} from 'react'
import './shoes.scss'
import {Link } from 'react-router-dom'
import Slider from "react-slick";

function other() {
    const [shoes, setShoes]=useState([])

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 6,
        autoplay:true,
        autoplaySpeed:1000,
      };

      useEffect(()=>{
        fetch('https://api.escuelajs.co/api/v1/products/?categoryId=5').then((data)=>data.json()).then((res)=>setShoes(res))
      },[])

  return (
    <>
      <div className="container shoes__cont">
        <div className="shoes_top">
          <h3 className="shoes_top">Score these trending kicks</h3>
          <Link className="shoes_btn" to='/dark/5'>
            See all <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
        <Slider {...settings}>
          {shoes.map((e) => {
            return (
              <Link to={`/dark/5`} className="shoes_card" key={e.id}>
                <img src={e.images} alt={e.title} className="shoes_image" />
                <h4 className="shoes__title">$  {e.price}</h4>
              </Link>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default other;
