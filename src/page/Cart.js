import React from "react";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import "./Page.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
function Cart() {

  return (
    <div>
      <Navbar />
      <Discount />
      <div className="cart">
        <div className="cart-header">
          <h1>YOUR BAG</h1>
        </div>
        <div className="cart-nav">
          <Link className="cart-nav-continue" to="/">
            <button className="cart-nav-home">CONTINUE SHOPPING</button>
          </Link>
          <div className="cart-nav-bag">
            <p>Shopping Bag(2)</p>
            <p>Your Wishlist (0)</p>
          </div>
          <div className="cart-nav-checkout">
            <button>CHECKOUT NOW</button>
          </div>
        </div>
        <div className="cart-order">
          <div className="cart-products">
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div className="cart-summary">
            <div className="cart-summary-info">
              <h1>ORDER SUMMARY</h1>
              <div className="cart-summary-price">
                <div>Subtotal</div>
                <div>$80</div>
              </div>
              <div className="cart-summary-price">
                <div>Estimated Shipping</div>
                <div>$5.90</div>
              </div>
              <div className="cart-summary-price">
                <div>Shipping Discount</div>
                <div>-$5.90</div>
              </div>
              <div className="cart-summary-price">
                <div>Total</div>
                <div>$80</div>
              </div>
            </div>
            <div className="cart-summary-button">
              <button>CHECKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
