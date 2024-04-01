import { useNavigate } from "react-router-dom";

function ProductComponent(props) {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/products/${props.id}`);
  };
  return (
    <>
      <div
        className="card"
        onClick={onClick}
        id={props.id}
        style={{ width: "18rem" }}
      >
        <img src={props.image} className="card-img-top" alt="" />
        <div className="card-body">
          <p className="card-text">{props.title}</p>
        </div>
      </div>
    </>
  );
}

export default ProductComponent;
