import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer" style={{ backgroundColor: "#151853" }}>
            <div style={{ textAlign: "center" }} className="container">
                <div className="row pt-5 pb-5 justify-content-between">
                    <div className="col-sm-12 col-lg-12 col-md-12">
                        <h1 style={{ color: "white", }} >ORGANIZED BY CHEMICAL ENGINEERING SOCIETY</h1>
                    </div>
                </div>
                <hr style={{color:"white"}} />
                <div className="row">
                    <div style={{color:"white", textAlign:"left"}} className="col-sm-12 col-md-6 col-lg6">
                        Copyright ©2021 All rights reserved to ChES
                        Sardar Vallabhbhai National Institute Of Technology, Surat
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
