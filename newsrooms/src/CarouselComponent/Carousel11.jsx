import React from "react";
import Slider from "react-slick";

function Carousel11() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
   
    autoplaySpeed: 1000,
    cssEase: "linear",
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
      <Slider {...settings} className="m-3">
        <div>
        <div>
                
                        <div className='bg-white p-4 text-center rounded-4 m-2'>
                            <img src="https://metadata.io/wp-content/uploads/2023/03/401K.svg" alt="" className="mxs"/><br />
                            <h5>Boost conversion <br /> rates with pinpoint <br /> retargeting</h5>
                        </div>
                    </div>
                    
                    
               
        </div>
        <div>
        <div>
                
                        <div className='bg-white p-4 text-center rounded-4 m-2'>
                            <img src="https://metadata.io/wp-content/uploads/2022/10/Customer-Onboarding-1.svg" alt="" /><br />
                            <h5>Reduce overhead <br /> with streamlined <br /> data management</h5>
                        </div>
                    </div>
                   
                    
               
        </div>
        <div>
        <div>
                
                        <div className='bg-white p-4 text-center rounded-4 m-2'>
                            <img src="https://metadata.io/wp-content/uploads/2024/04/icon-AB-testing.svg" alt="" /><br />
                            <h5>Enhance customer <br /> retention through <br /> personalized engagement</h5>
                        </div>
                    </div>
                   
                
        </div>
        <div>
        <div>
                
                        <div className='bg-white p-4 text-center rounded-4 m-2'>
                            <img src="https://metadata.io/wp-content/uploads/2023/03/401K.svg" alt="" /><br />
                            <h5>Boost conversion <br /> rates with pinpoint <br /> retargeting</h5>
                        </div>
                    </div>
                   
                    
                
        </div>
        <div>
        <div>
                
                        <div className='bg-white p-4 text-center rounded-4 m-2'>
                            <img src="https://metadata.io/wp-content/uploads/2023/03/401K.svg" alt="" /><br />
                            <h5>Boost conversion <br /> rates with pinpoint <br /> retargeting</h5>
                        </div>
                    </div>
                    
              
        </div>
       
      </Slider>
    </div>
  );
}

export default Carousel11;
