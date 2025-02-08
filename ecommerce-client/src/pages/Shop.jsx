import { useOutletContext, useParams, Outlet, useMatch, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import ShopHeader from "../components/shop-header";
import ProductGridView from "../components/productGridView";
import useData from "../hooks/useData";

function Shop() {
  const { card, setCard } = useOutletContext();
  const location = useLocation();  // Access state passed via navigate
  let { category } = useParams();
  
  if (category === "jewelry") {
    category = "jewelery";
  }

  const apiUrl = category
    ? `https://fakestoreapi.com/products/category/${category}`
    : "https://fakestoreapi.com/products?limit=30";




  
  
  const { data: products, loading, error } = useData(apiUrl);


  const [storedFilteredProducts, setStoredFilteredProducts] = useState(
    location.state?.filteredProducts || []
  );
  
  useEffect(() => {
   
    setStoredFilteredProducts(location.state?.filteredProducts || []);
  }, [location.state]);
  

  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    if (storedFilteredProducts.length > 0) {
      setDisplayedProducts(storedFilteredProducts);
    } else {
      setDisplayedProducts(products);
  
      
    }
 
  }, [storedFilteredProducts,products]);


  const handleSortChange = (sortedProducts) => {
    
    setDisplayedProducts(sortedProducts);
  };

  const [viewMode, setViewMode] = useState("grid");

 
  const matchShop = useMatch("/shop/:id");
  const matchCategory = useMatch("/category/:category/:id");
  const productDetailMatch = matchShop || matchCategory;


  return (
    <>
      {/* Only render header and grid if NOT on product detail route */}
      {!productDetailMatch && (
        <>
          <ShopHeader
            products={displayedProducts}
            onSortChange={handleSortChange}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
          <ProductGridView
            products={displayedProducts}
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
