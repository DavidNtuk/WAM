import React, {useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import "../App.css";
// import images from "../Api/images";
// import cardlist from "../Api/cardimages"


const Bestsales = () => {

    const [product , setProduct ] = useState([])

    useEffect(() =>{
        fetchPopularCategories()
    },[])

    const fetchPopularCategories= async () =>{
        try{
            const response = await axios.get('https://api-v1.devchris.com.ng/api/v1/users/products/popular')
            console.log(response.data.data.products)
            setProduct(response.data.data.products)
        }
        catch{
            console.log("error")
        }
    }

   return(
       <>
        <div className="sale-box col-md-4 pt-4">
            <div className="d-flex ">
                {
                    product.map(({image1, unique_id}) =>{
                        return(
                            <Link to={`/product/${unique_id}`}>
                                <div className="justify-content-center px-3">
                                    <img 
                                        src={image1} 
                                        className="background-img" 
                                        alt='' 
                                    />
                                </div>
                            </Link>   
                        )
                    })
                }                
            </div>
        </div>
       </>
       
   )
}

export default Bestsales