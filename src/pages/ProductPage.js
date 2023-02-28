import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Contact from "../component/Contact";
import Button from "../component/Button/Button";
import "../component/Card/Card.css"
import Accordion from "../component/Accordion";
import "../App.css";
import axios from 'axios';
import SideBar from "../component/SideBar";
// import SuggestCard from "../component/Card/SuggestCard";
import ProductDescription from "../component/ProductDescription";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/reducers/cartReducers";

const ProductPage = () => {
    const location = useLocation();
    const navigateTo = useNavigate();
    const productId = location.pathname.split("/")[2];

    const[selectedImg , setSelectedImg] = useState('');
    const[product , setProduct] = useState({});
    const[sideImages , setSideImages] = useState([]);

    const dispatch = useDispatch();

    const handleAddToCart = (product) =>{
        dispatch(addProduct(product))
    }

    useEffect(() => {
        window.scroll(0,0);
    }, []);

    const fetchSingleProduct = async () => {
        try {
            const response = await axios.get(`https://api-v1.devchris.com.ng/api/v1/users/product/${productId}`);
            const product = response.data?.data?.product;

            if (product) {
                setProduct(product);
                handleSideImages(product);
            } else {
                navigateTo('/');
            }
            
        } catch (error) {
            console.log(error);
            alert('An error occured while fetching product');
        }
    };

    const handleSideImages = (productImage) => {
        const images = [];
        if (productImage.image1) {
            images.push(productImage.image1);
        }
        if (productImage.image2) {
            images.push(productImage.image2);
        }
        if (productImage.image3) {
            images.push(productImage.image3);
        }
        if (productImage.image4) {
            images.push(productImage.image4);
        }
        setSideImages(images);
        setSelectedImg(productImage.image1);
    };

    useEffect(() => {
        fetchSingleProduct();
    },[productId]);


    return(
        <div className="pt-5">
            <div className="">
                <div className="checkout row align-items-top">
                    <div className="side-bar col-1">
                        <SideBar 
                            images={sideImages}
                            setSelectedImg={setSelectedImg}
                        />
                    </div>
                    <div className="col-6">
                        <div>
                            <div className="container">
                                <img src={selectedImg} className="selected-img" alt='' />
                            </div>
                        </div>
                    </div>
                    
                    <div className="product-details col-5 p-5">
                        {
                            product && (
                                <ProductDescription product={product} />
                            )
                        }
                        <div className="mt-4">
                            <div className="pb-4 d-flex ">
                                <div className="px-2">
                                    <Button 
                                        onClick={() =>handleAddToCart(product)}
                                        title="Add to Cart" 
                                        bgColor="#fff" 
                                        color="#000000" 
                                        style={{ width: 400 }}
                                    />
                                </div>
                                {/* <Button 
                                    title="Wish List" 
                                    bgColor="#fff" 
                                    color="#000000"
                                /> */}
                            </div>
                        </div>
                        <hr/>
                        <div className="mt-5">
                            <Accordion product={product} />
                        </div>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
   )
}

export default ProductPage