import "./App.css";
import Home from "./pages/home";
import ShopNavbar from "./components/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Womens from "./pages/womens";
import Mens from "./pages/mens";
import Electronics from "./pages/electronics";
import AllProducts from "./pages/allProducts";
import SingleProduct from "./pages/singleProduct/single";

function App() {
  return (
    <>
      <ShopNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/womens-wear" element={<Womens />} />
          <Route path="/mens-wear" element={<Mens />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:id" element={<SingleProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
