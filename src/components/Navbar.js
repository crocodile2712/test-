import React from "react";
import { Badge } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Componentcss.css";
import { Link } from "react-router-dom";

function Navbar({cartList}) {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <form className="navbar-child">
          <select>
            <option>EN</option>
            <option>VN</option>
          </select>
          <div className="search-container">
            <input placeholder="Search" style={{ border: "none" }}></input>
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </div>
        </form>
        <div className="navbar-child">
          <Link to="/"><h1>LAMA.</h1></Link>
        </div>
        <div className="navbar-child">
          <div>
            <Link to="/register">REGISTER</Link>
          </div>
          <div>
            <Link to="/login">SIGN IN</Link>
          </div>
          <div>
            <Link to="/cart">
              <Badge badgeContent={cartList.length} color="primary">
                <ShoppingCartOutlinedIcon className="cart-icon" />
              </Badge>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
