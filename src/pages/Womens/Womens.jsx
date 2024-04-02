import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import ProductComponent from "../../components/ProductComponent/ProductComponent";

const Womens = () => {
  const [womensData, setWomensData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWomensData = async () => {
    try {
      setLoading(true);
      let response = await fetch("https://fakestoreapi.com/products");
      let result = await response.json();
      setWomensData(result);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchWomensData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <MoonLoader />
        </div>
      ) : (
        womensData
          .filter((product) => product.category === "women's clothing")
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
};

export default Womens;
