import React from 'react'
import Header from '../Pages/Header'
import Responsive3 from '../CarouselComponent/Carousel3'
import Responsive4 from '../CarouselComponent/Carousel4'
import Responsive1 from '../CarouselComponent/Carousel2';
import { FaCircleCheck } from "react-icons/fa6";
import Footer from '../Pages/Footer';
import 'animate.css';

export default function Demandhub() {
  return (
    <div>
        <Header/>

        <section className='container-fluid animate__animated animate__fadeInUp' id='dmd'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                   
                       <div className="more">
                       <h1>More revenue,<br />less manual <br /> <span className='mar'>marketing</span></h1>
                       <form action="" className='call'>
                                
                                <button className='w-75'>book intro call</button>
                            </form>
                       </div>
                     </div>
                   
                    <div className="col-lg-6">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2022/10/alexis_money_bag_.png" alt="" className='w-75'/>
                        </div>
                    </div>
                </div>

            </div>

        </section>

        <section className='container-fluid  p-4 bgs animate__animated animate__fadeInUp'>
            <div className="container">
                <div className='text-center p-4 paras'>
                    <h1>See what's under the Metadata hood</h1>
                    <p>No one should have to wait until the third call to see the actual product. We want to make sure Metadata is a <br /> good fit for you. We don’t want to waste your time (or budget) either.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 ">
                        <div className='text-center  p-5 ht'>
                            <img src="https://metadata.io/wp-content/uploads/2022/10/Customer-Onboarding-1.svg" alt="" />
                            <h3>Increase the capacity of your team</h3>
                            <p>Use Metadata's Demand Hub to launch and manage your paid campaigns so you can get more out of your Marketing team, without spending money on more people.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='text-center  p-5 ht'>
                            <img src="https://metadata.io/wp-content/uploads/2022/10/Advanced-persistent-threat-detection-1.svg" alt="" />
                            <h3>Use a single tool to run your paid campaigns</h3>
                           <p>From logging into different ad channels to keeping up with UI changes to dealing with confusing workflows - now you can do it all from a single tool.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='text-center  p-5 ht'>
                            <img src="https://metadata.io/wp-content/uploads/2022/10/Campaigns-Launches-1.svg" alt="" />
                            <h3>Spend more time on the big things</h3>
                            <p>Automate the repeatable and time-consuming parts of launching paid campaigns so you can focus more of your time on strategy, targeting, and creative.</p>
                        </div>
                    </div>
                      
                    
                   
                </div>
            </div>

        </section>
        <section className='container-fluid audi animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='p-5 press'>
                            <h1>Audience <br /> Targeting</h1>
                            <p>Match business profiles to personal emails so you can reach your best-fit audiences across Facebook, Google Ads, LinkedIn.</p>
                            <div className='d-flex get  gap-2'>
                                <h5>1</h5>
                                <p>Get more flexibility to build the best possible audiences</p>
                            </div>
                            <div className='d-flex get  gap-2'>
                                <h5>2</h5>
                                <p>Activate first-party, third-party, and intent data in your paid campaigns</p>
                            </div>
                            
                            <div className='d-flex get gap-2'>
                                <h5>3</h5>
                                <p>Find your actual buyers and target accounts across channels</p>
                            </div>
                            <form action="" className='call'>
                                
                                <button className='w-75'>Read more</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2022/10/Audience-Targeting-frame-2.png" alt="" className='img-fluid ' />
                           
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid audi animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                       <div className='mt-5'>
                        <img src="https://metadata.io/wp-content/uploads/2022/10/Campaign-Automation-Display.png" alt=""className='img-fluid' />
                       </div>
                    </div>
                    <div className="col-lg-6">
                       
                         <div className='p-5 press'>
                            <h1>Campaign <br /> Automation</h1>
                            <p>Use the same tool to launch all of your paid campaigns. Save serious time and forget about having to manually build (and rebuild) new campaigns in each ad channel.</p>
                            <div className='d-flex get  gap-2'>
                                <h5>1</h5>
                                <p>Select all of your campaign assets from a single library</p>
                            </div>
                            <div className='d-flex get  gap-2'>
                                <h5>2</h5>
                                <p>Push your campaigns directly to each channel</p>
                            </div>
                            
                            <div className='d-flex get gap-2'>
                                <h5>3</h5>
                                <p>Focus more on strategy, creativity, and driving revenues</p>
                            </div>
                            <form action="" className='call'>
                                
                                <button className='w-75'>Read more</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid audi animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='p-5 press'>
                            <h1>Campaign <br /> Experimentation</h1>
                            <p>Experiment, except at scale. Launch thousands of campaign experiments so you can get clarity on what works, what doesn’t, and why.</p>
                            <div className='d-flex get  gap-2'>
                                <h5>1</h5>
                                <p>Test new audiences, messaging, creative, and content offers</p>
                            </div>
                            <div className='d-flex get  gap-2'>
                                <h5>2</h5>
                                <p>Uncover insights without having to do the analysis</p>
                            </div>
                            
                            <div className='d-flex get gap-2'>
                                <h5>3</h5>
                                <p>Apply new learnings to your campaigns immediately</p>
                            </div>
                            <form action="" className='call'>
                                
                                <button className='w-75'>Read more</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2022/10/Campaign-Experimentation-frame-active-3-v2.png" alt="" className='img-fluid ' />
                            <img src="https://metadata.io/wp-content/uploads/2022/10/Campaign-Experimentation-popup-3.png" alt=""className='w-100' />
                           
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid audi animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 position-relative">
                       <div className='mt-5 pns'>
                        <img src="https://metadata.io/wp-content/uploads/2022/10/Website-Personalization%E2%80%8B-Sendbird-frame-v2.png" alt=""className='img-fluid ' />
                        <img src="https://metadata.io/wp-content/uploads/2022/10/Website-Personalization%E2%80%8B-Sendbird-box-v2.svg" alt="" className='w-50  '/>
                       </div>
                    </div>
                    <div className="col-lg-6">
                       
                         <div className='p-5 press'>
                            <h1>Web <br /> Personalization</h1>
                            <p>Don’t let organic and paid traffic go to waste. Personalize web experiences in real-time and convert your site traffic to revenue.</p>
                            <div className='d-flex get  gap-2'>
                                <h5>1</h5>
                                <p>Learn how your target accounts interact with your website</p>
                            </div>
                            <div className='d-flex get  gap-2'>
                                <h5>2</h5>
                                <p>Automate real-time experimentation without needing engineers</p>
                            </div>
                            
                            <div className='d-flex get gap-2'>
                                <h5>3</h5>
                                <p>Increase conversions by personalizing messaging and social proofs</p>
                            </div>
                            <form action="" className='call'>
                                
                                <button className='w-75'>Read more</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid audi animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='p-5 press'>
                            <h1>Lead <br /> Enrichment</h1>
                            <p>Use a single field on your forms so you can drive more conversions. Automatically enrich new leads from your campaigns with verified business data.</p>
                            <div className='d-flex get  gap-2'>
                                <h5>1</h5>
                                <p>Enrich your new leads with up to 20 business attributes</p>
                            </div>
                            <div className='d-flex get  gap-2'>
                                <h5>2</h5>
                                <p>Stop wasting time stitching multiple data sources together</p>
                            </div>
                            
                            <div className='d-flex get gap-2'>
                                <h5>3</h5>
                                <p>Shorten your lead forms and remove friction</p>
                            </div>
                            <form action="" className='call'>
                                
                                <button className='w-75'>Read more</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className=''>
                            <img src="https://metadata.io/wp-content/uploads/2022/10/Lead-Enrichment%E2%80%8B-Frame.svg" alt="" className='img-fluid ' />
                           <div className="d-flex">
                           <img src="https://metadata.io/wp-content/uploads/2022/10/Lead-Enrichment%E2%80%8B-Business-2.svg" alt="" className='img-fluid'/>
                          
                         
                           </div>
                          
                           
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid audi animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 position-relative">
                       <div className='mt-5 pns'>
                        <img src="https://metadata.io/wp-content/uploads/2022/10/Revenue-Optimization-Frame.png" alt=""className='img-fluid ' />
                        <img src="https://metadata.io/wp-content/uploads/2022/10/Website-Personalization%E2%80%8B-Sendbird-box-v2.svg" alt="" className='w-50  '/>
                       </div>
                    </div>
                    <div className="col-lg-6">
                       
                         <div className='p-5 press'>
                            <h1>Revenue <br /> Optimization</h1>
                            <p>Don’t let organic and paid traffic go to waste. Personalize web experiences in real-time and convert your site traffic to revenue.</p>
                            <div className='d-flex get  gap-2'>
                                <h5>1</h5>
                                <p>Learn how your target accounts interact with your website</p>
                            </div>
                            <div className='d-flex get  gap-2'>
                                <h5>2</h5>
                                <p>Automate real-time experimentation without needing engineers</p>
                            </div>
                            
                            <div className='d-flex get gap-2'>
                                <h5>3</h5>
                                <p>Increase conversions by personalizing messaging and social proofs</p>
                            </div>
                            <form action="" className='call'>
                                
                                <button className='w-75'>Read more</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </section>

        <section className='container-fluid animate__animated animate__fadeInUp'>
            <div className="container">
                <div className='pt-5 text-center p-4 work'>
                    <h1>Make your tech stack work for you</h1>
                    <p>Metadata integrates with your CRM, ad channels, marketing automation platform, and conversational marketing <br /> platform, plus both first and third-party data sources. This saves you serious time and frustration from having to <br /> throw more people at a problem that can easily be automated.</p>
                    <form action="" className='call'>
                                
                                <button className='w-50'>Read more</button>
                            </form>
                </div>
            </div>

        </section>
        <section className='container-fluid animate__animated animate__fadeInUp' id='wth'>
            <div className="col-lg-12">
                <Responsive3/>
                <Responsive4/>
            </div>

        </section>
        <section className='container-fluid animate__animated animate__fadeInUp' id='maroons'>
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
        <section className='container-fluid mt-5 animate__animated animate__fadeInUp' id='for'>
            <div className="container">
                <div className='text-center p-5 text-white al'>
                <h1>Don’t just take our word for it</h1>
                </div>

                <div className="row gy-4">

                    <div className="col-lg-4">
                        <div className='star'>
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-full.svg" alt="" />
                           <img src="https://metadata.io/wp-content/uploads/2023/08/icon-star-half.svg" alt="" />
                           <h3 className='pt-4'>Quick design & launch of campaigns</h3>
                           <p>Automated optimization & budget shifting. Clear visibility into key metrics & spend. Easy experimentation to help you course-correct quicker.</p><br />
                           <p className='pt-5'>Tamara T. <span className='fa'>Validated reviewer</span>

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
                           <p className='pt-5'>Tamara T. <span className='fa'>Validated reviewer</span>

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
                   <Responsive1/>
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
        <Footer/>
    </div>
  )
}
