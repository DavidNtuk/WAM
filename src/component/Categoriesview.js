import React from "react";
// import Home from "./Home/Home";
// import contact from "../../src/img/contact.jpg"
import "../App.css"
// import Card from "./Card/Card";
import Bestsales from "./Bestsales";


const Categoriesview = () => {
   return(
    <>
        <div className="col-md-9">
            <div className="row justify-content-center mt-5 mb-5">
                <Bestsales />
            </div>
            <div className="info-view">
                <div className="">
                    {/* <Card /> */}
                </div>
            </div>
        </div>
    </>
       
   )
}

export default Categoriesview