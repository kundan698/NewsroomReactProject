import React from 'react'
import 'animate.css';

export default function Footer() {
  return (
    <div>
        <section className='container-fluid' id='foot'>
        <div className="container" id='foot1'>
            <div className="row  row-cols-lg-5 row-cols">
                <div className="col-lg-3">
                    <div className='text-white'>
                      <img src="https://metadata.io/wp-content/uploads/2023/01/Metadata-logo-dark.svg" alt="" className='img-fluid'/>
                      <p>The No-BS Marketing OS.</p>
                      <form action="" className='call'>
                                
                                <button>book intro call</button>
                            </form>
                    </div>
                </div>
                <div className="col-lg-2 hub">
                    <div className='text-white'>
                        <h5>Products</h5>
                        <p>Demand Hub</p>
                        <p>Metamatch</p>
                        <p>Spotlight</p>
                        <p>Pricing</p>
                        <p>Services</p>
                        <p>Integrations</p>

                        <h5>Resources Library</h5>
                        <p>Blog</p>
                        <p>Demand Gen U</p>
                        <p>Demand</p>
                        <p>Demand Community</p>
                        <p>PlayBooks</p>
                        <p>Meta vs.6sense</p>
                    </div>
                </div>

                <div className="col-lg-2 hub">
                    <div className='text-white'>
                        <h5>Features</h5>
                        <p>Audience targeting</p>
                        <p>Compagion Experementation</p>
                        <p>Lead inreachment</p>
                        <p>Revenue Optimization</p>
                        <p>Web Personalization</p>
                        <br />
                        <h5>Trust</h5>
                        <p>Trust & Compliance</p>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>Dont, sell my personal info..</p>
                        
                    </div>
                </div>
                <div className="col-lg-2 hub">
                    <div className='text-white'>
                        <h5>By Role</h5>
                        <p>Demand Gen</p>
                        <p>Marketing Leader</p>
                        <p>Finance</p>
                        <p>Pricing</p>
                        <br />

                        <h5>Contact</h5>
                        <p> Help Center</p>
                        <p>support@metaio.com</p>
                        <p>slaes@metadata.io</p>
                        <p>+160567-345</p>
                        <p>Toll free(US Only)-18004567</p>
                       
                    </div>
                </div>
                <div className="col-lg-2 hub">
                    <div className='text-white'>
                        <h5>Company</h5>
                        <p>About </p>
                        <p>Career</p>
                        <p>Partner</p>
                        
                    </div>
                </div>
            </div>
        </div>

            <p className='text-center p-4 text-white'>© Copyright 2024 Metadata. All rights reserved.</p>

       </section>
    </div>
  )
}
