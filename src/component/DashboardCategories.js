import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
// import Home from "./Home/Home";
// import contact from "../../src/img/contact.jpg"
import "../App.css";
import "../component/Header/custom.css";
// import Button from "../component/Button/Button";



const Contact = () => {

    const [product , setProduct] = useState([])

    useEffect(() =>{
        fetchCategories()
    },[])

    const fetchCategories = async () =>{
        try{
            const response = await axios.get('https://api-v1.devchris.com.ng/api/v1/users/category/list');
            console.log(response.data.data.categories);
            setProduct(response.data.data.categories);
        }
        catch (error){
            console.log(error)
        }
    }

   return(
    <div className="col-md-2 m-5">
    <div className=" dashboardcategories">
        <h3 className="pt-2 text-start px-3"> Categories </h3>      
        <div className="text-center pt-5">
            {
                product.map(({title},{unique_id}) =>{
                return(
                    <div className="drop-down-dashboard categories-list">
                        <Link to={`/product/${unique_id}`} className="link">
                            <h6 className="d-inline-block">{title}</h6>
                        </Link> 
                        <ul className='dropdown-content-dashboard'>
                            <Link to="" className='link'>
                                <li className='p-3 text-center'>
                                    <h6 className='pt-2'>{title}</h6>
                                </li>
                            </Link>                             
                        </ul>     
                    </div>
                )
                })
            }
        <div className="border-bottom pt-4"></div>                 
        </div>
        <div className="pt-5 text-center">
            <h3 className="pb-5 text-start px-3"> Brand </h3>
            <div className="categories-list d-flex align-items-center">
                <input 
                    type="checkbox" 
                    className="" 
                    id="floatingInput"  
                    placeholder="Type Email..."
                    value='roli'
                    />
                <label className="px-2">Roli Accessorie</label>
            </div> 
            <div className="categories-list d-flex align-items-center">
                <input 
                    type="checkbox" 
                    className="" 
                    id="floatingInput"  
                    placeholder="Type Email..."
                    value='viola'
                    />
                <label className="px-2">Viola</label>
            </div>
            <div className="categories-list d-flex align-items-center">
                <input 
                    type="checkbox" 
                    className="" 
                    id="floatingInput"  
                    placeholder="Type Email..."
                    value='ella'
                    />
                <label className="px-2">Ella</label>
            </div>              
        </div>
    </div>     
    </div>
       
   )
}

export default Contact