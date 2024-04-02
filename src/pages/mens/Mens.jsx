import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import "./Mens.css";
import ProductComponent from "../../components/ProductComponent/ProductComponent";

export default function Mens() {
  const [mensData, setMensData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMensData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setMensData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMensData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <MoonLoader />
        </div>
      ) : (
        mensData
          .filter((product) => product.category === "men's clothing")
          .map((product) => (
            <ProductComponent
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
            />
          ))
      )}
    </>
  );
}
