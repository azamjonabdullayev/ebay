import React,{useEffect,useState,useRef} from 'react'
import { useParams, Link } from 'react-router-dom'
import './product.scss'

function produc() {
  const link = useParams()
    const [pro,setPro]=useState([])
    useEffect(()=>{
        fetch(`https://api.escuelajs.co/api/v1/categories/${link.id}/products`).then((data)=>data.json()).then((pro)=>setPro(pro))
    },[])
    const ref=useRef()
  return (
    <>
     <div className="product_pages">
      {
          pro.map((e)=>{
           return(
            <> 
           <div className="pro_cont" key={e.id}>
           <Link to={`/shop/${e.id}`} className="product_card">
            <img src={e.images} alt="" className="product_img" />
            <div className="product_body">
              <h3 className="product_title">
                {e.title}
              </h3>
              <p className='product_des'>{e.description}</p>
              <h4 className='product_price'>$    {e.price}</h4>
            </div>

           </Link>
              <div className="product_like">
                <h3 className="product_spo">SPONSORED</h3>
                <button className='product_button'><i className="fa-regular fa-heart"></i></button>
              </div>
           </div>
           </>
           )
          })
      }
      </div>   
    </>
  )
}

export default produc