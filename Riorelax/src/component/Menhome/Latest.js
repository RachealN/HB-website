import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import Blog from "../../assets/img/bg/an-img-06.png"
import Blog1 from "../../assets/img/blog/inner_b1.jpg"
import Blog2 from "../../assets/img/blog/inner_b2.jpg"
import Blog3 from "../../assets/img/blog/inner_b3.jpg"

function Latest() {
  return (
    <>
        <section id="blog" className="blog-area p-relative fix pt-90 pb-90">
                <div className="animations-02"><img src={Blog} alt="contact-bg-an-05"/></div>
                <div className="container">
                    <div className="row align-items-center"> 
                        <div className="col-lg-12">
                            <div className="section-title center-align mb-50 text-center wow fadeInDown animated" data-animation="fadeInDown" data-delay=".4s">
                                 <h5>Our Blog</h5>
                                <h2>
                                    Latest Blog & News
                                </h2>
                                <p>Get the upto date information about our lodge its offfers and more.</p>
                            </div>                           
                        </div>
                    </div>
                    <div className="row">
                       <div className="col-lg-4 col-md-6">
                            <div className="single-post2 hover-zoomin mb-30 wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <Link to="/blog-details"><img src={"https://cloudfront.safaribookings.com/blog/2022/12/00-Four_South_African_Parks-BW-header1200px.jpg"} alt="img"/></Link>
                                </div>                    
                                <div className="blog-content2">    
                                    <div className="date-home">
                                        24th March 2022
                                    </div>
                                    <h4><Link to="/blog-details">A Retreat in Nature: Exploring the Charms of Our Lodge.</Link></h4> 
                                    <p>Nestled in the heart of nature, our lodge offers a serene escape from the hustle and bustle of daily life. Surrounded by lush forests and stunning mountain views, every moment here feels like a peaceful retreat.</p>
                                    <div className="blog-btn"><Link to="/blog-details">Read More</Link></div>
                                     
                                </div>
                            </div>
                        </div>
                         <div className="col-lg-4 col-md-6">
                            <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <Link to="/blog-details"><img src={"https://www.sprayedout.com/wp-content/uploads/2020/11/countryside-nature-landscape-sunset-web.jpg"} alt="img"/></Link>
                                </div>
                                <div className="blog-content2">                                    
                                    <div className="date-home">
                                       24th March 2022
                                    </div>
                                    <h4><Link to="/blog-details">A Retreat in Nature: Exploring the Charms of Our Lodge.</Link></h4> 
                                    <p>Nestled in the heart of nature, our lodge offers a serene escape from the hustle and bustle of daily life. Surrounded by lush forests and stunning mountain views, every moment here feels like a peaceful retreat.</p>
                                    <div className="blog-btn"><Link to="/blog-details">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-post2 mb-30 hover-zoomin wow fadeInUp animated" data-animation="fadeInUp" data-delay=".4s">
                                <div className="blog-thumb2">
                                    <Link to="/blog-details"><img src={"https://natureinmind.ie/wp-content/uploads/2016/12/6-600x400.jpg"} alt="img"/></Link>
                                </div>
                                <div className="blog-content2">                                    
                                    <div className="date-home">
                                        24th March 2022
                                    </div>
                                    <h4><Link to="/blog-details">A Retreat in Nature: Exploring the Charms of Our Lodge</Link></h4> 
                                    <p>Nestled in the heart of nature, our lodge offers a serene escape from the hustle and bustle of daily life. Surrounded by lush forests and stunning mountain views, every moment here feels like a peaceful retreat.</p>
                                    <div className="blog-btn"><Link to="/blog-details">Read More</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </>
  )
}

export default Latest