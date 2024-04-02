import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import ProductComponent from "../../components/ProductComponent/ProductComponent";

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

export default Electronics;
