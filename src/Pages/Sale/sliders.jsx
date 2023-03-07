import React from 'react'
import Slider from "react-slick";
function Sliders() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
  return (
    <>
        <div className="cards">
      <Slider {...settings}>
      {
        state.map((e)=>{
            
            return(
                <div key={e.id} className="sliders">
                    <img className='sliders-img' src={e.images} alt="" />
                </div>
            )
        })
      }
    </Slider>
      </div>
    </>
  )
}

export default Sliders