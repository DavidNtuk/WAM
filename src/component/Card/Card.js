import React, {useEffect, useState} from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import "../../component/Header/custom.css"
import Carditem from "./CardItem";
import axios from "axios";
import { setProducts } from '../../Redux/actions/ProductAction';
import Pagination from "../Pagination";


const Card = () => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();


    useEffect(() => {
        fetchProducts();
    },[]);

    const fetchProducts = async () => {
        try {
            setLoading(true)
            const response = await axios.get('https://api-v1.devchris.com.ng/api/v1/users/products/list');
            dispatch(setProducts(response.data.data.products.data));
            setLoading(false)
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

   return(
       <div className="pt-5 row justify-content-center mb-5">
            <div className="d-flex justify-content-center">
                <div>{loading ? <div className="loading-spiner loading-container"></div> : <div className=""></div>}</div>
            </div>
            <Carditem />
        </div>
   )
}

export default Card