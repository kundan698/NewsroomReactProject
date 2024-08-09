import React from 'react'
import Header from './Header'
import Carousel1 from '../CarouselComponent/Carousel1'
import Responsive from '../CarouselComponent/Carousel1'
import { FaCircleCheck } from "react-icons/fa6";
import 'animate.css';



import Footer from './Footer';
import AutoPlay from '../CarouselComponent/Carousel7';
import Modal1 from '../Modal/Modal1';


export default function Home() {
    
  return (
    <div>
        <Header/>

        <section className='container-fluid animate__animated animate__fadeInUp' id='clr'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className='ditch'>
                            <h1 className=''>Ditch the <br /> Agency, Get a <br /> <span className='part'>Partner</span></h1>
                            <p>Partner directly with Metadata’s skilled marketers. We’re more than slick slides. We’re strategic partners, using data-driven insights to ensure your campaigns are effective, not wasteful. With Metadata, you’ll have everything you need to generate pipeline at economies of scale. Take advantage of our flat pricing and never waste another dollar on your negative ROI campaigns. Let’s get started!</p>
                            <form action="" className='call'>
                                <input type="text"  placeholder='Your business email.'/>
                                <button>book intro call</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2024/05/Hero-Services-Page.png" alt="" className='img-fluid'/>
                        </div>
                       
                    </div>
                </div>
            </div>

        </section>
        <Modal1/>

        <section className='container-fluid p-0 mt-5' id='more'>
            <h3 className='text-center text-white p-4'>Helping demand gen marketers work more efficiently</h3>

          <Responsive/>






        </section>
        <section className='container-fluid animate__animated animate__fadeInUp'>
            <div className="container" id='maroon'>
                <div className="row">
                    <div className="col-lg-2">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Jacob-Warren.png" alt="" className='img-fluid'/>
                            <div className='text-white text-center'>
                                <h5>Jacob Varren</h5>
                                <p>VP Marketing, Waratek</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className='text-white pt-3 line'>
                            <h5>“Using Metadata is like having a team of high-quality performance marketers <br /> that would easily cost you $200,000/year each to hire yourself.  Metadata has <br /> proven critical for achieving scale with paid ads and is now THE essential line <br /> item in my marketing budget.”</h5>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section className='container-fluid mt-5 p-3 animate__animated animate__fadeInUp'>
            <div className="container">
                <div className='text-center'>
                   
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='pt-3 al'>
                            <h1>All inclusive <br /> Platform <br /> Integration & Setup</h1>
                            <p>We’ll seamlessly integrate our inclusive advertising platform including DemandHub, MetaMatch audiences and Spotlight into your tech stack together with our deep funnel reporting capabilities. With proper attribution setup and CRM linkage, we enable comprehensive tracking of ad performance to revenue. This approach enhances campaign analysis across the sales funnel, ensuring efficient and effective marketing strategies.</p>
                            <form action="" className='call'>
                                <input type="text"  placeholder='Your business email.'/>
                                <button>book intro call</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='mt-5'>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Platform-Integration-and-Setup-Banner.svg" alt="" className='img-fluid mt-3'/>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid mt-5 animate__animated animate__fadeInUp'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                       
                           <div className='imgsa'>
                           <img src="https://metadata.io/wp-content/uploads/2024/05/Comprehensive-Marketing-Audit-Banner-v2.svg" alt="" className=''/>
                           </div>
                       
                    </div>
                    <div className="col-lg-6">
                        <div className='al'>
                            <h1>Comprehensive Marketing Audit</h1>
                            <p>We’ll review your overall marketing strategy, align it with your business goals, and identify high and low-performing channels. Our collaboration aims to pinpoint areas for improvement throughout the buyer’s journey.</p>
                            <form action="" className='call'>
                                <input type="text"  placeholder='Your business email.'/>
                                <button>book intro call</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section className='container-fluid mt-5 p-3 animate__animated animate__fadeInUp'>
            <div className="container">
                <div className='text-center'>
                   
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className='pt-3 al'>
                            <h1>Action Plan</h1>
                            <p>Together, we’ll devise a focused advertising plan that leverages Metadata’s powerful automation and budget management capabilities. This includes setting precise performance benchmarks, optimizing budget allocations across campaigns, and pinpointing target audiences to effectively meet your marketing goals.</p>
                            <form action="" className='call'>
                                <input type="text"  placeholder='Your business email.'/>
                                <button>book intro call</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className='mt-5'>
                            <img src="https://metadata.io/wp-content/uploads/2024/05/Action-Plan-Banner.svg" alt="" className='img-fluid'/>
                        </div>
                    </div>
                </div>
            </div>

        </section>

        <section className='container-fluid mt-5 p-3 animate__animated animate__fadeInUp'>
            <div className="container">
                <div className='text-center'>
                   
                </div>
                <div className="row">
                    <div className="col-lg-6">
                    <div className='mt-5'>
                            <img src="https://metadata.io/wp-content/uploads/2024/05/Ongoing-Management-Section-Banner-v2-1536x928.png" alt="" className='img-fluid'/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                       

                        <div className='pt-3 al'>
                            <h1>Ongoing Management</h1>
                            <p>Once your advertising strategy is set, our team leverages Metadata’s powerful platform to efficiently manage your campaigns. We take care of everything from copywriting and creative assets to campaign setup and monitoring. Our ongoing strategy refinement enhances ad performance and drives revenue, all while saving you valuable time.</p>
                            <form action="" className='call'>
                                <input type="text"  placeholder='Your business email.'/>
                                <button>book intro call</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid animate__animated animate__fadeInUp'>
            <div className="container" id='maroon'>
                <div className="row">
                    <div className="col-lg-2">
                        <div>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Lorna-Scudder.png" alt="" className='img-fluid '/>
                            <div className='text-white text-center'>
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

        </section>
        <section className='container-fluid mt-5 meta'>
            <div className="container">
                <div className='text-center can'>
                    <h1>What Metadata Can Do</h1>
                </div>
                <div className="row">
                    <div className="col-lg-4 ">
                        <div className='text-center  p-5 ht'>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Icon-Campaign.svg" alt="" />
                            <h3>Create, Launch, and Manage Digital Ads</h3>
                            <p>Our platform can easily launch ads across LinkedIn, Facebook, Instagram, and Google Search, and our team can support other advertising channels such as Reddit, Quora, X, TikTok, and more that can bring strong results and help you repurpose content for best results. With our team focusing on the operational work to execute campaigns, your team can focus on building the strategy and finding new opportunities by collaborating with our marketing experts.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='text-center  p-5 ht'>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Icon-Capacity.svg" alt="" />
                            <h3>Total Creative Support</h3>
                           <p>Getting everything needed to launch an ad campaign takes a lot of time if your team has to handle every element. Once we understand your creative guidelines, we can develop the advertising assets, coordinate the copywriting, and create the relevant lead gen forms or landing pages. All creative and variations come standard with the service package.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='text-center  p-5 ht'>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Icon-Product-Information.svg" alt="" />
                            <h3>Campaign Optimization</h3>
                            <p>With our team monitoring campaigns and our platform automatically reallocating budget towards ads that are performing, we can continue iterating on successful ad strategies and avoid investing in campaigns that don’t bring the desired results.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='text-center  p-5 ht'>
                            <img src="https://metadata.io/wp-content/uploads/2024/06/icon-Improved-ROI.svg" alt="" />
                            <h3>Revenue Operations Support</h3>
                            <p>Even the flashiest campaigns won’t hit their mark if your ops game has leaks. That’s where our revenue operations services come in—smoothing out the handoff from marketing to sales and pinpointing any pipeline clogs.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='text-center  p-5 ht'>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Icon-Sponsorship-Level.svg" alt="" />
                            <h3>Channel Refinement</h3>
                            <p>As we deploy more and more ads with unique audiences across the advertising channels, we can start to see which channels perform best for revenue results and optimize the channel distribution to the places we see the most success.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                    <div className='text-center  p-5 ht mt-'>
                            <img src="https://metadata.io/wp-content/uploads/2024/07/Icon-Analytics-and-Attribution.svg" alt="" />
                            <h3>Detailed and Customizable Reports</h3>
                            <p>Finding which ad or audiences worked takes time. Our reporting rounds up all of your data across ad channels so you can easily see which ads, audiences and offers are performing the best.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section className='container-fluid animate__animated animate__fadeInUp' id='maroons'>
            <div className="container">
                <div className="row text-center">
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

                <div className="row gy-4 text-center row-cols-lg-3 row-cols">

                    <div className="col-lg-4 mt-4">
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
                    <div className="col-lg-4 mt-4">
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
                    <div className="col-lg-4 mt-4">
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
            <div className="row mt-5 gy-4  text-center row-cols-lg-10 row-cols">
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
