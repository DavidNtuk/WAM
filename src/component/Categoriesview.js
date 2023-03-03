import React, { useState, useEffect } from 'react';
import "../App.css"
import axios from "axios";
import Bestsales from "./Bestsales";
import Carditem from "./Card/CardItem";


const Categoriesview = ({
    categoryId,
    categoryTitle
}) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const fetchCategoryProducts = async () =>{
            try {
                setLoading(true);
                const response = await axios.post('https://api-v1.devchris.com.ng/api/v1/users/category/products', {
                    'category_id': categoryId
                });
                const { products } = response.data.data;
                setProducts(products.data);
                setLoading(false);
            } catch (error){
                console.log(error);
                setLoading(false);
            }
        };
        if (categoryId) {
            fetchCategoryProducts();
        }
    }, [categoryId]);
    

    return(
        <div className="col-md-9">
            <div className="row justify-content-center mt-5 mb-5">
                <Bestsales />
            </div>
            <div className="info-view">
                <div className="">
                    { loading && (
                        <h3>Loading items for {categoryTitle} category</h3>
                    )}
                    {
                        !loading && products.length === 0 && (
                            <h3>Sorry, no items in the {categoryTitle} category</h3>
                        )
                    }
                    {
                        !loading && products.length > 0 && (
                            <div className="justify-content-start row pt-5 pb-5 ">
                                <Carditem products={products} />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Categoriesview