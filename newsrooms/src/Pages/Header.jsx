import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal1 from '../Modal/Modal1'
import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Header() {
    const notify = () => toast.success("Login Successfull..!");
    let [change,set]=useState(false)
    let func=()=>{
        set(!change)
    }
   
    
    
    
    // --------------add active class-on another-page move----------
    
    
    
  return (
         
         
         <>
        {/* modal */}
       
        {/* modal */}
       
        
          <div className="container-fluid" id='main'>
          <div className='container'>
         <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <Link to={'/Meta-iologo'} class="navbar-brand" ><img src="https://metadata.io/wp-content/themes/metadata/assets/images/metadata_logo.svg" alt="" /></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" id='uldata'>
        <li class="nav-item">
          <Link to={'/'} class="nav-link active" aria-current="page">managed services</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#">products
          <div className="megamenu">
           <div>
           <div className="row">
                <div className="col-lg-4">
                    <div className='prd'>
                        <h5>Products</h5>
                       
                    </div>
                    <div className="row">
                           <Link to={'/Demand-hub'} className='d-flex text-decoration-none'>
                           <div className="col-lg-2" id='io'>
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-Base-Platform.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Demand Hub</h5>
                                <p>Automate your paid campaigns <br /> and driv</p>
                            </div>
                           
                           
                           </Link>
                             
                             <Link to={'/metamatch'} className='d-flex text-decoration-none'>
                             <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-Audience-Targeting-1.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>MetaMatch</h5>
                                <p>Create advertising audiences using 10+ data sources</p>
                            </div>
                             
                             </Link>
                           <Link to={'/Spotlight'} className='d-flex text-decoration-none'>

                           <div className="col-lg-2 ">
                                <img src="https://metadata.io/wp-content/uploads/2024/05/menu-icon-Spotlight.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>SpotLIght</h5>
                                <p>Optimize customer engagement with <br /> Metadata Spotlight</p>
                            </div>
                            
                           
                           </Link>
                        </div>
                </div>
                <div className="col-lg-4">
                    <div className='fer'>

                        <h5>Features</h5>
                        
                       
                    </div>
                    <div className="row">
                           <Link to={'/Revenue-optimization'} className='d-flex text-decoration-none'>
                           <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-Revenue-Optimization.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Revenue Optimization</h5>
                                <p>Optimize your capagion revenue <br /> and driv</p>
                            </div>
                           </Link>
                            <Link to={'/Audience-Targeting'} className='d-flex text-decoration-none'>
                            <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-Audience-Targeting.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Audience Targeting</h5>
                                <p>Increase your Audience match rates</p>
                            </div>
                            
                            </Link>
                           <Link to={'/Marketing-automation'} className='d-flex text-decoration-none'>
                           <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-Campaign-Automation.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Marketing Automation</h5>
                                <p>Spend less time launching Campagions</p>
                            </div>
                           </Link>

                            <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-Campaign-Experimentation.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Demand Hub</h5>
                                <p>Automate your paid campaigns <br /> and driv</p>
                            </div>
                            <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-Lead-Enrichment.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Demand Hub</h5>
                                <p>Automate your paid campaigns <br /> and driv</p>
                            </div>
                            
                        </div>
                </div>
                <div className="col-lg-4">
                    <div id='the'>
                        <h5>the real roy of metadata</h5>
                        <img src="https://metadata.io/wp-content/uploads/2022/10/ROI-page-hero-graphic.svg" alt="" className='img-fluid'/>
                    </div>
                    
                </div>
            </div>
           </div>
          </div>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           by role
           
          </a>
          
        </li>
        <li class="nav-item ">
          <a class="nav-link " aria-disabled="true">pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" aria-disabled="true">resources
          <div className="megamenu1">
           <div>
           <div className="row">
                <div className="col-lg-4">
                    <div className='prd'>
                        <h5>Products</h5>
                       
                    </div>
                    <div className="row">
                            <div className="col-lg-2" id='io'>
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-Resource-Library.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Demand Hub</h5>
                                <p>Automate your paid campaigns <br /> and driv</p>
                            </div>
                            <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2024/05/menu-icon-ad-data-hub-v2.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Demand Hub</h5>
                                <p>Automate your paid campaigns <br /> and driv</p>
                            </div>
                            <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2024/05/menu-icon-Spotlight.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Demand Hub</h5>
                                <p>Automate your paid campaigns <br /> and driv</p>
                            </div>

                            <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-Case-Studies.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Demand Hub</h5>
                                <p>Automate your paid campaigns <br /> and driv</p>
                            </div>
                            <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-Blog.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Demand Hub</h5>
                                <p>Automate your paid campaigns <br /> and driv</p>
                            </div>
                            
                        </div>
                </div>
                <div className="col-lg-4">
                    <div className='fer'>

                        <h5>Features</h5>
                        
                       
                    </div>
                    <div className="row">
                            <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-Resource-Library.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Demand Hub</h5>
                                <p>Automate your paid campaigns <br /> and driv</p>
                            </div>
                            <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-Audience-Targeting.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Demand Hub</h5>
                                <p>Automate your paid campaigns <br /> and driv</p>
                            </div>
                            <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-DEMAND.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Demand Hub</h5>
                                <p>Automate your paid campaigns <br /> and driv</p>
                            </div>

                            <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2023/01/menu-icon-DEMAND-Communit.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Demand Hub</h5>
                                <p>Automate your paid campaigns <br /> and driv</p>
                            </div>
                            <div className="col-lg-2">
                                <img src="https://metadata.io/wp-content/uploads/2023/10/menu-icon-Masterclass.svg" alt="" className='im'/>
                            </div>
                            <div className="col-lg-10" id='dmd'>
                                <h5 className=''>Demand Hub</h5>
                                <p>Automate your paid campaigns <br /> and driv</p>
                            </div>
                            
                        </div>
                </div>
               {/*  <div className="col-lg-4">
                    <div id='the'>
                        <h5>the real roy of metadata</h5>
                        <img src="https://metadata.io/wp-content/uploads/2022/10/ROI-page-hero-graphic.svg" alt="" className='img-fluid'/>
                    </div>
                    
                </div> */}
            </div>
           </div>
          </div>
          </a>
          
        </li>
      </ul>
      <form class="d-flex gap-3" role="search">
        
     
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
 Sign In
</button>


<div class="modal fade bg-primary" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5 text-center text-success" id="staticBackdropLabel">Login</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div className='text-center p-3'>
     
      <form action="" id='FormDetails' className='m-3'>
        <p>Use a single field on your forms so you can drive more conversions. Automatically enrich new leads from your campaigns with verified business data.</p>
       
        <input type="text" placeholder='Enter Your Name...?'/>
       
        <input type="text" placeholder='Enter Your Email or Phone number..?'/>
       
        <input type="text" placeholder='Enter Your Password...?'/> <br />
        <button className='submits'onClick={notify}>Book an Intro</button>
      </form>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn " data-bs-dismiss="modal"  onClick={notify}>Sign Up?</button>
        <button type="button" class="btn decoration-underline">Forgot Password</button>
      </div>
    </div>
  </div>
</div>
       <Link to={'/Book-an-intro'}>
       <button class="btn " type="submit" id='btn2'>book an intro</button>
       </Link>
      </form>
    </div>
  </div>
  <ToastContainer />
</nav>

         </div>
          </div>

         </>
     
  )
}
