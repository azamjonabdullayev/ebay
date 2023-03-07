import React from 'react';
import call from "../assets/Vector.svg";
import basket from "../assets/basket.svg";
import './NavbarHeader.scss';
import { NavLink, Link } from 'react-router-dom';
import { isToken } from 'typescript';



function NavbarHeader() {
    return (
    <>
     <div className='container'>
            <div className='navbar'>
                <ul className='navbar-header'>
                    <li>Hi!<NavLink to='login'>Sign in</NavLink>  or <NavLink to='register'> register</NavLink></li>
                    <li>Daily Deals</li>
                    <li>Brand Outlet</li>
                    <li>Help & Contact</li>
                </ul>

                <ul className='navbar-header'>
                    <li>Sell</li>
                    <li>
                        <select >
                        <option value="watchlist">watchlist</option>
                        </select></li>
                    <li><select>
                        <option value="my ebay">My Ebay</option>
                        </select></li>
                    <Link to='/news'><i className="fa-regular fa-bell"></i></Link>
                    <Link to='/shop'><i className="fa-solid fa-cart-shopping"></i></Link>
                </ul>

            </div>
            <hr />
        </div>
    </>
  )
}

export default NavbarHeader
