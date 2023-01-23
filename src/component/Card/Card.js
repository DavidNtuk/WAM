import React, {useEffect} from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import "../../component/Header/custom.css"
import Carditem from "./CardItem";
import axios from "axios";
import { setProducts } from '../../Redux/actions/ProductAction';


const Card = () => {

    // const product = useSelector((state) => state)
    const dispatch = useDispatch();


    useEffect(() => {
        fetchProducts();
    },[]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://api-v1.devchris.com.ng/api/v1/users/products/list');
            console.log(response.data.data.products.data);
            dispatch(setProducts(response.data.data.products.data));
        } catch (error) {
            console.log(error);
        }
    }


   return(
       <div className="row justify-content-center mb-5">
            <Carditem />
        </div>
       
   )
}

export default Card