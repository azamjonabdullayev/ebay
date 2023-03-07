import React from 'react'
import Shoes from './shoes'
import Sofa from './sofa'
import "./style.scss"
import Long from "../../components/assets/div.png"
import loves from '../../assets/loves.jpg'
import Others from './other'

function index() {
  return (
    <>
        <Shoes/>
        <Sofa />
        <div className="container long_cont">
          <div className="long">
              <p className="long_text">
              Featured
              </p>
              <h3 className="long_logo">ebay</h3>
              <h4 className="long_title">
                Deals made easy all year long.
              </h4>
              <h3 className="long_subtext">
              Free shipping. Best prices.
              </h3>
              <button className='long_btn'>Get Your thing <i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="long_imgbox"><img src={Long} className='long__img' alt="" />
          <img src={loves} alt="" className='lovess' />
          </div>
          
        </div>
        <Others />
    </>
  )
}

export default index