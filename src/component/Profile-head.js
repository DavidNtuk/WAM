import React from "react";
// import {Link} from "react-router-dom"
// import Home from "./Home/Home";
// import contact from "../../src/img/contact.jpg"
import "../App.css"
import Button from "../component/Button/Button";


const Contact = () => {
   return(
    <>
    <div className="container">
        <div className="text-center mt-3">
            <div className='navbar-brand'>
                <h2 className='pt-5 pb-3'>King's Hub</h2>
                <i className="fa-solid fa-user fa-4x"></i>
            </div>
            <div> 
                <h4 className="pb-2">Hello, David</h4>
                <p className="">Welcome to your account dashboard</p>
            </div>
            <div>
                <Button title="Shop" bgColor="#000000"/>
            </div>
        </div>
        <hr/>        
    </div>
        
    </>
       
   )
}

export default Contact