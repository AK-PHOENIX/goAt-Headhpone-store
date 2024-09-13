import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Product, FooterBanner , HeroBanner, Navbar, Footer } from './components';
import Slug from './[slug]'

import product2 from './assets/Images/speaker1.webp'
import product3 from './assets/Images/headphones_c_2.webp'
import product4 from './assets/Images/earphones_b_4.webp'
import product5 from './assets/Images/earphones_c_1.webp'
import product1 from './assets/Images/headphones_c_1.webp'
// import product6 from '../assets/Images/headphones_c_1.webp'
// import product7 from '../assets/Images/headphones_c_1.webp'

const Home = () => {
const router = createBrowserRouter([
  {
    path:'/',
    element:<> <HeroBanner/>
    <div className='products-heading'>
      <h2>Best Selling Products</h2>
      <p>Speakers of many variations</p>
    </div>
    <div className='products-container'>
      {/* {['Product 1 ', 'Product 2' , 'Product 2' , 'Product 2','Product 2'].map((product) => <Product key={product.id} product={product}/>)} */}
      <Product image={product2} title="Speakers" rate="$130" />
      <Product image={product1} title="Headphones" rate="$99" />
      <Product image={product4} title="Ear buds" rate="$69" />
      <Product image={product3} title="Headphones" rate="$99" />
      <Product image={product5} title="HeadBands" rate="$39" />
    </div>

    <FooterBanner/></>
  },
  {
    path:'/productsdetails',
    element: <><Slug/></>
  }
])

  return (
    <>
    <RouterProvider router={router}/>  
    </>
  )
}

export default Home