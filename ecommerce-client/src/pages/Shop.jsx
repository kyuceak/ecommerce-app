import ProductGridView from "../components/productGridView";
import ShopHeader from "../components/shop-header";
import useData from "../hooks/useData";
import { useOutletContext, useParams } from "react-router-dom";

function Shop() {


  const {card,setCard} = useOutletContext();

  let {category} = useParams();

  if( category == "jewelry")
  {
    category = "jewelery";
  }


  const apiUrl = category ? `https://fakestoreapi.com/products/category/${category}` 
  : "https://fakestoreapi.com/products?limit=30";

  const {
    data: products,
    loading,
    error,
  } = useData(apiUrl);

  return (
    <>
      <ShopHeader />
      <ProductGridView products={products} card={card} setCard={setCard}/>
    </>
  );
}

export default Shop;
