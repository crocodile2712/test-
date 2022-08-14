import React from "react";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import "./Page.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
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
            <div className="cart-product">
              <div className="cart-product-item">
                <img
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&amp;resize=480%3A%2A"
                  className="cart-product-img"
                  alt="img"
                />
                <div className="cart-product-des">
                  <div>
                    <b>Product: </b>
                    JESSIE THUNDER SHOES
                  </div>
                  <div>
                    <b>ID: </b>
                    93813718293
                  </div>
                  <div className="cart-color"></div>
                  <div>
                    <b>Size: </b>
                    37.5
                  </div>
                </div>
              </div>
              <div className="cart-quantity">
                <div className="cart-add-remove">
                  <AddIcon className="cart-icon" />
                  <p>2</p>
                  <RemoveIcon className="cart-icon" />
                </div>
                <div className="cart-product-total">$30</div>
              </div>
            </div>
            <div className="cart-product">
              <div className="cart-product-item">
                <img
                  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png"
                  className="cart-product-img"
                  alt="img"
                />
                <div className="cart-product-des">
                  <div>
                    <b>Product: </b>
                    HAKURA T-SHIRT
                  </div>
                  <div>
                    <b>ID: </b>
                    93813718293
                  </div>
                  <div
                    style={{ backgroundColor: "gray" }}
                    className="cart-color"
                  ></div>
                  <div>
                    <b>Size: </b>M
                  </div>
                </div>
              </div>
              <div className="cart-quantity">
                <div className="cart-add-remove">
                  <AddIcon className="cart-product-icon" />
                  <p>1</p>
                  <RemoveIcon className="cart-product-icon" />
                </div>
                <div className="cart-product-total">$30</div>
              </div>
            </div>
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
