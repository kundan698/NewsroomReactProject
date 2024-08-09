import React from "react";
import Slider from "react-slick";

function Responsive4() {
  var settings = {
    dots: true,
    
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 10,
    initialSlide: 0,
    autoplay:true,
    autoplayTimeout:300,
    infinite:true,
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
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container">
      <Slider  {...settings} >
        <div>
         <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2022/10/Icon-logos-5.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2022/10/Icon-logos-6.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2022/10/Icon-logos-7-1.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2022/10/Icon-logos-11.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2022/10/Icon-logos-2-1.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2022/10/Icon-logos-1.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2022/10/Icon-logos-2.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2022/10/Icon-logos-3.svg" alt="" /></div>
         </div>
        </div>
        
       
        
        
        
       
        
      </Slider>
    </div>
  );
}

export default Responsive4;
