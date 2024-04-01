import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";

const SingleProduct = () => {
  const [singleData, setSingleData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchSingleData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setSingleData(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSingleData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <MoonLoader />
        </div>
      ) : (
        <div
          className="card"
          style={{ width: "800px", height: "500px", margin: "0 auto" }}
        >
          <img
            style={{ width: "200px", margin: "0 auto" }}
            src={singleData.image}
            className="card-img-top"
            alt={singleData.title}
          />
          <div className="card-body">
            <h1>{singleData.title}</h1>
            <p className="card-text">{singleData.description}</p>
            <button type="button" class="btn btn-secondary">
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
