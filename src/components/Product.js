import React from 'react'
import "./Componentcss.css"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Product({item}) {
  return (
    <div className='product'>
        <div className='product-circle'></div>
        <img src={item.img} alt="Product" className='product-img'></img>
        <div className='product-icons'>
            <div className='product-icon'> <SearchIcon /></div>
            <div className='product-icon'> <ShoppingCartOutlinedIcon /></div>
            <div className='product-icon'> <FavoriteBorderIcon /></div>
        </div>
    </div>
  )
}

export default Product