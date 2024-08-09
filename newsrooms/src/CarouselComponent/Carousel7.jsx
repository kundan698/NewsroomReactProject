import React from "react";
import Slider from "react-slick";

function AutoPlay() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <div>
         <img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Meets-Requirements-Mid-Market-Summer-2024.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
         <img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Meets-Requirements-Mid-Market-Summer-2024.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
         <img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Meets-Requirements-Mid-Market-Summer-2024.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
         <img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Meets-Requirements-Mid-Market-Summer-2024.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
         <img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Meets-Requirements-Mid-Market-Summer-2024.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
         <img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Meets-Requirements-Mid-Market-Summer-2024.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
         <img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Meets-Requirements-Mid-Market-Summer-2024.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
         <img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Meets-Requirements-Mid-Market-Summer-2024.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
         <img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Meets-Requirements-Mid-Market-Summer-2024.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
         <img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Meets-Requirements-Mid-Market-Summer-2024.svg" alt="" />
         </div>
        </div>
        
      </Slider>
    </div>
  );
}

export default AutoPlay;
