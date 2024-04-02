import "./App.css";
import Home from "./pages/Home/Home";
import ShopNavbar from "./components/Navbar/Navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Womens from "./pages/Womens/Womens";
import Mens from "./pages/Mens/Mens";
import Electronics from "./pages/Electronics/Electronics";
import AllProducts from "./pages/AllProducts/AllProducts";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/womens-wear" element={<Womens />} />
      <Route path="/mens-wear" element={<Mens />} />
      <Route path="/electronics" element={<Electronics />} />
      <Route path="/products" element={<AllProducts />} />
      <Route path="/products/:id" element={<SingleProduct />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <ShopNavbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
