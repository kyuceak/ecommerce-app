import { useOutletContext, useParams, Outlet, useMatch } from "react-router-dom";
import { useState } from "react";
import ShopHeader from "../components/shop-header";
import ProductGridView from "../components/productGridView";
import useData from "../hooks/useData";

function Shop() {
  const { card, setCard } = useOutletContext();
  let { category } = useParams();
  if (category === "jewelry") {
    category = "jewelery";
  }

  const apiUrl = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : "https://fakestoreapi.com/products?limit=30";

  const { data: products, loading, error, setData } = useData(apiUrl);
  const handleSortChange = (sortedProducts) => {
    setData(sortedProducts);
  };

  const [viewMode, setViewMode] = useState("grid");

  // Call useMatch unconditionally
  const matchShop = useMatch("/shop/:id");
  const matchCategory = useMatch("/category/:category/:id");
  const productDetailMatch = matchShop || matchCategory;

  return (
    <>
      {/* Only render header and grid if NOT on product detail route */}
      {!productDetailMatch && (
        <>
          <ShopHeader
            products={products}
            onSortChange={handleSortChange}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
          <ProductGridView
            products={products}
            card={card}
            setCard={setCard}
            viewMode={viewMode}
          />
        </>
      )}
      <Outlet />
    </>
  );
}

export default Shop;
