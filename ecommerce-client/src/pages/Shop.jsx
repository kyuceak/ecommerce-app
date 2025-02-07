import ProductGridView from "../components/productGridView";
import ShopHeader from "../components/shop-header";
import useData from "../hooks/useData";
import { useOutletContext, useParams } from "react-router-dom";
import { useState } from "react";

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
    setData,
  } = useData(apiUrl);


  const handleSortChange = (sortedProducts) => {
    setData(sortedProducts);
  };

  const [viewMode, setViewMode] = useState("grid");

  

  return (
    <>
      <ShopHeader products={products} onSortChange={handleSortChange} viewMode={viewMode} setViewMode={setViewMode}/>
      <ProductGridView products={products} card={card} setCard={setCard} viewMode={viewMode}/>
    </>
  );
}

export default Shop;
