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


const Showcase = () => {

   return(
        <div className="text-dark">
            <Home />
            <div className="">
                <div className="text-center pt-3">
                    <h3 className="pt-4 pb-4">Why we are the best</h3>
                </div>
                <div className="justify-content-center row">
                    <Bestsales />
                </div>
                <div className="">
                    <div className="text-center pt-5">
                        <h3>Best Sales</h3>
                    </div>
                    <div className="justify-content-center row pt-5 pb-5 ">
                        <Card />
                        <Steps />                        
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