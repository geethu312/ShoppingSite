import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

const Electronics = () => {
  const [elecData, setElecData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchelecfromApi = async () => {
    setLoading(true);
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setElecData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchelecfromApi();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <MoonLoader />
        </div>
      ) : (
        elecData
          .filter((product) => product.category === "electronics")
          .map((item) => (
            <div className="card" key={item.id} style={{ width: "18rem" }}>
              <img src={item.image} className="card-img-top" alt="" />
              <div className="card-body">
                <p className="card-text">{item.title}</p>
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

export default Electronics;
