import React from 'react'
import { Link } from "react-router-dom";

const Product = (props) => {
  return (
    <>
    <div className='product-card'>
      <Link to="/productsdetails">
      <img src={props.image} width={250} height={250} className="product-image" />
      <p className="product-name">{props.title}</p>
      <p className="product-price">{props.rate}</p>
      </Link>
    </div>
    </>
  )
}

export default Product