import ProductHeader from "../components/product-header";
import ProductDetails from "../components/products-details";
import { useLocation } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

function ProductDetail(){



    const {state} = useLocation();
    const product = state?.product;


    const { card, setCard } = useOutletContext();


    return <>
    <ProductHeader product={product} />
    <ProductDetails product={product} card={card} setCard={setCard} />
    </>
}


export default ProductDetail;