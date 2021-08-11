import React from 'react';
import Typewriter from 'typewriter-effect';

import idea from '../../assets/banner.svg';
import './Banner.css';

const Banner = () => {
    return (
        <React.Fragment>
            <header
                className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                }}
            >
                <div className="container banner__contents">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-6 sm-12">
                            <h1 className="banner_header">Eureka 4.0</h1>
                            <h4 className="banner_caption">Find your Eureka Moment!!!</h4>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <img className="banner_img" src={idea} />
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Banner
