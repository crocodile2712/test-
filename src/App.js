
import Cart from "./page/Cart";
import Home from "./page/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Register from "./page/Register";
import Login from "./page/Login";
import ProductPage from "./page/ProductPage";
import ProductList from "./page/ProductList";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/product-list">
          <ProductList/>
        </Route>
        <Route path="/product-page">
          <ProductPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
