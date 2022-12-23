import React, { useState } from "react";
import "../../App.css"
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "../../component/Header/custom.css"

const Carditem = ({ product }) => {

    const[ toggle, setToggle] = useState(true);

    return(
        <div className='m-1 mb-2 product-card'>
            <div className=''>
                <img src={product.image1} className="product-img" alt='' />
            </div>
            <div className="d-flex justify-content-between pt-2 align-items-center">
                <div className="d-flex align-items-center">
                    <img src="img/logo.jpg" className="logo-img" alt='' style={{ width: 40, height: 40 }} />
                    <Link className="link" to={`/product/${product.unique_id}`}>
                        <h5 className='px-2'>{`${product.title.substring(0, 30)}...`}</h5>
                    </Link>
                </div> 
                <h5 className='pb-'>${product.amount}</h5>
            </div>
            <div className="pt-4 text-center">
                <Link className="link" to="">
                    <Button title="Buy Now" bgColor="#000000"/>
                </Link>
                {
                    toggle ? 
                    (
                        <div className="pt-2">
                            <i 
                            onClick={() =>{ setToggle(false)} }
                            className="far fa-heart"></i>
                        </div> 
                    ): 
                    (
                        <div className="pt-2">
                            <i 
                            onClick={() =>{ setToggle(true)} }
                            className="fas fa-heart"></i>
                        </div> 
                    )                    
                }
            </div>
        </div>  
   )
}

export default Carditem