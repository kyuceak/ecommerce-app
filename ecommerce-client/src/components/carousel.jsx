import { useState, useEffect } from "react";
import "../styles/carousel.css";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

function Carousel() {
  let slides = [img1, img2, img3, img4];

  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const currSlide = (curr) => {
    setSlideIndex(curr);
  };

  useEffect(() => {
    const timer = setTimeout(nextSlide, 4000);

    return () => clearTimeout(timer);
  }, [slideIndex]);

  return (
    <>
      <div className="slideshow-container">
        {/* Slides wrapper: its transform will slide the slides */}
        <div
          className="slides-wrapper"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>

        <button className="carousel-btn" onClick={prevSlide}>
          <svg
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            transform="rotate(180)"
            width="35px"
            height="35px"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z"
                fill="#ffffff"
              ></path>
            </g>
          </svg>
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          <svg
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            transform="rotate(0)"
            width="35px"
            height="35px"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M364.8 106.666667L298.666667 172.8 637.866667 512 298.666667 851.2l66.133333 66.133333L768 512z"
                fill="#ffffff"
              ></path>
            </g>
          </svg>
        </button>

        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={() => currSlide(0)}>
            {" "}
          </span>
          <span className="dot" onClick={() => currSlide(1)}>
            {" "}
          </span>
          <span className="dot" onClick={() => currSlide(2)}></span>
          <span className="dot" onClick={() => currSlide(3)}></span>
        </div>
      </div>
    </>
  );
}

export default Carousel;
