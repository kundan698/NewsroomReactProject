import React from "react";
import Slider from "react-slick";

function Responsive() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 1,
    autoplay:true,
    autoplayTimeout:300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots:true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:true
        }
      }
    ]
  };
  return (
   
      <Slider {...settings}>
        <div>
         <div>
            <img src="https://metadata.io/wp-content/uploads/2023/01/Oyster-2.svg" alt="" className="w-50"/>
         </div>
        </div>
        <div>
        <div>
            <img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-True-Accord-new.svg" alt="" className="w-50"/>
         </div>
        </div>
        <div>
        <div>
            <img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-LogicMonitor-new.svg" alt="" className="w-50"/>
         </div>
        </div>
        <div>
        <div>
            <img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-Wunderkind-new.svg" alt="" className="w-50"/>
         </div>
        </div>
        <div>
        <div>
            <img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-Eightfold.svg" alt="" className="w-50"/>
         </div>
        </div>
        <div>
        <div>
            <img src="https://metadata.io/wp-content/uploads/2023/03/Liquibase.svg" alt="" />
         </div>
        </div>
        <div>
        <div>
            <img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-Lumar-new.svg" alt="" className="w-50"/>
         </div>
        </div>
        <div>
        <div>
            <img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-Monotype-new.svg" alt="" className="w-50"/>
         </div>
        </div>
      </Slider>
   
  );
}

export default Responsive;
