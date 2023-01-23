import React from "react";
// import Home from "./Home/Home";
// import contact from "../../src/img/contact.jpg"
import "../App.css"
import Button from "../component/Button/Button";
import Dash from "../pages/Dashboard"
// import Profile from "../component/Profile-head"


const information = () => {

   return(
    <>
        <div className="d-flex">
                <Dash />
            <div className="p-5 info">
                <h4 className="pb-3">Your Personal Information</h4>
                <p className="pb-5">Do not share Info</p>
                <div className="info-form">
                    <form>
                        <div className="pb-4">
                            <label className="">Social Status</label>
                            <select className="p-2">
                                <option disabled>-- select --</option>
                                <option> MR </option>
                                <option> MRS </option>
                            </select>
                        </div>
                        <div className="">
                            <div className="pb-4">
                                <input type="text" /> 
                                <label
                                className="px-3 pb-2">First Name</label>                                
                            </div>
                            <div className="pb-4">
                                <input type="text" /> 
                                <label className="px-3 pb-2">Last Name</label>                                
                            </div>
                        </div>
                        <div className="pb-4">
                            <input type="email" /> 
                            <label className="px-3 pb-2">Email</label>                            
                        </div>
                        <div className="pb-4">
                            <input type="date" />                             
                            <label className="px-3 pb-2">Birthday</label>
                        </div>
                        <div className="pt-5">
                            <Button title="Save" bgColor="#000000"/>
                        </div>
                    </form>
                </div> 
            </div>
        </div>
    </>
       
   )
}

export default information