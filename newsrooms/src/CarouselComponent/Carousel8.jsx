import React from "react";
import Slider from "react-slick";

function Carousel8() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
   /*  cssEase: "linear" */
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
        <div>
               <div className="row">
                    <div className="col-lg-2">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Lorna-Scudder.png" alt="" className='img-fluid '/>
                            <div className='text-white  mx-2'>
                                <h5>Lorna Scudder</h5>
                                <p>Senior Manager, Global Digital Marketing, Starburst</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className='text-white pt-5 line'>
                            <h5>"Getting Metadata was one of the best decisions our <br /> company has made. It's allowed our team to scale, work more efficiently and effectively, and given us a lot more  control of how we spend our budget.”</h5>
                        </div>
                    </div>
                </div>
               </div>
        </div>
        <div>
        <div>
               <div className="row">
                    <div className="col-lg-2">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Lorna-Scudder.png" alt="" className='img-fluid '/>
                            <div className='text-white mx-2'>
                                <h5>Lorna Scudder</h5>
                                <p>Senior Manager, Global Digital Marketing, Starburst</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className='text-white pt-5 line'>
                            <h5>"Getting Metadata was one of the best decisions our <br /> company has made. It's allowed our team to scale, work more efficiently and effectively, and given us a lot more  control of how we spend our budget.”</h5>
                        </div>
                    </div>
                </div>
               </div>
        </div>
        <div>
        <div>
               <div className="row">
                    <div className="col-lg-2">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Jacob-Warren.png" alt="" className='img-fluid '/>
                            <div className='text-white mx-2 '>
                                <h5>Lorna Scudder</h5>
                                <p>Senior Manager, Global Digital Marketing, Starburst</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className='text-white pt-5 line'>
                            <h5>"Getting Metadata was one of the best decisions our <br /> company has made. It's allowed our team to scale, work more efficiently and effectively, and given us a lot more  control of how we spend our budget.”</h5>
                        </div>
                    </div>
                </div>
               </div>
        </div>
        <div>
        <div>
               <div className="row">
                    <div className="col-lg-2">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Jacob-Warren.png" alt="" className='img-fluid '/>
                            <div className='text-white mx-2'>
                                <h5>Lorna Scudder</h5>
                                <p>Senior Manager, Global Digital Marketing, Starburst</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className='text-white pt-5 line'>
                            <h5>"Getting Metadata was one of the best decisions our <br /> company has made. It's allowed our team to scale, work more efficiently and effectively, and given us a lot more  control of how we spend our budget.”</h5>
                        </div>
                    </div>
                </div>
               </div>
        </div>
        <div>
        <div>
               <div className="row">
                    <div className="col-lg-2">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Jacob-Warren.png" alt="" className='img-fluid '/>
                            <div className='text-white mx-2'>
                                <h5>Lorna Scudder</h5>
                                <p>Senior Manager, Global Digital Marketing, Starburst</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className='text-white pt-5 line'>
                            <h5>"Getting Metadata was one of the best decisions our <br /> company has made. It's allowed our team to scale, work more efficiently and effectively, and given us a lot more  control of how we spend our budget.”</h5>
                        </div>
                    </div>
                </div>
               </div>
        </div>
       
      </Slider>
    </div>
  );
}

export default Carousel8;
