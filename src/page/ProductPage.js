import React from "react";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import "./Page.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <div>
      <Navbar />
      <Discount />
      <div className="productp">
        <img className="productp-img" src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="img"/>
        <div className="productp-about">
          <h1 className="productp-title">Denim Jumpsuit</h1>
          <p className="productp-des">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className="productp-price">$ 20</span>
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
              <RemoveIcon className="productp-icon"/>
              <p className="productp-total">1</p>
              <AddIcon className="productp-icon"/>
            </div>
            <Link to="/cart" className="productp-button">ADD TO CART</Link>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductPage;
