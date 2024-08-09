import React from "react";
import Slider from "react-slick";

export default function Carousel2() {
  var settings = {
    dots: true,
    
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
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
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/G2-High-Performer-Americas-Summer-2024.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/G2-High-Performer-Latin-America-Summer-2024.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/G2-Most-Implementable-Small-Business-Summer-2024.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/G2-Most-Implementable-Small-Business-Summer-2024.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Support-Mid-Market-Summer-2024.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Support-Mid-Market-Summer-2024.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/G2-Easiest-Admin-Enterprise-Summer-2024.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/G2-Easiest-Admin-Enterprise-Summer-2024.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Support-Summer-2024.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/G2-Best-Support-Summer-2024.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/G2-Easiest-Admin-Small-Business-Summer-2024.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/G2-High-Performer-Americas-Summer-2024.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/G2-High-Performer-Americas-Summer-2024.svg" alt="" /></div>
         </div>
        </div>
      </Slider>
    </div>
  );
}


