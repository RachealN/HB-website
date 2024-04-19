import React from 'react'
import Slider from "react-slick"
import Brand1 from "../../assets/img/brand/b-logo1.png"
import Brand2 from "../../assets/img/brand/b-logo2.png"
import Brand3 from "../../assets/img/brand/b-logo3.png"
import Brand4 from "../../assets/img/brand/b-logo4.png"
import Brand5 from "../../assets/img/brand/b-logo5.png"

function Brand() {

    const brand = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 900,
        autoplay: true,
        slidesToShow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
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
        <div className="brand-area pt-60 pb-60"  style={{background :"#f7f5f1"}}>
                <div className="container">
                    <Slider className="row brand-active" {...brand}>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGJx2G9wkzu-hqzwk0c4TLb20IWeakPNxFqZVB4RweA&s.jpg"} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src={"https://hips.hearstapps.com/hmg-prod/images/nissan-brand-logo-1200x938-1594842787.jpg?crop=1xw:0.9594882729211087xh;center,top&resize=1200:*"} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src={"https://cdn2.hubspot.net/hubfs/53/image8-2.jpg"} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                  <img src={"https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png"} alt="img"/>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="single-brand">
                                 <img src={"https://dynamic.brandcrowd.com/asset/logo/547e6711-66db-4562-bd79-408ef9528e8c/logo-search-grid-1x?logoTemplateVersion=1&v=638446843985570000.jpg"} alt="img"/>
                            </div>
                        </div>
                    </Slider>
                </div>
        </div>
    </>
  )
}

export default Brand