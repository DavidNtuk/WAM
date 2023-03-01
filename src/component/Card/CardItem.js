import React, { Fragment, useState } from "react";
import "../../App.css"
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "../../component/Header/custom.css"
import { useDispatch, useSelector } from "react-redux";
import {addProduct} from "../../Redux/reducers/cartReducers"


const Carditem = () => {

    const[ toggle, setToggle] = useState(true);

    const dispatch = useDispatch();

    const handleAddToCart = (product) =>{
        dispatch(addProduct(product))
    }

    const products = useSelector((state) => state.allProducts.products)
    
    const renderList = products.map((product) => {

        const {unique_id, image1, title, amount, } = product    

        return(
            <div className='m-1 mb-2 product-card' key={unique_id}>
            <div className=''>
                <img src={image1} className="product-img" alt='' />
            </div>
            <div className="d-flex justify-content-between pt-2 align-items-center">
                <div className="d-flex align-items-center">
                    <img src="img/logo.jpg" className="logo-img" alt='' style={{ width: 40, height: 40 }} />
                    <Link className="link" to={`/product/${unique_id}`}>
                        <h5 className='px-2'>{`${title.substring(0, 20)}...`}</h5>
                    </Link>
                </div> 
                <h5 className='pb-'>${amount}</h5>
            </div>
            <div className="pt-4 text-center">
                <Link className="link" to="">
                    <Button 
                    title="Add to cart" 
                    bgColor="#000000"
                    onClick={() =>handleAddToCart(product)}
                    />
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
    })

    return(
       <Fragment>
            {renderList}
        </Fragment>
   )
}

export default Carditem