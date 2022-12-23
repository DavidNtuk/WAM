import React from "react";
// import Home from "./Home/Home";
// import contact from "../../src/img/contact.jpg"
import "../App.css"
// import Button from "../component/Button/Button";
import Dash from "../pages/Dashboard"
import Profile from "../component/Profile-head"


const profilePage = () => {
   return(
    <>
        <Profile />
        <div className="container row align-items-center">
            <div className="col-6">
                <Dash />
            </div>
        </div>
    </>
       
   )
}

export default profilePage