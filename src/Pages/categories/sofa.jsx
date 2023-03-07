import React, {useState,useEffect} from 'react'
import Slider from "react-slick";
import {Link} from 'react-router-dom'


function shoes() {
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
        fetch('https://api.escuelajs.co/api/v1/products/?categoryId=3').then((data)=>data.json()).then((res)=>setShoes(res))
      },[])

  return (
    <>
         <div className="container shoes__cont sofa">
          <div className="shoes_top">
            <h3 className='shoes_top'>Extra 20% off for Presidents' Day</h3>
              <Link className='shoes_btn' to='/dark/3'>See all <i className="fa-solid fa-arrow-right"></i></Link>
          </div>
         <Slider {...settings}>
            {
              shoes.map((e)=>{
                return(
                  <Link to='/dark/3' className='shoes_card' key={e.id}>
                    <img src={e.images} alt={e.title} className='shoes_img' />
                    <h4 className="shoes__title">{e.title}</h4>
                  </Link>
                )
              })
            }
            </Slider>
         </div>
    </>
  )
}

export default shoes