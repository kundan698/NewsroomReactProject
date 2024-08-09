import React from "react";
import Slider from "react-slick";

function Carousel10() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
   
    autoplaySpeed: 2000,
    cssEase: "linear"
    
    
    
  };
  return (
    <div className="slider-container">
      <Slider {...settings} className="rnds">
        <div>
        <div className='bg-white p-4 rounded-4'>
                            <p className='fs-4'>“Spotlight’s ability to present data that identifies non-engaged accounts has helped us create effective follow-up strategies and improve our targeting efforts with sales-led outbound.”</p>
                           <div className='d-flex gap-3'>
                           <img src="https://metadata.io/wp-content/uploads/2024/06/Sharon-M.-headshot.png" alt="" className='w-25'/>
                           <h5 className='mt-5'>Sharon McClint
                           <p>Content lead lumar.</p>
                           </h5>
                           
                           </div>
                        </div>
        </div>
        <div>
        <div className='bg-white p-4 rounded-4'>
                            <p className='fs-4'>“Spotlight’s ability to present data that identifies non-engaged accounts has helped us create effective follow-up strategies and improve our targeting efforts with sales-led outbound.”</p>
                           <div className='d-flex gap-3'>
                           <img src="https://metadata.io/wp-content/uploads/2022/10/Carlos-Tobon.png" alt="" className='w-25'/>
                           <h5 className='mt-5'>Sharon McClint
                           <p>Content lead lumar.</p>
                           </h5>
                           
                           </div>
                        </div>
        </div>
        <div>
        <div className='bg-white p-4 rounded-4'>
                            <p className='fs-4'>“Spotlight’s ability to present data that identifies non-engaged accounts has helped us create effective follow-up strategies and improve our targeting efforts with sales-led outbound.”</p>
                           <div className='d-flex gap-3'>
                           <img src="https://metadata.io/wp-content/uploads/2024/06/Sharon-M.-headshot.png" alt="" className='w-25'/>
                           <h5 className='mt-5'>Sharon McClint
                           <p>Content lead lumar.</p>
                           </h5>
                           
                           </div>
                        </div>
        </div>
        <div>
        <div className='bg-white p-4 rounded-4'>
                            <p className='fs-4'>“Spotlight’s ability to present data that identifies non-engaged accounts has helped us create effective follow-up strategies and improve our targeting efforts with sales-led outbound.”</p>
                           <div className='d-flex gap-3'>
                           <img src="https://metadata.io/wp-content/uploads/2022/10/Carlos-Tobon.png" alt="" className='w-25'/>
                           <h5 className='mt-5'>Sharon McClint
                           <p>Content lead lumar.</p>
                           </h5>
                           
                           </div>
                        </div>
        </div>
       
      </Slider>
    </div>
  );
}

export default Carousel10;

/* 

<div>
        <div className="col-lg-12">
                        <div className='bg-white p-4 rounded-4'>
                            <p className='fs-4'>“Spotlight’s ability to present data that identifies non-engaged accounts has helped us create effective follow-up strategies and improve our targeting efforts with sales-led outbound.”</p>
                           <div className='d-flex gap-3'>
                           <img src="https://metadata.io/wp-content/uploads/2024/06/Sharon-M.-headshot.png" alt="" className='w-25'/>
                           <h5 className='mt-5'>Sharon McClint
                           <p>Content lead lumar.</p>
                           </h5>
                           
                           </div>
                        </div>
                    </div>
        </div>
*/
