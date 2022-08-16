import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CartItem({item,cartList,setCartList,index}) {
  const cartListClone = [...cartList]
  const handleAse =()=>{
    cartListClone[index].total += 1;
    setCartList(cartListClone)
  }
  const handleDes =()=>{
    cartListClone[index].total -=1;
    setCartList(cartListClone)
  }
  return (
    <div>
      <div className="cart-product">
        <div className="cart-product-item">
          <img
            src={item.img}
            className="cart-product-img"
            alt="img"
          />
          <div className="cart-product-des">
            <div>
              <b>Product: </b>
              {item.productName}
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
            <RemoveIcon className="cart-icon" onClick={handleDes}/>
            <p>{item.total}</p>
            <AddIcon className="cart-icon" onClick={handleAse}/>
          </div>
          <div className="cart-product-total">{`$ ${item.price * item.total}`}</div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
