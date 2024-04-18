import React from 'react'
import {AiOutlineShoppingCart} from "@react-icons/all-files/ai/AiOutlineShoppingCart"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Link} from "react-router-dom"
 
const Navbar = () => {
  return (
    <div className='navbar'> 
        <div className="logo">
            <span>PizzaAndOthers</span>
        </div>
        <ul className='menu'>
            <li><Link to="/">Home</Link></li>
            <li>About Us</li>
            <li>Contact Us</li>
        </ul>
        <div className='cart-icon'>
          <Link to="/cart"> 
            <AiOutlineShoppingCart className='cart-i'></AiOutlineShoppingCart>
            </Link>
        </div>
    </div>
  )
}

export default Navbar