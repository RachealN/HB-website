import React from 'react'
import { Link } from 'react-router-dom'
import BGImg from "../../assets/img/bg/bdrc-bg.jpg";

function Main({title,subtitle,newtitle}) {
  return (
    <>
        <section className="breadcrumb-area d-flex align-items-center" style={{ backgroundImage: 'url("https://media.cnn.com/api/v1/images/stellar/prod/160920112147-beachfront-hotel-2-le-guanahani-2.jpg?q=w_1900,h_1069,x_0,y_0,c_fill")', backgroundSize: "cover" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-12 col-lg-12">
                            <div className="breadcrumb-wrap text-center">
                                <div className="breadcrumb-title">
                                    <h2>{title}</h2>    
                                    <div className="breadcrumb-wrap">
                                        <nav aria-label="breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><Link to ="/">{subtitle}</Link></li>
                                                <li className="breadcrumb-item active" aria-current="page">{newtitle}</li>
                                            </ol>
                                        </nav>
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

export default Main