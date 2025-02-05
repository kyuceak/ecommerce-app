import Carousel from "./carousel";
import ItemCarousel from "./item-carousel";
import adCap from "../assets/adCap.webp";
import adInsta from "../assets/adInsta.webp";
import adShirt from "../assets/adShirt.webp";
import start_shop from "../assets/shop-banner.jpg";

import "../styles/main-page.css";

function MainPage() {
  return (
    <>
      <Carousel />

      <ItemCarousel />

      <div className="img-group">
        <img src={adCap} alt="" />
        <img src={adInsta} alt="" />
        <img src={adShirt} alt="" />
      </div>

      <div className="start-shopping">
        <img src={start_shop} alt="" />
        <div className="shopping-info">
          <p>
            <strong>
              Refined Styles That Capture the Season's Essence and Redefine Your
              Fashion Narrative
            </strong>
          </p>
          <p>
            Embrace the allure of autumn with refined styles that capture the
            season's essence—shop now and indulge in fashion redefined.
          </p>
          <button>
            <span>Elevate Your Style</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPage;
