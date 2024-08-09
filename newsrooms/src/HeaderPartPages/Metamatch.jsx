import React, { useState } from 'react'
import Header from '../Pages/Header'
import Carousel8 from '../CarouselComponent/Carousel8'
import { questions } from '../Faq/Faq'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import Responsive from '../CarouselComponent/Carousel1'
import { FaCircleCheck } from "react-icons/fa6";
import AutoPlay from '../CarouselComponent/Carousel7';
import Footer from '../Pages/Footer';
import 'animate.css';


export default function Metamatch() {
    let[gets,sets]=useState(questions[0].id)

    let faqItem = questions.map((element,index)=>{
        return(
            <div className='border '>
               
            <h5 className='bg-danger p-3 m-0' onClick={()=>sets(element.id)}>{element.question} {element.id==gets ? <CiCircleMinus />:<CiCirclePlus />  }
            
            </h5>

        
        <div className={`p-2 ans ${element.id==gets ? '' : ''}`}>
           {element.answer}
        </div>
        </div>
        )
    })
  return (
    <div>
        <Header/>

        <section className='container-fluid mt-5 p-4 animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='b2b'>
                            <h5>metamatch</h5>
                            <h1>B2B Targeting <br /> Across Ad <br /> Channels</h1>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='search'>
                            <h1>Reach <span className='mil'>3 Million Buyers</span> with your Free Trial!</h1>
                            <form action="" className='call'>
                                <input type="text"  placeholder='Your business email.'/>
                                <button>book intro call</button>
                                
                            </form>
                            <div>
                                <input type="checkbox" />
                                <p>’ve read, understood, and accepted the Terms of Use and <span className='b2bs'>Privacy Policy</span>.*</p>
                                <p className='text-center'>Already have an account? <span className='b2bs'>Sign In</span></p>
                            </div>

                            <div className='d-flex gap-3'>
                                <img src="https://metadata.io/wp-content/uploads/2024/01/icon-credit-card.svg" alt="" />
                                   <h5><span className='b2bs'>No credit card</span> required
                                   <p>*Free trial includes 3 Metamatch audiences in a 30 day period</p>
                                   </h5>
                                   
                            </div>
                           
                            

                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section className='container-fluid mt-5 p-4 animate__animated animate__fadeInUp'>
            <div className="container">
                <div className='text-center p-4 love'>
                    <h1>Why do B2B Marketers love <br /> MetaMatch?</h1>

                    <div className="row">
                        <div className="col-lg-4">
                            <div className='text-center p-4 bg-white rounded'>
                                <img src="https://metadata.io/wp-content/uploads/2024/01/logo-fb-instagram-x.svg" alt="" />
                                <h4 className='p-3'>Finding B2B Buyers on <br /> B2C - Instagram, <br /> Facebook, X</h4>
                               
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className='text-center p-4 bg-white rounded'>
                                <img src="https://metadata.io/wp-content/uploads/2024/01/logo-LinkedIn.svg" alt="" />
                                <h4 className='p-3'>Using Technographic and Intent Signals on LinkedIn</h4>
                               
                            </div>
                        </div>
                       
                        <div className="col-lg-4">
                        <div className='text-center p-4 bg-white rounded'>
                                <img src="https://metadata.io/wp-content/uploads/2024/01/logo-google-ads.svg" alt="" />
                                <h4 className='p-3'>Finding B2B Buyers on <br /> B2C - Instagram, <br /> Facebook, X</h4>
                               
                            </div>
                        </div>
                        <form action="" className='call pt-3'>
                               
                                <button>start free trial</button>
                                
                            </form>
                       
                    </div>
                </div>
                
                
            </div>

        </section>
        <section className='container-fluid animate__animated animate__fadeInUp'>
            <div className="container">
            <div className="row">
                    <div className="col-lg-4">
                        <div className='basic mt-2'>
                            <div className='d-flex justify-content-between p-2 mn'>
                               <div className='mns'>
                               <h5 className='pt-3'>MONTHLY</h5>
                               </div>
                               <div className='pt-3'><h5>ANNUALLY</h5></div>
                              
                            </div>
                           <div className='text-center'>
                           <h5 className='text-center p-4 bee'>BASIC</h5>
                            <p className='text-center'>3 audiences / month</p>
                            <p>
                              $ <span className='ces'>295</span>/Month
                            </p>
                           </div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='basic mt-2'>
                        <div className='rnd'>
                                <h5 className='text-center text-white'>Best Value</h5>
                                </div>
                            <div className='d-flex justify-content-between p-2 mn'>
                               <div className='mns'>
                               
                               <h5 className='pt-3'>MONTHLY</h5>
                               </div>
                               <div className='pt-3'><h5>ANNUALLY</h5></div>
                              
                            </div>
                           <div className='text-center'>
                           <h5 className='text-center p-4 bee'>Advanced</h5>
                            <p className='text-center'>6 audiences / month</p>
                            <p>
                              $ <span className='ces'>495</span>/Month
                            </p>
                           </div>

                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='basic mt-2'>
                            <div className='d-flex justify-content-between p-2 mn'>
                               <div className='mns'>
                               <h5 className='pt-3'>MONTHLY</h5>
                               </div>
                               <div className='pt-3'><h5>ANNUALLY</h5></div>
                              
                            </div>
                           <div className='text-center'>
                           <h5 className='text-center p-4 bee'>Pro</h5>
                            <p className='text-center'>9 audiences / month</p>
                            <p>
                              $ <span className='ces'>25</span>/Month
                            </p>
                           </div>

                        </div>
                    </div>
                   
                </div>
            </div>

        </section>

        <section className='container-fluid animate__animated animate__fadeInUp'>
            <div className="container" id='maroon'>
              <Carousel8/>
            </div>

        </section>

        <section className='container-fluid mt-5 animate__animated animate__fadeInUp'>
            <div className="container">
                <div className='by'>
                    <h4>Trusted by:</h4>
                
                <div className="row">
                    <div className="col-lg-3">
                        <img src="https://metadata.io/wp-content/uploads/2024/01/logo-Cognism.svg" alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img src="https://metadata.io/wp-content/uploads/2024/01/logo-syndio.svg" alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img src="https://metadata.io/wp-content/uploads/2024/01/logo-zingtree.svg" alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img src="https://metadata.io/wp-content/uploads/2024/01/logo-scratchpad.svg" alt="" />
                    </div>
                    </div>
                </div>
            </div>

        </section>
         <section className='container-fluid mt-5 p-3 animate__animated animate__fadeInUp'>
            <div className="container">
                <h1 className='p-4'>Frequently Asked Questions</h1>
                
                   
                <div className="row">
                    <div className="col-lg-4">
                        <div className='text-center p-3 bg-light rounded-2'>
                            <h5>How does the free trial work?</h5>
                            <p>Our free trial offers 30 days of full access to the software, allowing you to create up to 3 custom audiences. Each audience can be used across multiple channels and include up to 1 million target prospects.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='text-center p-3 bg-light rounded-2'>
                            <h5>What happens after the free trial ends?</h5>
                            <p>You'll need to enter your payment details to choose the plan that best suits your needs. We accept both credit card and ACH payments. Note that ACH is available only for annual plans.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='text-center p-3 bg-light rounded-2'>
                            <h5>How do custom audiences work?</h5>
                            <p>Custom audiences are groups of prospects that can be targeted for ads on various channels. Any audience you create on MetaMatch will automatically sync with all your integrated channels.</p>
                        </div>

                    </div>
                    <div className="col-lg-4 mt-3">
                    <div className='text-center p-3 bg-light rounded-2'>
                            <h5>Why should I integrate my channels with MetaMatch?</h5>
                            <p>At least one channel integration is required to use MetaMatch audiences. This eliminates the need to download files, ensuring compliance with GDPR and privacy laws. Once integrated, any audience you create will automatically be available for campaigns in those channels. Syncing with Meta, X, and GDN takes up to 24 hours, and LinkedIn may take up to 48 hours.</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-4 mt-3">
                    <div className='text-center p-3 bg-light rounded-2'>
                            <h5>Why should I integrate my CRM and marketing automation with MetaMatch?</h5>
                            <p>These integrations enable you to create dynamic audiences, perfect for complex strategies like ABM or demand generation funnels. This integration allows you to target both known contacts and new prospects within target accounts.</p>
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
        <Footer/>
    </div>
  )
}
