import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./style.scss";
function index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products/?categoryId=3")
      .then((data) => data.json())
      .then((res) => setData(res));
  }, []);
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  const addDark =()=>{
    window.location.href='/dark/3'
  }
  return (
    <>
      <div className="sliders_page">
        <div className="sale">
          <h2 className="sale_title">Up to 60% off home must-haves</h2>
          <p className="sale_text">Shop mattresses, toppers, and more.</p>
          <button onClick={()=>addDark()} className="sale__button">
            Shop Now <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
        <div className="cards">
          <Slider {...settings}>
            {data.map((e) => {
              return (
                <div key={e.id} className="sliders">
                  <Link to={`/dark/3`}>
                    <img className="sliders-img" src={e.images} alt="" />
                    <div className="sliders__body">
                      <h2 className="sliders_price">$ {e.price}</h2>
                      <div className="old-price">
                        <h3 className="light-price">$ 100</h3>
                        <h3 className="price-cour"> 73% OFF</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default index;
