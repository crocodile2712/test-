import React from "react";
import "./Componentcss.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
function Product({ item, wishList, setWishList }) {
  const clickedStyle = {
    backgroundColor: "#E4405F"
  }
  const wishListClone = [...wishList]
  const clicked = wishListClone.findIndex(ele=>{
    return Number(ele) === Number(item.id);
  })
  const handleClick = () => {
    if(clicked === -1){
      wishListClone.push(item.id)
    }else{
      wishListClone.splice( clicked , 1)
    }
    setWishList(wishListClone)
  };
  return (
    <div className="product">
      <div className="product-circle"></div>
      <img src={item.img} alt="Product" className="product-img"></img>
      <div className="product-icons">
        <div className="product-icon" onClick={handleClick} style={clicked !== -1 ? clickedStyle : {}}>
          <FavoriteBorderIcon />
        </div>
        <Link to={`/product-page/${item.id}`} className="product-icon">
          <ShoppingCartOutlinedIcon />
        </Link>
        <Link to="/product-list" className="product-icon">
          <SearchIcon />
        </Link>
      </div>
    </div>
  );
}

export default Product;
