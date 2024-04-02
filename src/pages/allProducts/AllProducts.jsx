import { useEffect, useState } from "react";
import ProductComponent from "../../components/ProductComponent/ProductComponent";
import "./AllProducts.css";
import { MoonLoader } from "react-spinners";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <MoonLoader />
        </div>
      ) : (
        products.map((item) => (
          <ProductComponent
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
          />
        ))
      )}
    </>
  );
};

export default AllProducts;
