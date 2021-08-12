import React from 'react';

import Banner from '../HomePage/Banner';
import abs1 from '../../assets/abstract1.jpg';
import abs2 from '../../assets/abstract2.jpeg';
import abs3 from '../../assets/abstract3.jpeg';
import abs4 from '../../assets/abstract4.jpeg';
import abs5 from '../../assets/abstract5.jpg';
import abs6 from '../../assets/abstract6.jpg';
import abs7 from '../../assets/abstract7.jpeg';
import abs8 from '../../assets/abstract8.jpg';
import './Eureka1.css';

const Eureka1 = () => {
    return (
        <React.Fragment>
            <header
                className="banner_eureka"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}
            >
                <div className="container banner__contents_eureka">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-lg-12 sm-12">
                            <h1 className="banner_header_eureka">Eureka 1.0 Archives</h1>
                        </div>
                    </div>
                </div>
            </header>

            <section style={{marginBottom:"50px", marginTop:"50px"}} className="abstracts">
                <div className="container">
                    <div style={{justifyContent: "center"}} className="row">
                        <div style={{marginBottom:"20px"}} className="col-md-10 col-lg-10 col-sm-6 abstract-card">
                            <div class="card">
                                <img class="card-img-top" src={abs1} alt="Card image cap" />
                                <div style={{textAlign:"center"}} class="card-body">
                                    <h5 style={{fontSize: "23px"}} class="card-title">Corrosion resistant coatings with self healing properties.</h5>
                                    <p style={{ color: "#5d5e8d", fontSize:"18px"}} class="card-text">Presented by Bharat Bairagi, Swapnil Bhavsar and Yukta Malik</p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom:"20px"}} className="col-md-10 col-lg-10 col-sm-6 abstract-card">
                            <div class="card">
                                <img class="card-img-top" src={abs2} alt="Card image cap" />
                                <div style={{textAlign:"center"}} class="card-body">
                                    <h5 style={{fontSize: "23px"}} class="card-title">Replacing harmful synthetic dyes with natural dyes</h5>
                                    <p style={{ color: "#5d5e8d", fontSize:"18px"}} class="card-text">Presented by Shikha Yadav and Tanuka Sinha</p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom:"20px"}} className="col-md-10 col-lg-10 col-sm-6 abstract-card">
                            <div class="card">
                                <img class="card-img-top" src={abs3} alt="Card image cap" />
                                <div style={{textAlign:"center"}} class="card-body">
                                    <h5 style={{fontSize: "23px"}} class="card-title">Increment in efficiency of solar cell</h5>
                                    <p style={{ color: "#5d5e8d", fontSize:"18px"}} class="card-text">Presented by Jay Chauhan, Avinash Verma and Pears Patel</p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom:"20px"}} className="col-md-10 col-lg-10 col-sm-6 abstract-card">
                            <div class="card">
                                <img class="card-img-top" src={abs4} alt="Card image cap" />
                                <div style={{textAlign:"center"}} class="card-body">
                                    <h5 style={{fontSize: "23px"}} class="card-title">Algae Biofuels</h5>
                                    <p style={{ color: "#5d5e8d", fontSize:"18px"}} class="card-text">Presented by Bhuvan, Upendra, Satya, Sasank M and Rishabh V Yadav</p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom:"20px"}} className="col-md-10 col-lg-10 col-sm-6 abstract-card">
                            <div class="card">
                                <img class="card-img-top" src={abs5} alt="Card image cap" />
                                <div style={{textAlign:"center"}} class="card-body">
                                    <h5 style={{fontSize: "23px"}} class="card-title">Neutralization of Quartenary Ammonium Compound in Wastewater</h5>
                                    <p style={{ color: "#5d5e8d", fontSize:"18px"}} class="card-text">Presented by Daxesh M. Vasava and Aaditya Kumar</p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom:"20px"}} className="col-md-10 col-lg-10 col-sm-6 abstract-card">
                            <div class="card">
                                <img class="card-img-top" src={abs6} alt="Card image cap" />
                                <div style={{textAlign:"center"}} class="card-body">
                                    <h5 style={{fontSize: "23px"}} class="card-title">Manufacturing of Biodegradable PU and its waste management</h5>
                                    <p style={{ color: "#5d5e8d", fontSize:"18px"}} class="card-text">Presented by Dhananjay Dadheech, Priyanka Kadam and Jaykumar A. Vaghela</p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom:"20px"}} className="col-md-10 col-lg-10 col-sm-6 abstract-card">
                            <div class="card">
                                <img class="card-img-top" src={abs7} alt="Card image cap" />
                                <div style={{textAlign:"center"}} class="card-body">
                                    <h5 style={{fontSize: "23px"}} class="card-title">Transparent Solar Cells</h5>
                                    <p style={{ color: "#5d5e8d", fontSize:"18px"}} class="card-text">Presented by Abhay Dubey, Anuj Desai and Shambhavi Shrivastav</p>
                                </div>
                            </div>
                        </div>
                        <div style={{marginBottom:"20px"}} className="col-md-10 col-lg-10 col-sm-6 abstract-card">
                            <div class="card">
                                <img class="card-img-top" src={abs8} alt="Card image cap" />
                                <div style={{textAlign:"center"}} class="card-body">
                                    <h5 style={{fontSize: "23px"}} class="card-title">Packaging Waste Management</h5>
                                    <p style={{ color: "#5d5e8d", fontSize:"18px"}} class="card-text">Presented by Sanskar C. Patel, Jeet N. Gajera and Dwij A. Pandya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Eureka1
