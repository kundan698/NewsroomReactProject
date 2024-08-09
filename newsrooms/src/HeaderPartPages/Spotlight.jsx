import React from 'react'
import Header from '../Pages/Header'
import Carousel9 from '../CarouselComponent/Carousel9'
import Carousel10 from '../CarouselComponent/Carousel10'
import Carousel11 from '../CarouselComponent/Carousel11'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaCircleCheck } from "react-icons/fa6";
import AutoPlay from '../CarouselComponent/Carousel7';


export default function Spotlight() {
  return (
    <div>
        <Header/>
        <section className='container-fluid ' id='clr'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='ditch'>
                            <h1 className=''>Visualize Every Customer Interaction with <br /> <span className='part'>Unmatched Clarity</span></h1>
                            <p>Partner directly with Metadata’s skilled marketers. We’re more than slick slides. We’re strategic partners, using data-driven insights to ensure your campaigns are effective, not wasteful. With Metadata, you’ll have everything you need to generate pipeline at economies of scale. Take advantage of our flat pricing and never waste another dollar on your negative ROI campaigns. Let’s get started!</p>
                            <form action="" className='call'>
                                <input type="text"  placeholder='Your business email.'/>
                                <button>book intro call</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2024/05/Banner-Spotlight.png" alt="" className='img-fluid'/>
                        </div>
                       
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid' id='mrs'>
            <div className="container">
                <div className='text-center p-4 text-white'>
                    <h1>Helping demand gen marketers work more efficiently</h1>
                </div>
                <Carousel9/>
            </div>

        </section>
        <section className='container-fluid mt-5 '>
            <div className="container">
               <div className="row rrws">
                <div className="col-lg-4">
                    <div>
                        <img src="https://metadata.io/wp-content/uploads/2024/05/spotlight-Mice-running-768x746.png" alt="" className='img-fluid' />
                    </div>
                </div>
                <div className="col-lg-8">
                   <div className='offs pt-5'>
                    <h1 className='pt-5'>Tired of juggling multiple platforms to <span className='track'>track customer interactions</span>?</h1>
                    <p>Surprising fact: Over 60% of business data is underutilized, limiting growth and customer understanding.</p>
                   </div>
                </div>
               </div>
            </div>

        </section>
        <section className='container-fluid mt-5'>
            <div className="container">
                <div className='text-center p-3 offs'>
                    <h1>Key Features</h1>
                    <p>Metadata-Spotlight effortlessly consolidates your digital data—from social interactions to <br /> website analytics—into a single pane of glass, giving you a holistic view of customer activities</p>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className='map text-white'>
                            <img src="https://metadata.io/wp-content/uploads/2024/05/icon-Strategy.svg" alt="" />
                            <h3>Account Journey <br /> Mapping</h3>
                            <p>Trace complete customer paths.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className='map text-white'>
                            <img src="https://metadata.io/wp-content/uploads/2024/05/icon-Salesperson.svg" alt="" />
                            <h3>Visitor <br /> Identification</h3>
                            <p>Pinpoint potential leads in real time.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className='map text-white'>
                            <img src="https://metadata.io/wp-content/uploads/2024/05/icon-Product-Collateral.svg" alt="" />
                            <h3>Actionable Insights</h3>
                            <p>Convert data into effective action.</p>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className='map text-white'>
                            <img src="https://metadata.io/wp-content/uploads/2024/05/icon-Product-Information.svg" alt="" />
                            <h3>Engagement <br /> Detections</h3>
                            <p>Discover and engage top prospects..</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section className='container-fluid mt-5 p-4' id='clr'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='ditch'>
                            <h1 className=''>Account Journey <br /> Mapping <br /> <span className='part'>Unmatched Clarity</span></h1>
                            <p className='fs-4'>Map the entire customer journey to better predict behavior and tailor your strategies.</p>
                            <form action="" className='call'>
                               
                                <button>book intro call</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2024/05/Spotlight-Optimization-in-Progress-1536x1152.png" alt="" className='img-fluid'/>
                        </div>
                       
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid '>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 position-relative">
                       <div className='mt-5 pns'>
                        <img src="https://metadata.io/wp-content/uploads/2024/05/Spotlight-Visitor-Identification-and-Creating-Target-Segments-1536x1152.png" alt=""className='img-fluid ' />
                       
                       </div>
                    </div>
                    <div className="col-lg-6">
                       
                         <div className='p-5 press'>
                            <h1>Visitor Identification and Creating Target Segments</h1>
                            <p>Identify who’s visiting your site and what they’re interested in, instantly..</p>
                            
                            <form action="" className='call'>
                                
                                <button className='w-75'>schedule a demo</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </section>

        <section className='container-fluid mt-5 p-4' id=''>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 bg-light p-4 rounded">
                        <div className='ditch'>
                            <h1 className=''>Make Data <br /> actionable <br /> <span className='part'> Clarity</span></h1>
                            <p className='fs-4'>Re-target your audience to multiple channels at once.</p>
                            <form action="" className='call'>
                               
                                <button>shedule a demo</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2024/05/Spotlight-Make-Data-actionable-1536x1152.png" alt="" className='img-fluid'/>
                        </div>
                       
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid mt-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 position-relative">
                       <div className='mt-5 pns'>
                        <img src="https://metadata.io/wp-content/uploads/2024/05/Spotlight-Financials-1536x1152.png" alt=""className='img-fluid ' />
                       
                       </div>
                    </div>
                    <div className="col-lg-6 bg-light rounded-3">
                       
                         <div className='p-5 press'>
                            <h1>Predict purchase <br /> intent for your <br /> target accounts in Salesforce</h1>
                            <p>Identify who’s visiting your site and what they’re interested in, instantly..</p>
                            
                            <form action="" className='call'>
                                
                                <button className='w-75'>schedule a demo</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid p-4 mt-5' id='clr'>
            <div className="container">
               <div>
               <div className="row gap-4">
                  <div className="col-lg-7">
                  <Carousel10/>
                  </div>
                  <div className='col-lg-4 wait'>
                    <div>
                    <h1>Don’t Wait,<br /> Transform Your <br /> Data Strategy Today!</h1>
                    <form action="" className='call'>
                                
                                <button className='w-75'>schedule a demo</button>
                            </form>
                    </div>
                  </div>
                    
                </div>
               </div>

            </div>

        </section>
        <section className='container-fluid ttx'>
            <div className='text-center text-white'>
                <h1>Transformations</h1>
            </div>
            <div className="container">
                <Carousel11/>
            </div>

        </section>
        <section className='container-fluid' id='maroons'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                    <div className='text-white als'>
                     <h1>Schedule a Consultation</h1>
                      <p>Speak with our experts to discuss your digital marketing goals and <br /> how Metadata can help you achieve them.</p>

                    </div>
                    </div>
                    <div className="col-lg-4">
                    <form action="" className='call'>
                                <input type="text"  placeholder='Your business email.' className='w-100 mx-2'/><br />
                                <button className='w-100'>book intro call</button>
                            </form>
                    </div>
                </div>
               
            </div>

        </section>
        <section className='container-fluid mt-5' id='for'>
            <div className="container">
                <div className='text-center p-5 text-white al'>
                <h1>Don’t just take our word for it</h1>
                </div>

                <div className="row">

                    <div className="col-lg-4">
                        <div className='star'>
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-half.svg" alt="" />
                           <h3 className='pt-4'>Quick design & launch of campaigns</h3>
                           <p>Automated optimization & budget shifting. Clear visibility into key metrics & spend. Easy experimentation to help you course-correct quicker.</p><br />
                           <p className='pt-5'>Tamara T. <span className='fa'><FaCircleCheck /> Validated reviewer</span>

                           </p>
                        
                           <p>Mid-Market(51-1000 emp.)</p>

                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='star'>
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-half.svg" alt="" />
                           <h3 className='pt-4'>The advertising platform to rule them all!</h3>
                           <p>Metadata has been the most efficient platform for managing LinkedIn and Google ads all in one place. I can easily manage audiences, ads, creatives, offers, and more. The budget grouping allows me to control how much spend to allocate by campaigns, geos, and more..</p><br />
                           <p>Verified User in Computer Software</p>
                           <p className='pt-5'>Tamara T. <span className='fa'><FaCircleCheck /> Validated reviewer</span>

                           </p>
                        
                           <p>Mid-Market(51-1000 emp.)</p>

                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='star'>
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-half.svg" alt="" />
                           <h3 className='pt-4'>The ability to launch campaigns simultaneously across LinkedIn, Facebook, and Google Ads is incredible</h3>
                           <p>It saves countless hours of duplicitous work and provides unmatched visibility into the best-performing channels..</p><br />
                           <p className='pt-5'>Tamara T. <span className='fa'><FaCircleCheck /> Validated reviewer</span>

                           </p>
                        
                           <p>Mid-Market(51-1000 emp.)</p>

                        </div>
                    </div>
                </div>
                
            </div>
            <div className="row mt-5">
               <AutoPlay/>
                </div>
                <div className='d-flex justify-content-center gap-4 align-content-center p-3 orn'>
                    <h5>excellent</h5>
                    <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-half.svg" alt="" />
                           <p>4.6 Based on 474 reviews</p>

                </div>

        </section>
        
    </div>
  )
}
