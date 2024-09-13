import React from 'react'
import { Link } from 'react-router-dom';
import Headphone from '../assets/Images/Goat.webp'


const HeroBanner = () => {
  return (
   <>
    <div className='hero-banner-container'>
    <div>
      <p className="beats-solo">goAt Solo </p>
      <h3>True BASS</h3>
      <h1>HEADPHONES</h1>
      <img src={Headphone} alt="headphones" className='hero-banner-image'/>
      <div>
        <Link to="/productsdetails">
        <button type='button'>Shop Now</button>
        </Link>
        <div className="desc">
          <h5>Description</h5>
          <p>The game begins here with immortal 20D gaming headphones , don't just play the game - feel it , live it and own it, Level your audio game with 6.9 channel</p>
        </div>
      </div>
    </div>
    </div>
   </>
  )
}

export default HeroBanner