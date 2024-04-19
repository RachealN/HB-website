import React from 'react'
import { Link } from 'react-router-dom'
import Hotel from "../../assets/img/bg/an-img-01.png"
import pricing1 from "../../assets/img/bg/an-img-02.png"

function Prices() {
  return (
    <>
        <section id="pricing" className="pricing-area pt-120 pb-60 fix p-relative">
                <div className="animations-01"><img src={Hotel} alt="an-img-01"/></div>
                <div className="animations-02"><img src={pricing1} alt="contact-bg-an-01"/></div>
                <div className="container"> 
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="section-title mb-20">
                                <h5>Safari Tour</h5>
                                <h2>Popular Destinations</h2>                               
                            </div>
                            <p>"Explore the untamed beauty of our game reserve, where majestic wildlife roams free and breathtaking landscapes await your discovery. Embark on an unforgettable safari adventure and witness nature's wonders up close in this popular destination."</p>
                            <p>"Journey to our renowned game reserve, a haven for wildlife enthusiasts and nature lovers alike. Immerse yourself in the sights and sounds of the African wilderness as you encounter iconic species such as lions, elephants, and giraffes. With luxurious accommodations and thrilling safari experiences, it's no wonder our reserve is a top choice for travelers seeking an authentic African safari."</p>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-box pricing-box2 mb-60">
                                <div className="pricing-head">  
                                    <h3>Murchision Park</h3>    
                                    <p>Perfect for early-stage startups</p>
                                    <div className="month">Monthly</div>
                                    <div className="price-count">
                                        <h2>$39.99</h2>
                                    </div> 
                                    <hr/>
                                </div>
                                <div className="pricing-body mt-20 mb-30 text-left">
                                    <ul>
                                        <li>Hotel quis justo at lorem</li>
                                        <li>Park drive</li>
                                        <li>Game Drive</li>                                           
                                    </ul>
                                </div>  
                                <div className="pricing-btn">
                                    <Link to="/contact" className="btn ss-btn">Get Started <i className="fal fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                         <div className="col-lg-4 col-md-6">
                            <div className="pricing-box pricing-box2 mb-60">
                                <div className="pricing-head">  
                                    <h3>Mount Elgon National Park</h3>    
                                    <p>Perfect for early-stage startups</p>
                                    <div className="month">Monthly</div>
                                    <div className="price-count">
                                        <h2>$59.99</h2>
                                    </div> 
                                    <hr/>
                                </div>
                                <div className="pricing-body mt-20 mb-30 text-left">
                                    <ul>
                                        <li>Hotel quis justo at lorem</li>
                                        <li>Pak drive</li>
                                        <li>Game watching</li> 
                                    </ul>
                                </div> 
                                <div className="pricing-btn">
                                    <Link to="/contact" className="btn ss-btn">Get Started <i className="fal fa-angle-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Prices