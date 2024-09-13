import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/Images/cart.svg'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <h3>goAt</h3>
      <button type='button' className='cart-icon'>
        <img src={cart} alt="" />
        <span className='cart-item-qty'>1</span>
      </button>

    </div>
  )
}

export default Navbar