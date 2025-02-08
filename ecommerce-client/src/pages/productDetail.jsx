import ProductHeader from "../components/product-header";
import ProductDetails from "../components/products-details";
import { useLocation } from "react-router-dom";


function ProductDetail(){



    const {state} = useLocation();
    const product = state?.product;



    return <>
    <ProductHeader product={product} />
    <ProductDetails product={product} />
    </>
}


export default ProductDetail;