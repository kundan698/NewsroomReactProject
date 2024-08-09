import React from "react";
import Slider from "react-slick";

function Caro() {
  const settings = {
    dots:false,
    infinite: true,
    slidesToShow: 2,
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
         <img src="https://metadata.io/wp-content/uploads/2021/08/Megan-Boone-Headshot.png" alt="" className="img-fluid"/>
        </div>
        <div>
        <img src="https://metadata.io/wp-content/uploads/2022/10/Julian-Foster.png" alt="" className="img-fluid"/>
        </div>
        <div>
        <img src="https://metadata.io/wp-content/uploads/2022/10/Mike-Smith.png" alt="" className="img-fluid"/>
        </div>
        <div>
        <img src="https://metadata.io/wp-content/uploads/2022/10/Andy-Wibbels-1.png" alt="" className="img-fluid"/>
        </div>
        <div>
        <img src="https://metadata.io/wp-content/uploads/2024/07/Lorna-Scudder.png" alt="" className="img-fluid h-100"/>
        </div>
       
      </Slider>
    </div>
  );
}

export default Caro;
