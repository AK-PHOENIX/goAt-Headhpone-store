import React from 'react'
import Headphone from '../assets/Images/Headphone.png'

const FooterBanner = () => {
  return (
    <div className='footer-banner-container'>
      <div className="banner-desc">
        <div className="left">
          <p>45% OFF</p>
          <h3>FINE</h3>
          <h3>SMILE</h3>
          <p>10 Sep to 15Sep</p>
        </div>
        <div className="right">
          <p>goAt Solo Air</p>
          <h3>Autumn Sale</h3>
          <p>Best headphone on the market</p>
          <a href="">
            <button type='button'>Shop Now</button>
          </a>
        </div>
        <img className="footer-banner-image" width={600} height={600} src={Headphone} alt="" />
      </div>
    </div>
  )
}

export default FooterBanner