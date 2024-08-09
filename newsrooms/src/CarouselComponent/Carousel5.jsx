import React from "react";
import Slider from "react-slick";

function Carousel5() {
  var settings = {
    dots: true,
    
    speed: 500,
    slidesToShow: 8,
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
         <div><img src="https://metadata.io/wp-content/uploads/2022/10/logo-white-Awardco.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-Maxio-new.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/08/pendo_logo_grid-1.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2024/07/Automation-Anywhere.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2022/03/thoughtspot_logo_grid.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-Trolley-new.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-Docebo-new.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-Lumar-new.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2023/03/Liquibase.svg" alt="" /></div>
         </div>
        </div>
        <div>
        <div className="col">
         <div><img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-LogicMonitor-new.svg" alt="" /></div>
         </div>
        </div>
       
        
        
        
       
        
      </Slider>
    </div>
  );
}

export default Carousel5;
