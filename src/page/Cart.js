import React from "react";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import "./Page.css";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
function Cart({ cartList, setCartList ,wishList}) {
  function handleCheckOut() {
    setCartList([]);
  }
  return (
    <div>
      <Navbar cartList={cartList} />
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
            <p>Shopping Bag({cartList.length})</p>
            <p>Your Wishlist ({wishList.length})</p>
          </div>
          <div className="cart-nav-checkout">
            <button>CHECKOUT NOW</button>
          </div>
        </div>
        <div className="cart-order">
          <div className="cart-products">
            {cartList.map((ele, index) => {
              return (
                <CartItem
                  item={ele}
                  key={ele.id}
                  cartList={cartList}
                  setCartList={setCartList}
                  index={index}
                />
              );
            })}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-info">
              <h1>ORDER SUMMARY</h1>
              <div>
                {cartList.map((ele) => {
                  return (
                    <div className="cart-summary-price">
                      <div>{ele.productName + "(x" + ele.total + ")"}</div>
                      <div>{"$" + ele.total * ele.price}</div>
                    </div>
                  );
                })}
              </div>
              <>
                { (cartList.length !==0 &&(
                <>
                <div className="cart-summary-price">
                  <div>Estimated Shipping</div>
                  <div>$5.90</div>
                </div>
                <div className="cart-summary-price">
                  <div>Shipping Discount</div>
                  <div>-$5.90</div>
                </div>
                </>))
                }  
                
              </>
              <div className="cart-summary-price cart-summary-price-total">
                <div>Total</div>
                <div>
                  {"$" +
                    cartList.reduce((total, ele) => {
                      return total + ele.total * ele.price;
                    }, 0)}
                </div>
              </div>
            </div>
            <div className="cart-summary-button">
              <button onClick={handleCheckOut}>CHECKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
