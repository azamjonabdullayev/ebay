import React,{useState} from 'react';
import './NavbarMiddle.scss';
import logo from "../assets/logo..svg";
import Search_icon from "../assets/search..svg";
import { Link } from 'react-router-dom';



function NavbarMiddle(e) {
  const [input, setInput]=useState(([]))
  const [result, setResult]=useState([])
  const searchBar =()=>{
    fetch(`https://api.escuelajs.co/api/v1/products/?title=${input}`).then((res)=>res.json()).then((ob)=>setResult(ob))
  }
  return (
    <>
        <div className='container'>
                <div className='navbar-middle'>
                    <a href='index.html' className='navbar_logobox'><img src={logo} alt={logo} /></a>
                    <select >
                      <option value="Shop by category">Shop by category</option>
                    </select>
                    <form className='navbar_form'onSubmit={searchBar}>
                      <i className="fa-solid fa-search"></i>
                      <Link to='/search'><input type="text" value={input} onChange={(e)=>setInput(e.target.value)}  placeholder='Shop by category' className='navbar_search' /></Link>
                      <select name="categories" id="category">
                        <option value="All Categories">All Categories</option>
                      </select>
                    </form>
                    <button className='navbar_btn' onClick={()=>searchBar()}><Link to={`/search/${input}`}>Search</Link></button>
                    <h2 className='navbar_disablet'>Advanced</h2>

                </div>
                <hr />
            </div>
    </>
  )
}

export default NavbarMiddle
