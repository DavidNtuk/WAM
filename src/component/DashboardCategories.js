import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
// import Home from "./Home/Home";
// import contact from "../../src/img/contact.jpg"
import "../App.css";
import "../component/Header/custom.css";
// import Button from "../component/Button/Button";



const DashboardCategories = () => {

    const [product , setProduct] = useState([])

    useEffect(() =>{
        fetchCategories()
    },[])

    const fetchCategories = async () =>{
        try{
            const response = await axios.get('https://api-v1.devchris.com.ng/api/v1/users/category/list');
            setProduct(response.data.data.categories);
        }
        catch (error){
            console.log(error);
        }
    }

   return(
    <div className="col-md-2 m-5">
    <div className="dashboardcategories">
        <h3 className="pt-2 text-start px-3"> Categories </h3>      
        <div className="text-center pt-5">
            {
                product.map(({title},{unique_id}) =>{
                return(
                    <div className="drop-down-dashboard categories-list">
                        <Link to={`/categories/${unique_id}`} className="link">
                            <h6 className="d-inline-block">{title}</h6>
                        </Link>
                    </div>
                )
                })
            }
        <div className="border-bottom pt-4"></div>                 
    </div>
    </div>     
    </div>
       
   )
}

export default DashboardCategories