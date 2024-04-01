import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";

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
            <div className="card" key={product.id} style={{ width: "18rem" }}>
              <img src={product.image} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">{product.title}</p>
                <button type="button" className="btn btn-secondary">
                  Add to Cart
                </button>
              </div>
            </div>
          ))
      )}
    </>
  );
};

export default Womens;
