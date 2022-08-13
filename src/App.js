import "./App.css";
import Slider from "./components/Slider";
import Discount from "./components/Discount";
import Navbar from "./components/Navbar";
import CategoryItems from "./components/CategoryItems";

function App() {
  return (
    <div>
      <Discount />
      <Navbar />
      <Slider />
      <CategoryItems/>

    </div>
  );
}

export default App;
