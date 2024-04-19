import React , { useState } from 'react'
import icon1 from "../../assets/img/icon/sve-icon1.png"
import icon2 from "../../assets/img/icon/sve-icon2.png"
import icon3 from "../../assets/img/icon/sve-icon3.png"
import icon4 from "../../assets/img/icon/sve-icon4.png"
import icon5 from "../../assets/img/icon/sve-icon5.png"
import icon6 from "../../assets/img/icon/sve-icon6.png"
import service1 from "../../assets/img/gallery/room-img01.png"
import service2 from "../../assets/img/gallery/room-img02.png"
import service3 from "../../assets/img/gallery/room-img03.png"
import service4 from "../../assets/img/gallery/room-img04.png"
import Slider from "react-slick"
import { Link } from 'react-router-dom'
import FsLightbox from 'fslightbox-react';


function Rooms() {

    const [toggler, setToggler] = useState(false);
    const [activeImage , setActiveImage] = useState(1)
    const [images , setImages] = useState([
        'assets/img/gallery/room-img01.png',
        'assets/img/gallery/room-img02.png',
        'assets/img/gallery/room-img03.png',
        'assets/img/gallery/room-img04.png',
        'assets/img/gallery/room-img05.png',
        'assets/img/gallery/room-img06.png'
	])


    const service = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
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
        ]
    }

  return (
    <>
        <section id="services" className="services-area pt-113 pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-12">    
                            <div className="section-title center-align mb-50 text-center">
                                <h5>The pleasure of luxury</h5>
                                <h2>Rooms & Suites</h2>
                                <p>The Safari Lodge offers eleven elegant Cottages with private terraces overlooking the dramatic Lake Albert waters, the giant Eastern Rift Valley escapements and beautiful landscapes</p>
                            </div>
                        </div>
                    </div>
                    <Slider className="row services-active" {...service}> 
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services mb-30">
                                <div className="services-thumb">
									<Link to="#" className="gallery-link popup-image" onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(1)
                                }}>
                                    <img src={"https://sitecore-cd-imgr.shangri-la.com/MediaFiles/9/8/4/%7B984A8BD0-FC33-4BC1-BF9A-661E56C4412F%7D72d8e1b8f63648b3a21cabed0642f70c.jpg"} alt="img" />
									</Link>
                                </div>
                                <div className="services-content"> 
                                    <div className="day-book">
                                        <ul>
                                            <li>$600/Night</li>
                                            <li><Link to="/contact">Book Now</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details"> Single Cottage</Link></h4>    
                                    <p>Escape to our charming cottage, where comfort meets rustic elegance. Nestled amidst lush greenery, this cozy retreat offers everything you need for a relaxing getaway</p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src={icon1} alt="img"/></li>
                                            <li><img src={icon2} alt="img"/></li>
                                            <li><img src={icon3} alt="img"/></li>
                                            <li><img src={icon4} alt="img"/></li>
                                            <li><img src={icon5} alt="img"/></li>
                                            <li><img src={icon6} alt="img"/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services mb-30">
                                <div className="services-thumb">
									<Link to="#" className="gallery-link popup-image" onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(2)
                                }}>
                                    <img src={"https://www.acaciahotelsmanila.com/wp-content/uploads/2023/05/Rooms-and-Suites-AHM-1.jpg"} alt="img"/>
									</Link>
                                </div>
                                <div className="services-content"> 
                                    <div className="day-book">
                                        <ul>
                                            <li>$400/Night</li>
                                            <li><Link to="/contact">Book Now</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">Double Villa</Link></h4>    
                                    <p>Escape to our charming cottage, where comfort meets rustic elegance. Nestled amidst lush greenery, this cozy retreat offers everything you need for a relaxing getaway</p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src={icon1} alt="img"/></li>
                                            <li><img src={icon2} alt="img"/></li>
                                            <li><img src={icon3} alt="img"/></li>
                                            <li><img src={icon4} alt="img"/></li>
                                            <li><img src={icon5} alt="img"/></li>
                                            <li><img src={icon6} alt="img"/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services mb-30">
                                <div className="services-thumb">
									<Link to="#" className="gallery-link popup-image" onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(3)
                                }} >
                                    <img src={"https://www.peninsula.com/en/-/media/pbk/rooms/deluxe-room-twin-bed.jpg?mw=905&hash=9515693D3D8455DE1F48031E23A9C6BA"} alt="img"/>
									</Link>
                                </div>
                                <div className="services-content"> 
                                    <div className="day-book">
                                        <ul>
                                            <li>$100/Night</li>
                                            <li><Link to="/contact">Book Now</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details"> Executive Double cottage</Link></h4>    
                                    <p>Our super balcony room offers a luxurious escape with a private balcony overlooking stunning views. The room features a comfortable king-sized bed, modern amenities, and elegant decor. </p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src={icon1} alt="img"/></li>
                                            <li><img src={icon2} alt="img"/></li>
                                            <li><img src={icon3} alt="img"/></li>
                                            <li><img src={icon4} alt="img"/></li>
                                            <li><img src={icon5} alt="img"/></li>
                                            <li><img src={icon6} alt="img"/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services mb-30">
                                <div className="services-thumb">
									<Link to="#" className="gallery-link popup-image" onClick={() => { 
                                    setToggler(!toggler)
                                    setActiveImage(4)
                                }}>
                                    <img src={"https://image-tc.galaxy.tf/wijpeg-dghgmolkfh6t706p9wohdl5ow/testing-100.jpg"} alt="img"/>
									</Link>
                                </div>
                                <div className="services-content"> 
                                    <div className="day-book">
                                        <ul>
                                            <li>$300/Night</li>
                                            <li><Link to="/contact">Book Now</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">Family Banda</Link></h4>    
                                   <p>Escape to our charming cottage, where comfort meets rustic elegance. Nestled amidst lush greenery, this cozy retreat offers everything you need for a relaxing getaway.</p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src={icon1} alt="img"/></li>
                                            <li><img src={icon2} alt="img"/></li>
                                            <li><img src={icon3} alt="img"/></li>
                                            <li><img src={icon4} alt="img"/></li>
                                            <li><img src={icon5} alt="img"/></li>
                                            <li><img src={icon6} alt="img"/></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
        </section>

        <FsLightbox
            toggler={toggler}
            sources={images}
            slide={activeImage}
        />
    </>
  )
}

export default Rooms