import React, { useState } from "react";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import "./Page.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {popularProducts} from "../data"



function ProductPage({ cartList ,setCartList}) {
  const [productNumber,setProductNumber] =useState(1);
  const { id } =useParams();
  const product = popularProducts.find((ele)=>{
    return ele.id === Number(id);
  })
  const handleAse = () => {
    setProductNumber(productNumber + 1);
    console.log(product)
  }
  const handleDes = () => {
    if(productNumber - 1 === 0){
      return;
    }
    setProductNumber(productNumber - 1);  
  }
  const handleAddToCart = () =>{
    const index = cartList.findIndex(ele =>{
      return ele.id === product.id
    })
    const cartListClone = [...cartList]
    if(index !== -1){
      cartListClone[index].total = productNumber + cartList[index].total;
      return setCartList(cartListClone)
    }else{
     return setCartList([...cartList,{...product,total:productNumber}])
    }
  }
  return (
    <div>
      <Navbar cartList={cartList}/>
      <Discount />
      <div className="productp">
        <img className="productp-img" src={product.img} alt="img"/>
        <div className="productp-about">
          <h1 className="productp-title">{product.productName}</h1>
          <p className="productp-des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className="productp-price">{`$ ${product.price}`}</span>
          <div className="productp-color-size">
            <div className="productp-color">
              <p>Color</p>
              <div style={{backgroundColor:"black"}} className="productp-choose-color"></div>
              <div style={{backgroundColor:"blue"}} className="productp-choose-color"></div>
              <div style={{backgroundColor:"gray"}} className="productp-choose-color"></div>
            </div>
            <div className="productp-size">
              <span>Size</span>
              <select className="productp-select">
                <option>XS</option>
                <option>XL</option>
                <option>L</option>
                <option>M</option>
              </select>
            </div>
          </div>
          <div className="productp-quantity">
            <div className="productp-add-remove">
              <RemoveIcon className="productp-icon" onClick={handleDes}/>
              <p className="productp-total">{productNumber}</p>
              <AddIcon className="productp-icon" onClick={handleAse}/>
            </div>
            <Link to="/cart" className="productp-button" onClick={handleAddToCart}>ADD TO CART</Link>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
