import React from 'react'
import "./Componentcss.css"
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link } from 'react-router-dom';
function Product({item}) {
  return (
    <div className='product'>
        <div className='product-circle'></div>
        <img src={item.img} alt="Product" className='product-img'></img>
        <div className='product-icons'>
            <div className='product-icon'> <SearchIcon /></div>
            <Link to= {`/product-page/${item.id}`} className='product-icon'> <ShoppingCartOutlinedIcon /></Link>
            <Link to="/product-list" className='product-icon'> <FavoriteBorderIcon /></Link>
        </div>
    </div>
  )
}

export default Product