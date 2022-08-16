import React from 'react'
import {popularProducts} from "../data"
import Product from './Product'
import "./Componentcss.css"

function Products({wishList,setWishList}) {
  console.log(wishList)
  return (
    <div className='products'>{popularProducts.map((ele)=>{
        return <Product item={ele} key={ele.id} wishList={wishList} setWishList={setWishList}/>
    })}</div>
  )
}

export default Products