import React,{useState} from 'react';
import './NavbarFooter.scss';
import heart_icon from "../assets/heart_icon.svg";
import Asosiy from '../Navbar_middle/NavbarMiddle'
import {Link} from 'react-router-dom'


function NavbarFooter() {
  const [active, setActive]=useState('#')
  return (
    <>
    <Asosiy/>
         <div className="container">
         <div className='navbar-footer-list'>
                <Link onClick={()=>setActive('#')} to='/' className={active==='#'? "active":''}>Home</Link>
                <Link onClick={()=>setActive('/saved')} to='/category' className={active==='/saved'? "active":''}>Saved</Link>
                <Link onClick={()=>setActive('/motors')} to='/category' className={active==='/motors'? "active":''}>Motors</Link>
                <Link onClick={()=>setActive('/electr')} to='/category' className={active==='/electr'? "active":''}>Electronics</Link>
                <Link onClick={()=>setActive('/collect')} to='/category' className={active==='/collect'? "active":''}>Collectibles</Link>
                <Link onClick={()=>setActive('/home')} to='/category' className={active==='/home'? "active":''}>Home & Garden</Link>
                <Link onClick={()=>setActive('/fashion')} to='/category' className={active==='/fashion'? "active":''}>Fashion</Link>
                <Link onClick={()=>setActive('/toys')} to='/category' className={active==='/toys'? "active":''}>Toys</Link>
                <Link onClick={()=>setActive('/sport')} to='/category' className={active==='/sport'? "active":''}>Sporting Goods</Link>
                <Link onClick={()=>setActive('/buisnes')} to='/category' className={active==='/buisnes'? "active":''}>Business & Industrial</Link>
                <Link onClick={()=>setActive('/watches')} to='/category' className={active==='/watches'? "active":''}>Jewelry & Watches</Link>
                <Link onClick={()=>setActive('/live')} to='/category' className={active==='/live'? "active":''}>eBay Live</Link>
                <Link onClick={()=>setActive('/ref')} to='/category' className={active==='/ref'? "active":''}>Refurbished</Link>
            </div>
         </div>
    </>
  )
}

export default NavbarFooter
