import "./App.css";
import Slider from "./components/Slider";
import Discount from "./components/Discount";
import Navbar from "./components/Navbar";
import CategoryItems from "./components/CategoryItems";
import Products from "./components/Products";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Discount />
      <Navbar />
      <Slider />
      <CategoryItems/>
      <Products/>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
