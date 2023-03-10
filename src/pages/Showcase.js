import React from "react";
// import Axios from "axios"
// import {Link} from "react-router-dom"
import Home from "./Home/Home";
// import Contact from "../component/Contact";
import Card from "../component/Card/Card";
// import Footer from "../component/Footer";
import "../component/Card/Card.css"
import Steps from "../component/4steps"
import "../App.css"
import Bestsales from "../component/Bestsales";
import "../component/Header/custom.css"
import HomeAccordion from "../component/HomeAccordion";


const Showcase = () => {

   return(
        <div className="text-dark">
            <Home />
            <div className="head-text">
                <div className="text-center pt-3">
                    <h3 className="pt-4 pb-4 text-title">Why we are the best</h3>
                </div>
                <div className="justify-content-center row">
                    <Bestsales />
                </div>
                <div className="">
                    <div className="text-center pt-5">
                        <h3 className="text-title">Best Sales</h3>
                    </div>
                    <div className="justify-content-center row pt-5 pb-5 ">
                        <Card />
                        <Steps />                        
                    </div>
                </div>
                <div className="row mb-5 align-items-center">
                    <div className="icon-img col-md-6 align-items-center mb-5">
                        <img 
                            src="img/roli-accessories.jpeg"
                            className="" 
                            alt='' 
                        />
                    </div>
                    <div className="col-md-6">
                        <h3 className="text-center text-md  pb-5">FAQ's</h3>
                        <HomeAccordion />  
                    </div>
                </div>
            </div>
            {/* <div>
                <Contact />
            </div> */}
        </div>
   )
}

export default Showcase