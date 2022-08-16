import React from "react";
import Slider from "../components/Slider";
import Discount from "../components/Discount";
import Navbar from "../components/Navbar";
import CategoryItems from "../components/CategoryItems";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function Home({cartList,wishList,setWishList}) {
  return (
    <div>
      <Discount />
      <Navbar cartList={cartList}/>
      <Slider />
      <CategoryItems />
      <Products wishList={wishList} setWishList={setWishList}/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
