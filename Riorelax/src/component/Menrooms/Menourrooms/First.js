import { Link } from 'react-router-dom'
import React , { useState } from 'react'

function First() {

    const [toggler, setToggler] = useState(false);

    const [img, setImg] = useState()
    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()
    const [img3, setImg3] = useState()
    const [img4, setImg4] = useState()
    const [img5, setImg5] = useState()
    
    const [activeImage , setActiveImage] = useState(1)
    
    return (
        <>
            <section id="services" className="services-area pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services ser-m mb-30">
                                <div className="services-thumb" onClick={() => {setToggler(!toggler) 
                                    setActiveImage(1)}}>
                                    <Link to="#" onClick={() => setImg(true)} className="gallery-link popup-image" >
                                        <img src="https://www.acaciahotelsmanila.com/wp-content/uploads/2023/05/Rooms-and-Suites-AHM-1.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div className="services-content">
                                    <div className="day-book">
                                        <ul>
                                            <li>$600/Night</li>
                                            <li><Link to="/contact">Book Now</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">classNameic Balcony Room</Link></h4>
                                    <p>Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta place ullam ipsum. Morbi imperdiet, orci et dapibus.</p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src="assets/img/icon/sve-icon1.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon2.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon3.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon4.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon5.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon6.png" alt="img" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services ser-m mb-30">
                                <div className="services-thumb" onClick={() => {
                                    setToggler(!toggler)
                                    setActiveImage(2)
                                }}>
                                    <Link to="#" onClick={() => setImg1(true)} className="gallery-link popup-image" >
                                        <img src="https://www.peninsula.com/en/-/media/pbk/rooms/deluxe-room-twin-bed.jpg?mw=905&hash=9515693D3D8455DE1F48031E23A9C6BA" alt="img" />
                                    </Link>
                                </div>
                                <div className="services-content">
                                    <div className="day-book">
                                        <ul>
                                            <li>$400/Night</li>
                                            <li><Link to="/contact">Book Now</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">Superior Double Room</Link></h4>
                                    <p>Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta ex, in imperdiet tortor feugiat at.</p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src="assets/img/icon/sve-icon1.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon2.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon3.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon4.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon5.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon6.png" alt="img" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services ser-m mb-30">
                                <div className="services-thumb" onClick={() => {
                                    setToggler(!toggler)
                                    setActiveImage(3)
                                }}>
                                    <Link to="#" onClick={() => setImg2(true)} className="gallery-link popup-image" >
                                        <img src="https://sitecore-cd-imgr.shangri-la.com/MediaFiles/9/8/4/%7B984A8BD0-FC33-4BC1-BF9A-661E56C4412F%7D72d8e1b8f63648b3a21cabed0642f70c.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div className="services-content">
                                    <div className="day-book">
                                        <ul>
                                            <li>$100/Night</li>
                                            <li><Link to="/contact">Book Now</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">Super Balcony Double Room</Link></h4>
                                    <p>Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta place ullam ipsum. Morbi imperdiet, orci et dapibus.</p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src="assets/img/icon/sve-icon1.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon2.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon3.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon4.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon5.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon6.png" alt="img" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services ser-m mb-30">
                                <div className="services-thumb" onClick={() => {
                                    setToggler(!toggler)
                                    setActiveImage(4)
                                }}>
                                    <Link to="#" onClick={() => setImg3(true)} className="gallery-link popup-image" >
                                        <img src="https://www.acaciahotelsmanila.com/wp-content/uploads/2023/05/Rooms-and-Suites-AHM-1.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div className="services-content">
                                    <div className="day-book">
                                        <ul>
                                            <li>$300/Night</li>
                                            <li><Link to="/contact">Book Now</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">Delux Double Room</Link></h4>
                                    <p>Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta place ullam ipsum. Morbi imperdiet, orci et dapibus.</p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src="assets/img/icon/sve-icon1.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon2.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon3.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon4.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon5.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon6.png" alt="img" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services ser-m mb-30">
                                <div className="services-thumb" onClick={() => {
                                    setToggler(!toggler)
                                    setActiveImage(5)
                                }}>
                                    <Link to="#" onClick={() => setImg4(true)} className="gallery-link popup-image">
                                        <img src="https://www.peninsula.com/en/-/media/pbk/rooms/deluxe-room-twin-bed.jpg?mw=905&hash=9515693D3D8455DE1F48031E23A9C6BA" alt="img" />
                                    </Link>
                                </div>
                                <div className="services-content">
                                    <div className="day-book">
                                        <ul>
                                            <li>$400/Night</li>
                                            <li><Link to="/contact">Book Now</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">Superior Double Room</Link></h4>
                                    <p>Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta ex, in imperdiet tortor feugiat at.</p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src="assets/img/icon/sve-icon1.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon2.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon3.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon4.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon5.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon6.png" alt="img" /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="single-services ser-m mb-30">
                                <div className="services-thumb" onClick={() => {
                                    setToggler(!toggler)
                                    setActiveImage(6)
                                }}>
                                    <Link to="#" onClick={() => setImg5(true)} className="gallery-link popup-image" >
                                        <img src="https://www.acaciahotelsmanila.com/wp-content/uploads/2023/05/Rooms-and-Suites-AHM-1.jpg" alt="img" />
                                    </Link>
                                </div>
                                <div className="services-content">
                                    <div className="day-book">
                                        <ul>
                                            <li>$100/Night</li>
                                            <li><Link to="/contact">Book Now</Link></li>
                                        </ul>
                                    </div>
                                    <h4><Link to="/room-details">Super Balcony Double Room</Link></h4>
                                    <p>Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta place ullam ipsum. Morbi imperdiet, orci et dapibus.</p>
                                    <div className="icon">
                                        <ul>
                                            <li><img src="assets/img/icon/sve-icon1.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon2.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon3.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon4.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon5.png" alt="img" /></li>
                                            <li><img src="assets/img/icon/sve-icon6.png" alt="img" /></li>
                                        </ul>
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

export default First