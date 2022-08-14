import React from 'react'
import {popularProducts} from "../data"
import Product from './Product'
import "./Componentcss.css"

function Products() {
  return (
    <div className='products'>{popularProducts.map((ele)=>{
        return <Product item={ele} key={ele.id}/>
    })}</div>
  )
}

export default Products