import React from "react";
import "../App.css";
import Button from "../component/Button/Button";
import Dash from "../pages/Dashboard";


const location = () => {

   return(
    <>
        <div className="d-flex">
                <Dash />
            <div className="p-5 info">
                <h4 className="pb-3">Your Personal Information</h4>
                <h5 className="pb-2">Delivery address</h5>
                <p className="pb-5 text-primary"><i>Do not share Info</i></p>
                <div className="info-form">
                    <form>
                        <div className="">
                            <div className="pb-4">
                                <input type="text" /> 
                                <label
                                className="px-3 pb-2">Address 1</label>                                
                            </div>
                            <div className="pb-4">
                                <input type="text" /> 
                                <label className="px-3 pb-2">Address 2</label>                                
                            </div>
                        </div>
                        <div className="pb-4">
                            <input type="email" /> 
                            <label className="px-3 pb-2">Alternate Address</label>                            
                        </div>
                        <p className="pb-3 text-primary"><i>address should be accurate as humanly posible</i></p>
                        <div className="pt-3">
                            <Button title="Save" bgColor="#000000"/>
                        </div>
                    </form>
                </div> 
            </div>
        </div>
    </>
       
   )
}

export default location