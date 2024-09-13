import React from "react";
import { useState } from "react";
import { Product } from "./components";
import Headphone from './assets/Images/Goat.webp'

import product2 from "./assets/Images/speaker1.webp";
import product1 from "./assets/Images/headphones_c_1.webp";
import product3 from './assets/Images/headphones_c_2.webp'
import product4 from './assets/Images/earphones_b_4.webp'
import product5 from './assets/Images/earphones_c_1.webp'

import minus from './assets/Images/minus.svg'
import plus from './assets/Images/plus.svg'
import { ssrImportKey } from "vite/runtime";

const ProductDetails = (props) => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={Headphone} alt="" className="product-detail-image" />
          </div>
          <div className="small-images-container">
            <img src={product1} alt="" className='small-image selected-imgae' />
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>Headphones</h1>
          <div className="reviews">
            <div>* * * * *</div>
            <p>(20)</p>
          </div>
          <h4>Details</h4>
          <p>goAt Rockerz 450 Bluetooth On Ear Headphones with Mic, Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions, Integrated Controls and Dual Modes(Luscious Black)

          </p>
          <p className="price">$99</p>
          <div className="quantity">
            <h3>Quantinty:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={()=>setCount((count) => {if ((count) > 1){
                return count - 1;
              } else{
                return (count) = 0;
              }
              })}> <img src={minus} alt="" /></span>
              <span className="num">{count}</span>
              <span className="plus" onClick={()=> setCount((count) => {if ((count) < 10){
                return count + 1;
              }else{
                return (count) = 10;
              }})} > <img src={plus} alt="" /></span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart">
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            <Product image={product2} title="Speakers" rate="$130" />
            <Product image={product1} title="Headphones" rate="$99" />
            <Product image={product4} title="Ear buds" rate="$69" />
            <Product image={product3} title="Headphones" rate="$99" />
            <Product image={product5} title="HeadBands" rate="$39" />
            <Product image={product2} title="Speakers" rate="$130" />
            <Product image={product4} title="Ear buds" rate="$69" />
            <Product image={product3} title="Headphones" rate="$99" />
            <Product image={product2} title="Speakers" rate="$130" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
