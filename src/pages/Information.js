import React from "react";
import { useSelector } from "react-redux";
import "../App.css"
import Button from "../component/Button/Button";
import Dash from "../pages/Dashboard";


const Information = () => {

    const {first_name, last_name, email} = useSelector((state) => state.user) ;

   return(
    <>
        <div className="d-flex mb-5">
                <Dash />
            <div className="p-5 info">
                <h4 className="pb-3">Your Personal Information</h4>
                <p className="pb-5 text-primary"><i>Do not share Info</i></p>
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
                                <input type="text" placeholder={first_name} /> 
                                <label
                                className="px-3 pb-2">First Name</label>                                
                            </div>
                            <div className="pb-4">
                                <input type="text" placeholder={last_name}/> 
                                <label className="px-3 pb-2">Last Name</label>                                
                            </div>
                        </div>
                        <div className="pb-4">
                            <input type="email" placeholder={email}/> 
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

export default Information