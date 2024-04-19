import React from 'react'
import { Link } from 'react-router-dom'
import About from "../../assets/img/bg/an-img-02.png"
import About1 from "../../assets/img/features/about_img_02.png"
import About2 from "../../assets/img/features/about_img_03.png"
import About3 from "../../assets/img/features/signature.png"

function Most() {
  return (
    <>
        <section className="about-area about-p pt-120 pb-120 p-relative fix">
                <div className="animations-02"><img src={About} alt="contact-bg-an-02"/></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="s-about-img p-relative  wow fadeInLeft animated" data-animation="fadeInLeft" data-delay=".4s">
                            <img src="https://mediacity.co.in/riorelax/static/media/about_img_02.7e903ba6dfa05e8fba95.png" alt="img"/>
                                <div className="about-icon">
                                <img src="https://mediacity.co.in/riorelax/static/media/about_img_03.1c5c297b3a2fd0ad6b03.png" alt="img"/>  
                                </div>
                            </div>
                        </div>
					    <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="about-content s-about-content  wow fadeInRight  animated pl-30" data-animation="fadeInRight" data-delay=".4s">
                                <div className="about-title second-title pb-25">  
                                    <h5>About Us</h5>
                                    <h2>The magnificent HB Safari Lodge</h2>                                   
                                </div>
                                   <p>Enjoy the finest views in Africa, overlooking Lake Albert and the Blue Mountains in the Democratic Republic of Congo to the West, and Tilenga Central Processing Facility to the East. </p>
                                  
                                    <div className="about-content3 mt-30">
                                    <div className="row justify-content-center align-items-center">
                                    <div className="col-md-12">
                                        <ul className="green mb-30">                                              
                                            <li> 24 Month / 24,000km Nationwide Warranty monotone</li>
                                            <li> Curabitur dapibus nisl a urna congue, in pharetra urna accumsan.</li>     
                                            <li> Customer Rewards Program and excellent technology</li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="slider-btn">                                          
                                            <Link to="/about" className="btn ss-btn smoth-scroll">Discover More</Link>				
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <div className="signature">
                                            <img src={About3} alt="img"/>                                             
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Most