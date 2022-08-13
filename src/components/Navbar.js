import React from "react";
import { Badge } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Componentcss.css";

function Navbar() {
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
          <h1>LAMA.</h1>
        </div>
        <div className="navbar-child">
          <div>REGISTER</div>
          <div>SIGN IN</div>
          <div>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
