import { Link } from 'react-router-dom'
import React , { useState } from 'react'
import BGImg from "../../assets/img/slider/slider_bg.png";


function Sliderthree() {

  const [yShow, setyShow] = useState()
  const [hShow, sethShow] = useState()


  return (
    <>
      <section id="home" className="slider-area fix p-relative">
        <div className="slider-active" style={{ background: "#101010" }}>
          <div className="single-slider slider-bg d-flex align-items-center" style={{ background: `url(${BGImg})`, background_size: "cover" }}>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-xl-7 col-lg-12 col-md-12">
                  <div className="slider-content s-slider-content text-center">
                    <h2 data-animation="fadeInUp" data-delay=".4s">Enjoy A Luxuary Experience</h2>
                    <p data-animation="fadeInUp" data-delay=".6s">Donec vitae libero non enim placerat eleifend aliquam erat volutpat. Curabitur diam ex, dapibus purus sapien, cursus sed nisl tristique, commodo gravida lectus non.</p>

                    <div className="slider-btn mt-30 mb-105">
                      <Link to="/contact" className="btn ss-btn active mr-15" data-animation="fadeInLeft" data-delay=".4s">Discover More </Link>
                      <Link to="#" onClick={() => sethShow(true)} className="video-i popup-video" data-animation="fadeInUp" data-delay=".8s" style={{ animation_delay: "0.8s" }} tabIndex="0"><i className="fas fa-play"></i> Intro Video</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="booking" className="booking-area p-relative">
        <div className="container">
          <form action="#" className="contact-form" >
            <div className="row align-items-center">
              <div className="col-lg-12">
                <ul>
                  <li>
                    <div className="contact-field p-relative c-name">
                      <label><i className="fal fa-badge-check"></i> Check In Date</label>
                      <input type="date" id="chackin" name="date" />
                    </div>
                  </li>
                  <li>
                    <div className="contact-field p-relative c-name">
                      <label><i className="fal fa-times-octagon"></i> Check Out Date</label>
                      <input type="date" id="chackout" name="date" />
                    </div>
                  </li>
                  <li>
                    <div className="contact-field p-relative c-name">
                      <label><i className="fal fa-users"></i> Adults</label>
                      <select name="adults" id="adu">
                        <option value="sports-massage">Adults</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="contact-field p-relative c-name">
                      <label><i className="fal fa-baby"></i> Child</label>
                      <select name="child" id="cld">
                        <option value="sports-massage">Child</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="contact-field p-relative c-name">
                      <label><i className="fal fa-concierge-bell"></i> Room</label>
                      <select name="room" id="rm">
                        <option value="sports-massage">Room</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </li>
                  <li>
                    <div className="slider-btn">
                      <label><i className="fal fa-calendar-alt"></i></label>
                      <button className="btn ss-btn" data-animation="fadeInRight" data-delay=".8s">Check Availability</button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>

      {yShow &&
        <>
            <div className="mfp-bg mfp-ready"></div>
            <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex="-1" style={{overflow: "hidden"}}>
                <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                    <div className="mfp-content">
                        <div className="mfp-iframe-scaler">
                            <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setyShow(false)}>×</button>
                            <iframe className="mfp-iframe" src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1" frameborder="0" allowFullScreen=""></iframe>
                        </div>
                    </div>
                    <div className="mfp-preloader">Loading...</div>
                </div>
            </div>
        </>
        }
        {hShow &&
            <>  
                <div className="mfp-bg mfp-ready"></div>
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready" tabIndex="-1" style={{overflow: "hidden"}}>
                    <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                        <div className="mfp-content">
                            <div className="mfp-iframe-scaler">
                                <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => sethShow(false)}>×</button>
                                <iframe className="mfp-iframe" src="//www.youtube.com/embed/gyGsPlt06bo?autoplay=1" frameborder="0" allowFullScreen=""></iframe>
                            </div>
                        </div>
                        <div className="mfp-preloader">Loading...</div>
                    </div>
                </div>
            </>
        }
    </>
  )
}

export default Sliderthree