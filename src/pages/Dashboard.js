import React from "react";
import {Link} from "react-router-dom"
// import Home from "./Home/Home";
// import contact from "../../src/img/contact.jpg"
import "../App.css"
// import Button from "../component/Button/Button";


const Contact = () => {
   return(
    <>
    <div className="dashboard m-5">      
            <div className="mt-5">
                <div className="p-3 dashboard-list">
                    <Link to="/information" className="link">
                        <i class="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Information</h5>
                    </Link> 
                </div>
                <div className="p-3 dashboard-list">
                    <Link to="/Location" className="link">
                        <i class="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Location</h5>
                    </Link>
                </div>
                <div className="p-3 dashboard-list">
                    <Link to="/Cart" className="link">
                        <i class="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Cart</h5>
                    </Link> 
                </div>
                <div className="p-3 dashboard-list">
                    <Link to="/Favourite" className="link">
                        <i class="fa-solid fa-user px-3"></i><h5 className="d-inline-block">Favourite</h5>
                    </Link> 
                </div>
            </div>
    </div>
        
    </>
       
   )
}

export default Contact