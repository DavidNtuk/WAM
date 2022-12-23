import React, { useState ,useEffect} from "react";
import "../../App.css"
import "../../component/Header/custom.css"
// import cardlist from "../../Api/cardimages"
import Carditem from "./CardItem";
import axios from "axios"


const Card = () => {

    const [products , setProducts] = useState([])

    useEffect(() => {
        fetchProducts();
    },[]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://api-v1.devchris.com.ng/api/v1/users/products/list');
            console.log(response.data.data.products.data);
            setProducts(response.data.data.products.data);
        } catch (error) {
            console.log(error);
        }
    }

   return(
       <div className="row justify-content-center mb-5">
           {
               products.map((product, index) => {
                   return(
                        <Carditem
                            key={index}
                            product={product}
                        />
                   )
               })
           }
        </div>
       
   )
}

export default Card