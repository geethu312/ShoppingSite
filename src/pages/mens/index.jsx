import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import "./mens.css";

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
}
