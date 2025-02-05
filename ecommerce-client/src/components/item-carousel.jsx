import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "../styles/item-carousel.css";
import { useEffect, useState, useRef } from "react";
import useData from "../hooks/useData";

import nextSvg from "../assets/nextArrow.svg";
import prevSvg from "../assets/prevArrow.svg";

function ItemCarousel() {
  const {
    data: products,
    loading,
    error,
  } = useData("https://fakestoreapi.com/products?limit=10");

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="carousel-wrapper">
      <h1>It’s bound to catch your eye.</h1>
      <div
        ref={prevRef}
        className="custom-nav custom-prev"
        style={{ display: isBeginning ? "none" : "block" }}
      >
        <img src={prevSvg} alt="" draggable="false"></img>
      </div>
      <div
        ref={nextRef}
        className="custom-nav custom-next"
        style={{ display: isEnd ? "none" : "block" }}
      >
        <img src={nextSvg} alt="" draggable="false" />
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => {
          // Update state on each slide change.
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          2048: { slidesPerView: 5 },
        }}
        observer={true}
        observeParents={true}
        spaceBetween={30}
        className="carousel-container"
      >
        {products &&
          products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">{product.title}</h3>
                  <p className="card-price">{product.price}</p>
                  {/* {product.oldPrice && (
                  <p className="card-old-price">{product.oldPrice}</p>
                )} */}
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default ItemCarousel;
