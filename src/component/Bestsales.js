import React, {useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import "../App.css";


const Bestsales = () => {

    const [loading, setLoading] = useState(false)
    const [product , setProduct ] = useState([])

    useEffect(() =>{
        fetchPopularCategories()
    },[])

    const fetchPopularCategories= async () =>{
        try{
            setLoading(true)
            const response = await axios.get('https://api-v1.devchris.com.ng/api/v1/users/products/popular')
            console.log(response.data.data.products)
            setProduct(response.data.data.products)
            setLoading(false)
        }
        catch{
            setLoading(false)
            console.log("error")
        }
    }

   return(
       <>
        <div className="sale-box col-md-4 pt-4">
            <div>{loading ? <div className="loading-spiner"></div> : <></>}</div>
            <div className="d-flex ">
                {
                    product.map(({image1, unique_id}) =>{
                        return(
                            <Link to={`/product/${unique_id}`} key={unique_id}>
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