import React from 'react'
import Discount from '../components/Discount'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import "./Page.css";

function ProductList() {
  return (
    <div>
        <Navbar />
        <Discount />
        <h1 className='product-list-title'>Dresses</h1>
        <div className='product-list-bar'>
            <div className='product-list-filter'>
                <span>Filter Product:</span>
                <select>Color
                    <option disabled>Color</option>
                    <option>White</option>
                    <option>Black</option>
                    <option>Orange</option>
                    <option>Pink</option>
                    <option>Yelow</option>
                </select>
                <select>Size
                    <option disabled>Size</option>
                    <option>XXL</option>
                    <option>XL</option>
                    <option>XS</option>
                    <option>L</option>
                    <option>M</option>
                </select>
            </div>
            <div className='product-list-sort'>
                <span>Sort Products:</span>
                <select>
                    <option>Newest</option>
                    <option>Price (asc)</option>
                    <option>Newest (des)</option>
                </select>
            </div>
        </div>
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}

export default ProductList