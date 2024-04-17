import React from 'react'
import BGTest from "../../assets/img/bg/testimonial-bg.png";
import avatar1 from "../../assets/img/testimonial/testi_avatar.png"
import avatar2 from "../../assets/img/testimonial/testi_avatar_02.png" 
import avatar3 from "../../assets/img/testimonial/testi_avatar_03.png"
import Aicon from "../../assets/img/testimonial/qt-icon.png"
import Aicon1 from "../../assets/img/testimonial/review-icon.png"
import Slider from "react-slick"

function Testimonial() {

    const testimonial = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]}

  return (
    <>
        <section className="testimonial-area pt-120 pb-90 p-relative fix" style={{backgroundImage: `url(${BGTest})`, background_size: "cover"}} >
                <div className="container">
                    <div className="row">
                         <div className="col-lg-12">
                            <div className="section-title center-align mb-50 text-center">
                                <h5>Testimonial</h5>
                                <h2>What Our Clients Says</h2>
                                <p>
"We had an unforgettable weekend at this wonderful lodge! The ambiance was simply superb: cozy rooms, stunning views of nature, and excellent service!"</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <Slider className="testimonial-active" {...testimonial}>
                                <div className="single-testimonial">
                                     <div className="testi-author">
                                        <img src={avatar1} alt="img"/>
                                        <div className="ta-info">
                                            <h6>Nilson</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                    <div className="review-icon">
                                        <img src={Aicon1} alt="img"/>
                                     </div>
                                    <p>“
"We had an unforgettable weekend at this wonderful lodge! The ambiance was simply superb: cozy rooms, stunning views of nature, and excellent service”.</p>
                                    
                                    <div className="qt-img">
                                    <img src={Aicon} alt="img"/>
                                    </div>
                                </div>
                                <div className="single-testimonial">
                                        <div className="testi-author">
                                            <img src={avatar2} alt="img"/>
                                            <div className="ta-info">
                                                <h6>ANDY</h6>
                                                <span>Client</span>
                                            </div>
                                        </div>
                                    <div className="review-icon">
                                            <img src={Aicon1} alt="img"/>
                                        </div>
                                        <p>“The staff was very friendly and attentive, always ready to help. I will definitely be back here again!”.</p>
                                        
                                        <div className="qt-img">
                                        <img src={Aicon} alt="img"/>
                                        </div>
                                    </div>
                                <div className="single-testimonial">
                                        <div className="testi-author">
                                            <img src={avatar3} alt="img"/>
                                            <div className="ta-info">
                                                <h6>ROSE</h6>
                                                <span>Client</span>
                                            </div>
                                        </div>
                                        <div className="review-icon">
                                            <img src={Aicon1} alt="img"/>
                                        </div>
                                        <p>“The staff was very friendly and attentive, always ready to help. I will definitely be back here again!”.</p>
                                        
                                        <div className="qt-img">
                                        <img src={Aicon} alt="img"/>
                                        </div>
                                    </div>
                                <div className="single-testimonial">
                                     <div className="testi-author">
                                        <img src={avatar2} alt="img"/>
                                        <div className="ta-info">
                                            <h6>RACHEAL</h6>
                                            <span>Client</span>
                                        </div>
                                    </div>
                                   <div className="review-icon">
                                        <img src={Aicon1} alt="img"/>
                                     </div>
                                      <p>“The staff was very friendly and attentive, always ready to help. I will definitely be back here again!”.</p>
                                    
                                    <div className="qt-img">
                                    <img src={Aicon} alt="img"/>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Testimonial