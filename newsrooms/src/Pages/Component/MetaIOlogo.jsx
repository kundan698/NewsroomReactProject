import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Carousel5 from '../../CarouselComponent/Carousel5'
import { FaGoogle } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import Carousel6 from '../../CarouselComponent/Carousel6';
import { FaCircleCheck } from "react-icons/fa6";
import Footer from '../Footer';
import AutoPlay from '../../CarouselComponent/Carousel7';

import 'animate.css';
import Caro from '../../CarouselComponent/Caro';


export default function MetaIOlogo() {
    /* let [Count,setCount]=useState(1)
    let myfunc = ()=>{
        setCount(Count+1)
    }
    myfunc()
    */
       
   
   
  return (
    <div>
        <Header/>

        <section className='container-fluid mt-3 animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='turn'>
                            <h1>Turn Campaigns <br /> into <br /> Experiments & <br /> Ad Spend to <br /> Pipeline</h1>
                            <p>Social media platforms and agencies push for higher spending. With Metadata, every dollar invested transforms into tangible pipeline results.</p>
                            <form action="">
                                <button className='book'>book an intro</button>
                                <button>send cmo guide</button>
                            </form>
                            <div className='p-2'>
                                <img src="https://metadata.io/wp-content/uploads/2023/08/G2-High-Performer-Enterprise-Summer-2024.svg" alt="" />
                                <img src="https://metadata.io/wp-content/uploads/2023/08/G2-Leader-Mid-Market-Summer-2024.svg" alt="" />
                                <img src="https://metadata.io/wp-content/uploads/2023/08/G2-Most-Implementable-Small-Business-Summer-2024.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-3">
                        <img src="https://metadata.io/wp-content/uploads/2023/11/revenue-optimization-hero-image-v2-1536x1258.png" alt="" className='img-fluid'/>
                    </div>
                </div>
            </div>

        </section>
       

        <section className='container-fluid mt-5 animate__animated animate__fadeInUp'id='caro'>
            <div className='text-center p-3 text-white'>
                <h4>Helping demand gen marketers work more efficiently</h4>
            </div>
            <Carousel5/>


        </section>

        <section className='container-fluid proven mt-5 animate__animated animate__fadeInUp' >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='turn text-white'>
                            <h1>Proven Results <br /> That Speak <br /> Volumes</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                       <div className='text-white mt-4'>
                       <h5>Ad spent in the last 12 months</h5>
                         <h1 className='num'>$1023,567,356</h1>
                       </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className='cout'>
                            <p>experiment count</p>
                            <h1>123k</h1>

                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className='cout'>
                            <p>total triggered amount</p>
                            <h1>44M</h1>

                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className='cout'>
                            <p>MPRESSIONS</p>
                            <h1>2.19B</h1>

                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className='cout'>
                            <p>LEADS</p>
                            <h1>153L</h1>

                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-3">
                        <div className='cout'>
                            <p>DOLLARS SPENT</p>
                            <h1>$103M</h1>

                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className='cout'>
                            <p>TOTAL INFLUENCED AMOUNT</p>
                            <h1>$7.8B</h1>

                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className='cout'>
                            <p>TOTAL TRIGGERED WON REVENUE</p>
                            <h1>84M</h1>

                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div className='cout'>
                            <p>ROI</p>
                            <h1>$7.25M</h1>

                        </div>
                    </div>

                    <div className='d-flex justify-content-center align-content-center gap-5 mt-4 text-white icons'>
                        <h5>channels</h5>
                       <p> <FaGoogle /></p>
                        <p><FaLinkedinIn /></p>
                       <p> <FaTwitter /></p>
                        <p><FaSquareInstagram /></p>
                        <p><FaFacebookF /></p>
                        <h5>and more...</h5>



                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid mt-5 animate__animated animate__fadeInUp'>
            <div className="container">
               <div className='text-center p-3 tool'>
               <h1>Supercharge Your <br /> Marketing Toolkits</h1>
               </div>
            </div>

        </section>

        <section className='container-fluid animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 position-relative">
                       <div className='mt-5 pns'>
                        <img src="https://metadata.io/wp-content/uploads/2024/05/Hack-your-budget-v3-1.png" alt=""className='img-fluid ' />
                        
                       </div>
                    </div>
                    <div className="col-lg-6">
                       
                         <div className='p-5 press'>
                            <h1>Hack Your Budget for Maximum ROI</h1>
                            <p>Ditch the native channel guesswork. Metadata’s intelligent optimization turns every ad dollar into measurable results, supercharging your campaign performance.</p>
                            
                            <form action="" className='call'>
                                
                                <button className='w-75'>book your rio now</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </section>

        <section className='container-fluid mt-5 animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    <div className='p-5 press'>
                            <h1>Laser-Focus Your <br /> Targeting Across <br /> Platforms</h1>
                            <p>Hit your mark every time. Metadata’s precision targeting finds your ideal audience across channels and dynamically adjusts messages for peak engagement.</p>
                            
                            <form action="" className='call'>
                                
                                <button className='w-75'>sharpen your targeting</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='mt-4'>
                            <img src="https://metadata.io/wp-content/uploads/2024/05/Laser-focus-v3-1.png" alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 position-relative">
                       <div className='mt-5 pns'>
                        <img src="https://metadata.io/wp-content/uploads/2024/05/Fuel-ABM-v4.png" alt=""className='img-fluid ' />
                        
                       </div>
                    </div>
                    <div className="col-lg-6">
                       
                         <div className='p-5 press'>
                            <h1>Fuel ABM Campaigns with Data-Driven Insights</h1>
                            <p>Arm your sales team with intelligence. Our deep funnel reporting empowers targeted ABM strategies, skyrocketing your campaign success rates.</p>
                            
                            <form action="" className='call'>
                                
                                <button className='w-75'>power up your abm</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid speak animate__animated animate__fadeInUp'>
            <div className="container">
              <Carousel6/>
            </div>

        </section>

        <section className='container-fluid mt-5 modern animate__animated animate__fadeInUp' >
            <div className='text-center p-4'>
                <h1>Smart Features Designed <br /> for Modern Marketing</h1>
            </div>

           <div className="container">
            <div className='autos'>
            <div className="row">
                    <div className="col-lg-3">
                        <div>
                            <a href="#">REVENUE OPTIMIZATION</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div>
                            <a href="#">AUDIENCE TARGETING</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div>
                            <a href="#">CAMPAGION AUTOMATION</a>
                        </div>
                    </div>
                    <div className="col-lg-3">
                    <div>
                            <a href="#">CAMPAGION EXPERIMENTATION</a>
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

        <section className='container-fluid audi animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='p-5 press'>
                            <h1>Audience <br /> Targeting</h1>
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
                           <img src="https://metadata.io/wp-content/uploads/2022/10/Lead-Enrichment%E2%80%8B-Personal-2.svg" alt="" className='w-50'/>
                         
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
                        <img src="https://metadata.io/wp-content/uploads/2024/07/campaign-experiements__.png" alt=""className='img-fluid ' />
                       
                       </div>
                    </div>
                    <div className="col-lg-6">
                       
                         <div className='p-5 press'>
                            <h1>Campaign <br /> Automation</h1>
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
                            <h1>Campaign <br /> Experimentation</h1>
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
                            <img src="https://metadata.io/wp-content/uploads/2024/07/metadata-ads.png" alt="" className='w-75'/>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/metadata-ads.png" alt="" className='img-fluid ' />
                           <div className="d-flex">
                           
                         
                           </div>
                          
                           
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section className='container-fluid mt-5 animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                   
                    <div className='p-5 press text-center'>
                            <h1>Why Metadata.io is Your <br /> Competitive Edge</h1>
                            
                            
                          
                        </div>
                   
                   
                </div>
            </div>

        </section>

        <section className='container-fluid mt-5 animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 position-relative">
                       <div className='mt-5 pns'>
                        <img src="https://metadata.io/wp-content/uploads/2024/05/Navigate-Ad-Tech-Trends-with-Confidence-v2.png" alt=""className='img-fluid ' />
                       
                       </div>
                    </div>
                    <div className="col-lg-6">
                       
                         <div className='p-5 press'>
                            <h1>Navigate Ad Tech <br /> Trends with Confidence</h1>
                            <p>Don’t let organic and paid traffic go to waste. Personalize web experiences in real-time and convert your site traffic to revenue.</p>
                            
                            <form action="" className='call'>
                                
                                <button className='w-75'>Read more</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </section>

        <section className='container-fluid mt-5 animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='p-5 press'>
                            <h1>Streamline Your <br /> Marketing Chaos <br /> into Strategic <br />Action</h1>
                            <p>Say goodbye to scattered efforts. Metadata unifies your ad data, aligns your team, and transforms marketing mayhem into a lean, mean, revenue-generating machine.</p>
                            
                            <form action="" className='call'>
                                
                                <button className='w-75'>Read more</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='mt-5'>
                            <img src="https://metadata.io/wp-content/uploads/2024/05/Streamline-Your-Marketing-Chaos-into-Strategic-Action-v2.png" alt="" className='w-100 '/>
                           
                           <div className="d-flex">
                           
                         
                           </div>
                          
                           
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid mt-5 audi animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    
                    <div className='p-5 press text-center'>
                            <h1>Real Success Stories <br /> from Industry Leaders</h1>
                            <form action="" className='call'>
                                
                                <button className='w-50'>diccover success stories</button>
                            </form>

                            
                            
                          
                        </div>
                   
                   
                </div>
            </div>

        </section>
        <section className='container-fluid mt-5 animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className='ios text-center'>
                            <img src="https://metadata.io/wp-content/uploads/2023/03/Liquibase.svg" alt="" className='img-fluid'/><br />
                            <img src="https://metadata.io/wp-content/themes/metadata/assets/images/metadata_logo.svg" alt="" className='w-25'/>

                            <div className='text-center  yours pt-5'>
                                <h5>Streamline Your Marketing Chaos into Strategic Action
                                Say goodbye to s</h5>
                                <form action="" className='call'>
                                
                                <button className='w-75'>diccover success stories</button>
                            </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='ios text-center'>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Automation-Anywhere.svg" alt="" className='img-fluid'/><br />
                            <img src="https://metadata.io/wp-content/themes/metadata/assets/images/metadata_logo.svg" alt="" className='w-25'/>
                        </div>
                        <div className='text-center  yours pt-5'>
                                <h5>Streamline Your Marketing Chaos into Strategic Action
                                Say goodbye to s</h5>
                                <form action="" className='call'>
                                
                                <button className='w-75'>diccover success stories</button>
                            </form>
                            </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='ios text-center'>
                            <img src="https://metadata.io/wp-content/uploads/2024/05/logo-white-Maxio-new.svg" alt="" className='img-fluid'/><br />
                            <img src="https://metadata.io/wp-content/themes/metadata/assets/images/metadata_logo.svg" alt="" className='w-25'/>
                        </div>
                        <div className='text-center  yours pt-5'>
                                <h5>Streamline Your Marketing Chaos into Strategic Action
                                Say goodbye to s</h5>
                                <form action="" className='call'>
                                
                                <button className='w-75'>diccover success stories</button>
                            </form>
                            </div>
                    </div>
                </div>
            </div>

        </section>

        <section className='container-fluid mt-5 animate__animated animate__fadeInUp' id='for'>
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
        <Footer/>


       


      
    </div>
  )
}
