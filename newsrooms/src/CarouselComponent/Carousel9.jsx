import React from "react";
import Slider from "react-slick";

function Carousel9() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
         <div>
            <img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-Swoop.svg" alt="" />
         </div>
        </div>
        <div>
         <div>
            <img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-Lumar-new.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
            <img src="https://metadata.io/wp-content/uploads/2022/03/thoughtspot_logo_grid.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
            <img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-Maxio-new.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
            <img src="https://metadata.io/wp-content/uploads/2022/10/logo-white-Awardco.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
            <img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-True-Accord-new.svg" alt="" />
         </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel9;
