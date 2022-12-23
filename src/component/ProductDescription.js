import React, { useState } from "react";
import Button from "../component/Button/Button";
import "../component/Card/Card.css"
import "../App.css"

const ProductDescription = ({ product }) => {

    const[toggle, setToggle] = useState(false);

    const {
        amount,
        promo_price,
        title,
        product_sku,
        sizes,
        colors
    } = product;

    const percentageOff = Number(((promo_price - amount) / ((promo_price + amount)/2)) * 100).toFixed(0);

    return(
        <>
            <div className="d-flex justify-content-between pb-1">
                <h2>{title}</h2>
                {
                    toggle ?
                    (
                        <div>
                            <i
                            className="fas fa-heart fa-light fa-2x"
                            onClick={() => setToggle(false)} 
                            ></i>
                        </div>
                    ):
                    <div>
                        <i
                        className="far fa-heart fa-light fa-2x"
                        onClick={() => setToggle(true)}
                        ></i>
                    </div>
                }
            </div>
            <p className="pb-4">{product_sku}</p>
            <h2>${ amount }</h2>
            <div className="d-flex align-items-center pt-3 pb-3">
                <del className="px-1 line-through"><h4>${ promo_price }</h4></del>
                <h5 className="bg-danger text-light p-1">-{ percentageOff } %</h5>
            </div>                        
                <div className="d-flex flex-row pt-4 pb-4 ">
                    <i className="fas fa-star fa-2x"></i>
                    <i className="fas fa-star fa-2x"></i>
                    <i className="fas fa-star fa-2x"></i>
                    <i className="fas fa-star fa-2x"></i>
                    <i className="far fa-star fa-2x"></i>
                </div>
            <hr/>
            <div className="mt-4">
                <Button title="Size Chart" bgColor="#fff" color="#000000" />
                <div className="d-flex align-items-center gap-5">
                    {
                        sizes && sizes.length > 0 && (
                            <div className="d-flex align-items-center">
                                <h5 className="pt-3">Size</h5>
                                <div className="p-3 mt-2">
                                    <select className="form-control">
                                        <option disabled>- Select a size -</option>
                                        {
                                            sizes.map(size => (
                                                <option>{ size }</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        )
                    }
                    {
                        colors && colors.length > 0 && (
                            <div className="d-flex align-items-center">
                                <h5 className="pt-3">Colors</h5>
                                <div className="p-3 mt-2">
                                    <select className="form-control">
                                        <option disabled>- Select a color -</option>
                                        {
                                            colors.map(size => (
                                                <option>{ size }</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <hr/>
        </>
   )
}

export default ProductDescription