import React from 'react'
import { Link } from 'react-router-dom'
import Resort from "../../assets/img/bg/an-img-02.png"
import Resort1 from "../../assets/img/features/feature.png"

function Luxury() {
  return (
    <>
        <section className="feature-area2 p-relative fix" style={{background: "#f7f5f1"}}>
                 <div className="animations-02"><img src="https://mediacity.co.in/riorelax/static/media/about_img_02.7e903ba6dfa05e8fba95.png" alt="img"/></div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                         <div className="col-lg-6 col-md-12 col-sm-12 pr-30">
                           <div className="feature-img">                               
                           <img src="https://mediacity.co.in/riorelax/static/media/feature.19e9aa21add79eabff7d.png" alt="img" class="img"/>         
                            </div>
                        </div>
					   <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="feature-content s-about-content">
                                <div className="feature-title pb-20">                               
                                    <h5>Luxury Hotel & Resort</h5>
                                <h2>
                                 .The Oil Field Safari lodge.
                                </h2>                             
                                </div>
                                <p>Participate in community activities and a bicycle tour to Murchison Falls National Game Park.</p>
                                <p>The magnificent HB Safari Lodge is a newly constructed lodge loved by travelers. Perched on the shores of Lake Albert with dramatic views overlooking Uganda’s Oil field; Tilenga and Democratic Republic of Congo (DRC). Our Safari Lodge is the first accommodation choice for travelers to the Albertine region and Murchison Falls N.P.</p>
                                <div className="slider-btn mt-15">                                          
                                    <Link to="/about" className="btn ss-btn smoth-scroll">Discover More</Link>				
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Luxury