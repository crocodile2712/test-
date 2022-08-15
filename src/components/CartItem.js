import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function CartItem() {
  return (
    <div>
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
    </div>
  );
}

export default CartItem;
