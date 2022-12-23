import React from "react";
// import Home from "./Home/Home";
// import contact from "../../src/img/contact.jpg"
import "../App.css"
import Button from "./Button/Button";


const Contact = () => {
   return(
       <>
        <div className='contact text-light text-center'>
            <div className="contact-text text-center pb-5">
                <h5 className=''>Connect with Us</h5>
                <h6 className=''>For inquiries and more Information on<br/>
                our product and services</h6>
                <h6 className=''>Get 30% for subscribing for news letter</h6>
            </div>
            <div className="">            
                <input 
                type="email" 
                className="" 
                id="floatingInput"  
                placeholder="Type Email..."
                />
                <Button title="Submit" bgColor="#000000"/>
            </div>
        </div>
        </>
       
   )
}

export default Contact