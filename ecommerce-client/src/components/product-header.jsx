import { useNavigate } from "react-router-dom";
import "../styles/product-details.css";
function ProductHeader({ product }) {
  const navigate = useNavigate();

  console.log(product);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="product-header">
      <span
        className="breadcrumb-item"
        onClick={() => navigate("/home")}
        style={{ cursor: "pointer" }}
      >
        Home
      </span>
      <span>
        <i
          className="fa-solid fa-chevron-right"
          style={{ color: "#74C0FC" }}
        ></i>
      </span>
      <span
        className="breadcrumb-item"
        onClick={() => navigate(`/category/${product.category}`)}
        style={{ cursor: "pointer" }}
      >
        {capitalize(product.category)}
      </span>
      <span>
        <i
          className="fa-solid fa-chevron-right"
          style={{ color: "#74C0FC" }}
        ></i>
      </span>
      <span
        className="breadcrumb-item"
     
      
      >
        {capitalize(product.title)}
      </span>
    </div>
  );
}

export default ProductHeader;
