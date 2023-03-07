import React,{useEffect, useState} from 'react'
import {Link}from 'react-router-dom'
import './style.scss'
function index() {
    const [render,setRender]=useState([])
    
    const [doc , setDoc]= useState([])
    useEffect(()=>{
        fetch(' https://api.escuelajs.co/api/v1/categories').then((data)=>data.json()).then((res)=>setRender(res))
        fetch(' https://api.escuelajs.co/api/v1/categories/2/products').then((bu)=>bu.json()).then((dos)=>setDoc(dos ))
        
        
    },[])
    return (
        <>
        <div className="category_cont container">
        <div className="category_top">
        
        
        {
            render.map((e)=>{
                
                return(
                    <div key={e.id}>
                    <Link to={`/category/product/${e.id}`}>
                    <div className="category_card">
                    <img src={e.image} alt={e.id} className="category_card_img" />
                    <h2 className="category_card_title">
                    {e.name}
                    </h2>
                    </div>
                    </Link>
                    </div>
                    )
                })
            }
            <div className="category_bottom">
            {
                doc.map((e)=>{
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
                </div>
                
                </div>
                </>
                )
            }
            
            export default index