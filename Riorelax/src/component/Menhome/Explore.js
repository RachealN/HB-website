import React from 'react'
import { Link } from 'react-router-dom'
import Hotel from "../../assets/img/bg/an-img-01.png"
import Hotel1 from "../../assets/img/icon/fe-icon01.png"
import Hotel2 from "../../assets/img/icon/fe-icon04.png"
import Hotel3 from "../../assets/img/icon/fe-icon05.png"
import Hotel4 from "../../assets/img/icon/fe-icon06.png"
import Hotel5 from "../../assets/img/icon/fe-icon07.png"
import Hotel6 from "../../assets/img/icon/fe-icon08.png"

function Explore() {
  return (
    <>
        <section id="service-details2" className="pt-120 pb-90 p-relative" style={{background: "#f7f5f1"}}>
                <div className="animations-01"><img src={Hotel} alt="an-img-01"/></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title center-align mb-50 text-center">
                                <h5>Explore</h5>
                                <h2>
                                    The Bar and Restaurant
                                </h2>
                                <p>Our Restaurant has got  enough space for casual dining with family and friends. Our experienced chefs prepare contemporary continental as well as local cuisine featuring a wide variety of creative dishes. Both Breakfast and Lunch Buffet.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                       <img src={Hotel1} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src={Hotel1} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details"> Quality Room</Link></h3>
                                        <p>We will have information about each specific suite here</p>
                                        <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-md-6">                                  
                                <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src={Hotel2} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                   <img src={Hotel2} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details">Swimming Pool</Link></h3>
                                       <p>"Dive into relaxation at our refreshing pool!"</p>
                                         <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src={Hotel3} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src={Hotel3} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details">Best Accommodation</Link></h3>
                                        <p>Experience the best in accommodation with our comfortable and inviting rooms, designed to make your stay unforgettable.</p>
                                         <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                         <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                     <div className="services-icon2">
                                       <img src={Hotel4} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src={Hotel4} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details"> Wellness & Spa</Link></h3>
                                        <p>
"Indulge in relaxation and rejuvenation at our wellness spa, where expert therapists and serene surroundings combine to create a blissful retreat</p>
                                        <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                              <div className="col-lg-4 col-md-6">
                               <div className="services-08-item mb-30">
                                   <div className="services-icon2">
                                       <img src={Hotel5} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                   <img src={Hotel5} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details">Restaurants & Bars</Link></h3>
                                       <p>Drink and relax at our state of the art bar.</p>
                                         <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                             <div className="col-lg-4 col-md-6">
                                <div className="services-08-item mb-30">
                                    <div className="services-icon2">
                                       <img src={Hotel6} alt="img"/>
                                    </div>
                                    <div className="services-08-thumb">
                                     <img src={Hotel6} alt="img"/>
                                    </div>
                                    <div className="services-08-content">
                                        <h3><Link to="/service-details">Special Offers</Link></h3>
                                        <p>"Check out our exclusive deals and discounts!"</p>
                                         <Link to="/service-details">Read More <i className="fal fa-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Explore