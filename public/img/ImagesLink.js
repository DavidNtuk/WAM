import React from "react";
import "../component/Card/Card.css"
import "../App.css"
import ice from '../img/ice.png'


const Checkout = () => {

   return(
        <div className="pt-5">
            <div className="row">
                <div className='"col-3'>
                    <img src={ice} className="" alt='' style={{width:150 }} />
                </div>
            </div>
        </div>
   )
}

export default Checkout